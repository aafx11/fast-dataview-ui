import type { Ref } from 'vue';
import { nextTick, onMounted, onUnmounted, ref } from 'vue';
import { useDomObserver } from '@fast-dataview-ui/hooks/useObserver';
import { useDebounceFn, useThrottleFn, useEventListener } from '@vueuse/core';
const useResizeListener = (dom: Ref<HTMLElement | null>, onResize?: () => void, onAfterResize?: () => void, isShowLog?: Boolean) => {
  const width = ref(0);
  const height = ref(0);
  const afterWidth = ref(0);
  const afterHeight = ref(0);

  let debounceInitWHFn: () => void;
  let domObserver: MutationObserver | null = null;
  let domHtml: HTMLElement | null = null;

  const initWH = (resize = true) => {
    return new Promise((resolve) => {
      nextTick(() => {
        domHtml = dom.value;

        width.value = dom.value ? dom.value.clientWidth : 0;
        height.value = dom.value ? dom.value.clientHeight : 0;
        afterWidth.value = domHtml ? domHtml!.getBoundingClientRect().width : 0;
        afterHeight.value = domHtml ? domHtml!.getBoundingClientRect().height : 0;
       

        if (!dom.value)
          console.warn('Failed to get dom node');

        else if (!width.value || !height.value)
          console.warn('Component width or height is 0px');

        if (typeof onResize == 'function' && resize)
          onResize();

        resolve(true);
      });
    });
  };

  // 绑定dom变化监听
  const bindDomResizeCallback = () => {

    domObserver = useDomObserver(domHtml!, debounceInitWHFn);

    useEventListener(window, 'resize', debounceInitWHFn);
  };

  // 取消绑定dom变化监听
  const unbindDomResizeCallback = () => {
    if (!domObserver)
      return;

    domObserver.disconnect();
    // 调用 takeRecords() 后，已发生但未传递给回调的变更队列将保留为空
    domObserver.takeRecords();
    domObserver = null;
  };

  const autoResizeInit = async () => {
    await initWH(false); // 获取dom的宽高

    debounceInitWHFn = useDebounceFn(initWH, 200);

    bindDomResizeCallback();

    if (typeof onAfterResize === 'function')
      onAfterResize();
  };

  onMounted(() => {
    autoResizeInit();
  });

  onUnmounted(() => {
    unbindDomResizeCallback();
  });

  return {
    width,
    height,
    afterWidth,
    afterHeight,
    initWH
  };
};

export default useResizeListener;
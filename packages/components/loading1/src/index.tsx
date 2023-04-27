import type { PropType } from 'vue';
import { defineComponent, ref, computed } from 'vue';
import useResizeListener from '@fast-dataview-ui/hooks/useResizeListener';
import type { LoadingProps } from '@fast-dataview-ui/types/LoadingProps';
import { loadingProps } from '@fast-dataview-ui/types/LoadingProps';
import { extend, isNotEmptyArray } from '@fast-dataview-ui/utils/index';
export default defineComponent({
  name: 'FLoading1',
  props: {
    width: { type: String, default: '100px' },
    height: { type: String, default: '100px' },
    color: { type: Array as PropType<Array<string>>, default: () => ([]) },
    text: { type: String, default: '' },
    duration: { type: Number, default: 2 },
  },
  setup(props: LoadingProps, { slots }) {
    const loading1 = ref<HTMLElement | null>(null);

    const defaultColor = ['#4f29f0', '#c3c8de', '#414856'];

    let realColor = computed(() => {
      if (isNotEmptyArray(props.color)) {
        return extend(defaultColor, props.color);
      }
      return defaultColor;
    });

    const { width, height, initWH } = useResizeListener(loading1);

    return {
      width,
      height,
      initWH,
      loading1,
      defaultColor,
      realColor,

    };
  },
  render() {
    const { $slots, realColor, text, duration } = this;

    return (
      <div ref="loading1" class="f-loading-1" style={{ '--front-color': realColor[0], '--back-color': realColor[1], '--text-color': realColor[2], '--duration': `${duration}s` }}>
        {/* viewBox比svg的宽高大，相当于缩小了视图 */}
        <svg class="f-circle-outer" viewBox="0 0 86 86">
          <circle class="f-back" cx="43" cy="43" r="40"></circle>
          <circle class="f-front" cx="43" cy="43" r="40"></circle>
        </svg>
        <svg class="f-circle-middle" viewBox="0 0 60 60">
          <circle class="f-back" cx="30" cy="30" r="27"></circle>
          <circle class="f-front" cx="30" cy="30" r="27"></circle>
        </svg>
        <svg class="f-circle-inner" viewBox="0 0 34 34">
          <circle class="f-back" cx="17" cy="17" r="14"></circle>
          <circle class="f-front" cx="17" cy="17" r="14"></circle>
        </svg>
        {text ? <div class="f-loading-text" data-text={text}></div> : null}
      </div>
    );
  }
});
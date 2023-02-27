<template>
  <div class="f-screen-container">
    <div class="f-screen-inner" ref="screenContainer">
      <!-- <template v-if="state.isReady">
        <slot></slot>
      </template> -->
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref, defineProps, provide } from 'vue';
import { containerProps } from './props';
import useResizeListener from '@fast-dataview-ui/hooks/useResizeListener';

const props = defineProps(containerProps);

const screenContainer = ref<HTMLElement | null>(null);

const state = reactive({
  width: 0,
  height: 0,
  screenWidth: 0,
  screenHeight: 0,
  scaleX: 1,
  scaleY: 1,
  isReady: false
});

let scaleXRef = ref(1);
let scaleYRef = ref(1);

provide('scaleX', scaleXRef);
provide('scaleY', scaleYRef);

const initConfig = () => {
  if (props.width && props.height) {
    state.width = props.width;
    state.height = props.height;
  } else {
    state.width = screenContainer.value!.clientWidth;
    state.height = screenContainer.value!.clientHeight;
  }

  // 屏幕宽高
  const { width, height } = window.screen;
  state.screenWidth = width;
  state.screenHeight = height;
};
// 更新dom的宽高
const updateContainerSize = () => {
  if (state.width && state.height) {
    screenContainer.value!.style.width = `${state.width}px`;
    screenContainer.value!.style.height = `${state.height}px`;
  } else {
    screenContainer.value!.style.width = `${state.screenWidth}px`;
    screenContainer.value!.style.height = `${state.screenHeight}px`;
  }
};
// 更新scale
const updateScale = () => {
  const currentWidth = document.body.clientWidth;
  const currentHeight = document.body.clientHeight;

  const realWidth = state.width || state.screenWidth;
  const realHeight = state.height || state.screenHeight;

  const scaleX = currentWidth / +realWidth;
  const scaleY = currentHeight / +realHeight;

  scaleXRef.value = scaleX;
  scaleYRef.value = scaleY;

  screenContainer.value!.style.transform = `scale(${scaleX}, ${scaleY})`;
};

const onResize = () => {
  initConfig();
  updateContainerSize();
  updateScale();
};

const onAfterResize = () => {
  updateContainerSize();
  updateScale();
  props.onAfterResize();
  state.isReady = true;
};
// 监听dom改变
useResizeListener(screenContainer, onResize, onAfterResize);
</script>


<style lang="scss">
.f-screen-container {
  width: 100vw;
  height: 100vh;
  background-size: 100% 100%;
  overflow: hidden;

  .f-screen-inner {
    position: relative;
    overflow: hidden;
    z-index: 999;
    transform-origin: left top;
  }
}
</style>
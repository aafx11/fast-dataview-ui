<template>
  <div class="f-loading-2" :style="getLoadingStyle">
    <div class="f-loading-round">
    </div>
    <div class="loading-text">
      <slot>
        <div>{{ text }}</div>
      </slot>
    </div>
  </div>
</template>
<script lang="ts">
import type { PropType } from 'vue';
import {
  ref,
  toRefs,
  reactive,
  computed,
  getCurrentInstance,
  defineComponent
} from 'vue';
import type { LoadingProps } from '@fast-dataview-ui/types/LoadingProps';
import { loadingProps } from '@fast-dataview-ui/types/LoadingProps';
import { extend, isNotEmptyArray, toZero } from '@fast-dataview-ui/utils/index';
export default defineComponent({
  name: 'FLoading2',
  props: {
    width: { type: String, default: '100px' },
    height: { type: String, default: '100px' },
    color: { type: Array as PropType<Array<string>>, default: () => ([]) },
    text: { type: String, default: '' },
    duration: { type: Number, default: 0.8 },
  },
  setup(props, { slots }) {

    const defaultColor = ['#d1d5db', '#3b82f6', '#3b82f6'];
    let realColor = computed(() => {
      if (isNotEmptyArray(props.color)) {
        return extend(defaultColor, props.color);
      }
      return defaultColor;
    });

    const getLoadingStyle = computed(() => {
      return {
        'width': props.width,
        'height': props.height,
        'color': realColor.value[2],
        '--border-color': realColor.value[0],
        '--border-top-color': realColor.value[1],
        '--duration': `${props.duration}s`
      };
    });

    return {
      getLoadingStyle
    };
  }
});
</script>

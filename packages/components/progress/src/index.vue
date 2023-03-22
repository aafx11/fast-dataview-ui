<template>
  <div class="f-progress" :style="getProgressStyle">
    <div class="progress-inner" :style="{ width: `${percent}%` }">
      <slot :percent="percent">
        <span>{{ percent ? `${percent}%` : '' }}</span>
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
import { extend, isNotEmptyArray, toZero } from '@fast-dataview-ui/utils/index';
export default defineComponent({
  name: 'FProgress',
  props: {
    percent: { type: Number, default: 0 },
    color: { type: Array as PropType<Array<string>>, default: () => ([]) },
    duration: { type: Number, default: 0.5 },
  },
  setup(props, { slots }) {

    const defaultColor = ['#d1d5db', '#3b82f6', 'white'];
    let realColor = computed(() => {
      if (isNotEmptyArray(props.color)) {
        return extend(defaultColor, props.color);
      }
      return defaultColor;
    });

    const getProgressStyle = computed(() => {
      return {
        '--bgc': realColor.value[0],
        '--progress-color': realColor.value[1],
        '--progress-text-color': realColor.value[2],
        '--duration':`${props.duration}s`
      }
    })

    return {
      getProgressStyle
    };
  }
});
</script>

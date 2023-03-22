<template>
  <div ref="scrollText" :class="['f-scroll-text',`f-scroll-text--${props.type}`]">
    <div ref="textContent" class="text-content" :style="getTextContentStyle">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { StyleValue } from 'vue';
import { ref, reactive, computed, getCurrentInstance } from 'vue';

const props = withDefaults(defineProps<{
  type:'default' | 'success' | 'warning'| 'info' | 'danger';
  direction: string;
  speed: number;
}>(), {
  type:'default',
  direction: 'up',
  speed: 60
});

const scrollText = ref();
const textContent = ref();

const getTextContentStyle = computed((): StyleValue => {
  let width = scrollText.value?.offsetWidth || 0;
  let height = scrollText.value?.offsetHeight || 0;

  let contentWidth = textContent.value?.offsetWidth || 0;
  let contentHeight = textContent.value?.offsetHeight || 0;

  let scrollLength, time, animation; // 滚动长度，滚动时间

  if (['up', 'down'].includes(props.direction)) {
    scrollLength = height + contentHeight;
    time = (scrollLength / props.speed) || 0;
    animation = `up-scroll linear ${time}s infinite ${props.direction === 'down' ? 'reverse' : ''}`;
  }

  if (['left', 'right'].includes(props.direction)) {
    scrollLength = width + contentWidth;
    time = (scrollLength / props.speed) || 0;
    animation = `left-scroll linear ${time}s infinite ${props.direction === 'right' ? 'reverse' : ''}`;
  }

  return {
    '--text-scroll-width': `${width}px`,
    '--text-scroll-height': `${height}px`,
    animation
  };
})

</script>

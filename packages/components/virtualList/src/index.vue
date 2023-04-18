<template>
  <div class="f-virtual-list" ref="virtualList" :style="{ height }" @scroll="scrollEvent()">
    <div class="f-virtual-list__space" ref="virtualList__space"></div>
    <div class="f-virtual-list__content" ref="virtualList__content">
      <div></div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Props } from './props';
import { ref, reactive, computed, getCurrentInstance, onBeforeMount } from 'vue';
import { stat } from 'fs';
const props = defineProps(Props);
const virtualList = ref();

type Positions = {
  index: number,
  height: number,
  top: number,
  bottom: number
}
const state = reactive<{
  positions: Positions[],
  screenHeight: number,
  start: number,
  end: number;
}>({
  positions: [], // 每行的位置信息
  screenHeight: 0, // 可视区域高度
  start: 0, // 起始索引
  end: 0, // 结束索引
});

onBeforeMount(() => {
  initPositions();
});

// 初始化每行的位置信息
const initPositions = () => {
  state.positions = props.data.map((item, index) => ({
    index,
    height: props.estimatedItemSize,
    top: index * props.estimatedItemSize,
    bottom: (index + 1) * props.estimatedItemSize
  }));
};

// 获取列表起始索引
const getStartIndex = (scrollTop: number = 0) => {
  return binarySearch(state.positions, scrollTop)
}

// 二分法查找
const binarySearch = (list: Positions[], value: number) => {
  let start = 0;
  let end = list.length - 1;
  let tempIndex = null;

  while (start <= end) {
    let midIndex = parseInt(((start + end) / 2) + '');
    let midValue = list[midIndex].bottom;
    if (midValue === value) {
      return midIndex + 1;
    } else if (midValue < value) {
      start = midIndex + 1;
    } else if (midValue > value) {
      if (tempIndex === null || tempIndex > midIndex) {
        tempIndex = midIndex;
      }
      end = end - 1;
    }
  }
  return tempIndex;
}

// 滚动事件
const scrollEvent = () => {

};
</script>
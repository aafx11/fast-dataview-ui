<template>
  <div ref="flightChart" class="f-flight-chart">
    <div class="f-flight-chart__wrap" :style="`background-image: url(${props.bgUrl})`" @click="clickMap">
      <svg width="100%" height="100%">
        <g v-for="(point, index) in state.points" :key="point.key">

          <defs>
            <circle v-if="point.halo.show" id="halo" :cx="point.coordinate[0] * width" :cy="point.coordinate[1] * height">
              <animate attribute-name="r" :values="`1;${point.halo.radius}`" :dur="`${point.halo.duration}ms`"
                repeatCount="indefinite"></animate>
            </circle>
          </defs>

          <use v-if="point.halo.show" :xlink:href="`#halo`" :fill="point.halo.color" />

          <text v-if="point.title.show" :style="{ fontSize: `${point.title.fontSize}px` }" :fill="point.title.color"
            :x="point.coordinate[0] * width + point.title.offest[0]"
            :y="point.coordinate[1] * height + point.title.offest[1]">
            {{ point.name }}
          </text>

          <image v-if="point.icon.show" :href="point.icon.url" :width="point.icon.width" :height="point.icon.height"
            :x="point.coordinate[0] * width" :y="point.coordinate[1] * height" />
        </g>
      </svg>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { PropType } from 'vue';
import type { Point, path, Line, Halo, Title, Icon } from './types';
import { ref, reactive, computed, getCurrentInstance, watch } from 'vue';
import { getArray, deepClone, extend } from '@fast-dataview-ui/utils/index';
import useResizeListener from '@fast-dataview-ui/hooks/useResizeListener';

const props = defineProps({
  bgUrl: { type: String },
  points: {
    type: Array as PropType<Point[]>,
    default: () => []
  },
  paths: {
    type: Array as PropType<(path & Line)[]>,
    default: () => []
  },
  line: {
    type: Object as PropType<Line>,
    default: () => ({
      show: true,
      type: 'line',
      width: 1,
      color: '#ffde93',
      orbitColor: 'rgba(103, 224, 227, .2)',
      duration: 700,
      radius: 100
    })
  },
  halo: {
    type: Object as PropType<Halo>,
    default: () => ({
      show: true,
      duration: 700,
      color: '#3891c2',
      radius: 100
    })
  },
  title: {
    type: Object as PropType<Title>,
    default: () => ({
      show: true,
      offest: [0, 0],
      color: 'black',
      fontSize: 16
    })
  },
  icon: {
    type: Object as PropType<Icon>,
    default: () => ({
      show: true,
      url: '',
      width: 10,
      height: 10
    })
  },
});
defineEmits(['map-click']);

const flightChart = ref();
const instance = getCurrentInstance();

const defaultOption = reactive<{
  halo: Halo;
  title: Title;
  icon: Icon;
}>({
  halo: {
    show: true,
    duration: 700,
    color: '#3891c2',
    radius: 100
  },
  title: {
    show: true,
    offest: [0, 0],
    color: 'black',
    fontSize: 16
  },
  icon: {
    show: true,
    url: '',
    width: 10,
    height: 10
  }
});

const state = reactive<{
  points: (Point & { key: string; })[];
}>({
  points: []
});

const clickMap = (event: MouseEvent) => {
  let { offsetX, offsetY } = event;
  const x = (offsetX / width.value).toFixed(2);
  const y = (offsetY / height.value).toFixed(2);
  instance?.emit('map-click', x, y, event);
};
const onResize = () => {

};
const onAfterResize = () => {

};
const { width, height } = useResizeListener(flightChart, onResize);

const getPoints = () => {
  let clonePoints = deepClone(getArray(props.points));
  state.points = clonePoints.map((item: Point, index: number) => {
    console.log('icon', item.icon);

    return {
      ...item,
      halo: extend({}, defaultOption.halo, deepClone(props.halo), item.halo),
      title: extend({}, defaultOption.title, deepClone(props.title), item.title),
      icon: extend({}, defaultOption.icon, deepClone(props.icon), item.icon),
      key: `${item.coordinate.toString()}${index}`
    };
  });
  console.log('points', state.points);
};


watch(() => props, (val) => {
  getPoints();
}, {
  deep: true,
  immediate: true
});
</script>
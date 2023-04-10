<template>
  <div ref="flightChart" class="f-flight-chart">
    <div class="f-flight-chart__wrap" :style="`background-image: url(${props.bgUrl})`" @click="clickMap">
      <svg width="100%" height="100%">
        <defs>
          <radialGradient id="lineGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#fff" stop-opacity="1" />
            <stop offset="100%" stop-color="#fff" stop-opacity="0" />
          </radialGradient>

          <radialGradient id="haloGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#fff" stop-opacity="0" />
            <stop offset="100%" stop-color="#fff" stop-opacity="1" />
          </radialGradient>
        </defs>

        <g v-for="(point, index) in state.points" :key="point.key">
          <defs>
            <circle v-if="point.halo.show" :id="`halo${point.key}`" :cx="point.coordinate[0] * width"
              :cy="point.coordinate[1] * height">
              <animate attributeName="r" :values="`1;${point.halo.radius}`" :dur="`${point.halo.duration}ms`"
                repeatCount="indefinite"></animate>
              <animate attributeName="opacity" values="1;0" :dur="`${point.halo.duration}ms`" repeatCount="indefinite">
              </animate>
            </circle>

            <mask :id="`mask${point.key}`">
              <use :xlink:href="`#halo${point.key}`" fill="url(#haloGradient)" />
            </mask>
          </defs>

          <use v-if="point.halo.show" :xlink:href="`#halo${point.key}`" :fill="point.halo.color"
            :mask="`url(#mask${point.key})`" />

          <text v-if="point.title.show" class="point__title" :style="{ fontSize: `${point.title.fontSize}px` }"
            :fill="point.title.color" :x="point.coordinate[0] * width + point.title.offest[0]"
            :y="point.coordinate[1] * height + point.title.offest[1]">
            {{ point.name }}
          </text>

          <image v-if="point.icon.show" class="point__icon" :href="point.icon.url" :width="point.icon.width"
            :height="point.icon.height" :x="point.coordinate[0] * width - point.icon.width / 2"
            :y="point.coordinate[1] * height - point.icon.height / 2" />
        </g>

        <template v-for="(path, index) in state.paths">
          <g v-for="(route, k) in path.routeList">
            <defs>
              <path :id="route.key" :ref="route.key" :d="getD(route.path)" fill="transparent" style="overflow: hidden;" />
              <mask :id="`mask${route.key}`">
                <circle cx="0" cy="0" :r="path.line.radius" fill="url(#lineGradient)">
                  <animateMotion :dur="`${path.line.duration}ms`" :path="getD(route.path)" rotate="auto"
                    repeatCount="indefinite" />
                </circle>
              </mask>
            </defs>

            <use v-if="path.line.show" :xlink:href="`#${route.key}`" :stroke-width="path.line.width"
              :stroke="path.line.orbitColor" />

            <use v-if="path.line.show && !path.line.slot" :xlink:href="`#${route.key}`" :stroke-width="path.line.width"
              :stroke="path.line.color" :mask="`url(#mask${route.key})`">
              <animate attributeName="stroke-dasharray" :from="`0, ${getTotalLength(route.key)}`"
                :to="`${getTotalLength(route.key)}, 0`" :dur="`${path.line.duration}ms`" repeatCount="indefinite" />
            </use>

            <!-- <g v-if="path.line.show && path.line.slot">
              <slot :name="path.line.slot" :path="getPathArr(route.path)"></slot>
            </g> -->

            <slot :name="path.line.slot" :path="getPathArr(route.path)"></slot>

          </g>
        </template>
      </svg>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { Point, Path, Line, Halo, Title, Icon } from './types';
import { PropType, onMounted } from 'vue';
import { ref, reactive, computed, getCurrentInstance, watch } from 'vue';
import { getArray, deepClone, extend, getPointsDistance } from '@fast-dataview-ui/utils/index';
import useResizeListener from '@fast-dataview-ui/hooks/useResizeListener';
import { realpath } from 'fs';

const props = defineProps({
  bgUrl: { type: String },
  points: {
    type: Array as PropType<Point[]>,
    default: () => []
  },
  paths: {
    type: Array as PropType<(Path & Line)[]>,
    default: () => []
  },
  line: {
    type: Object as PropType<Line>,
    default: () => ({
      show: true,
      type: 'line',
      width: 2,
      color: '#ffde93',
      orbitColor: 'rgba(103, 224, 227, .2)',
      duration: 700,
      radius: 100,
      k: -0.5,
      curvature: 5
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
      offest: [0, -10],
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
let instance: any;
onMounted(() => {
  instance = getCurrentInstance();
});

const defaultOption = reactive<{
  halo: Halo;
  title: Title;
  icon: Icon;
  line: Line;
  pipe: Line;
}>({
  halo: {
    show: true,
    duration: 700,
    color: '#3891c2',
    radius: 100
  },
  title: {
    show: true,
    offest: [0, -10],
    color: 'black',
    fontSize: 16
  },
  icon: {
    show: true,
    url: '',
    width: 10,
    height: 10
  },
  line: {
    show: true,
    type: 'line',
    width: 3,
    color: '#ffde93',
    orbitColor: 'rgba(103, 224, 227, .2)',
    duration: 700,
    radius: 100,
    k: -0.5,
    curvature: 5
  },
  pipe: {
    show: true,
    type: 'line',
    width: 3,
    color: '#ffde93',
    orbitColor: 'rgba(103, 224, 227, .2)',
    duration: 700,
    radius: 100,
    k: -0.5,
    curvature: 5
  }
});
type RouteList = {

  path: number[][];
  d: string;
  key: string;
};
const state = reactive<{
  points: (Point & { key: string; })[];
  paths: (Path & { routeList: RouteList[]; })[];
}>({
  points: [],
  paths: []
});

const clickMap = (event: MouseEvent) => {
  let { offsetX, offsetY } = event;
  const x = (offsetX / width.value).toFixed(2);
  const y = (offsetY / height.value).toFixed(2);
  instance?.emit('map-click', x, y, event);
};
const onResize = () => {
  getPoints();
  getPaths();
};
const onAfterResize = () => {
  getPoints();
  getPaths();
};
const { width, height } = useResizeListener(flightChart, onResize, onAfterResize);

const getPoints = () => {
  let clonePoints = deepClone(getArray(props.points));
  state.points = clonePoints.map((item: Point, index: number) => {
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

const getPaths = () => {
  let clonePaths = deepClone(getArray(props.paths));
  state.paths = clonePaths.map((item: Path, index: number) => {
    let { source, route, target, line } = item;
    let realLine: Line = extend({}, defaultOption.line, deepClone(props.line), line);

    let sourcePoint = state.points.find(({ name }) => name === source)?.coordinate;
    let targetPoint = state.points.find(({ name }) => name === target)?.coordinate;
    let realPaths = route ? [sourcePoint, ...route, targetPoint] : [sourcePoint, targetPoint];
    let routeList = [];
    for (let i = 0; i < realPaths.length - 1; i++) {
      let ele = realPaths[i];
      let path = getRoute(ele!, realPaths[i + 1]!, realLine.k, realLine.curvature);
      let d = `M${path[0].toString()} Q${path[1].toString()} ${path[2].toString()}`;
      let key = `${path.toString()}`;
      routeList.push({ path, d, key });
    }
    return {
      ...item,
      line: realLine,
      routeList
    };
  });
  console.log('state.paths', state.paths);
};

const getRoute = (start: number[], end: number[], k: number, curvature: number): number[][] => {
  let [sx, sy] = start;
  let [ex, ey] = end;
  const [cx, cy] = [(sx + ex) / 2, (sy + ey) / 2]; // 两点之间的中心点
  let distance = getPointsDistance([sx, sy], [ex, ey]); // 两点间的距离
  let targetLength = distance / curvature;
  let disDived = targetLength / 2;
  let [dx, dy] = [cx, cy];

  do {
    dx += disDived;
    dy = getKLinePointByx(k, [cx, cy], dx)[1];
  } while (getPointsDistance([cx, cy], [dx, dy]) < targetLength);

  return [start, [dx, dy], end];
};

function getKLinePointByx(k: number, [lx, ly]: number[], x: number): number[] {
  const y = ly - k * lx + k * x;
  return [x, y];
}

let getD = computed(() => {
  return function (paths: number[][]): string {
    return `M${paths[0][0] * width.value},${paths[0][1] * height.value} 
    Q${paths[1][0] * width.value},${paths[1][1] * height.value} 
    ${paths[2][0] * width.value},${paths[2][1] * height.value}`;
  };
});

let getPathArr = computed(() => {
  return function (paths: number[][]) {
    // return {
    //   x1: paths[0][0] * width.value,
    //   y1: paths[0][1] * height.value,
    //   x2: paths[1][0] * width.value,
    //   y2: paths[1][1] * height.value,
    //   x3: paths[2][0] * width.value,
    //   y3: paths[2][1] * height.value
    // }
    return `M${paths[0][0] * width.value},${paths[0][1] * height.value} 
    Q${paths[1][0] * width.value},${paths[1][1] * height.value} 
    ${paths[2][0] * width.value},${paths[2][1] * height.value}`;
  };
})

let getOffestPath = computed(() => {
  return function (paths: number[][]): string {
    return `\"M${paths[0][0] * width.value},${paths[0][1] * height.value} Q${paths[1][0] * width.value},${paths[1][1] * height.value} ${paths[2][0] * width.value},${paths[2][1] * height.value}\"`;
  };
});


let getTotalLength = computed(() => {
  return function (key: string) {
    if (instance) {
      return instance.proxy.$refs[key][0].getTotalLength();
    }
    return 0;
  };
});

watch(() => props, (val) => {
  getPoints();
  getPaths();
}, {
  deep: true,
  immediate: true
});
</script>
<style>
.scissorHalf {
  animation: followpath 4s linear infinite;
}

@keyframes followpath {
  from {
    offset-distance: 0%;
  }

  to {
    offset-distance: 100%;
  }
}
</style>
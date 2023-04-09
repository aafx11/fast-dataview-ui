<template>
  <div>
    <fScreenContainer class="screen">
      <div style="padding: 0px 0px;">
        <FFlightChart v-bind="state" style="width: 1920px;height: 1080px;" @map-click="onMapClick"></FFlightChart>
      </div>
    </fScreenContainer>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref, reactive, nextTick } from 'vue';

let state = reactive({
  bgUrl: '/assets/map.png',
  points: [
    {
      name: '广州', coordinate: [0.50, 0.42],
      halo: { show: true },
      title: { show: true, fontSize: 12, color: 'black' },
      // icon: { show: true, url: '/assets/chat.png', width: 20, height: 20 }
    },
    { name: '东莞', coordinate: [0.54, 0.48], halo: { show: true }, icon: { show: true, url: '/assets/donut.png' } },
    { name: '深圳', coordinate: [0.56, 0.54], halo: { show: false }, icon: { show: true } },
    { name: '湛江', coordinate: [0.12, 0.78], halo: { show: true, color: '#fb7293' }, icon: { show: true } },
    { name: '茂名', coordinate: [0.21, 0.64], halo: {}, icon: { show: true } },
    { name: '阳江', coordinate: [0.31, 0.64], halo: {}, icon: { show: true } },
    { name: '江门', coordinate: [0.41, 0.60], halo: {}, icon: { show: true } },
    { name: '云浮', coordinate: [0.30, 0.50], halo: {}, icon: { show: true } },
    { name: '肇庆', coordinate: [0.37, 0.40], halo: {}, icon: { show: true } },
    { name: '佛山', coordinate: [0.45, 0.48], halo: {}, icon: { show: true } },
    { name: '清远', coordinate: [0.44, 0.29], halo: {}, icon: { show: true } },
    { name: '韶关', coordinate: [0.53, 0.18], halo: {}, icon: { show: true } },
    { name: '河源', coordinate: [0.65, 0.31], halo: {}, icon: { show: true } },
    { name: '梅州', coordinate: [0.78, 0.28], halo: {}, icon: { show: true } },
    { name: '潮州', coordinate: [0.84, 0.35], halo: { show: true, color: 'green' }, icon: { show: true } },
    { name: '汕头', coordinate: [0.86, 0.40], halo: {}, icon: { show: true } },
    { name: '揭阳', coordinate: [0.78, 0.41], halo: {}, icon: { show: true } },
    { name: '汕尾', coordinate: [0.68, 0.49], halo: {}, icon: { show: true } },
    { name: '惠州', coordinate: [0.60, 0.44], halo: {}, icon: { show: true } },
  ],
  paths: [
    // route: [[0.63, 0.32]],
    { source: '广州', route: [[0.54, 0.48]], target: '深圳' },
    { source: '湛江', route: [[0.41, 0.60]], target: '广州', line: { color: 'red' }, },
    { source: '潮州', route: [[0.65, 0.31]], target: '广州',line: { color: 'gold' }, },
    { source: '清远', target: '广州' },
    { source: '云浮', target: '肇庆' },
    { source: '肇庆', target: '广州' },
  ],
  line: {
    duration: 2800,
    color: 'blue',
    orbitColor: '#ffde93',
    width: 2
  },
  title: {
    show: true,
    // offest: [20, -10],
    color: 'black',
    fontSize: 16
  },
  icon: {
    url: '/assets/point.png',
    width: 12,
    height: 12
  },
  halo: {
    show: false,
    duration: 1200,
    color: '#3891c2',
    radius: 100
  }
});
console.log((state.points[0].coordinate).toString());

const onMapClick = (x, y, event) => {
  console.log(x, y, event);

};
</script>
<style lang="scss">
html,
body {
  margin: 0;
  // overflow: hidden;
  // background-color: #333;
  // background-color: #e8e8e8;
  // background-color: #212121;
  // background-color: gray;
}
</style>
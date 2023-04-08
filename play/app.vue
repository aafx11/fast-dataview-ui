<template>
  <div>
    <fScreenContainer class="screen">
      <div style="padding: 200px 350px;">
        <FFlightChart v-bind="state" style="width: 500px;height: 500px;" @map-click="onMapClick"></FFlightChart>
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
      title: { show: true, fontSize: 12, color: 'pink' },
      icon: { show: true, url: '/assets/chat.png', width: 10, height: 10 }
    },
    { name: '东莞', coordinate: [0.54, 0.48], halo: { show: false }, icon: { show: true, url: '/assets/donut.png' } },
    { name: '深圳', coordinate: [0.56, 0.54], halo: { show: false }, icon: { show: true } },
  ],
  title: {
    show: false,
    // offest: [20, 0],
    color: 'black',
    fontSize: 16
  },
  icon: {
    url: '/assets/point.png',
    width: 12,
    height: 12
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
  background-color: #333;
  // background-color: #e8e8e8;
  // background-color: #212121;
  // background-color: gray;
}
</style>
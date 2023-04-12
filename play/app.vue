<template>
  <div class="chart-box">
    <FFlightChart :paths="state.paths" :line="state.line" :halo="state.halo" :title="state.title" :icon="state.icon"
      style="width: 630px;height: 600px;background: gray;" @chart-click="onChartClick">
      <template #pipe="{ path, totalLength }">
        <path d="M 0 -5 L 10 0 L 0 5 L 3 0 z" transform="translate(0,0)" fill="#0080ff" stroke="black" stroke-width="0"
          stroke-linejoin="round" stroke-linecap="round" fill-rule="evenodd">
          <animateMotion :path="path" :dur="`${totalLength / 50}s`" rotate="auto" repeatCount="indefinite" />
        </path>
        <path d="M 0 -5 L 10 0 L 0 5 L 3 0 z" transform="translate(0,0)" fill="#0080ff" stroke="black" stroke-width="0"
          stroke-linejoin="round" stroke-linecap="round" fill-rule="evenodd">
          <animateMotion :path="path" :begin="`${10 / 50}s`" :dur="`${totalLength / 50}s`" rotate="auto"
            repeatCount="indefinite" />
        </path>

        <path d="M 0 -5 L 10 0 L 0 5 L 3 0 z" transform="translate(0,0)" fill="#0080ff" stroke="black" stroke-width="0"
          stroke-linejoin="round" stroke-linecap="round" fill-rule="evenodd">
          <animateMotion :path="path" :begin="`${20 / 50}s`" :dur="`${totalLength / 50}s`" rotate="auto"
            repeatCount="indefinite" />
        </path>
      </template>
      <template #water="{ path, totalLength }"></template>
    </FFlightChart>
    <img class="chart-box__water-tank" src="./assets/water-tank.png" />
    <img class="chart-box__room" src="./assets/air-conditioning-room.png" />
    <img class="chart-box__air-conditioner" src="./assets/air-conditioner.png" />
    <img class="chart-box__air-conditioner-2" src="./assets/air-conditioner-2.png" />
    <img class="chart-box__water-pump-1" src="./assets/water-pump-1.png" />
    <img class="chart-box__water-pump-2" src="./assets/water-pump-2.png" />
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref, reactive, nextTick } from 'vue';
let state = reactive({
  paths: [
    { route: [[0.16, 0.50], [0.44, 0.50]], line: { orbitColor: '#389554' } },
    { route: [[0.135, 0.44], [0.135, 0.12], [0.26, 0.12]], line: { orbitColor: '#87ceeb' } },
    { route: [[0.135, 0.54], [0.135, 0.90], [0.35, 0.90]], line: { orbitColor: '#eed48f' } },
    { route: [[0.34, 0.12], [0.50, 0.12]], line: { orbitColor: '#eed48f', slot: 'water' } },
    { route: [[0.755, 0.12], [0.50, 0.12]], line: { orbitColor: '#eed48f', slot: 'water' } },
    { route: [[0.50, 0.12], [0.50, 0.44]], line: { orbitColor: '#eed48f', slot: 'water' } },

  ],
  line: {
    slot: 'pipe',
    width: 10,
    curvature: 500
  },
  halo: {
    show: false,
  },
  title: {
    show: false,
  },
  icon: {
    url: '../assets/point.png'
  },
});

const onChartClick = (x, y, event) => {
  console.log(x, y, event);
};
</script>
<style lang="scss">
html,
body {
  margin: 0 !important;
  // overflow: hidden;
  // background-color: #333;
  // background-color: #e8e8e8;
  // background-color: #212121;
  // background-color: gray;
}

.chart-box {
  position: relative;
  width: 630px;
  height: 600px;
}

.chart-box__water-tank {
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translate(-50%, -50%);
  width: 70px;
  height: 70px;
}

.chart-box__room {
  position: absolute;
  top: 10%;
  left: 30%;
  transform: translate(-50%, -50%);
  width: 70px;
  height: 70px;
}

.chart-box__air-conditioner {
  position: absolute;
  top: 13%;
  left: 80%;
  transform: translate(-50%, -50%);
  width: 70px;
  height: 70px;
}

.chart-box__air-conditioner-2 {
  position: absolute;
  top: 90%;
  left: 75%;
  transform: translate(-50%, -50%);
  width: 70px;
  height: 70px;
}

.chart-box__water-pump-1 {
  position: absolute;
  top: 90%;
  left: 40%;
  transform: translate(-50%, -50%);
  width: 70px;
  height: 70px;
}

.chart-box__water-pump-2 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70px;
  height: 70px;
}
</style>

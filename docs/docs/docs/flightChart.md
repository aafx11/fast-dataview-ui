<!--         <FFlightChart v-bind="state" style="width: 600px;height: 600px;" @map-click="onMapClick">
          <template #test="{ path, totalLength }">
            <path d="M 0 -5 L 10 0 L 0 5 L 3 0 z" transform="translate(0,0)" fill="red" stroke="black" stroke-width="0"
              stroke-linejoin="round" stroke-linecap="round" fill-rule="evenodd">
              <animateMotion :path="path" :dur="`${totalLength / 50}s`" rotate="auto" repeatCount="indefinite" />
            </path>
            <path d="M 0 -5 L 10 0 L 0 5 L 3 0 z" transform="translate(0,0)" fill="red" stroke="black" stroke-width="0"
              stroke-linejoin="round" stroke-linecap="round" fill-rule="evenodd">
              <animateMotion :path="path" :begin="`${10 / 50}s`" :dur="`${totalLength / 50}s`" rotate="auto"
                repeatCount="indefinite" />
            </path>

            <path d="M 0 -5 L 10 0 L 0 5 L 3 0 z" transform="translate(0,0)" fill="red" stroke="black" stroke-width="0"
              stroke-linejoin="round" stroke-linecap="round" fill-rule="evenodd">
              <animateMotion :path="path" :begin="`${20 / 50}s`" :dur="`${totalLength / 50}s`" rotate="auto"
                repeatCount="indefinite" />
            </path>
          </template>
        </FFlightChart> -->


 <!--        let state = reactive({
  bgUrl: '/assets/map.png',
  points: [
    {
      name: '广州', coordinate: [0.50, 0.42],
      halo: { show: false },
      title: { show: true, fontSize: 12, color: 'black' },
      // icon: { show: true, url: '/assets/chat.png', width: 20, height: 20 }
    },
    { name: '东莞', coordinate: [0.54, 0.48], halo: { show: false }, icon: { show: true, url: '/assets/donut.png' } },
    { name: '深圳', coordinate: [0.56, 0.54], halo: { show: false }, icon: { show: true } },
    { name: '湛江', coordinate: [0.12, 0.78], halo: { show: false, color: '#fb7293' }, icon: { show: true } },
    { name: '茂名', coordinate: [0.21, 0.64], halo: {}, icon: {} },
    { name: '阳江', coordinate: [0.31, 0.64], halo: {}, icon: {} },
    { name: '江门', coordinate: [0.41, 0.60], halo: {}, icon: {} },
    { name: '云浮', coordinate: [0.30, 0.50], halo: {}, icon: {} },
    { name: '肇庆', coordinate: [0.37, 0.40], halo: {}, icon: {} },
    { name: '佛山', coordinate: [0.45, 0.48], halo: {}, icon: {} },
    { name: '清远', coordinate: [0.44, 0.29], halo: {}, icon: {} },
    { name: '韶关', coordinate: [0.53, 0.18], halo: {}, icon: {} },
    { name: '河源', coordinate: [0.65, 0.31], halo: {}, icon: {} },
    { name: '梅州', coordinate: [0.78, 0.28], halo: {}, icon: {} },
    { name: '潮州', coordinate: [0.84, 0.35], halo: { show: false, color: 'green' }, icon: { show: true } },
    { name: '汕头', coordinate: [0.86, 0.40], halo: {}, icon: { show: true } },
    { name: '揭阳', coordinate: [0.78, 0.41], halo: {}, icon: { show: true } },
    { name: '汕尾', coordinate: [0.68, 0.49], halo: {}, icon: { show: true } },
    { name: '惠州', coordinate: [0.60, 0.44], halo: {}, icon: { show: true } },
  ],
  paths: [
    // route: [[0.63, 0.32]],
    { source: '广州', route: [[0.54, 0.48]], target: '深圳' },
    { source: '湛江', route: [[0.41, 0.60]], target: '广州', line: { show: true, color: 'red', slot: 'test' }, },
    { source: '潮州', route: [[0.65, 0.31]], target: '广州', line: { color: 'black' }, },
    // { source: '清远', target: '广州' },
    { source: '云浮', target: '肇庆' },
    { source: '肇庆', target: '广州' },
    { source: '清远', target: '梅州' },
  ],
  line: {
    show: true,
    duration: 5000,
    slot: 'test',
    color: 'blue',
    orbitColor: '#4fb164',
    width: 10,
    k: -0.5,
    curvature: 10
  },
  title: {
    show: false,
    // offest: [20, -10],
    color: 'black',
    fontSize: 16
  },
  icon: {
    show: true,
    url: '/assets/point.png',
    width: 12,
    height: 12
  },
  halo: {
    show: true,
    duration: 1200,
    color: '#3891c2',
    radius: 100
  }
}); -->

<!-- const onMapClick = (x, y, event) => {
  console.log(x, y, event);
  state.halo.show = !state.halo.show;
  state.title.show = !state.title.show;
  state.icon.show = !state.icon.show;
  state.line.show = !state.line.show;
}; -->



<!-- <template>
  <div class="chart-box">
    <FFlightChart :paths="state.paths" :line="state.line" :halo="state.halo" :title="state.title" :icon="state.icon"
      style="width: 630px;height: 600px;background: gray;" @chart-click="onChartClick">
      <template #pipe="{ path, totalLength }">
        <defs>
          <path :id="`arrow`" d="M 0 -5 L 10 0 L 0 5 L 3 0 z" transform="translate(0,0)" fill="#0080ff" stroke="black"
            stroke-width="0" stroke-linejoin="round" stroke-linecap="round" fill-rule="evenodd">
          </path>
        </defs>
        <use :xlink:href="`#arrow`">
          <animateMotion :path="path" :dur="`${totalLength / 50}s`" rotate="auto" repeatCount="indefinite" />
        </use>
        <use :xlink:href="`#arrow`">
          <animateMotion :path="path" :begin="`${10 / 50}s`" :dur="`${totalLength / 50}s`" rotate="auto"
            repeatCount="indefinite" />
        </use>
        <use :xlink:href="`#arrow`">
          <animateMotion :path="path" :begin="`${20 / 50}s`" :dur="`${totalLength / 50}s`" rotate="auto"
            repeatCount="indefinite" />
        </use>
      </template>
      <template #water="{ path, pathArr, totalLength, line }">
        <path :d="path" fill="transparent" :stroke-width="3" :stroke="line.color" :stroke-dasharray="totalLength"
          :stroke-dashoffset="0" stroke-linejoin="round" stroke-linecap="round">
          <animate attributeName="stroke-dashoffset" :values="`${totalLength};0`" :dur="`${totalLength / 50}s`"
            repeatCount="indefinite">
          </animate>
          <animate attributeName="stroke" :values="`${line.color};#4cc9d9;white`" :dur="`0.5s`" repeatCount="indefinite">
          </animate>
        </path>
      </template>
      <template #slice-water="{ path, pathArr, totalLength, line }">
        <path :d="path" fill="transparent" :stroke-width="4" :stroke="line.color" stroke-dasharray="3 15"
          :stroke-dashoffset="0" stroke-linejoin="round" stroke-linecap="round">
          <animate attributeName="stroke-dashoffset" :values="`${totalLength};0`" :dur="`${totalLength / 30}s`"
            repeatCount="indefinite">
          </animate>
        </path>
      </template>
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
    { route: [[0.34, 0.12], [0.755, 0.12]], line: { color: '#569cd6', orbitColor: '#101b36', slot: 'water', } },
    { route: [[0.46, 0.90], [0.71, 0.90]], line: { color: '#569cd6', orbitColor: '#101b36', slot: 'water', } },
    { route: [[0.80, 0.17], [0.56, 0.49]], line: { color: 'red', orbitColor: '#783835', slot: 'slice-water', k: 0.5, curvature: 2 } },
    { route: [[0.75, 0.84], [0.56, 0.49]], line: { color: '#427be5', orbitColor: '#2b506a', slot: 'slice-water', k: 0.5, curvature: 2 } },
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
</style> -->

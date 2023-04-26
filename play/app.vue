<template>
  <!-- <div class="page">
    <svg class="waves" viewBox="0 24 150 24" preserveAspectRatio="none">
      <defs>
        <path id="wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
      </defs>
      <g>
        <use class="wave" xlink:href="#wave" fill="#4579e2" x="50" y="0"></use>
      </g>

    </svg>
  </div> -->
  <!-- <div>
    <FLiquidChart :waveDuration="1 * 1000" :style="{ width: state.width, height: state.height }" ref="test" v-bind="state">
    </FLiquidChart>
  </div> -->
  <div class="wrap">
    <div>

    </div>
    <div>

    </div>
    <div></div>
    <div>
      <FLiquidChart :currLevel="state.currLevel" :maxLevel="state.maxLevel" :background="state.background"
        :textOption="state.textOption"></FLiquidChart>
    </div>
    <div>
      <!-- <FLiquidChart :waveDuration="2500" :style="{ width: state.width, height: state.height }" ref="test" v-bind="state1">
      </FLiquidChart> -->
      <div>123</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref, reactive, nextTick } from 'vue';
let state = reactive({
  currLevel: 50,
  maxLevel: 100,
  background: 'rgb(227, 247, 255)',
  textOption: {
    color: 'blue',
    fontSize: 28,
    text: '{level}m({percent}%)',
    offest: [0, -99]
  }
});

let state1 = reactive({
  width: '400px',
  height: '400px',
  borderWidth: 10,
  // currLevel: 100,
  maxLevel: 100,
  waveDirection: 'left',
  background: 'rgb(227, 247, 255)',
  lineOption: [
    { level: 90, color: 'red', text: '上限{level}m' },
    { level: 20, color: 'blue', text: '下限{level}m' },
  ],
  textOption: {
    fontSize: 28,
    text: '{percent}%',
    offest: [0, -99]
  },
  waveOption: [
    {
      offestTop: -10,
      waveDuration: 7 * 1000,
      begin: 2000,
      waveColor: '#2d55aa'
    },
    {
      offestTop: -10,
      waveDuration: 5 * 1000,
      begin: 1000,
      waveColor: '#3461c1'
    },
    {
      offestTop: 10,
      waveScale: 5,
      waveDirection: 'left',
      waveDuration: 1 * 1000,
      waveColor: '#4579e2'
    },
  ]
});
const test = ref();
// setTimeout(() => {
//   state.currLevel = 60
// }, 2000);
setTimeout(() => {
  // state.currLevel = 0
  // state.width = '400px';
  // state.height = '80%';
  // state.borderWidth = 20;
  // // console.log('修改');
  // test.value.resize();
}, 2000);
</script>
<style lang="scss">
body,
html {
  width: 100%;
  height: 100%;
  margin: 0;
  // color:transparent;
  overflow: hidden;
  color: #2c60d1;
  color: #3461c1;
  color: #91B9DA;
  // #4579e2
}

.demo-border01 :deep(.source) {
  background: #212121;

  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-top: 10px;
    cursor: pointer;
  }
}

.wrap {
  display: grid;
  grid-template-columns: 50fr 50fr 78fr;
  grid-template-rows: 30fr 50fr 70fr;
  width: 100vw;
  height: 100vh;
}
</style>

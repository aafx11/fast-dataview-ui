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

    </div>
    <div>
      <FLiquidChart :waveDuration="2500" :style="{ width: state.width, height: state.height }" ref="test" v-bind="state">
      </FLiquidChart>
      <div>123</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref, reactive, nextTick } from 'vue';
let state = reactive({
  width: '500px',
  height: '400px',
  borderWidth: 10,
  currLevel: 50,
  maxLevel: 100,
  waveDirection: 'left',
  lineOption: [
    { level: 90, color: 'red', text: '上限{level}m' },
    { level: 20, color: 'blue', text: '下限{level}m' },
  ],
  waveOption: [
    {
      offestTop: -10,
      waveScale: 15,
      waveDirection: 'left',
      waveDuration: 7 * 1000,
      begin: 2000,
      waveColor: '#2d55aa'
    },
    {
      offestTop: -10,
      waveScale: 15,
      waveDirection: 'left',
      waveDuration: 5 * 1000,
      begin: 1000,
      waveColor: '#3461c1'
    },
    {
      offestTop: 0,
      waveScale: 15,
      waveDirection: 'left',
      waveDuration: 3 * 1000,
      waveColor: '#4579e2'
    },

  ]
});
const test = ref();
// setTimeout(() => {
//   state.currLevel = 60
// }, 2000);
// setTimeout(() => {
//   state.width = '80%';
//   state.height = '80%';
//   state.borderWidth = 20;
//   // console.log('修改');
//   test.value.resize();
// }, 2000);
</script>
<style lang="scss">
body,
html {
  width: 100%;
  height: 100%;
  margin: 0;
  // color:transparent;
  overflow: hidden;
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

.f-liquid-chart__top-border {
  // stroke-dasharray: 100;
}

.page {
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background-color: rgb(48, 79, 107);

  .waves {
    width: 50%;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
  }
}

.waves {
  .wave {
    animation: move 3s linear infinite;

    @for $i from 1 through 3 {
      &:nth-child(#{$i}) {
        animation-delay:#{$i * -2s};
        animation-duration: #{12s - $i * 3s};
      }
    }
  }

  @keyframes move {
    from {
      transform: translate(-90px, 0%);
    }

    to {
      transform: translate(85px, 0%);
    }
  }
}
</style>

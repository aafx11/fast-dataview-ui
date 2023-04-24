<template>
  <!-- <div :style="{
    width: '400px', height: '400px',
    margin: '100px'
  }">
    <FLiquidChart :style="{
        width: state.width, height: state.height
      }" :borderWidth="state.borderWidth"></FLiquidChart>
  </div> -->
  <div class="wrap">
    <div>

    </div>
    <div>
      <FLiquidChart :style="{ width: state.width, height: state.height }" ref="test" v-bind="state">
      </FLiquidChart>
      <div>123</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref, reactive, nextTick } from 'vue';
let state = reactive({
  width: '100%',
  height: '100%',
  borderWidth: 10,
  currLevel: 40,
  maxLevel: 100
});
const test = ref();
setTimeout(() => {
  state.width = '80%';
  state.height = '80%';
  state.borderWidth = 20;
  // console.log('修改');
  test.value.resize();
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
  grid-template-rows: 30fr 70fr;
  width: 100vw;
  height: 100vh;
}

.f-liquid-chart__top-border {
  // stroke-dasharray: 100;
}
</style>

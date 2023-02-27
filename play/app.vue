<template>
  <FScreenContainer class="screen" :onAfterResize="onAfterResize">
    <div class="wrap">
      <f-dynamic-particle ref="particle" :radius="1.2" :src="'/assets/circle.png'" :width="400" :height="300">
      </f-dynamic-particle>
      <FBorderBox1>
        <div style="width: 100px;height: 100px;">123</div>
      </FBorderBox1>
    </div>
    <button @click="toggle">切换</button>
  </FScreenContainer>
</template>
<script lang="ts" setup>
import { onMounted, ref, reactive } from 'vue'

const particle = ref()
const toggle = () => {
  particle.value.toggleImg('/assets/long.png')
}

onMounted(() => {
  // const ctx = testRef.value.getContext('2d')
  // let img = new Image()
  // img.src = './assets/long.png'
  // img.onload = () => {
  //   ctx.drawImage(img, 0, 0, 200, 200)
  // }
})

const onAfterResize = () => {}
</script>
<style lang="scss">
html,
body {
  margin: 0;
  // overflow: hidden;
}

.container {
  // width: 100vw;
  // height: 100vh;
  border: 1px solid red;
  color: gold;
  // overflow: hidden;
  box-sizing: border-box;
}

.screen {
  // border: 2px solid goldenrod;
  box-sizing: border-box;

  .wrap {
    // width: 1500px;
    // height: 700px;
    border: 1px solid slateblue;
    box-sizing: border-box;
  }
}

.test {
  width: 100px;
  height: 100px;
  box-sizing: border-box;
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
}
</style>
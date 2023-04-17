# Particle 粒子动效
该组件是将图片通过canvas转化成粒子动效。
## 基础用法
`width`和`height`属性定义canvas的宽高，`src`属性设置图片地址
:::demo
```vue
<template>
  <FDynamicParticle :width="400" :height="400" src="/fast-dataview-ui/tree.png"></FDynamicParticle>
</template>
```
:::


## 切换图片
点击图片，调用[toggleImg](#method)方法，切换图片
:::demo
```vue
<template>
  <div>
    <div class="canvas-wrap">
      <FDynamicParticle ref="dynamicParticle" :width="400" :height="400" :src="img"></FDynamicParticle>
    </div>
    <div class="img-list">
      <img v-for="(item,index) in imgList" class="img-list__item" :src="item" @click="clickImg(item)">
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref,reactive } from 'vue';
const dynamicParticle = ref()
let img = ref('/fast-dataview-ui/sun.png')
 
const imgList = reactive([
  '/fast-dataview-ui/sun.png',
  '/fast-dataview-ui/rain.png',
  '/fast-dataview-ui/thunder.png',
  '/fast-dataview-ui/snowflake.png',
])
const clickImg = (src:string) =>{
  dynamicParticle.value.toggleImg(src)
}
</script>
<style>
.canvas-wrap{
  display:flex;
  justify-content: center;
  align-items: center;
}
.img-list{
  display:flex;
  width:100%;
}
.img-list__item{
  width:25%;
  border:1px solid white;
  cursor: pointer;
  box-sizing: border-box;
}
.img-list__item:not(:last-child) {
  border-right-width: 0;
}

</style>
```
:::


## 参数
| 参数名   | 说明             | 类型   | 可选值 | 默认值 |
| -------- | ---------------- | ------ | ------ | ------ |
| width    | canvas的宽度     | number | -      | 400    |
| height   | canvas高度       | number | -      | 400    |
| radius   | 粒子半径         | number | -      | 1.2    |
| strength | 吸引和排斥的力度 | number | -      | 2      |
| src      | 图片的路径       | string | -      |        |

<span id="method"></span>

## 方法
| 方法名    | 类型                 | 说明                          |
| --------- | -------------------- | ----------------------------- |
| toggleImg | (src:string) => void | 用于切换图片,参数是图片的地址 |

<style lang="scss" scoped>
.demo-particle :deep(.source) {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #212121;
}
</style>
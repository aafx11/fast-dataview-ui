# DigitalScroll 滚动数字
滚动数字,用于展示数字的变化。
## 基础用法
`number`属性表示要展示的数字，`digit`属性表示保留多少位小数
:::demo
```vue
<template>
  <div>
    <FDigitalScroll :number="num" :digit="2"></FDigitalScroll>
    <FDigitalScroll :number="num" :digit="3"></FDigitalScroll>
    <div class="toggle-btn" @click="clickToggleBtn">切换数字</div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

let num = ref(100.999)
const clickToggleBtn = () =>{
  if(num.value === 100.999){
    num.value = 999
  }else {
    num.value = 100.999
  }
}
</script>
<style>
.toggle-btn{
  width:100px;
  padding:5px 15px;
  background: rgb(33, 150, 243);
  border-radius: 5px;
  cursor: pointer;
}
</style>
```
:::

## 参数
| 参数名 | 说明           | 类型   | 可选值 | 默认值 |
| ------ | -------------- | ------ | ------ | ------ |
| num    | 展示的数字     | number | -      | 0      |
| digit  | 保留多少位小数 | number | -      | 2      |

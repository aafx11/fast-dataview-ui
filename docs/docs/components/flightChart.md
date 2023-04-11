# FlightChart飞线图(管道图)
飞线图能够准确表达地图上坐标之间的连接，使用插槽还能完成设备间的管道连接图。
## 基础用法
`bgUrl`属性:定义背景图,接受图片url的路径`string`值<br>
`points`属性:定义点坐标以及名称，接受[Point[]](#point)类型,
:::demo
```vue
<template>
  <FFlightChart :bgUrl="state.bgUrl" :points="state.points" :paths="state.paths" :halo="state.halo"
  :title="state.title" :icon="state.icon" style="width: 630px;height: 600px;"></FFlightChart>
</template>
<script lang="ts" setup>
import { onMounted, ref, reactive, nextTick } from 'vue';
 let state = reactive({
  bgUrl: '../assets/map.png',
  points: [
    { name: '广州', coordinate: [0.50, 0.42] },
    { name: '东莞', coordinate: [0.54, 0.48] },
    { name: '深圳', coordinate: [0.56, 0.54] },
    { name: '湛江', coordinate: [0.12, 0.78] },
    { name: '茂名', coordinate: [0.21, 0.64] },
    { name: '阳江', coordinate: [0.31, 0.64] },
    { name: '江门', coordinate: [0.41, 0.60] },
    { name: '云浮', coordinate: [0.30, 0.50] },
    { name: '肇庆', coordinate: [0.37, 0.40] },
    { name: '佛山', coordinate: [0.45, 0.48] },
    { name: '清远', coordinate: [0.44, 0.29] },
    { name: '韶关', coordinate: [0.53, 0.18] },
    { name: '河源', coordinate: [0.65, 0.31] },
    { name: '梅州', coordinate: [0.78, 0.28] },
    { name: '潮州', coordinate: [0.84, 0.35] },
    { name: '汕头', coordinate: [0.86, 0.40] },
    { name: '揭阳', coordinate: [0.78, 0.41] },
    { name: '汕尾', coordinate: [0.68, 0.49] },
    { name: '惠州', coordinate: [0.60, 0.44] },
  ],
  paths: [
    { source: '广州', route: [[0.54, 0.48]], target: '深圳' },
    { source: '湛江', route: [[0.41, 0.60]], target: '广州' },
    { source: '潮州', route: [[0.65, 0.31]], target: '广州' },
    // { source: '清远', target: '广州' },
    { source: '云浮', target: '肇庆' },
    { source: '肇庆', target: '广州' },
    { source: '清远', target: '梅州' },
  ],
  halo:{
    show:false
  },
  title:{
    show:true
  },
  icon:{
    show:true,
    url:'../assets/point.png'
  },
});
</script>
```
:::


## Point属性
| 参数名     | 说明         | 类型          | 可选值 | 默认值 |
| ---------- | ------------ | ------------- | ------ | ------ |
| name       | 文本名称     | string,number | -      |        |
| coordinate | x轴和y轴坐标 | number[]      | -      |        |
| halo       | 光晕配置项   | [Halo](#halo) | -      |        |

<span id="point"></span>

## Path属性
| 参数名 | 说明                   | 类型          | 可选值 | 默认值 |
| ------ | ---------------------- | ------------- | ------ | ------ |
| source | 起始位置的文本名称     | string,number | -      |        |
| route  | 途径坐标的x轴和y轴数组 | number[][]    | -      |        |
| source | 目标位置的文本名称     | string,number | -      |        |
| line   | 光晕配置项             | [Line](#line) | -      |        |

<span id="path"></span>

## Line属性


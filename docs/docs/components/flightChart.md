# FlightChart飞线图(管道图)
飞线图能够准确表达地图上坐标之间的连接，使用插槽还能完成设备间的管道连接图。
## 基础用法
`bgUrl`属性:定义背景图,接受图片url的路径`string`值<br>
`points`属性:定义点坐标以及名称，接受[Point[]](#point)类型,其中`name`为坐标名称,`coordinate`为坐标的x轴和y轴（可通过[chart-click](#event)点击事件获取到x轴和y轴的相对坐标）<br>
`Path`属性:定义坐标之间的连接线,接受[Path[]](#path)类型,其中`source`和`target`分别为连接线的起始点和终点，`route`为连接线中间经过的坐标，可为多个坐标数组
:::demo `Path`属性可以只传`route`路径，可以不传`source`和`target`
```vue
<template>
  <FFlightChart :bgUrl="state.bgUrl" :points="state.points" :paths="state.paths" :halo="state.halo"
  :title="state.title" :icon="state.icon" style="width: 630px;height: 600px;" @chart-click="onChartClick"></FFlightChart>
</template>
<script lang="ts" setup>
import { onMounted, ref, reactive, nextTick } from 'vue';
 let state = reactive({
  bgUrl: '/map.png',
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
    { source: '清远', target: '广州' },
    { source: '广州', route: [[0.54, 0.48]], target: '深圳' },
    { source: '潮州', route: [[0.65, 0.31]], target: '广州' },
    { source: '湛江', route: [[0.31,0.64],[0.41, 0.60]], target: '广州' },
    { route:[[0.30, 0.50]], target: '肇庆' },
    { source: '肇庆',route:[[0.50, 0.42]] },
    {route:[[0.44, 0.29],[0.65, 0.31],[0.78, 0.28]]}
  ],
  halo:{
    show:false
  },
  icon:{
    url:'/point.png'
  },
});

const onChartClick = (x,y,event) =>{
  console.log(x,y,event);
}

</script>
```
:::

## 自定义光晕
[halo](#halo)属性:用于定义所有坐标点的光晕配置，也可在[point](#point)属性中单独定义某个坐标的光晕配置

:::demo 每个[point](#point)坐标点的[halo](#halo)属性优先级会大于全局的[halo](#halo)属性设置
```vue
<template>
  <FFlightChart :bgUrl="state.bgUrl" :points="state.points" :paths="state.paths" :halo="state.halo"
  :title="state.title" :icon="state.icon" style="width: 630px;height: 600px;" @chart-click="onChartClick"></FFlightChart>
</template>
<script lang="ts" setup>
import { onMounted, ref, reactive, nextTick } from 'vue';
 let state = reactive({
  bgUrl: '/map.png',
  points: [
    { name: '广州', coordinate: [0.50, 0.42] },
    { name: '东莞', coordinate: [0.54, 0.48] },
    { name: '深圳', coordinate: [0.56, 0.54] },
    { name: '湛江', coordinate: [0.12, 0.78] },
    { name: '茂名', coordinate: [0.21, 0.64] },
    { name: '佛山', coordinate: [0.45, 0.48] },
    { name: '韶关', coordinate: [0.53, 0.18] },
    { name: '阳江', coordinate: [0.31, 0.64] ,halo:{color:'blue',duration:3000,radius:50}},
    { name: '江门', coordinate: [0.41, 0.60] ,halo:{color:'yellow',duration:2900,radius:60}},
    { name: '云浮', coordinate: [0.30, 0.50] ,halo:{color:'#212121',duration:2500,radius:70}},
    { name: '肇庆', coordinate: [0.37, 0.40] ,halo:{color:'#5d80f4',duration:2000,radius:50}},
    { name: '清远', coordinate: [0.44, 0.29] ,halo:{color:'yellow',duration:1000,radius:70}},
    { name: '河源', coordinate: [0.65, 0.31] ,halo:{show:false}},
    { name: '梅州', coordinate: [0.78, 0.28] ,halo:{show:false}},
    { name: '潮州', coordinate: [0.84, 0.35] ,halo:{show:false}},
    { name: '汕头', coordinate: [0.86, 0.40] ,halo:{show:false}},
    { name: '揭阳', coordinate: [0.78, 0.41] ,halo:{show:false}},
    { name: '汕尾', coordinate: [0.68, 0.49] ,halo:{show:false}},
    { name: '惠州', coordinate: [0.60, 0.44] ,halo:{show:false}},
  ],
  paths: [
    { source: '清远', target: '广州' },
    { source: '广州', route: [[0.54, 0.48]], target: '深圳' },
    { source: '潮州', route: [[0.65, 0.31]], target: '广州' },
    { source: '湛江', route: [[0.31,0.64],[0.41, 0.60]], target: '广州' },
    { route:[[0.30, 0.50]], target: '肇庆' },
    { source: '肇庆',route:[[0.50, 0.42]] },
    {route:[[0.44, 0.29],[0.65, 0.31],[0.78, 0.28]]}
  ],
  halo:{
    show:true,
    duration:1500,
    color: '#3891c2',
    radius: 100
  },
  icon:{
    url:'/point.png'
  },
});

const onChartClick = (x,y,event) =>{
  console.log(x,y,event);
}

</script>
```
:::

## 自定义文本
[title](#title)属性:用于定义所有坐标点的文本配置，也可在[point](#point)属性中单独定义某个坐标的文本配置
:::demo 每个[point](#point)坐标点的[title](#title)属性优先级会大于全局的[title](#title)属性设置
```vue
<template>
  <FFlightChart :bgUrl="state.bgUrl" :points="state.points" :paths="state.paths" :halo="state.halo"
  :title="state.title" :icon="state.icon" style="width: 630px;height: 600px;" @chart-click="onChartClick"></FFlightChart>
</template>
<script lang="ts" setup>
import { onMounted, ref, reactive, nextTick } from 'vue';
 let state = reactive({
  bgUrl: '/map.png',
  points: [
    { name: '广州', coordinate: [0.50, 0.42] },
    { name: '东莞', coordinate: [0.54, 0.48] },
    { name: '深圳', coordinate: [0.56, 0.54] },
    { name: '湛江', coordinate: [0.12, 0.78] },
    { name: '茂名', coordinate: [0.21, 0.64] },
    { name: '阳江', coordinate: [0.31, 0.64] },
    { name: '江门', coordinate: [0.41, 0.60] ,title:{offest:[0,20],color:'blue',fontSize:20}},
    { name: '云浮', coordinate: [0.30, 0.50] ,title:{offest:[25,5],color:'#faba3c',fontSize:18}},
    { name: '肇庆', coordinate: [0.37, 0.40] ,title:{offest:[0,20],color:'blue',fontSize:20}},
    { name: '佛山', coordinate: [0.45, 0.48] ,title:{offest:[0,20],color:'blue',fontSize:20} },
    { name: '清远', coordinate: [0.44, 0.29] ,title:{offest:[0,20],color:'#469ef7',fontSize:20}},
    { name: '韶关', coordinate: [0.53, 0.18] ,title:{offest:[0,-10],color:'#faba3c',fontSize:18}},
    { name: '河源', coordinate: [0.65, 0.31], title:{show:false} },
    { name: '梅州', coordinate: [0.78, 0.28], title:{show:false} },
    { name: '潮州', coordinate: [0.84, 0.35], title:{show:false} },
    { name: '汕头', coordinate: [0.86, 0.40], title:{show:false} },
    { name: '揭阳', coordinate: [0.78, 0.41], title:{show:false} },
    { name: '汕尾', coordinate: [0.68, 0.49], title:{show:false} },
    { name: '惠州', coordinate: [0.60, 0.44], title:{show:false} },
  ],
  paths: [
    { source: '清远', target: '广州' },
    { source: '广州', route: [[0.54, 0.48]], target: '深圳' },
    { source: '潮州', route: [[0.65, 0.31]], target: '广州' },
    { source: '湛江', route: [[0.31,0.64],[0.41, 0.60]], target: '广州' },
    { route:[[0.30, 0.50]], target: '肇庆' },
    { source: '肇庆',route:[[0.50, 0.42]] },
    {route:[[0.44, 0.29],[0.65, 0.31],[0.78, 0.28]]}
  ],
  halo:{
    show:false,
    offest:[0,-10],
    color:'black',
    fontSize:14
  },
  title:{
    show:true,
  },
  icon:{
    url:'/point.png'
  },
});

const onChartClick = (x,y,event) =>{
  console.log(x,y,event);
}

</script>
```
:::

## 自定义图标
[icon](#icon)属性:用于定义所有坐标点的图标配置，也可在[point](#point)属性中单独定义某个坐标的图标配置
:::demo 每个[point](#point)坐标点的[icon](#icon)属性优先级会大于全局的[icon](#icon)属性设置
```vue
<template>
  <FFlightChart :bgUrl="state.bgUrl" :points="state.points" :paths="state.paths" :halo="state.halo"
  :title="state.title" :icon="state.icon" style="width: 630px;height: 600px;" @chart-click="onChartClick"></FFlightChart>
</template>
<script lang="ts" setup>
import { onMounted, ref, reactive, nextTick } from 'vue';
 let state = reactive({
  bgUrl: '/map.png',
  points: [
    { name: '广州', coordinate: [0.50, 0.42] },
    { name: '东莞', coordinate: [0.54, 0.48] },
    { name: '深圳', coordinate: [0.56, 0.54] },
    { name: '湛江', coordinate: [0.12, 0.78] },
    { name: '茂名', coordinate: [0.21, 0.64] },
    { name: '阳江', coordinate: [0.31, 0.64] },
    { name: '云浮', coordinate: [0.30, 0.50] ,icon:{url:'/point-01.png',width:25,height:25}},
    { name: '佛山', coordinate: [0.45, 0.48] ,icon:{url:'/point-02.png',width:25,height:25}},
    { name: '韶关', coordinate: [0.53, 0.18] ,icon:{url:'/point-03.png',width:25,height:25}},
    { name: '江门', coordinate: [0.41, 0.60] ,icon:{url:'/point-01.png',width:25,height:25}},
    { name: '清远', coordinate: [0.44, 0.29] ,icon:{url:'/point-02.png',width:25,height:25}},
    { name: '肇庆', coordinate: [0.37, 0.40] ,icon:{url:'/point-03.png',width:25,height:25}},
    { name: '河源', coordinate: [0.65, 0.31], icon:{show:false} },
    { name: '梅州', coordinate: [0.78, 0.28], icon:{show:false} },
    { name: '潮州', coordinate: [0.84, 0.35], icon:{show:false} },
    { name: '汕头', coordinate: [0.86, 0.40], icon:{show:false} },
    { name: '揭阳', coordinate: [0.78, 0.41], icon:{show:false} },
    { name: '汕尾', coordinate: [0.68, 0.49], icon:{show:false} },
    { name: '惠州', coordinate: [0.60, 0.44], icon:{show:false} },
  ],
  paths: [
    { source: '清远', target: '广州' },
    { source: '广州', route: [[0.54, 0.48]], target: '深圳' },
    { source: '潮州', route: [[0.65, 0.31]], target: '广州' },
    { source: '湛江', route: [[0.31,0.64],[0.41, 0.60]], target: '广州' },
    { route:[[0.30, 0.50]], target: '肇庆' },
    { source: '肇庆',route:[[0.50, 0.42]] },
    {route:[[0.44, 0.29],[0.65, 0.31],[0.78, 0.28]]}
  ],
  halo:{
    show:false
  },
  icon:{
    url:'/point.png',
    width:15,
    height:20
  },
});

const onChartClick = (x,y,event) =>{
  console.log(x,y,event);
}

</script>
```
:::

## 自定义连接线
[line](#line)属性:用于定义所有坐标点的连接线配置，也可在[path](#path)属性中单独定义某个坐标的连接线配置
:::demo 每个[path](#path)坐标点的[line](#line)属性优先级会大于全局的[line](#line)属性设置<br>在该例子中，使用`k`和`curvature`属性创造出了凸线，凹线和直线,使用`duration`属性调整了飞线的动画时长,`width`属性调整连接线的宽度，`radius`属性调整飞线占总连接线的长度，`color`和`orbitColor`属性分别调整飞线颜色和连接线的颜色
```vue
<template>
  <FFlightChart :bgUrl="state.bgUrl" :points="state.points" :paths="state.paths" :halo="state.halo"
  :title="state.title" :icon="state.icon" style="width: 630px;height: 600px;" @chart-click="onChartClick"></FFlightChart>
</template>
<script lang="ts" setup>
import { onMounted, ref, reactive, nextTick } from 'vue';
 let state = reactive({
  bgUrl: '/map.png',
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
    {
      source: '湛江', route: [[0.30, 0.50]], target: '清远',
      line: { width: 4, color: 'blue', orbitColor: 'rgba(103, 224, 227, .2)',
      duration: 4000, radius: 100, k: -5, curvature: 5 }
    },
    {
      source: '湛江', route: [[0.56, 0.54]], target: '梅州',
      line: { width: 3, color: '#37a2da', orbitColor: 'rgba(103, 224, 227, .2)',
      duration: 3000, radius: 200, k: 3, curvature: 5 }
    },
    {
      source: '湛江', target: '河源',
      line: { width: 2, color: '#fb7293', orbitColor: 'rgba(103, 224, 227, .2)',
      duration: 2000, radius: 200, k: 0, curvature: 100 }
    },
  ],
  halo:{
    show:false,
  },
  title:{
    show:true,
  },
  icon:{
    url:'/point.png'
  },
});

const onChartClick = (x,y,event) =>{
  console.log(x,y,event);
}

</script>
```
:::

## 使用插槽修改飞线
使用插槽能够替换原有的飞线，用此方法能够完成管道图。


<span id="point"></span>

## Point属性
| 参数名     | 说明                       | 类型            | 可选值 | 默认值 |
| ---------- | -------------------------- | --------------- | ------ | ------ |
| name       | 文本名称                   | string,number   | -      |        |
| coordinate | x轴和y轴坐标               | number[]        | -      |        |
| halo       | 单独配置该坐标的光晕配置项 | [Halo](#halo)   | -      |        |
| title      | 单独配置该坐标的文本配置项 | [Title](#title) | -      |        |
| icon       | 单独配置该坐标的图标配置项 | [Icon](#icon)   | -      |        |

<span id="path"></span>

## Path属性
| 参数名 | 说明                   | 类型          | 可选值 | 默认值 |
| ------ | ---------------------- | ------------- | ------ | ------ |
| source | 起始位置的文本名称     | string,number | -      |        |
| route  | 途径坐标的x轴和y轴数组 | number[][]    | -      |        |
| source | 目标位置的文本名称     | string,number | -      |        |
| line   | 光晕配置项             | [Line](#line) | -      |        |

<span id="line"></span>

## Line属性
| 参数名     | 说明                                                                 | 类型    | 可选值 | 默认值                  |
| ---------- | -------------------------------------------------------------------- | ------- | ------ | ----------------------- |
| show       | 是否展示两个坐标点之间的连接线                                       | boolean | -      | true                    |
| slot       | 连接线插槽                                                           | string  | -      |                         |
| width      | 连接线的宽度                                                         | number  | -      | 2                       |
| color      | 连接线中飞线的颜色                                                   | string  | -      | #0080ff                 |
| orbitColor | 连接线的颜色                                                         | string  | -      | rgba(103, 224, 227, .2) |
| duration   | 连接线中飞线的动画时长（毫秒）                                       | number  | -      | 2000                    |
| radius     | 连接线的显示半径                                                     | number  | -      | 100                     |
| k          | 连接线的收束程度，当为负值时连接线会呈凸形，当为正值时连接线会呈凹形 | number  |        | -0.5                    |
| curvature  | 连接线的弯曲程度，该值越小，弯曲程度越大，该值越大，弯曲程度越小     | number  |        | 5                       |

<span id="halo"></span>

## Halo属性
| 参数名   | 说明                     | 类型    | 可选值 | 默认值  |
| -------- | ------------------------ | ------- | ------ | ------- |
| show     | 是否展示光晕             | boolean | -      | true    |
| duration | 光晕闪烁的动画时长(毫米) | number  | -      | 700     |
| color    | 光晕的颜色               | string  | -      | #3891c2 |
| radius   | 光晕的半径               | number  | -      | 100     |

<span id="title"></span>

## Title属性
| 参数名   | 说明                   | 类型     | 可选值 | 默认值   |
| -------- | ---------------------- | -------- | ------ | -------- |
| show     | 是否展示文本           | boolean  | -      | true     |
| offest   | 文本在x轴和y轴的偏移量 | number[] | -      | [0, -10] |
| color    | 文本的颜色             | string   | -      | black    |
| fontSize | 文本的字体大小         | number   | -      | 16       |

<span id="icon"></span>

## Icon属性
| 参数名 | 说明           | 类型    | 可选值 | 默认值 |
| ------ | -------------- | ------- | ------ | ------ |
| show   | 是否展示图标   | boolean | -      | true   |
| url    | 图标的图片地址 | string  | -      |        |
| width  | 图标的宽度     | number  | -      | 10     |
| height | 图标的高度     | number  | -      | 10     |

<span id="event"></span>

## 事件
| 事件名      | 说明                                                    | 参数      |
| ----------- | ------------------------------------------------------- | --------- |
| chart-click | 当点击飞线图时触发的事件,参数为点击的x轴和y轴的相对坐标 | x,y,event |

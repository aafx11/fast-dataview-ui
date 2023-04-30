# LiquidChart 水位图
用于展示水位高度,水位上下限以及波浪动效。
## 基础用法
`currLevel`:当前水位,`maxLevel`:最大水位,`background`:背景颜色
:::demo
```vue
<template>
  <FLiquidChart style="width:500px;height:300px;" :currLevel="state.currLevel" :maxLevel="state.maxLevel" :background="state.background"></FLiquidChart>
</template>
<script lang="ts" setup>
import { reactive } from 'vue';
let state = reactive({
  currLevel: 50,
  maxLevel: 100,
  background: 'rgb(227, 247, 255)'
});
</script>
```
:::

## 自定义波浪
`waveOption`属性接受[LiquidChartWave[]](#LiquidChartWave)类型,其中:`offestTop`为波浪偏移,<br>
`waveScale`为波浪尺寸,`waveDirection`为波浪前进方向,`waveColor`为波浪颜色<br>
`waveDuration`为波浪动画时长(毫秒),`begin`为动画延迟开始(毫秒)
:::demo
```vue
<template>
  <FLiquidChart style="width:500px;height:300px;" :currLevel="state.currLevel" :waveOption="state.waveOption" :maxLevel="state.maxLevel" :background="state.background" :textOption="{show:false}"></FLiquidChart>
</template>
<script lang="ts" setup>
import { reactive } from 'vue';
let state = reactive({
  currLevel: 50,
  maxLevel: 100,
  background: 'rgb(227, 247, 255)',
  waveOption: [
    {
      offestTop: -20,
      waveScale: 15,
      waveDuration: 6 * 1000,
      begin: 2000,
      waveColor: '#1566c4'
    },
    {
      offestTop: -10,
      waveScale: 10,
      waveDuration: 3 * 1000,
      begin: 1000,
      waveColor: '#158fe5'
    },
    {
      offestTop: 20,
      waveScale: 5,
      waveDirection: 'left',
      waveDuration: 3 * 1000,
      waveColor: '#43b8f9'
    },
  ]
});
</script>
```
:::

## 自定义水位线
`lineOption`属性接受[LiquidChartLine[]](#LiquidChartLine)类型,其中`level`为横线的液位,<br>
`color`为横线的颜色,`text`为横线的文本
:::demo
```vue
<template>
  <FLiquidChart style="width:500px;height:300px;" :currLevel="state.currLevel" :maxLevel="state.maxLevel" :lineOption="state.lineOption" :background="state.background" :textOption="{ show: false }"></FLiquidChart>
</template>
<script lang="ts" setup>
import { reactive } from 'vue';
let state = reactive({
  currLevel: 50,
  maxLevel: 100,
  background: 'rgb(227, 247, 255)',
  lineOption: [
    { level: 90, color: 'red', text: '上限{level}m' },
    { level: 20, color: 'blue', text: '下限{level}m' },
  ]
});
</script>
```
:::

## 自定义文本
`textOption`属性接受[LiquidChartText](#LiquidChartText)类型,<br>
`text`为文本内容,{level}标记会被当前液位代替,{percent}标记会被当前液位百分比代替
:::demo
```vue
<template>
  <FLiquidChart style="width:500px;height:300px;" :currLevel="state.currLevel" :maxLevel="state.maxLevel" :background="state.background" :textOption="state.textOption"></FLiquidChart>
</template>
<script lang="ts" setup>
import { reactive } from 'vue';
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
</script>
```
:::



## 参数
| 参数名       | 说明                                            | 类型                                  | 可选值 | 默认值                 |
| ------------ | ----------------------------------------------- | ------------------------------------- | ------ | ---------------------- |
| currLevel    | 当前液位                                        | number                                | -      | 0                      |
| maxLevel     | 最高液位,如果不设置最大值,则水位默认为50%的高度 | number                                | -      |                        |
| background   | 背景颜色                                        | string                                | -      | transparent            |
| borderWidth  | 边框宽度                                        | number                                | -      | 10                     |
| borderColors | 边框颜色,分别为左右下边框颜色,上边框颜色        | string[]                              | -      | ['#294d99', '#294d99'] |
| lineOption   | 横线配置                                        | [LiquidChartLine](#LiquidChartLine)[] | -      | []                     |
| waveOption   | 波浪配置                                        | [LiquidChartWave](#LiquidChartWave)[] | -      |                        |
| textOption   | 文本配置                                        | [LiquidChartText](#LiquidChartText)   | -      |                        |

<span id="LiquidChartLine"></span>

## LiquidChartLines属性
| 参数名 | 说明                                   | 类型   | 可选值 | 默认值 |
| ------ | -------------------------------------- | ------ | ------ | ------ |
| level  | 横线的液位                             | number | -      |        |
| color  | 横线的颜色                             | string | -      |        |
| text   | 横线的文本,{level}标记会被横线液位替代 | string | -      |        |

<span id="LiquidChartWave"></span>

## LiquidChartWave属性
| 参数名        | 说明               | 类型   | 可选值       | 默认值    |
| ------------- | ------------------ | ------ | ------------ | --------- |
| offestTop     | 波浪偏移           | number | -            | 0         |
| waveScale     | 波浪尺寸           | number | -            | 15        |
| waveDirection | 波浪前进方向       | string | left , right | right     |
| waveDuration  | 波浪动画时长(毫秒) | number | -            | 10 * 1000 |
| begin         | 动画延迟开始       | number | -            | 0         |
| waveColor     | 波浪颜色           | string | -            | #4579e2   |

<span id="LiquidChartText"></span>

## LiquidChartText属性
| 参数名   | 说明                                                                     | 类型     | 可选值 | 默认值 |
| -------- | ------------------------------------------------------------------------ | -------- | ------ | ------ |
| show     | 是否展示文本                                                             | boolean  | -      | true   |
| offest   | 文本偏移,默认居中                                                        | number[] | -      | [0, 0] |
| fontSize | 字体大小                                                                 | number   | -      | 22     |
| color    | 字体颜色                                                                 | string   | -      | white  |
| text     | 文本内容,{level}标记会被当前液位代替,{percent}标记会被当前液位百分比代替 | string   | -      | 15     |

## 方法
| 方法名 | 类型       | 说明                                     |
| ------ | ---------- | ---------------------------------------- |
| resize | () => void | 手动调用 resize 方法使边框获取正确的高宽 |

<style lang="scss" scoped>
.demo-liquidChart :deep(.source) {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

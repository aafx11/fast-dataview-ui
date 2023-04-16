# Progress 进度条
用于表示任务的完成进度。

## 基础用法
`percent`属性表示进度条的百分比，接受`number`类型，范围是0-100

:::demo
```vue
<template>
  <FProgress :percent="0"></FProgress>
  <FProgress :percent="50" style="margin-top: 10px;"></FProgress>
  <FProgress :percent="70" style="margin-top: 10px;"></FProgress>
  <FProgress :percent="100" style="margin-top: 10px;"></FProgress>
</template>
```
:::

## 自定义颜色
`color`属性用于设置颜色，接受`string[]`类型，默认值是['#d1d5db', '#3b82f6', 'white']，分别是进度条的背景颜色，进度条本体颜色，进度条内文本颜色

:::demo
```vue
<template>
  <FProgress :percent="50"></FProgress>
  <FProgress :percent="50" :color="['#8338ec','#a2d2ff','#023047']" style="margin-top: 10px;"></FProgress>
  <FProgress :percent="50" :color="['#06d6a0','#ffd166','#073b4c']" style="margin-top: 10px;"></FProgress>
</template>
```
:::

## 参数
| 参数名   | 说明                       | 类型     | 可选值 | 默认值                          |
| -------- | -------------------------- | -------- | ------ | ------------------------------- |
| percent  | 进度条的百分比             | number   | -      | 0                               |
| color    | 进度条的颜色               | string[] | -      | ['#d1d5db', '#3b82f6', 'white'] |
| duration | 百分比变化时的动画时长(秒) | number   | -      | 0.5                             |


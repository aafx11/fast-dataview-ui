# loading1 加载
加载组件一般用于页面加载完成之前展示。
## 基础用法

:::demo
```vue
<template>
  <FLoading2 width="100px" height="100px" text="loading" :duration="2"></FLoading2>
</template>
```
:::

## 参数
| 参数名   | 说明                                                     | 类型     | 可选值 | 默认值                            |
| -------- | -------------------------------------------------------- | -------- | ------ | --------------------------------- |
| width    | 组件宽度                                                 | string   | -      | 100px                             |
| height   | 组件高度                                                 | string   | -      | 100px                             |
| color    | 加载组件的颜色,分别为背景颜色，加载组件的主颜色,文本颜色 | string[] | -      | ['#d1d5db', '#3b82f6', '#3b82f6'] |
| text     | 展示文本                                                 | string   | -      |                                   |
| duration | 动画时长(秒)                                             | number   | -      | 0.8                               |

<style lang="scss" scoped>
.demo-loading02 :deep(.source) {
  display:flex;
  justify-content: center;
  align-items: center;
  height:300px;
  background: #212121;
}
</style>
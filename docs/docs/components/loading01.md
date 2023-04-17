# loading1 加载
加载组件一般用于页面加载完成之前展示。
## 基础用法

:::demo
```vue
<template>
  <FLoading1 text="loading" :duration="2"></FLoading1>
</template>
```
:::

## 参数
| 参数名   | 说明                                                      | 类型     | 可选值 | 默认值                            |
| -------- | --------------------------------------------------------- | -------- | ------ | --------------------------------- |
| color    | 加载组件的颜色,分别为加载组件的主颜色，背景颜色，文本颜色 | string[] | -      | ['#4f29f0', '#c3c8de', '#414856'] |
| text     | 展示文本                                                  | string   | -      |                                   |
| duration | 动画时长(秒)                                              | number   | -      | 0.8                               |

<style lang="scss" scoped>
.demo-loading01 :deep(.source) {
  display:flex;
  justify-content: center;
  align-items: center;
  height:300px;
  background: #212121;
}
</style>
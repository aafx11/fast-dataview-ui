# Container 容器
容器能根据设计稿的尺寸或浏览器窗口大小进行缩放。
## 基础用法
`width`和`height`属性为设计稿的尺寸
```vue
<template>
  <FScreenContainer :width="1920" :height="1080">
    <div>数据大屏内容</div>
  </FScreenContainer>
</template>
```

## 参数
| 参数名 | 说明       | 类型   | 可选值 | 默认值 |
| ------ | ---------- | ------ | ------ | ------ |
| width  | 设计稿宽度 | number | -      | 1920   |
| height | 设计稿高度 | number | -      | 1080   |
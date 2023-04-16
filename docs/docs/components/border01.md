# BorderBox1 边框
该边框使用svg标签绘制，可用于卡片，标题，导航组件里。
## 基础用法
边框的宽高默认是100%。
:::demo
```vue
<template>
  <FBorderBox1>
    <div class="flex-center">
      BorderBox1 边框
    </div>
  </FBorderBox1>
</template>
```
:::

## 自定义颜色和边框宽度
`color`属性:用于修改边框颜色，接受`string[]`值<br>
`backgroundColor`属性:用于修改边框内容的背景颜色，接受`string`值<br>
`strokeWidth`属性:用于修改边框宽度，接受`number`值
:::demo `color`属性为`string[]`类型，数组的第一个元素是四个边角的颜色，第二个元素是线边框的颜色。
```vue
<template>
  <FBorderBox1 :color="['#2196f3','red']" backgroundColor="black" :strokeWidth="4">
    <div class="flex-center">
      自定义颜色和边框宽度
    </div>
  </FBorderBox1>
</template>
```
:::

## 参数
| 参数名          | 说明               | 类型     | 可选值 | 默认值                                                |
| --------------- | ------------------ | -------- | ------ | ----------------------------------------------------- |
| color           | 边框颜色           | string[] | -      | ['rgba(46, 96, 153,0.85)', 'rgba(71, 196, 245,0.85)'] |
| backgroundColor | 边框内容的背景颜色 | string   | -      | transparent                                           |
| strokeWidth     | 边框宽度           | number   | -      | 2                                                     |

<style lang="scss" scoped>
.demo-border01 :deep(.source) {
  background: #212121;
}
</style>
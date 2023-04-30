# BorderBox2 边框
该边框使用svg标签绘制，可用于卡片，标题，导航组件里。
## 基础用法
边框的宽高默认是100%。
:::demo
```vue
<template>
  <FBorderBox2>
    <div class="flex-center" style="height:300px;">
      BorderBox2 边框
    </div>
  </FBorderBox2>
</template>
```
:::

## 自定义颜色和边框宽度
`color`属性:用于修改边框颜色，接受`string[]`值<br>
`backgroundColor`属性:用于修改边框内容的背景颜色，接受`string`值<br>
`strokeWidth`属性:用于修改边框宽度，接受`number`值
:::demo `color`属性为`string[]`类型，数组的第一个元素是流动边框的颜色。
```vue
<template>
  <FBorderBox2 :color="['#0080ff']" backgroundColor="black" :strokeWidth="4">
    <div class="flex-center" style="height:300px;">
      自定义颜色和边框宽度
    </div>
  </FBorderBox2>
</template>
```
:::

## 自定义边框虚线和动画时长
`stroke-dasharray`属性:用于修改边框虚线间隔，接受`string`值<br>
`duration`属性:用于修动画时长，接受`number`值
:::demo
```vue
<template>
  <FBorderBox2 stroke-dasharray="800 300" :duration="5" :strokeWidth="3" >
    <div class="flex-center" style="height:300px;">
      自定义边框虚线和动画时长
    </div>
  </FBorderBox2>
</template>
```
:::

## 参数
| 参数名           | 说明               | 类型     | 可选值 | 默认值      |
| ---------------- | ------------------ | -------- | ------ | ----------- |
| color            | 边框颜色           | string[] | -      | ['white']   |
| backgroundColor  | 边框内容的背景颜色 | string   | -      | transparent |
| strokeWidth      | 边框宽度           | number   | -      | 3           |
| duration         | 动画时长           | number   | -      | 2           |
| stroke-dasharray | 边框虚线           | string   | -      | 300 300     |

## 方法
| 方法名 | 类型       | 说明                                     |
| ------ | ---------- | ---------------------------------------- |
| resize | () => void | 手动调用 resize 方法使边框获取正确的高宽 |

<style lang="scss" scoped>
.demo-border02 :deep(.source) {
  background: #212121;
}
</style>
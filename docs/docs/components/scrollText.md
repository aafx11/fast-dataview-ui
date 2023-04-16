# ScrollTable 轮播文本
当需要展示的文本过长时，可以使用轮播文本，可以在表格等展示数据的组件中使用。

## 基础用法
`type`属性调整文本样式，`speed`属性调整文本移动速度
:::demo
```vue
<template>
  <FScrollText>
    <div>
      Composition API:Composition API 是 Vue3 中的主要新功能之一，它提供了一种基于函数的 API，让你可以将组件的逻辑拆分成更小的、可复用的函数。通过 Composition API，你可以更好地组织组件代码，避免出现代码重复和难以维护的情况。
    </div>
  </FScrollText>
    <FScrollText type="success" :speed="50">
    <div>
      Composition API:Composition API 是 Vue3 中的主要新功能之一，它提供了一种基于函数的 API，让你可以将组件的逻辑拆分成更小的、可复用的函数。通过 Composition API，你可以更好地组织组件代码，避免出现代码重复和难以维护的情况。
    </div>
  </FScrollText>
  <FScrollText type="warning" :speed="40" style="margin-top:10px;">
    <div>
      Composition API:Composition API 是 Vue3 中的主要新功能之一，它提供了一种基于函数的 API，让你可以将组件的逻辑拆分成更小的、可复用的函数。通过 Composition API，你可以更好地组织组件代码，避免出现代码重复和难以维护的情况。
    </div>
  </FScrollText>
    <FScrollText type="info" :speed="30" style="margin-top:10px;">
    <div>
      Composition API:Composition API 是 Vue3 中的主要新功能之一，它提供了一种基于函数的 API，让你可以将组件的逻辑拆分成更小的、可复用的函数。通过 Composition API，你可以更好地组织组件代码，避免出现代码重复和难以维护的情况。
    </div>
  </FScrollText>
  <FScrollText type="danger" :speed="20" style="margin-top:10px;">
    <div>
      Composition API:Composition API 是 Vue3 中的主要新功能之一，它提供了一种基于函数的 API，让你可以将组件的逻辑拆分成更小的、可复用的函数。通过 Composition API，你可以更好地组织组件代码，避免出现代码重复和难以维护的情况。
    </div>
  </FScrollText>
</template>
```
:::

## 自定义文本滚动方向
`direction`属性:设置文本滚动方向，可选值有`up` , `down` , `left` , `right`
:::demo
```vue
<template>
  <FScrollText type="info" :speed="30" direction="left">
    <div>
      Composition API:Composition API 是 Vue3 中的主要新功能之一，它提供了一种基于函数的 API，让你可以将组件的逻辑拆分成更小的、可复用的函数。通过 Composition API，你可以更好地组织组件代码，避免出现代码重复和难以维护的情况。
    </div>
  </FScrollText>
  <FScrollText type="info" :speed="30" direction="right" style="margin-top:10px;">
    <div>
      Composition API:Composition API 是 Vue3 中的主要新功能之一，它提供了一种基于函数的 API，让你可以将组件的逻辑拆分成更小的、可复用的函数。通过 Composition API，你可以更好地组织组件代码，避免出现代码重复和难以维护的情况。
    </div>
  </FScrollText>
  <FScrollText type="info" :speed="30" direction="up" style="max-height:50px;margin-top:10px;">
    <div>Composition API:Composition API 是 Vue3 中的主要新功能之一，</div>
    <div>它提供了一种基于函数的 API，让你可以将组件的逻辑拆分成更小的、可复用的函数。</div>
    <div>通过 Composition API，你可以更好地组织组件代码，避免出现代码重复和难以维护的情况。</div>
  </FScrollText>
  <FScrollText type="info" :speed="30" direction="down" style="max-height:50px;margin-top:10px;">
    <div>Composition API:Composition API 是 Vue3 中的主要新功能之一，</div>
    <div>它提供了一种基于函数的 API，让你可以将组件的逻辑拆分成更小的、可复用的函数。</div>
    <div>通过 Composition API，你可以更好地组织组件代码，避免出现代码重复和难以维护的情况。</div>
  </FScrollText>    
</template>
```
:::

## 自定义文本滚动模式(当文本超出范围时才滚动)
`mode`属性:设置文本滚动的模式，`infinite`模式为无限滚动，`overflow`模式是当文本超出时才进行滚动。
:::demo
```vue
<template>
  <FScrollText type="info" mode="overflow">
    <div>自定义文本滚动模式(当文本超出范围时才滚动)</div>
   </FScrollText>
    <FScrollText type="info" mode="overflow" style="margin-top:10px;">
    <div> 
      Composition API:Composition API 是 Vue3 中的主要新功能之一，它提供了一种基于函数的 API，让你可以将组件的逻辑拆分成更小的、可复用的函数。通过 Composition API，你可以更好地组织组件代码，避免出现代码重复和难以维护的情况。
    </div>
   </FScrollText>  
</template>
```
:::


## 参数
| 参数名    | 说明                                                                       | 类型   | 可选值                                  | 默认值   |
| --------- | -------------------------------------------------------------------------- | ------ | --------------------------------------- | -------- |
| type      | 文本滚动的类型                                                             | string | default ,success ,warning ,info ,danger | default  |
| direction | 文本滚动的方向                                                             | string | up , down , left , right                |          |
| speed     | 文本滚动的速度                                                             | number |                                         | 60       |
| mode      | 滚动模式，infinite模式，无限滚动，overflow模式只会在文本超出范围时进行滚动 | string | infinite,overflow                       | infinite |

<style lang="scss" scoped>
.demo-scrollText :deep(.source) {
  background: #212121;
}
</style>
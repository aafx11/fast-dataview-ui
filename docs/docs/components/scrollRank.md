# ScrollRank 轮播排名表格
用于展示任务完成的百分比以及数值的排名。
## 基础用法
`data`属性为排名表格的数据，接受[DataItem](#dataItem)类型，`pageSize`每页大小，`togglePage`每次翻页切换多少条数据，`maxValue`最大值，如果不填，默认取data中的最大value，`order`排序模式
:::demo
```vue
<template>
  <FScrollRank :data="state.data" :pageSize="5" :togglePage="5" :maxValue="3500" order="reverse"></FScrollRank>
</template>
<script lang="ts" setup>
import { reactive } from 'vue';
let state = reactive({
  data:[
    {name:'名称A', value:200},
    {name:'名称B', value:1200},
    {name:'名称C', value:3200},
    {name:'名称D', value:100},
    {name:'名称E', value:400},
    {name:'名称F', value:300},
    {name:'名称G', value:1000},
    {name:'名称H', value:500},
    {name:'名称I', value:1500},
    {name:'名称J', value:2500},
  ]
})
</script>

```
:::

## 格式化数值
`valueFormatter`进行数值格式化，接受一个函数，参数为name,value,maxValue,index
:::demo
```vue
<template>
  <FScrollRank :data="state.data" :pageSize="5" :togglePage="5" :valueFormatter="valueFormatter"></FScrollRank>
</template>
<script lang="ts" setup>
import { reactive } from 'vue';
let state = reactive({
  data:[
    {name:'名称A', value:200},
    {name:'名称B', value:1200},
    {name:'名称C', value:3200},
    {name:'名称D', value:100},
    {name:'名称E', value:400},
    {name:'名称F', value:300},
    {name:'名称G', value:1000},
    {name:'名称H', value:500},
    {name:'名称I', value:1500},
    {name:'名称J', value:2500},
  ]
})

const valueFormatter = ({name,value,maxValue,index})=>{
    let reverseNumber = (value + '').split('').reverse()
    if(reverseNumber.length <= 3){
     return value
    }
    let valueStr = ''
    while (reverseNumber.length) {
      const seg = reverseNumber.splice(0, 3).join('')
      valueStr += seg
      if (seg.length === 3) valueStr += ','
      }

    return valueStr.split('').reverse().join('')
  }
</script>

```
:::

## 参数
| 参数名         | 说明                                                         | 类型                    | 可选值                 | 默认值   |
| -------------- | ------------------------------------------------------------ | ----------------------- | ---------------------- | -------- |
| data           | 排名表格的数据                                               | [DataItem[]](#dataItem) | -                      |          |
| pageSize       | 每页的大小                                                   | number                  | -                      | 5        |
| togglePage     | 每次翻页多少条数据                                           | number                  | -                      | 3        |
| toggleDur      | 翻页间隔(毫秒)                                               | number                  | -                      | 3 * 1000 |
| toggleDuration | 翻页动画的时长(毫秒)                                         | number                  | -                      | 500      |
| maxValue       | 最大值，如果不设置，自动取data里的最大值                     | number                  | -                      | 500      |
| valueFormatter | 对data中的value数值格式化，参数name,value,<br>maxValue,index | Function                | -                      | 500      |
| order          | 排列顺序（normal正序，reverse倒序,default不排序）            | string                  | default,reverse,normal | reverse  |
| showRank       | 是否展示排名                                                 | boolean                 | -                      | true     |
| showPercent    | 是否展示百分比                                               | boolean                 | -                      | true     |
| showRatio      | 是否比例                                                     | boolean                 | -                      | true     |


<span id="dataItem"></span>
## DataItem属性
| 参数名 | 说明           | 类型          | 可选值 | 默认值 |
| ------ | -------------- | ------------- | ------ | ------ |
| name   | 用于展示的名称 | string,number | -      |        |
| value  | 用于排名的数值 | number        | -      |        |

<style lang="scss" scoped>
.demo-scrollRank :deep(.source) {
  background: #212121;
}
</style>
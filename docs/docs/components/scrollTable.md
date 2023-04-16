# ScrollTable 轮播表格
用于轮播展示表格中的数据。支持单条，多条和整页轮播，能够使用插槽渲染，提供函数修改单元格样式。
## 基础用法
`data`属性，原始数据数组，[columns](#column)属性，配置每一列，`togglePage`属性设置每次翻页切换多少条数据

:::demo
```vue

<template>
  <FScrollTable :data="state.data" :columns="state.columns" :togglePage="state.togglePage"></FScrollTable>
</template>
<script lang="ts" setup>
import { onMounted, ref, reactive, nextTick } from 'vue';
let state = reactive({
  data: [
    { name: '测试名称01', title: '测试标题01', num: 500, },
    { name: '测试名称02', title: '测试标题02', num: 1500, },
    { name: '测试名称03', title: '测试标题03', num: 2500, },
    { name: '测试名称04', title: '测试标题04', num: 100, },
    { name: '测试名称05', title: '测试标题05', num: 300, },
    { name: '测试名称06', title: '测试标题06', num: 400, },
    { name: '测试名称07', title: '测试标题07', num: 400, },
    { name: '测试名称08', title: '测试标题08', num: 700, },
    { name: '测试名称09', title: '测试标题09', num: 800, },
    { name: '测试名称10', title: '测试标题10', num: 900, },
    { name: '测试名称11', title: '测试标题11', num: 1000, },
    { name: '测试名称12', title: '测试标题21', num: 200, },
  ],
  columns: [
    { prop: 'name', label: '名称', width: 220 },
    { prop: 'title', label: '标题', width: 210 },
    { prop: 'num', label: '字数', width: 200 },
  ],
  togglePage:2
});
</script>

```
:::

## 整页滚动
`mode`属性，设置翻页的模式，设置为`page`是整页滚动

:::demo
```vue
<template>
  <FScrollTable :data="state.data" :columns="state.columns" :mode="state.mode"></FScrollTable>
</template>
<script lang="ts" setup>
import { onMounted, ref, reactive, nextTick } from 'vue';
let state = reactive({
  data: [
    { name: '测试名称01', title: '测试标题01', num: 500, },
    { name: '测试名称02', title: '测试标题02', num: 1500, },
    { name: '测试名称03', title: '测试标题03', num: 2500, },
    { name: '测试名称04', title: '测试标题04', num: 100, },
    { name: '测试名称05', title: '测试标题05', num: 300, },
    { name: '测试名称06', title: '测试标题06', num: 400, },
    { name: '测试名称07', title: '测试标题07', num: 400, },
    { name: '测试名称08', title: '测试标题08', num: 700, },
    { name: '测试名称09', title: '测试标题09', num: 800, },
    { name: '测试名称10', title: '测试标题10', num: 900, },
    { name: '测试名称11', title: '测试标题11', num: 1000, },
    { name: '测试名称12', title: '测试标题12', num: 200, },
    { name: '测试名称13', title: '测试标题13', num: 200, },
    { name: '测试名称14', title: '测试标题14', num: 200, },
    { name: '测试名称15', title: '测试标题15', num: 500, },
  ],
  columns: [
    { prop: 'name', label: '名称', width: 220 },
    { prop: 'title', label: '标题', width: 210 },
    { prop: 'num', label: '字数', width: 200 },
  ],
  mode:'page'
});
</script>

```
:::

## 序号列
`type`属性，设置列类型，目前有序号列或文字滚动列，设置为`index`是序号列

:::demo
```vue
<template>
  <FScrollTable :data="state.data" :columns="state.columns" :mode="state.mode"></FScrollTable>
</template>
<script lang="ts" setup>
import { onMounted, ref, reactive, nextTick } from 'vue';
let state = reactive({
  data: [
    { name: '测试名称01', title: '测试标题01', num: 500, },
    { name: '测试名称02', title: '测试标题02', num: 1500, },
    { name: '测试名称03', title: '测试标题03', num: 2500, },
    { name: '测试名称04', title: '测试标题04', num: 100, },
    { name: '测试名称05', title: '测试标题05', num: 300, },
    { name: '测试名称06', title: '测试标题06', num: 400, },
    { name: '测试名称07', title: '测试标题07', num: 400, },
    { name: '测试名称08', title: '测试标题08', num: 700, },
    { name: '测试名称09', title: '测试标题09', num: 800, },
    { name: '测试名称10', title: '测试标题10', num: 900, },
    { name: '测试名称11', title: '测试标题11', num: 1000, },
    { name: '测试名称12', title: '测试标题12', num: 200, },
    { name: '测试名称13', title: '测试标题13', num: 200, },
    { name: '测试名称14', title: '测试标题14', num: 200, },
    { name: '测试名称15', title: '测试标题15', num: 500, },
  ],
  columns: [
    { label: '序号', width: 70,type:'index' },
    { prop: 'name', label: '名称', width: 170 },
    { prop: 'title', label: '标题', width: 170 },
    { prop: 'num', label: '字数', width: 170 },
  ],
  mode:'page'
});
</script>

```
:::

## 单元格文本滚动
`type`属性，设置列类型，目前有序号列或文字滚动列，设置为`scroll`是序号列,[scrollOption](#scrollOption)属性可单独配置该列文本滚动的方向，速度和模式，其中`overflow`模式是当文本超出单元格时才进行滚动

:::demo
```vue
<template>
  <FScrollTable :data="state.data" :columns="state.columns" :mode="state.mode" :wrap="state.wrap"></FScrollTable>
</template>
<script lang="ts" setup>
import { onMounted, ref, reactive, nextTick } from 'vue';
let state = reactive({
  data: [
    { name: '长名称测试01长名称测试01', title: '单元格文本滚动测试01', num: 500, },
    { name: '长名称测试02长名称测试02', title: '单元格文本滚动测试02', num: 1500, },
    { name: '长名称测试03长名称测试03', title: '测试标题03', num: 2500, },
    { name: '长名称测试04长名称测试04', title: '测试标题04', num: 100, },
    { name: '长名称测试05长名称测试05', title: '测试标题05', num: 300, },
    { name: '长名称测试06长名称测试06', title: '测试标题06', num: 400, },
    { name: '长名称测试07长名称测试07', title: '测试标题07', num: 400, },
    { name: '长名称测试08长名称测试08', title: '单元格文本滚动测试08', num: 700, },
    { name: '长名称测试09长名称测试09', title: '单元格文本滚动测试09', num: 800, },
    { name: '长名称测试10长名称测试10', title: '测试标题10', num: 900, },
    { name: '长名称测试11长名称测试11', title: '测试标题11', num: 1000, },
    { name: '长名称测试12长名称测试12', title: '测试标题12', num: 200, },
    { name: '长名称测试13长名称测试13', title: '测试标题13', num: 200, },
    { name: '长名称测试14长名称测试14', title: '单元格文本滚动测试14', num: 200, },
    { name: '长名称测试15长名称测试15', title: '单元格文本滚动测试15', num: 500, },
  ],
  columns: [
    { prop: 'name', label: '名称', width: 170,type:'scroll' },
    { prop: 'title', label: '标题', width: 170,type:'scroll',
      scrollOption:{speed:30, mode:'overflow'}
     },
    { prop: 'num', label: '字数', width: 170 },
  ],
  mode:'page',
  wrap:false
});
</script>

```
:::

## 自定义单元格style
`cellStyle`属性，接受函数或固定的Object，函数参数为row, rowIndex, column,columnIndex

:::demo
```vue

<template>
  <FScrollTable :data="state.data" :columns="state.columns" :mode="state.mode" :cellStyle="cellStyle" :stripe="false" :border="false"></FScrollTable>
</template>
<script lang="ts" setup>
import { onMounted, ref, reactive, nextTick } from 'vue';
let state = reactive({
  data: [
    { name: '测试名称01', title: '测试标题01', num: 500, },
    { name: '测试名称02', title: '测试标题02', num: 1500, },
    { name: '测试名称03', title: '测试标题03', num: 2500, },
    { name: '测试名称04', title: '测试标题04', num: 100, },
    { name: '测试名称05', title: '测试标题05', num: 300, },
    { name: '测试名称06', title: '测试标题06', num: 400, },
    { name: '测试名称07', title: '测试标题07', num: 400, },
    { name: '测试名称08', title: '测试标题08', num: 700, },
    { name: '测试名称09', title: '测试标题09', num: 800, },
    { name: '测试名称10', title: '测试标题10', num: 900, },
    { name: '测试名称11', title: '测试标题11', num: 1000, },
    { name: '测试名称12', title: '测试标题12', num: 200, },
    { name: '测试名称13', title: '测试标题13', num: 200, },
    { name: '测试名称14', title: '测试标题14', num: 200, },
    { name: '测试名称15', title: '测试标题15', num: 500, },
  ],
  columns: [
    { prop: 'name', label: '名称', width: 220 },
    { prop: 'title', label: '标题', width: 210 },
    { prop: 'num', label: '字数', width: 200 },
  ],
  mode:'page'
});

const cellStyle = ({row, rowIndex, column,columnIndex}) =>{
  if(row.num < 500 && column === 'num'){
    return {
      background:'#fb5607'
    }
  }

  if(row.num > 500 && column === 'num') {
    return {
      background:'#8ecae6'
    }
  }

  if(column === 'name'){
    return {
      background:'#48cae4'
    }
  } 
}
</script>

```
:::

## 使用插槽
插槽可以自定义列的显示内容，可组合其他组件使用<br>
通过`slot`可以获取到 row, column, $index 的数据，用法参考 demo。

:::demo
```vue

<template>
  <FScrollTable :data="state.data" :columns="state.columns" :mode="state.mode" :stripe="false">
    <template #nameAndCode="{params}">
      <div>
        <div>{{params.row.name}}</div>
        <div>{{params.row.code}}</div>
      </div>
    </template>
    <template #operation="{params}">
      <div class="edit-button-wrap">
        <div class="edit-button">编辑</div>
      </div>
    </template>
  </FScrollTable>
</template>
<script lang="ts" setup>
import { onMounted, ref, reactive, nextTick } from 'vue';
let state = reactive({
  data: [
    { name: '测试名称01', code:'FT-0001' , title: '测试标题01', num: 500, },
    { name: '测试名称02', code:'FT-0002' , title: '测试标题02', num: 1500, },
    { name: '测试名称03', code:'FT-0003' , title: '测试标题03', num: 2500, },
    { name: '测试名称04', code:'FT-0004' , title: '测试标题04', num: 100, },
    { name: '测试名称05', code:'FT-0005' , title: '测试标题05', num: 300, },
    { name: '测试名称06', code:'FT-0006' , title: '测试标题06', num: 400, },
    { name: '测试名称07', code:'FT-0007' , title: '测试标题07', num: 400, },
    { name: '测试名称08', code:'FT-0008' , title: '测试标题08', num: 700, },
    { name: '测试名称09', code:'FT-0009' , title: '测试标题09', num: 800, },
    { name: '测试名称10', code:'FT-0010' , title: '测试标题10', num: 900, },
    { name: '测试名称11', code:'FT-0011' , title: '测试标题11', num: 1000, },
    { name: '测试名称12', code:'FT-0012' , title: '测试标题12', num: 200, },
    { name: '测试名称13', code:'FT-0013' , title: '测试标题13', num: 200, },
    { name: '测试名称14', code:'FT-0014' , title: '测试标题14', num: 200, },
    { name: '测试名称15', code:'FT-0015' , title: '测试标题15', num: 500, },
  ],
  columns: [
    { prop: 'name', label: '名称/编号', width: 170, slot:'nameAndCode' },
    { prop: 'title', label: '标题', width: 150 },
    { prop: 'num', label: '字数', width: 150 },
    { label: '操作', width: 90, slot:'operation'},
  ],
  mode:'page'
});
</script>

<style>
.edit-button-wrap{
  display: flex;
  justify-content: center;
  align-items: center;
  height:100%;
}
.edit-button{
  padding:5px 15px;
  background: rgb(33, 150, 243);
  border-radius: 5px;
  cursor: pointer;
}
</style>

```
:::

## 鼠标事件
`mouseEvent`属性设置是否开启鼠标悬浮事件，开启后鼠标悬浮在表格上时，会自动停止翻页<br>
`cell-click`为单元格点击事件，参数为row, column, rowIndex, columnIndex, event
:::demo
```vue
<template>
  <FScrollTable :data="state.data" :columns="state.columns" :mode="state.mode" :toggleDur="3000" @cell-click="onCellClick"></FScrollTable>
</template>
<script lang="ts" setup>
import { onMounted, ref, reactive, nextTick } from 'vue';
let state = reactive({
  data: [
    { name: '测试名称01', title: '测试标题01', num: 500, },
    { name: '测试名称02', title: '测试标题02', num: 1500, },
    { name: '测试名称03', title: '测试标题03', num: 2500, },
    { name: '测试名称04', title: '测试标题04', num: 100, },
    { name: '测试名称05', title: '测试标题05', num: 300, },
    { name: '测试名称06', title: '测试标题06', num: 400, },
    { name: '测试名称07', title: '测试标题07', num: 400, },
    { name: '测试名称08', title: '测试标题08', num: 700, },
    { name: '测试名称09', title: '测试标题09', num: 800, },
    { name: '测试名称10', title: '测试标题10', num: 900, },
    { name: '测试名称11', title: '测试标题11', num: 1000, },
    { name: '测试名称12', title: '测试标题12', num: 200, },
    { name: '测试名称13', title: '测试标题13', num: 200, },
    { name: '测试名称14', title: '测试标题14', num: 200, },
    { name: '测试名称15', title: '测试标题15', num: 500, },
  ],
  columns: [
    { label: '序号', width: 70,type:'index' },
    { prop: 'name', label: '名称', width: 170 },
    { prop: 'title', label: '标题', width: 170 },
    { prop: 'num', label: '字数', width: 170 },
  ],
  mode:'page'
});

const onCellClick = (row, column, rowIndex, columnIndex, event)=>{
  console.log(row, column, rowIndex, columnIndex, event);
}
</script>

```
:::

<span id="props"></span>

## 参数
| 参数名         | 说明                                             | 类型                                                     | 可选值      | 默认值 |
| -------------- | ------------------------------------------------ | -------------------------------------------------------- | ----------- | ------ |
| name           | 表格的名称，当切换页完成后，会发出事件并带上name | string                                                   | -           |        |
| data           | 表格的数据                                       | any[]                                                    | -           | []     |
| columns        | 表格每列配置                                     | [Column[]](#column)                                      | -           |        |
| border         | 是否展示边框                                     | boolean                                                  | -           | true   |
| stripe         | 是否展示斑马纹                                   | boolean                                                  | -           | true   |
| wrap           | 文本是否允许换行                                 | boolean                                                  | -           | true   |
| align          | 文本对齐方式                                     | string                                                   | -           | center |
| cellStyle      | 单元格样式，接受函数或固定的Object               | function({ row, rowIndex, column,columnIndex }) / object | -           |        |
| maxHeight      | 表格最大高度                                     | string                                                   |             | auto   |
| mode           | 翻页模式                                         | string                                                   | single,page | single |
| pageSize       | 每页大小                                         | number                                                   |             | 5      |
| togglePage     | 每次翻页切换多少条数据                           | number                                                   |             | 1      |
| toggleDur      | 翻页间隔(毫米)                                   | number                                                   |             | 5000   |
| emptyEmitDur   | 空数据时翻页间隔(毫米)                           | number                                                   |             | 5000   |
| emitCondition  | 完整翻页完成多少次后发出事件                     | number                                                   |             | 2      |
| pageAnimateDur | 翻页动画时常(毫米)                               | number                                                   |             | 300    |
| mouseEvent     | 是否开启鼠标事件                                 | boolean                                                  |             | true   |



<span id="column"></span>

## Column属性
| 参数名       | 说明                             | 类型                          | 可选值 | 默认值 |
| ------------ | -------------------------------- | ----------------------------- | ------ | ------ |
| prop         | 该列数据的属性名                 | string                        | -      |        |
| label        | 列名                             | string                        | -      |        |
| width        | 列宽                             | number                        | -      |        |
| slot         | 插槽名                           | string                        | -      |        |
| type         | 列类型，目前有序号列或文字滚动列 | string                        | -      |        |
| scrollOption | 文字滚动列配置项                 | [ScrollOption](#scrollOption) | -      |        |
| align        | 文本对齐方式                     | string                        | -      | center |

<span id="scrollOption"></span>

## ScrollOption属性
| 参数名    | 说明                                                                       | 类型   | 可选值                                  | 默认值   |
| --------- | -------------------------------------------------------------------------- | ------ | --------------------------------------- | -------- |
| type      | 文本滚动的类型                                                             | string | default ,success ,warning ,info ,danger | default  |
| direction | 文本滚动的方向                                                             | string | up , down , left , right                |          |
| speed     | 文本滚动的速度                                                             | number |                                         | 60       |
| mode      | 滚动模式，infinite模式，无限滚动，overflow模式只会在文本超出范围时进行滚动 | string | infinite,overflow                       | infinite |

## 事件
| 事件名        | 说明                                                        | 参数 |
| ------------- | ----------------------------------------------------------- | ---- |
| handle-toggle | 当完整翻页的次数达到[emitCondition](#props)次时会触发该事件 | name |
| cell-click    | 点击单元格时会触发该事件                                    | row, column, rowIndex, columnIndex, event |



<style lang="scss" scoped>
.demo-scrollTable :deep(.source) {
  display: flex;
  justify-content: center;
  align-items: center;  
  background: #212121;
}
</style>
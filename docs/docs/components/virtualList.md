# VirtualList 虚拟列表
通过虚拟列表组件能够完成超大量数据渲染。
## 基础用法
让我们简单渲染一个拥有 1000 行 10 列的虚拟列表组件，来展示其极佳的性能。<br>
`bufferScale`:缓存区比例，在可视区域的上下方分别渲染额外的数据，适当增加缓冲区可以解决滚动过快出现白屏的情况<br>
`estimatedItemSize`:每行预估渲染高度,会在dom节点更新后，自动更新为真实高度<br>
`default插槽`:会返回当前行的数据和行号
:::demo
```vue
<template>
  <FVirtualList :data="state.data" :bufferScale="state.bufferScale" :estimatedItemSize="state.estimatedItemSize">
    <template #default="{ params }">
      <div class="table-list" style="width: 1550px;">
          <div class="table-list__item">{{params.$index}}</div>
          <div v-for="(column, index) in columns" class="table-list__item"
            :style="{ 'min-width': `${column.width}px`, 'max-width': `${column.width}px` }">{{ params.row[column.key] }}
          </div>
      </div>
    </template>
  </FVirtualList>
</template>
<script lang="ts" setup>
import { reactive } from 'vue';
let state = reactive<{
  data: any[],
  bufferScale: number,
  estimatedItemSize: number,
}>({
  data: [],
  bufferScale: 2,
  estimatedItemSize: 100
})

const generateColumns = (length = 10, prefix = 'column-') => {
  return Array.from({ length }).map((_, columnIndex) => ({
    key: `${prefix}${columnIndex}`,
    value: `Column ${columnIndex}`,
    width: 150
  }));
};

const generateData = (
  columns: ReturnType<typeof generateColumns>,
  length = 200,
  prefix = 'row-'
) => {
  return Array.from({ length }).map((_, rowIndex) => {
    return columns.reduce(
      (rowData, column, columnIndex) => {
        rowData[column.key] = `Row ${rowIndex} - Col ${columnIndex}`;
        return rowData;
      },
      {
        id: `${prefix}${rowIndex}`
      } as Record<string, unknown>);
  });
};

const columns = generateColumns(10);
state.data = generateData(columns, 1000);
</script>
<style>
.table-list{
  display: flex;
  border-bottom:1px solid rgb(235,238,245)
}
.table-list__item{
  padding:10px;
  box-sizing: border-box;
}
</style>
```
:::

## 开启列表自动滚动
`autoScroll`:是否开启列表自动滚动,鼠标悬浮会停止自动滚动<br>
`scrollRow`:每次滚动多少行<br>
`scrollDistance`:每次滚动的距离,优先级比`scrollRow`更高<br>
`scrollInterval`:滚动的时间间隔(毫秒)<br>
`stopTime`:滚动到底部的停留时间(毫秒),停留完后会重新回到顶部重新开始滚动<br>

:::demo
```vue
<template>
  <FVirtualList :autoScroll="true" :scrollRow="2" :scrollInterval="1000" :stopTime="10 * 1000" :data="state.data" :bufferScale="state.bufferScale" :estimatedItemSize="state.estimatedItemSize">
    <template #default="{ params }">
      <div class="table-list" style="width: 1550px;">
          <div class="table-list__item">{{params.$index}}</div>
          <div v-for="(column, index) in columns" class="table-list__item"
            :style="{ 'min-width': `${column.width}px`, 'max-width': `${column.width}px` }">{{ params.row[column.key] }}
          </div>
      </div>
    </template>
  </FVirtualList>
</template>
<script lang="ts" setup>
import { reactive } from 'vue';
let state = reactive<{
  data: any[],
  bufferScale: number,
  estimatedItemSize: number,
}>({
  data: [],
  bufferScale: 2,
  estimatedItemSize: 100
})

const generateColumns = (length = 10, prefix = 'column-') => {
  return Array.from({ length }).map((_, columnIndex) => ({
    key: `${prefix}${columnIndex}`,
    value: `Column ${columnIndex}`,
    width: 150
  }));
};

const generateData = (
  columns: ReturnType<typeof generateColumns>,
  length = 200,
  prefix = 'row-'
) => {
  return Array.from({ length }).map((_, rowIndex) => {
    return columns.reduce(
      (rowData, column, columnIndex) => {
        rowData[column.key] = `Row ${rowIndex} - Col ${columnIndex}`;
        return rowData;
      },
      {
        id: `${prefix}${rowIndex}`
      } as Record<string, unknown>);
  });
};

const columns = generateColumns(10);
state.data = generateData(columns, 100);
</script>
<style>
.table-list{
  display: flex;
  border-bottom:1px solid rgb(235,238,245)
}
.table-list__item{
  padding:10px;
  box-sizing: border-box;
}
</style>
```
:::

## 参数
| 参数名            | 说明                                                            | 类型    | 可选值 | 默认值    |
| ----------------- | --------------------------------------------------------------- | ------- | ------ | --------- |
| data              | 列表数据                                                        | any[]   | -      |           |
| estimatedItemSize | 每行预估渲染高度,会在dom节点更新后，自动更新为真实高度          | number  | -      |           |
| bufferScale       | 缓冲区的比例，适当增加缓冲区可以解决滚动过快出现白屏的情况      | number  | -      | 1         |
| height            | 列表高度                                                        | string  | -      | 100       |
| autoScroll        | 是否开启列表自动滚动                                            | boolean | -      | false     |
| scrollRow         | 每次滚动多少行                                                  | number  | -      | 1         |
| scrollDistance    | 每次滚动的距离，优先级会比`scrollRow`高                         | number  | -      |           |
| scrollInterval    | 滚动的时间间隔(毫秒)                                            | number  | -      | 100       |
| stopTime          | 滚动到底部后的停留时间(毫秒),停留完后会重新回到顶部重新开始滚动 | number  | -      | 10 * 1000 |




<style lang="scss" scoped>
.demo-virtualList :deep(.source) {
  height:380px;
}
</style>
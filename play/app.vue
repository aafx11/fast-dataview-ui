<template>
  <div>
    <div>123</div>
  </div>
  <div style="height: 400px;width: 600px;">
    <!-- v-slot="slotProps" -->
    <FVirtualList ref="ccc" :scrollRow="5" :scrollDistance="1" :data="state.data" :scrollInterval="50" 
      :bufferScale="1" :estimatedItemSize="100">
      <template #default="{ item }">
        <div class="table-list" style="width: 1500px;">
          <div v-for="(column, index) in columns" class="table-list__item"
            :style="{ 'min-width': `${column.width}px`, 'max-width': `${column.width}px` }">{{ item[column.key] }}</div>
        </div>
      </template>
    </FVirtualList>
    <!-- <VirtualList v-if="show" :estimatedItemSize="100" :listData="state.data" v-slot="slotProps">
      <Item :item="slotProps.item" />
    </VirtualList> -->
    <!-- {{ slotProps.item }} -->
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref, reactive, nextTick } from 'vue';
import VirtualList from './comp/VirtualList.vue';
import Item from './comp/Item.vue';
import { Column } from '../packages/components/scrollTable/src/types';
let show = ref(false);
let state = reactive<{
  data: any[];
  bufferScale: number;
  estimatedItemSize: number;
}>({
  data: [],
  bufferScale: 1,
  estimatedItemSize: 100
});

const ccc = ref<HTMLElement | null>(null);

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
state.data = generateData(columns, 200);

// onMounted(() => {
//   let tempData = [];
//   for (let i = 0; i < 1000; i++) {
//     tempData.push({
//       id: i
//     });
//   }
//   console.log();

//   state.data = tempData;
// });
</script>
<style lang="scss">
.table-list {
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom:1px solid rgb(235,238,245)
}
.table-list__item{
  padding:10px 10px;
  box-sizing: border-box;
}
body {
  margin: 0;
  overflow: hidden;
}

.demo-border01 :deep(.source) {
  background: #212121;

  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-top: 10px;
    cursor: pointer;
  }
}

.list {
  display: flex;

  .list-item {
    padding: 10px;
  }
}
</style>

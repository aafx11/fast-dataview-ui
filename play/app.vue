<template>
  <div>
    <fScreenContainer class="screen">
      <div style="margin: 50px;">
        <FScrollTable2 ref="scTable" v-bind="tableOption" max-height="500px" mode="page" :togglePage="2" :pageSize="3"
          name="scrollTable" :cellStyle="cellStyle" :pageAnimateDur="500" @handleToggle="onHandleToggle"
          @cellClick="onCellClick">
          <template #index="{ params }">
            <div>{{ params.row.index }}</div>
          </template>
        </FScrollTable2>
      </div>
      <button @click="swith">切换</button>
    </fScreenContainer>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref, reactive, nextTick } from 'vue';


let scTable = ref();

let data = [
  { msg: 'Bruce Lee', name: 1, index: '9' },
  { msg: 'Jackie Chan', name: 2, index: '9' },
  { msg: 'Chuck Norris', name: 3, index: '9' },
  { msg: 'Jet Li', name: 4, index: '9' },
  { msg: 'Kung Fury', name: 5, index: '9' },
  { msg: 'test', name: 6, index: '9' },
  { msg: 'test2', name: 7, index: '9' },
  { msg: 'test3', name: 8, index: '9' },
  { msg: 'test5', name: 9, index: '9999' },
  { msg: '7k7k', name: 9789, index: '10' }
];

let tableOption = reactive({
  // border:false,
  toggleDur: 10 * 1000,
  wrap: false,
  border: true,
  stripe: true,
  align: 'end',
  data: [
    // { msg: 'Bruce Lee', name: 1, index: '9' },
    // { msg: 'Jackie Chan', name: 2, index: '9' },
    // { msg: 'Chuck Norris', name: 3, index: '9' },
    // { msg: 'Jet Li', name: 4, index: '9' },
    // { msg: 'Kung Fury', name: 5, index: '9' },
    // { msg: 'test', name: 6, index: '9' },
    // { msg: 'test2', name: 7, index: '9' },
    // { msg: 'test3', name: 8, index: '9' },
    // { msg: 'test5', name: 9, index: '9999' }
  ],
  columns: [
    { prop: 'msg', label: '序号', width: 100, align: 'start', type: 'index' },
    { prop: 'msg', label: '信息', width: 100, align: 'start', type: 'scroll', scrollOption: { type: 'default', speed: 30, direction: 'right', mode: 'overflow' } },
    { prop: 'name', label: '名称', width: 200, align: 'start' },
    { prop: 'msg', label: 'index', width: 100 }
  ]
});
const swith = () => {
  console.log('表格', scTable.value);

  scTable.value.setPage(2);
  // tableOption.wrap = !tableOption.wrap;
  // tableOption.border = !tableOption.border
  // tableOption.stripe = !tableOption.stripe
};

const cellStyle = ({ row, column, rowIndex, columnIndex, }) => {
  // console.log(row, column, rowIndex, columnIndex,);
  if (row.msg == 'Bruce Lee' || row.msg == 'Jackie Chan') {
    return {
      background: 'blue'
    };
  }
};
const onCellClick = (a, b, c, d, e) => {
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
  console.log(e);
};
const onHandleToggle = (name: string) => {
  console.log('name', name);

};

setTimeout(() => {
  // tableOption.wrap = true
  // let grid = document.getElementById('grid')
  // grid!.style.gridTemplateRows = '0fr'
  tableOption.data = data as any;
}, 4000);
</script>
<style lang="scss">
html,
body {
  margin: 0;
  // overflow: hidden;
  background-color: #333;
  // background-color: #e8e8e8;
  // background-color: #212121;
  // background-color: gray;
}

.grid {
  display: grid;
  grid-template-rows: 1fr;
  width: 300px;
  gap: 5px;
  outline: 5px solid #001529;
  transition: 3s;
  animation: slide 3s alternate-reverse infinite;
  background-color: antiquewhite;
  overflow: hidden;

  span,
  div {
    font-size: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 0;
    text-align: center;
  }

  a {
    padding: 10px;
  }
}

// @keyframes slide {
//   0% {
//     grid-template-rows: 0fr;
//   }
//   100% {
//     grid-template-rows: 1fr;
//   }
// }
</style>
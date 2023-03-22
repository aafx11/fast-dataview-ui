<template>
  <div ref="scrollTable" class="f-scroll-table" :class="{ 'f-scroll-table--border': props.border }">
    <div class="f-scroll-table_header-wrapper">
      <table class="f-scroll-table_header" cellspacing="0" cellpadding="0" border="0">
        <colgroup>
          <col v-for="(item, index) in props.columns" :width="item.width" :key="index">
        </colgroup>
        <thead>
          <tr>
            <td v-for="(ele, j) in props.columns" class="f-scroll-table_cell" :style="{ 'max-width': ele.width }"
              :key="j">
              <div class="cell">{{ ele.label }}</div>
            </td>
          </tr>
        </thead>
      </table>
    </div>
    <div class="f-scroll-table_body-wrapper is-hidden-scrollbar" ref="bodyWrapper" :style="getBodyStyle">
      <table class="f-scroll-table_body" cellspacing="0" cellpadding="0" border="0">
        <colgroup>
          <col v-for="(item, index) in props.columns" :width="item.width" :key="index">
        </colgroup>
        <transition-group tag="tbody" name="fade" class="f-scroll-table_body-inner">
          <tr v-for="(ele, k) in getCurrData" :class="getRowClass(ele, k)" :key="ele">
            <td v-for="(col, l) in props.columns" class="f-scroll-table_cell is-hidden-scrollbar"
              :style="{ 'width': col.width, 'max-width': col.width }" :key="l">
              <!-- <div v-if="col.scroll">
              <marquee class="scroll-cell" :scrolldelay="cellScrollOption.scrolldelay"
                :direction="cellScrollOption.direction" :style="getCellStyle(ele, col.prop, k, l)">{{ ele[col.prop] }}
              </marquee>
            </div> -->
              <div v-if="col.slot" :class="getCellClass">
                <slot :name="col.slot" :params="{ row: ele, column: col.prop, $index: k }"></slot>
              </div>
              <div v-else-if="col.type == 'index'" :class="getCellClass" :style="getCellStyle(ele, col.prop, k, l)">
                {{ ele._index_ }}</div>
              <div v-else :class="getCellClass" :style="getCellStyle(ele, col.prop, k, l)">{{ ele[col.prop] }}</div>
            </td>
          </tr>
        </transition-group>
      </table>
    </div>
  </div>
</template>

<script lang="tsx" setup>
import {
  reactive,
  getCurrentInstance,
  watch,
} from 'vue';
import useUtils from './utils-helper';
import useStyle from './style-helper';

import type { Column, State, CellStyle } from './types';

export type TableProps = {
  name: string; // 表格名称，当切换页完成后，会发出事件并带上name
  data: any[]; // 表格数据
  columns: Column[]; // 表格每列配置 
  border?: boolean; // 是否开启边框
  stripe?: boolean; // 斑马纹
  wrap: boolean; // 是否换行
  maxHeight?: string; // 最大高度，超出最大高度就滚动
  cellStyle?: CellStyle; // 单元格样式
  mode?: string; // 切换页模式 single , page
  pageSize: number; // 每页表格行数
  togglePage: number; // 每次切换多少行
  toggleDur: number; // 切换页间隔时间
  emitCondition: number; // 切换完成多少次后发出事件
};

const props = withDefaults(defineProps<TableProps>(), {
  name: '',
  data: () => [],
  columns: () => [],
  border: true,
  stripe: true,
  wrap: true,
  maxHeight: 'auto',
  mode: 'single',
  pageSize: 5,
  togglePage: 1,
  toggleDur: 5 * 1000,
  emitCondition: 2,
});

const state = reactive<State>({
  tableData: [], // 所有表格数据
  currData: [], // 当前展示的数据
  pageData: [], // 分页数据
  currPage: 1, // 当前页
  toggleCount: 0, // 切换完成的次数
  intervalId: null, // 切换页面定时器
  isStopToggle: false, // 是否停止切换页面(当鼠标移动到表格时，停止切换)
  isAnimate: false,
  rowsHeight: []
});

const table = getCurrentInstance();


/* 操作 */
const {
  deepCloneArr,
  getCurrData,
  setPageData,
  setPageTimer,
  setCurrData,
  setToggleTimer,
  setPage,
  setIndex
} = useUtils(state, props, table!);

/* 样式 */
const {
  getRowClass,
  getCellClass,
  getBodyStyle,
  getRowStyle,
  getCellStyle
} = useStyle(state, props);

watch(() => props.data, (newVal) => {
  state.tableData = deepCloneArr(newVal);
  setIndex(state.tableData);
  setPageData();
  setPageTimer();
  setCurrData();
  setToggleTimer();
});

defineExpose({
  setPage
})

</script>
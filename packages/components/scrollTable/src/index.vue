<template>
  <div ref="scrollTable" class="f-scroll-table" :class="{ 'is-border': props.border }"
    :style="getTableStyle(props.columns)">
    <div class="f-scroll-table__head">
      <div v-for="(col, j) in props.columns" class="f-scroll-table__cell" :style="getExtraCellStyle(col)" :key="j">
        {{ col.label }}
      </div>
    </div>
    <div ref="scrollTable__body" class="f-scroll-table__content is-hidden-scrollbar" :style="getBodyStyle">
      <TransitionGroup tag="div" :css="false" @before-enter="onBeforeEnter" @enter="onEnter" @before-leave="beforeLeave"
        @leave="onLeave">
        <div v-for="(ele, k) in state.currData" class="f-scroll-table__row-wrap" :key="ele">
          <div :class="getRowClass(ele, k)">
            <div v-for="(col, l) in props.columns" class="f-scroll-table__cell"
              :style="[getExtraCellStyle(col), getCellStyle(ele, col.type === 'index' ? '_index_' : col.prop, k, l)]"
              :key="`${ele[col.prop]}${l}`" @click="(event) => handleCellClick(event, ele, ele[col.prop], k, l)">
              <div v-if="col.type === 'index'" :class="getCellClass">
                {{ ele._index_ || '' }}
              </div>
              <div v-else-if="col.type === 'scroll'">
                <ScrollText v-bind="col.scrollOption">
                  <div>{{ ele[col.prop] }}</div>
                </ScrollText>
              </div>
              <div v-else-if="col.slot" :class="getCellClass">
                <slot :name="col.slot" :params="{ row: ele, column: col.prop, $index: k }"></slot>
              </div>
              <div v-else :class="getCellClass">{{ ele[col.prop] }}</div>
            </div>
          </div>
        </div>
      </TransitionGroup>
    </div>
  </div>
</template>

<script lang="tsx" setup>
import {
  ref,
  reactive,
  getCurrentInstance,
  watch,
  nextTick,
  onBeforeUnmount,
  onMounted
} from 'vue';
import useUtils from './utils-helper';
import useEvents from './events-helper';
import useStyle from './style-helper';
import type { Column, State, CellStyle } from './types';
import { ScrollText } from "./../../scrollText";

export type TableProps = {
  name: string; // 表格名称，当切换页完成后，会发出事件并带上name
  data: any[]; // 表格数据
  columns: Column[]; // 表格每列配置 
  border?: boolean; // 是否开启边框
  stripe?: boolean; // 斑马纹
  wrap: boolean; // 是否换行
  align: string; // 文本对齐方式
  cellStyle?: CellStyle; // 单元格样式
  maxHeight?: string; // 最大高度，超出最大高度就滚动
  mode?: string; // 切换页模式 single , page
  pageSize: number; // 每页表格行数
  togglePage: number; // 每次切换多少行
  toggleDur: number; // 切换页间隔时间
  emptyEmitDur: number; // 空页发出事件的时间
  emitCondition: number; // 切换完成多少次后发出事件
  pageAnimateDur: number; // 切页动画时长
  mouseEvent: boolean; // 是否添加鼠标事件
};

const props = withDefaults(defineProps<TableProps>(), {
  name: '',
  data: () => [],
  columns: () => [],
  border: true,
  stripe: true,
  wrap: true,
  align: 'center',
  maxHeight: 'auto',
  mode: 'single',
  pageSize: 5,
  togglePage: 1,
  toggleDur: 5 * 1000,
  emptyEmitDur: 10 * 1000,
  emitCondition: 2,
  pageAnimateDur: 300,
  mouseEvent: true,
});

const state = reactive<State>({
  tableData: [], // 所有表格数据
  currData: [], // 当前展示的数据
  pageData: [], // 分页数据
  currPage: 1, // 当前页
  toggleCount: 0, // 切换完成的次数
  intervalId: null, // 切换页面定时器
  setTimeoutId: null, // 没有数据时,发送事件的定时器
  isStopToggle: false, // 是否停止切换页面(当鼠标移动到表格时，停止切换)
  isEmpty: false, // 当前没有数据
});

const table = getCurrentInstance();
const scrollTable__body = ref();

const {
  deepCloneArr,
  setCurrData,
  setPageInterval,
  setEmptyTimeout,
  clearTimer,
  setPage,
} = useUtils(state, props, table!);

defineEmits(['handle-toggle', 'cell-click']);
const {
  handleCellClick
} = useEvents(table!);

const {
  getRowClass,
  getCellClass,
  getTableStyle,
  getBodyStyle,
  getRowStyle,
  getExtraCellStyle,
  getCellStyle
} = useStyle(state, props);

const onBeforeEnter = (el: any) => {
  el.style.opacity = '0';
  el.style.gridTemplateRows = '0fr';
};

const onEnter = (el: any, done: () => void) => {
  el.offsetWidth;
  el.style.opacity = '1';
  el.style.gridTemplateRows = '1fr';
  done();
};

const beforeLeave = async (el: any) => {
  el.style.opacity = '1';
};
const onLeave = async (el: any, done: () => void) => {
  el.style.opacity = '0';
  el.style.gridTemplateRows = '0fr';
  await new Promise((resolve) => {
    setTimeout(() => {
      el.remove();
      resolve(true);
    }, props.pageAnimateDur);
  });
  done();
};

watch(() => props.data, (newVal) => {
  state.tableData = deepCloneArr(newVal);
  setCurrData();
},
  {
    immediate: true,
    deep: true
  }
);

onMounted(() => {
  if (props.mouseEvent) {
    scrollTable__body.value.addEventListener('mouseenter', () => {
      clearTimer(true, true);
      state.isStopToggle = true;
    });

    scrollTable__body.value.addEventListener('mouseleave', () => {
      state.isStopToggle = false;
      if (state.tableData.length) {
        setPageInterval();
      } else {
        setEmptyTimeout();
      }
    });
  }
});

onBeforeUnmount(() => {
  clearTimer();
});

defineExpose({
  setPage
})

</script>
<style>
.list-enter-from {
  opacity: 0;
  height: 0;
}

.list-enter-active {
  opacity: 1;
  height: auto;
  transition: all 3s;
}

.list-leave-active {
  opacity: 0;
  height: 0;
  transition: all 3s;
}
</style>
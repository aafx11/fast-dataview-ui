import type { PropType, ExtractPropTypes } from 'vue';
import type { TableData } from './interface';
export const Props = {
  // 列表数据
  data: {
    type: Array as PropType<TableData>,
    default: () => []
  },
  // 每行预估高度
  estimatedItemSize: {
    type: Number,
    required: true
  },
  // 缓冲区比例
  bufferScale: {
    type: Number,
    default: 1
  },
  // 列表高度
  height: {
    type: String,
    default: '100%'
  },
  // 是否开启滚动事件
  autoScroll: {
    type: Boolean,
    default: false
  },
  // 每次滚动多少行
  scrollRow: {
    type: Number,
    default: 1
  },
  // 每次滚动的距离
  scrollDistance: {
    type: Number
  },
  // 滚动间隔
  scrollInterval: {
    type: Number,
    default: 100
  },
  // 滚动到底部的停留时间
  stopTime: {
    type: Number,
    default: 10 * 1000
  },
} as const;

export type VirtualListProps = ExtractPropTypes<typeof Props>;
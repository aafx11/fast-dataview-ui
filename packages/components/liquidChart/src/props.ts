import type { PropType, ExtractPropTypes } from 'vue';
import { LiquidChartShape, LiquidChartWaterShape } from './interface';
export const liquidChartProps = {
  // 当前液位
  currLevel: {
    type: Number,
    default: 0,
  },
  // 最高液位
  maxLevel: {
    type: Number,
  },
  // 水位图的形状
  shape: {
    type: String as PropType<LiquidChartShape>,
    default: 'rect'
  },
  // 水的形状
  waterShape: {
    type: String as PropType<LiquidChartWaterShape>,
    default: 'wave'
  },
  // 边框宽度
  borderWidth: {
    type: Number,
    default: 10
  },
  // 边框颜色
  borderColors: {
    type: Array as PropType<Array<string>>,
    default: ['#294d99', '#294d99']
  }
} as const;

export type LiquidChartProps = ExtractPropTypes<typeof liquidChartProps>;
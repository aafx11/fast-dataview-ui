import type { PropType, ExtractPropTypes } from 'vue';
import { WaterChartShape } from './interface';
export const Props = {
  // 当前液位
  currLevel: {
    type: Number,
    default: 0,
  },
  // 最高液位
  maxLevel: {
    type: Number,
    require: true
  },
  // 水位图的形状
  shape: {
    type: String as PropType<WaterChartShape>,
    default: 'rect'
  },
  // 
} as const;

export type WaterLevelChartProps = ExtractPropTypes<typeof Props>;
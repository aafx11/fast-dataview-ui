import type { PropType, ExtractPropTypes } from 'vue';
import { LiquidChartShape, LiquidChartWaterShape, LiquidChartWaveDirection, LiquidChartLine, LiquidChartWave } from './interface';
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
  },
  // 是否展示中心圆球
  showCenterCircle: {
    type: Boolean,
    default: true
  },
  // 是否展示中心圆球
  centerCircleRadius: {
    type: Number,
    default: 50
  },
  // 波浪尺寸
  waveScale: {
    type: Number,
    default: 15
  },
  // 波浪前进方向
  waveDirection: {
    type: String as PropType<LiquidChartWaveDirection>,
    default: 'right'
  },
  // 波浪动画时长(毫秒)
  waveDuration: {
    type: Number,
    default: 10 * 1000
  },
  // 波浪颜色
  waveColors: {
    type: Array as PropType<Array<string>>,
    default: ['#4579e2', 'red']
  },
  // 横线配置
  lineOption: {
    type: Array as PropType<Array<LiquidChartLine>>,
    default: () => []
  },
  // 波浪配置
  waveOption: {
    type: Array as PropType<Array<LiquidChartWave>>,
    default: () => [{
      offestTop: 0,
      waveScale: 15,
      waveDirection: 'right',
      waveDuration: 10 * 1000,
      begin: 0,
      waveColor: '#4579e2'
    }]
  },
} as const;

export type LiquidChartProps = ExtractPropTypes<typeof liquidChartProps>;
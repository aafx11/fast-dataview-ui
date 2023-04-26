import type { PropType, ExtractPropTypes } from 'vue';
import { LiquidChartShape, LiquidChartWaterShape, LiquidChartLine, LiquidChartWave, LiquidChartText } from './interface';
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
  // 背景颜色
  background: {
    type: String,
    default: 'transparent'
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
  // 中心圆球半径
  centerCircleRadius: {
    type: Number,
    default: 50
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
  // 文本配置
  textOption: {
    type: Object as PropType<LiquidChartText>,
    default: () => ({
      show: true,
      offest: [0, 0],
      fontSize: 22,
      color: 'white',
    })
  }
} as const;

export type LiquidChartProps = ExtractPropTypes<typeof liquidChartProps>;
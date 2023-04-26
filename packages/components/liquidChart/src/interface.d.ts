export type { LiquidChartProps } from './props';

export type LiquidChartShape = 'rect' | 'round';

export type LiquidChartWaterShape = 'wave' | 'bubble';

export type LiquidChartWaveDirection = 'left' | 'right';

export type LiquidChartLine = {
  level: number; // 横线的液位
  color: string; // 横线的颜色
  text?: string; // 横线的文本
};

export type LiquidChartWave = {
  offestTop: number; // 波浪偏移
  waveScale: number; // 波浪尺寸
  waveDirection: LiquidChartWaveDirection; // 波浪前进方向
  waveDuration: number; // 波浪动画时长(毫秒)
  begin: number; // 动画延迟开始(毫秒)
  waveColor: string; // 波浪颜色
};

export type LiquidChartText = {
  show: boolean; // 是否展示文本
  offest: number[]; // 文本偏移
  fontSize: number; // 字体大小
  color: string; // 字体颜色
  text?: string; // 文本内容
};
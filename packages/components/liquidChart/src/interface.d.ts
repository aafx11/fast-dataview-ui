export type { LiquidChartProps } from './props';

export type LiquidChartShape = 'rect' | 'round';

export type LiquidChartWaterShape = 'wave' | 'bubble';

export type LiquidChartWaveDirection = 'left' | 'right';

export type LiquidChartLine = {
  level: number;
  color: string;
  text?: string;
};

export type LiquidChartWave = {
  offestTop: number = 0;
  waveScale: number = 15;
  waveDirection: LiquidChartWaveDirection = 'right';
  waveDuration: number = 10 * 1000;
  begin: number = 0;
  waveColor: string = '#4579e2'
}
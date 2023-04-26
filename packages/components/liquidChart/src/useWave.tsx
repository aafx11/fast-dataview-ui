import type { UseNamespace } from '@fast-dataview-ui/hooks/useNamespace';
import type { LiquidChartWave } from './interface';
import { extend } from '@fast-dataview-ui/utils/index';
export const useWave = (ns: UseNamespace, waveOption: LiquidChartWave, width: number, height: number, currPercent: number): JSX.Element | void => {
  const defaultOption = {
    offestTop: 0,
    waveScale: 15,
    waveDirection: 'right',
    waveDuration: 10 * 1000,
    begin: 0,
    waveColor: '#4579e2'
  };
  let wave: LiquidChartWave = extend({}, defaultOption, waveOption);
  let ratio = wave.waveScale;
  let waveHeight = 4 * ratio;
  let waveWight = 10 * ratio;

  let num = Math.ceil((width / waveWight) || 0);

  if (!num || !currPercent) {
    return;
  }

  let totalHeight = height - waveHeight;
  let waveTop = totalHeight * (1 - currPercent);

  let controlpointX1 = 3 * ratio;
  let controlpointY1 = 1 * ratio;
  let controlpointX2 = 8 * ratio;
  let controlpointY2 = 4 * ratio;

  let firstUpWave = `m 0 ${waveTop + wave.offestTop} c ${controlpointX1} ${-controlpointY1}, ${controlpointX2} ${-controlpointY2}, ${waveWight} 0`;
  let upWave = `s${controlpointX2} ${-controlpointY2}, ${waveWight} 0`;
  let bottomWave = `s ${waveWight - controlpointX1} ${controlpointY1}, ${waveWight} 0`;
  let tail = `v ${totalHeight * currPercent + waveHeight} H 0`;

  let waveList = ``;
  for (let i = 0; i < num - 1; i++) {
    waveList = `${waveList}${upWave}${bottomWave}`;
  }
  let resultPath = `${firstUpWave}${bottomWave}${waveList}${tail}`;

  let from = wave.waveDirection === 'left' ? '0 0' : `${-(2 * waveWight)} 0`;
  let to = wave.waveDirection === 'left' ? `${-(2 * waveWight)} 0` : '0 0';

  return (
    <path class={ns.e('wave')} d={resultPath} fill={wave.waveColor}>
      <animateTransform attributeName="transform" attributeType="XML" type="translate"
        begin={wave.begin ? `${wave.begin}ms` : 0}
        from={from} to={to} dur={`${wave.waveDuration}ms`}
        repeatCount="indefinite" />
    </path>
  );
};
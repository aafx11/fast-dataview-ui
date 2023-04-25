import type { SetupContext } from 'vue';
import type { LiquidChartLine, LiquidChartWave } from './interface.d';
import { liquidChartProps, LiquidChartProps } from './props';
import { ref, reactive, computed, watch, onBeforeMount, onMounted, onUpdated, onBeforeUnmount, nextTick, defineComponent } from 'vue';
import { useNamespace } from '@fast-dataview-ui/hooks/useNamespace';
import useResizeListener from '@fast-dataview-ui/hooks/useResizeListener';

export default defineComponent({
  name: 'FLiquidChart',
  props: liquidChartProps,
  setup(props: LiquidChartProps, ctx: SetupContext) {
    const liquidChartRef = ref();
    const ns = useNamespace('liquid-chart');

    const { width, height, initWH } = useResizeListener(liquidChartRef);

    const renderRectContainer = () => {
      let borderWidth = props.borderWidth / 2;
      let point1 = `${borderWidth},0`;
      let point2 = `${borderWidth},${height.value - borderWidth}`;
      let point3 = `${width.value - borderWidth},${height.value - borderWidth}`;
      let point4 = `${width.value - borderWidth},0`;
      return (
        <svg class={ns.e('rect-wrap')}>
          {Array.from({ length: 4 }).map((_, index) => (
            <path class={ns.e('top-border')} d={`M ${borderWidth},${0 + index * 4} ${width.value - borderWidth},${0 + index * 4}`}
              fill="none" stroke-dasharray={"20 10"}
              stroke={props.borderColors[1]} stroke-width={1}></path>
          ))}
          <path d={`M ${point1} ${point2} ${point3} ${point4}`} fill="none" stroke={props.borderColors[0]} stroke-width={props.borderWidth}></path>
        </svg>
      );
    };

    let currPercent = computed(() => {
      let result = 0.5;
      if (props.maxLevel) {
        result = props.currLevel / props.maxLevel;
        return result > 1 ? 1 : result;
      }
      return result;
    });

    const renderWaves = () => {
      const ratio = props.waveScale;
      let waveHeight = 4 * ratio;
      let totalHeight = height.value - waveHeight;
      let waveTop = totalHeight * (1 - currPercent.value);

      let waveWight = 10 * ratio;
      let controlpointX1 = 3 * ratio;
      let controlpointY1 = 1 * ratio;
      let controlpointX2 = 8 * ratio;
      let controlpointY2 = 4 * ratio;

      let num = Math.ceil((width.value / waveWight) || 0);

      let upWave = `s${controlpointX2} ${-controlpointY2}, ${waveWight} 0`;
      let bottomWave = `s ${waveWight - controlpointX1} ${controlpointY1}, ${waveWight} 0`;
      let tail = `v ${totalHeight * currPercent.value + waveHeight} H 0`;

      if (!num || !currPercent.value) {
        return
      }


      let waveList = ``;
      for (let i = 0; i < num - 1; i++) {
        waveList = `${waveList}${upWave}${bottomWave}`;
      }

      const getWaveStyle = computed(() => {
        return {
          '--waveDuration': `${props.waveDuration}ms`,
          '--animation-length': `${-(2 * waveWight)}px`,
          '--animation-direction': props.waveDirection === 'right' ? 'reverse' : 'normal',
          'left': `${props.borderWidth}px`,
          'width': `calc(100% - ${props.borderWidth * 2}px)`,
          'height': `calc(100% - ${props.borderWidth}px)`
        };
      });
      const renderWave = (wave: LiquidChartWave) => {

        let getWaveStyles = computed(() => {
          return {
            'left': `${props.borderWidth}px`,
            'width': `calc(100% - ${props.borderWidth * 2}px)`,
            'height': `calc(100% - ${props.borderWidth}px)`
          }
        })
        let firstUpWave = `m 0 ${waveTop + wave.offestTop} c ${controlpointX1} ${-controlpointY1}, ${controlpointX2} ${-controlpointY2}, ${waveWight} 0`;
        let resultPath = `${firstUpWave}${bottomWave}${waveList}${tail}`;
        let from = wave.waveDirection === 'left' ? '0 0' : `${-(2 * waveWight)} 0`
        let to = wave.waveDirection === 'left' ? `${-(2 * waveWight)} 0` : '0 0'
        return (
          <path class={ns.e('wave')} style={{ ...getWaveStyles.value }} d={resultPath} fill={wave.waveColor}>
            <animateTransform attributeName="transform" attributeType="XML" type="translate"
              begin={wave.begin ? `${wave.begin}ms` : 0}
              from={from} to={to} dur={`${wave.waveDuration}ms`}
              repeatCount="indefinite" />
          </path>
        )
      }
      return (
        <svg class={ns.e('wave-wrap')} style={{ ...getWaveStyle.value }}>
          {props.waveOption.map((wave: LiquidChartWave) => (
            renderWave(wave)
          ))}
          {/* <path class={ns.e('wave')} d={resultPath} fill={props.waveColors[0]}></path> */}
          {/* {renderCircle()} */}
          {renderLine()}
        </svg>
      );

    };

    const renderCircle = () => {
      if (props.showCenterCircle) {
        return (
          <circle class={ns.e('center-circle')} cx={width.value / 2} cy={height.value / 2} r={props.centerCircleRadius}></circle>
        );
      }
    };

    const renderLine = () => {
      if (props.maxLevel) {
        return props.lineOption.map((line: LiquidChartLine, index: number) => {
          let top = (1 - line.level / props.maxLevel!) * height.value
          let realText = line.text ? line.text.replace('{level}', String(line.level)) : line.level

          return (
            <g>
              <path class={ns.e('line')} d={`M 0 ${top},H ${width.value}`} fill="none" stroke-dasharray={"20 10"}
                stroke={line.color} stroke-width={1}></path>
              <text class={ns.e('line-text')} x={width.value / 2} y={top} fill={line.color}>
                {realText}
              </text>
            </g>
          )
        })
      }
    }
    ctx.expose({
      resize: initWH,
    });

    return () => (
      <div ref={liquidChartRef} class={ns.b()}>
        {props.shape === 'rect' ? renderRectContainer() : <div></div>}
        {props.waterShape === 'wave' ? renderWaves() : <div></div>}
        {/* {renderCircle()} */}
      </div >
    );
  },
})



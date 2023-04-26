import type { SetupContext } from 'vue';
import type { LiquidChartLine, LiquidChartWave } from './interface.d';
import { liquidChartProps, LiquidChartProps } from './props';
import { ref, computed, defineComponent } from 'vue';
import { useWave } from './useWave';
import { useNamespace } from '@fast-dataview-ui/hooks/useNamespace';
import useResizeListener from '@fast-dataview-ui/hooks/useResizeListener';
import { extend } from '@fast-dataview-ui/utils';

export default defineComponent({
  name: 'FLiquidChart',
  props: liquidChartProps,
  setup(props: LiquidChartProps, ctx: SetupContext) {
    const liquidChartRef = ref();
    const ns = useNamespace('liquid-chart');

    const { width, height, initWH } = useResizeListener(liquidChartRef);

    // 渲染矩形容器
    const renderRectContainer = () => {
      let borderWidth = props.borderWidth / 2;
      let point1 = `${borderWidth},0`;
      let point2 = `${borderWidth},${height.value - borderWidth}`;
      let point3 = `${width.value - borderWidth},${height.value - borderWidth}`;
      let point4 = `${width.value - borderWidth},0`;
      return (
        <svg class={ns.e('rect-wrap')} style={{ background: props.background }}>
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
      if (!props.currLevel) {
        result = 0;
      }
      if (props.maxLevel) {
        result = props.currLevel / props.maxLevel;
        return result > 1 ? 1 : result;
      }
      return result;
    });

    const getWaveWrapStyle = computed(() => {
      return {
        'left': `${props.borderWidth}px`,
        'width': `calc(100% - ${props.borderWidth * 2}px)`,
        'height': `calc(100% - ${props.borderWidth}px)`
      };
    });

    // 渲染波浪
    const renderWaves = () => {
      return (
        <svg class={ns.e('wave-wrap')} style={{ ...getWaveWrapStyle.value }}>
          {props.waveOption.map((wave: LiquidChartWave) => (
            useWave(ns, wave, width.value, height.value, currPercent.value)
          ))}
          {/* {renderCircle()} */}
          {renderLine()}
        </svg>
      );

    };

    // 渲染中心圆
    const renderCircle = () => {
      if (props.showCenterCircle) {
        return (
          <circle class={ns.e('center-circle')} cx={width.value / 2} cy={height.value / 2} r={props.centerCircleRadius}></circle>
        );
      }
    };

    // 渲染中心文本
    const renderText = () => {
      const defaultOption = {
        show: true,
        offest: [0, 0],
        fontSize: 18,
        color: 'white',
      };
      let textOption = extend({}, defaultOption, props.textOption);

      if (!textOption.show) {
        return;
      }
      let text = textOption.text;
      let realText = text
        ? text
          .replace('{level}', String(props.currLevel))
          .replace('{percent}', String((currPercent.value * 100).toFixed(2)))
        : props.currLevel;

      let getTextStyle = computed(() => {
        return {
          color: textOption.color,
          fontSize: `${textOption.fontSize}px`,
          transform: `translate(calc(-50% + ${textOption.offest[0]}px), calc(-50% + ${textOption.offest[1]}px))`
        };
      });

      return (
        <text class={ns.e('center-text')} style={{ ...getTextStyle.value }}>{realText}</text>
      );
    };

    // 渲染线
    const renderLine = () => {
      if (props.maxLevel) {
        return props.lineOption.map((line: LiquidChartLine) => {
          let top = (1 - line.level / props.maxLevel!) * height.value;
          let realText = line.text ? line.text.replace('{level}', String(line.level)) : line.level;

          return (
            <>
              <path class={ns.e('line')} d={`M 0 ${top},H ${width.value}`} fill="none" stroke-dasharray={"20 10"}
                stroke={line.color} stroke-width={1}></path>
              <text class={ns.e('line-text')} x={width.value / 2} y={top} fill={line.color}>
                {realText}
              </text>
            </>
          );
        });
      }
    };

    ctx.expose({
      resize: initWH,
    });


    return () => (
      <div ref={liquidChartRef} class={ns.b()}>
        {props.shape === 'rect' ? renderRectContainer() : <div></div>}
        {props.waterShape === 'wave' ? renderWaves() : <div></div>}
        {/* {renderCircle()} */}
        {renderText()}
      </div >
    );
  },
})



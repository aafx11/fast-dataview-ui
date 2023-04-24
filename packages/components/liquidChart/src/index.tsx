import type { SetupContext } from 'vue';
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

    let currPercent = computed(() => {
      if (props.maxLevel) {
        return props.currLevel / props.maxLevel;
      }
      return 0.5;
    });

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
          {/* {props.waterShape === 'wave' ? renderWave() : <div></div>} */}
        </svg>
      );
    };

    const renderWave = () => {
      const waveHeight = 25
      const waveWight = 50
      let poolHeight = height.value - waveHeight;
      let waveTop = poolHeight * (1 - currPercent.value);
      console.log('curr', currPercent.value);

      return (
        <svg class={ns.e('wave-wrap')}>
          <defs>
            <path id="wave" d={`M0,${waveTop} c30 0 58 -18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z`} />

          </defs>
          {/* <path d="M0 150 C30 135,60 135, 90 150 S150 165,180 150  S240 135,270 150 V300 H0 Z" fill="rgba(0, 0, 50, .1)" stroke-width="1" /> */}
          <path d="M 80 150 C 100 100, 150 100 ,170 150 s"
            stroke-width="1" stroke="black" fill="transparent" />
          {/* <path d="M100 100 C120 120,160 120,180 100" stroke-width="1" stroke="black" fill="transparent" /> */}
          {/* <path d="M0 150  C30 135,60 135, 90 150 S150 165,180 150  S240 135,270 150 V300 H0 Z" fill="rgba(0, 0, 50, .1)" stroke-width="1" /> */}
          <path d="M0 150  C30 135,60 135, 90 150 s90 30, 130 0 s50 -30,100 0 s90 30, 130 0 s50 -30,100 0 V300 H0 Z" fill="rgba(0, 0, 50, .1)" stroke-width="1" >
          {/* <animateTransform attributeName="transform" attributeType="XML" type="translate" from="0 0" to="500 0" dur="10s" repeatCount="indefinite" /> */}
          
          </path>


          {/* <path d={`C 0,${waveTop} `}></path> */}
          {/* <path fill="none" stroke="red"
            d={`M 0,${waveTop} C 50,90 75,10 100,10 S 120,90 140,90`} /> */}
          {/* <path fill="#4579e2" stroke="#4579e2"
            d={`M 0,${waveTop + 100} Q 0,${waveTop + 20} 50,${waveTop - 20} t 130,0 130,0 130,0 130,0 130,0 130,0 130,0 130,0`} >
            <animateTransform attributeName="transform" attributeType="XML" type="translate" from="-500 0" to="85 0" dur="10s" repeatCount="indefinite" />

          </path> */}
          {/* <animateTransform attributeName="transform" attributeType="XML" type="translate" from="-90 0" to="85 0" dur="3.2s" repeatCount="indefinite" /> */}
          {/* <use class="wave" href="#wave" fill="#4579e2" x="0" y="0"></use> */}
          {/* <rect y={waveTop} width={width.value} height={poolHeight - waveTop + waveHeight} fill="#4579e2"></rect> */}
        </svg>
      );
    };

    ctx.expose({
      resize: initWH,
    });

    return () => (
      <div ref={liquidChartRef} class={ns.b()}>
        {props.waterShape === 'wave' ? renderWave() : <div></div>}
        {props.shape === 'rect' ? renderRectContainer() : <div></div>}
      </div >
    );
  },
})



import { defineComponent, ref, computed, renderSlot, onMounted, inject } from 'vue';
import useResizeListener from '@fast-dataview-ui/hooks/useResizeListener';
import type { BorderBoxProps } from '@fast-dataview-ui/types/BorderProps';
import { borderBoxProps } from '@fast-dataview-ui/types/BorderProps';
import { extend, isNotEmptyArray, toZero } from '@fast-dataview-ui/utils/index';
export default defineComponent({
  name: 'FBorderBox2',
  props: borderBoxProps,
  setup(props: BorderBoxProps, { slots }) {
    const borderBox2 = ref<HTMLElement | null>(null);

    const defaultColor = ['white'];

    let realColor = computed(() => {
      if (isNotEmptyArray(props.color)) {
        return extend(defaultColor, props.color);
      }
      return defaultColor;
    });

    const { width, height, initWH } = useResizeListener(borderBox2);

    return {
      width,
      height,
      initWH,
      borderBox2,
      defaultColor,
      realColor,
    };
  },
  render() {
    const { $slots, width, height, backgroundColor, strokeWidth, realColor, duration } = this;

    let borderWidth = strokeWidth || 3;

    let x1 = toZero(borderWidth);
    let y1 = toZero(borderWidth);

    let x2 = toZero(width - borderWidth);
    let y2 = toZero(borderWidth);

    let x3 = toZero(width - borderWidth);
    let y3 = toZero(height - borderWidth);

    let x4 = toZero(borderWidth);
    let y4 = toZero(height - borderWidth);


    return (
      <div ref="borderBox2" class="f-border-box-2">
        <svg class="f-svg-container" width={width} height={height}>
          <path class="f-container-path" style={{'--duration':`${duration}s`}} stroke={realColor[0]} stroke-width={borderWidth} fill={backgroundColor} d={`M ${x1} ${y1}, L ${x2} ${y2}, L ${x3} ${y3}, L ${x4} ${y4}, Z`}></path>
        </svg>
        <div class="f-border-box-content">
          {renderSlot($slots, 'default')}
        </div>
      </div >
    );
  }
});
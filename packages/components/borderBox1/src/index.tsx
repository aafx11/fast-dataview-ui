import type { SetupContext } from "vue";
import { defineComponent, ref, computed, renderSlot } from 'vue';
import useResizeListener from '@fast-dataview-ui/hooks/useResizeListener';
import type { BorderBoxProps } from '@fast-dataview-ui/types/BorderProps';
import { borderBoxProps } from '@fast-dataview-ui/types/BorderProps';
import { extend, isNotEmptyArray, toZero } from '@fast-dataview-ui/utils/index';
export default defineComponent({
  name: 'FBorderBox1',
  props: borderBoxProps,
  setup(props: BorderBoxProps, ctx: SetupContext) {
    const borderBox1 = ref<HTMLElement | null>(null);

    const defaultColor = ['rgba(46, 96, 153,0.85)', 'rgba(71, 196, 245,0.85)'];

    let realColor = computed(() => {
      if (isNotEmptyArray(props.color)) {
        return extend(defaultColor, props.color);
      }
      return defaultColor;
    });

    const { width, height, initWH } = useResizeListener(borderBox1);

    ctx.expose({
      resize: initWH,
    });

    return {
      width,
      height,
      initWH,
      borderBox1,
      defaultColor,
      realColor,
    };
  },
  render() {
    const { $slots, width: fullWidth, height: fullHeight, backgroundColor, strokeWidth: stWidth, realColor, title } = this;

    const ANGLE = 20;
    let strokeWidth = stWidth || 2;
    let width = toZero(fullWidth - strokeWidth - 2);
    let height = toZero(fullHeight - strokeWidth - 2);
    return (
      <div ref="borderBox1" class="f-border-box-1">
        <svg class="f-svg-container" width={width} height={height}>
          {/* 最外层边框 */}
          <polygon fill={backgroundColor} stroke={realColor[0]} stroke-width={strokeWidth} points={`
            ${ANGLE} ${strokeWidth}, ${width - ANGLE} ${strokeWidth}, ${width - strokeWidth} ${ANGLE}, ${width - strokeWidth} ${height - ANGLE}, ${width - ANGLE} ${height},
            ${ANGLE} ${height}, ${strokeWidth} ${height - ANGLE}, ${strokeWidth} ${ANGLE}
          `}>
          </polygon>

          {/* 左上，右下横线 */}
          <polyline stroke={realColor[1]} stroke-width={strokeWidth + 1} points={`
            ${ANGLE - 8} 0,0 ${ANGLE - 8}
          `}>
          </polyline>

          <polyline stroke={realColor[1]} stroke-width={strokeWidth + 1} points={`
            ${width} ${height - ANGLE + 8}, ${width - ANGLE + 8 + strokeWidth} ${height}
          `}>
          </polyline>
          {/* 四个边角 */}
          <polyline fill="none" stroke={realColor[1]} stroke-width={strokeWidth + 2} points={`
            ${strokeWidth} ${ANGLE + 15}, ${strokeWidth} ${ANGLE}, ${ANGLE} ${strokeWidth} , ${ANGLE + 15} ${strokeWidth}
          `}></polyline>

          <polyline fill="none" stroke={realColor[1]} stroke-width={strokeWidth + 2} points={`
           ${ANGLE + 15} ${height}, ${ANGLE}  ${height}, ${strokeWidth} ${height - ANGLE}, ${strokeWidth} ${height - ANGLE - 15}
          `}></polyline>

          <polyline fill="none" stroke={realColor[1]} stroke-width={strokeWidth + 2} points={`
           ${width - ANGLE - 15} ${strokeWidth}, ${width - ANGLE} ${strokeWidth}, ${width - strokeWidth} ${ANGLE}, ${width - strokeWidth} ${ANGLE + 15}
          `}></polyline>

          <polyline fill="none" stroke={realColor[1]} stroke-width={strokeWidth + 2} points={`
          ${width - ANGLE - 15} ${height}, ${width - ANGLE} ${height}, ${width - strokeWidth} ${height - ANGLE}, ${width - strokeWidth} ${height - ANGLE - 15}
          `}></polyline>
          {/* 标题蒙层 */}
          {title ? <polygon fill="rgba(33, 173, 238,0.1)" points={`
            ${ANGLE} ${strokeWidth}, ${width - ANGLE} ${strokeWidth}, ${width - strokeWidth} ${ANGLE}, ${width - strokeWidth} ${ANGLE + 15}, ${strokeWidth} ${ANGLE + 15},
            ${strokeWidth} ${ANGLE}
          `}></polygon> : null}
          {/* 标题 */}
          {title ? <text x="30" y="25" font-size="16" font-weight="bold" fill="#279fc7">{title}</text> : null}
        </svg>
        <div class="f-border-box-content">
          {renderSlot($slots, 'default')}
        </div>
      </div >
    );
  }
});
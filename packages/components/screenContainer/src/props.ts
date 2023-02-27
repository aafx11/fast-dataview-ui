import type { ExtractPropTypes } from 'vue';

// 按宽或高缩放，防抖延迟时间，修改外层和内层样式
export const containerProps = {
  width: { type: Number, default: 1920 },
  height: { type: Number, default: 1080 },
  onAfterResize: { type: Function, default: () => { } }
}

export type ContainerProps = ExtractPropTypes<typeof containerProps>
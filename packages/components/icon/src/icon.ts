import type { ExtractPropTypes } from 'vue';

export const iconProps = {
  size: {
    type: Number
  },
  color: {
    type: String
  }
}

export type iconProps = ExtractPropTypes<typeof iconProps> // 导出iconProps的类型
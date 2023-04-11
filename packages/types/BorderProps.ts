import type { ExtractPropTypes, PropType } from 'vue';

export const borderBoxProps = {
  color: {
    type: Array as PropType<Array<string>>,
    default: () => ([]),
  },
  backgroundColor: {
    type: String,
    default: 'transparent',
  },
  strokeWidth: {
    type: Number,
  },
  title: {
    type: String,
    default: ''
  },
  duration: {
    type: Number,
    default: 2
  },
  strokeDasharray:{
    type: String,
    default: '300 300'
  }
};

export type BorderBoxProps = ExtractPropTypes<typeof borderBoxProps>;

import type { ExtractPropTypes, PropType } from 'vue';

export const loadingProps = {
  width: {
    type: String,
    default: '100px'
  },
  height: {
    type: String,
    default: '100px'
  },
  color: {
    type: Array as PropType<Array<string>>,
    default: () => ([]),
  },
  text: {
    type: String,
    default: ''
  },
  duration: {
    type: Number,
  },
};

export type LoadingProps = ExtractPropTypes<typeof loadingProps>;

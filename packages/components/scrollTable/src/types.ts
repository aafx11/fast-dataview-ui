import type {
  CSSProperties,
} from 'vue';

export type Column = {
  prop: string;
  label: string;
  width: number;
  slot?: string;
  type?: 'index' | 'scroll';
  scrollOption?: ScrollOption;
  align?: string;
};

type ScrollOption = {
  type?: 'default' | 'success' | 'warning' | 'info' | 'danger';
  direction?: 'up' | 'down' | 'left' | 'right';
  speed?: number;
  mode?: 'infinite' | 'overflow';
};

export type State = {
  tableData: any[];
  currData: any[];
  pageData: any[];
  currPage: number;
  intervalId: ReturnType<typeof setInterval> | null;
  setTimeoutId: ReturnType<typeof setTimeout> | null;
  toggleCount: number;
  isStopToggle: boolean;
  isEmpty: boolean;
};


export type CellStyle =
  | CSSProperties
  | ((data: {
    row: any;
    rowIndex: number;
    column: string;
    columnIndex: number;
  }) => CSSProperties);



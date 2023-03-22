import type {
  CSSProperties,
} from 'vue';

export type Column = {
  prop: string;
  label: string;
  width: string;
  slot?: string;
  type?: string;
};

export type State = {
  tableData: any[];
  currData: any[];
  pageData: any[];
  currPage: number;
  intervalId: ReturnType<typeof setInterval> | null;
  toggleCount: number;
  isStopToggle: Boolean;
  isAnimate: Boolean;
  rowsHeight:string[]
};


export type CellStyle =
  | CSSProperties
  | ((data: {
    row: any;
    rowIndex: number;
    column: string;
    columnIndex: number;
  }) => CSSProperties);



import { computed } from "vue";
import type { State } from './types';
import type { TableProps } from './index.vue';

function useStyle(state: State, props: TableProps) {
  const getRowClass = computed(() => {
    return function (row: any, rowIndex: number) {
      const classes = ['f-scroll-table_row'];

      if (props.stripe && rowIndex % 2 === 1) {
        classes.push('f-scroll-table_row--striped');
      }

      if (props.wrap) {
        classes.push('f-scroll-table_row--nowrap');
      }

      return classes;
    };
  });

  const getCellClass = computed(() => {
    const classes = ['cell'];

    if (!props.wrap) {
      classes.push('cell--nowrap');
    }

    return classes;
  });

  const getBodyStyle = computed(() => {
    return {
      // 'height': props.maxHeight || 'auto',
      // 'max-height': props.maxHeight || 'auto'
    };
  });

  const getRowStyle = computed(() => {
    return function (i: number) {
      return {
        // 'height': state.rowsHeight[i] || 'auto',
        'max-height': state.rowsHeight[i] || 'auto',
      };
    };
  });

  const getCellStyle = computed(() => {
    return function (row: any, column: string, rowIndex: number, columnIndex: number) {

      if (typeof props.cellStyle == 'function') {
        return props.cellStyle.call(null, {
          rowIndex,
          columnIndex,
          row,
          column
        });
      }

      return props.cellStyle || {};
    };
  });

  return {
    getRowClass,
    getCellClass,
    getBodyStyle,
    getRowStyle,
    getCellStyle
  };
}



export default useStyle; 
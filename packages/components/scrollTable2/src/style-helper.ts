import type { CSSProperties } from 'vue';
import type { Column, State } from './types';
import type { TableProps } from './index.vue';
import { computed } from "vue";

function useStyle(state: State, props: TableProps) {

  const getRowClass = computed(() => {
    return function (row: any, rowIndex: number) {
      const classes = ['f-scroll-table__row'];

      if (props.stripe && rowIndex % 2 === 1) {
        classes.push('f-scroll-table_row--striped');
      }

      // if (props.wrap) {
      //   classes.push('f-scroll-table_row--nowrap');
      // }


      return classes;
    };
  });



  const getCellClass = computed(() => {
    const classes = ['cell'];

    if (!props.wrap) {
      classes.push('cell--nowrap');
    } else {
      classes.push('cell--wrap');
    }

    return classes;
  });

  const getTableStyle = computed(() => {
    return function (columns: Column[]) {
      let width = columns.reduce((pre, cur) => {
        return pre += cur.width;
      }, 0);

      return {
        'width': `${width}px`,
        'max-width': `${width}px`
      };
    };
  });

  const getBodyStyle = computed(() => {
    return {
      'height': props.maxHeight || 'auto',
      'max-height': props.maxHeight || 'auto',
      '--page-animate-dur':`${props.pageAnimateDur}ms`
    };
  });

  const getRowStyle = computed(() => {
    return function (i: number) {
      return {
        // 'height': state.rowsHeight[i] || 'auto',
        // 'max-height': state.rowsHeight[i] || 'auto',
      };
    };
  });

  const getExtraCellStyle = computed(() => {
    return function (column: Column) {
      return {
        'width': `${column.width}px`,
        'max-width': `${column.width}px`,
        'text-align': column.align || props.align || 'start'
      } as CSSProperties;
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
    getTableStyle,
    getBodyStyle,
    getRowStyle,
    getExtraCellStyle,
    getCellStyle
  };
}



export default useStyle; 
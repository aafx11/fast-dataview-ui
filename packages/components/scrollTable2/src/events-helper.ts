
import type { ComponentInternalInstance } from 'vue';
import type { TableProps } from './index.vue';
function useEvents(table: ComponentInternalInstance) {
  const handleToggle = (name: string) => {
    table.emit('handle-toggle', name);
  };

  const handleCellClick = (event: Event, row: any, column: any, rowIndex: number, columnIndex: number) => {
    table.emit('cell-click', row, column, rowIndex, columnIndex, event);
  };
  return {
    handleToggle,
    handleCellClick
  };
}

export default useEvents;
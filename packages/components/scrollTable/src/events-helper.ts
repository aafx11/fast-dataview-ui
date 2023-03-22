
import type { ComponentInternalInstance } from 'vue';
import type { TableProps } from './index.vue';
function useEvents(table: ComponentInternalInstance) {
  const handleToggle = ( name: string) => {
    table.emit('handleToggle',  name);
  };

  return {
    handleToggle
  };
}

export default useEvents;
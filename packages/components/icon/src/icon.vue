<script lang="tsx">
import { defineComponent, computed, renderSlot } from 'vue';
import { iconProps } from './icon';









































































































































































export default defineComponent({
  name: 'FIcon',
  props: iconProps,
  setup(props, { slots }) {
    const getIconStyle = computed(() => {
      if (!props.size && !props.color) {
        return {}
      }
      return {
        ...(props.size ? { 'font-size': props.size + 'px' } : {}),
        ...(props.color ? { 'color': props.color } : {})
      }
    })
    return () => (
      <div class={'f-icon'} style={{ border: '1px solid black' }}>
        {renderSlot(slots, 'default')}
      </div>
    )
  },

})
</script>
import { defineComponent, computed, renderSlot, onMounted } from 'vue';


export default defineComponent({
  name: 'FBorderBox1',
  setup(props, { slots }) {
    onMounted(() => {
      console.log('onMounted');
    })
    return () => (
      <div class={'f-border'} style={{ height: '100px' }}>
        {renderSlot(slots, 'default')}
      </div>
    )
  },

})
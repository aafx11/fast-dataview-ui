import { defineComponent, ref, computed, renderSlot, onMounted } from 'vue';
import useResizeListener from '@fast-dataview-ui/hooks/useResizeListener';

export default defineComponent({
  name: 'FBorderBox1',
  setup(props, { slots }) {
    const borderBox1 = ref<HTMLElement | null>(null);

    const { width, height, initWH } = useResizeListener(borderBox1);
   
    onMounted(() => {
      console.log('边框加载', borderBox1.value);
    });

    return {
      width,
      height,
      initWH,
      borderBox1
    };
  },
  render() {
    const { $slots, width, height, } = this;
    console.log('边框宽高', width,'/',height);

    return (
      <div ref="borderBox1" class="f-border-box-1">
        <svg class="f-svg-container" width={width} height={height}>
          <polygon points={`
          
          `}>

          </polygon>
        </svg>
        <div>
          {renderSlot($slots, 'default')}
        </div>
      </div>
    );
  }
});
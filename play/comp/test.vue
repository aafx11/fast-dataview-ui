<template>
  <div class="scroll-list" ref="scrollList" :style="{ height: listHeight + 'px' }">
    <transition-group name="list-transition" tag="ul" appear>
      <li v-for="item in list" :key="item.id">{{ item.text }}</li>
    </transition-group>
  </div>
</template>

<style>
* {
  transition: all 0.3s ease;
  animation-duration: 0.3s;
  animation-fill-mode: both;
}

/* Vue 过渡效果 */
.list-transition-enter-active,
.list-transition-leave-active {
  transition: all 2s ease;
}

.list-transition-enter,
.list-transition-leave-to {
  color: red;
  opacity: 0;
  transform: translateY(30px);
}
</style>

<script>
  import { ref, onMounted, watch,nextTick } from 'vue';

  export default {
    props: {
      items: { type: Array, required: true },
      visibleItems: { type: Number, default: 3 },
      interval: { type: Number, default: 3000 }
    },
    setup(props) {
      const list = ref(props.items);
      const listHeight = ref(props.visibleItems * 30); // Assuming each item is 30px tall
      let timer = null;
      let count = 0;

      const scrollUp = () => {
        count++;
        const item = list.value.shift();
        nextTick(()=>{
          list.value.push(item);
        })
      };

      onMounted(() => {
        timer = setInterval(() => {
          scrollUp();
        }, props.interval);
      });

      watch(
        () => list.value,
        () => {
          listHeight.value = props.visibleItems * 30; // Assuming each item is 30px tall
        }
      );

      return { list, listHeight };
    }
  };
</script>
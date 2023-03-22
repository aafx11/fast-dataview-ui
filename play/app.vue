<template>
  <FScreenContainer class="screen">
    <div>
      <table border="1">
        <TransitionGroup tag="tbody" name="list">
          <template v-for="(item, index) in data" :key="`${item}${index}`">
            <!-- <tr v-show="index >= min && index <= max"> -->
            <tr v-show="item.show">
              <td>{{ item.name }}</td>
              <td>{{ item.index }}</td>
            </tr>
          </template>
        </TransitionGroup>
      </table>
    </div>
  </FScreenContainer>
  <div>
    <Test :items="data"></Test>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref, reactive, nextTick } from 'vue';
import ScrollTable from '../packages/components/scrollTable/src/index.vue';
import Test from './comp/test.vue';

let data = ref([
  { id: 1, text: 2, show: true },
  { id: 2, text: 223, show: true },
  { id: 3, text: 2324, show: true },
  { id: 4, text: 2325, show: true },
  { id: 5, text: 243, show: false },
  { id: 6, text: 2645, show: false },
  { id: 7, text: 275, show: false },
  { id: 8, text: 87682, show: false },
])
let min = ref(0)
let max = ref(3)

setTimeout(() => {
  // min.value = 1
  // nextTick(() => {
  //   max.value = 4
  // })
  // data.value.splice(0, 1)
  // data.value.push({
  //   name: 9, index: 777
  // })
  data.value[0].show =false
  data.value[4].show =true
}, 2000);
</script>
<style lang="scss">
html,
body {
  margin: 0;
  // overflow: hidden;
  // background-color: #333;
  // background-color: #e8e8e8;
  // background-color: #212121;
  // background-color: gray;
}

.list-move,
/* 对移动中的元素应用的过渡 */
.list-enter-active,
.list-leave-active {
  // transition: all 5s ease;
}


.list-enter-from {
  // opacity: 1;
  // transform: translateX(30px);
  transform: translateY(20px);
}

.list-enter-active {
  // position: relative;
  position: absolute;
  transition: all 1s ease;
}

.list-enter-to {
  // opacity: 1;
  // position: relative;

  // transform: translateX(30px);
  transform: translateY(0);
}



.list-leave-from {
  // opacity: 0;
  height: 0;

}

.list-leave-active {
  // position: absolute;
  height: 0;

  transition: all 1s ease;
}

.list-leave-to {
  height: 0;
  // opacity: 0;  
  // transform: translateX(30px);
  // transform: translateY(30px);
}
</style>
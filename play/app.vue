<template>
  <div>
    <fScreenContainer class="screen">
      <!-- :valueFormatter="valueFormatter" -->
      <FScrollRank v-bind="state" :data="data" :valueFormatter="valueFormatter"></FScrollRank>
    </fScreenContainer>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref, reactive, nextTick } from 'vue';

let data = ref([
  { name: 'As', value: 300 },
  { name: 'B', value: 50 },
  { name: 'C', value: 20 },
  { name: 'D', value: 40 },
  { name: 'E', value: 100 },
  { name: 'F', value: 123 },
  { name: 'A', value: 3300 },
  { name: 'B', value: 450 },
  { name: 'C', value: 250 },
  { name: 'D', value: 420 },
  { name: 'E', value: 12300 },
  { name: 'F', value: 0 },
]);

let state = reactive({
  toggleDur: 5 * 1000,
  togglePage: 5,
  pageSize: 5,
  maxValue: 700,
  order: 'default', // reverse normal default
  showRank: true,
  showPercent: true,
  showRatio: true
});

const valueFormatter = ({ name, value, maxValue, index }) => {
  console.log('value', name, '/', value, '/', maxValue, '/', index);
  const reverseNumber = (value + '').split('').reverse();
  let valueStr = '';

  while (reverseNumber.length) {
    const seg = reverseNumber.splice(0, 3).join('');
    valueStr += seg;
    if (seg.length === 3 && (value + '').length > 3) valueStr += ',';
  }


  return valueStr.split('').reverse().join('') + '单位';
};

if (!![]) {
  console.log('123123');

}

</script>
<style lang="scss">
html,
body {
  margin: 0;
  // overflow: hidden;
  background-color: #333;
  // background-color: #e8e8e8;
  // background-color: #212121;
  // background-color: gray;
}

.grid {
  display: grid;
  grid-template-rows: 1fr;
  width: 300px;
  gap: 5px;
  outline: 5px solid #001529;
  transition: 3s;
  animation: slide 3s alternate-reverse infinite;
  background-color: antiquewhite;
  overflow: hidden;

  span,
  div {
    font-size: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 0;
    text-align: center;
  }

  a {
    padding: 10px;
  }
}

// @keyframes slide {
//   0% {
//     grid-template-rows: 0fr;
//   }
//   100% {
//     grid-template-rows: 1fr;
//   }
// }
</style>
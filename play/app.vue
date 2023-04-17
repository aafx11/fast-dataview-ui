<template>
  <FScrollRank :data="state.data" :pageSize="5" :togglePage="5" :maxValue="3500" order="reverse"></FScrollRank>
</template>
<script lang="ts" setup>
import { onMounted, ref, reactive, nextTick } from 'vue';
let state = reactive({
  data: [
    { name: '名称A', value: 200 },
    { name: '名称B', value: 1200 },
    { name: '名称C', value: 3200 },
    { name: '名称D', value: 100 },
    { name: '名称E', value: 400 },
    { name: '名称F', value: 300 },
    { name: '名称G', value: 1000 },
    { name: '名称H', value: 500 },
    { name: '名称I', value: 1500 },
    { name: '名称J', value: 900 },
    { name: '名称K', value: 800 },
    { name: '名称L', value: 700 },
    { name: '名称M', value: 1700 },
    { name: '名称N', value: 1800 },
    { name: '名称O', value: 1500 },
  ]
});
</script>
<style lang="scss">
body {
  margin: 0;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
}

.img-list__item:not(:last-child) {
  border-right-width: 0;
}

.demo-border01 :deep(.source) {
  background: #212121;

  .flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-top: 10px;
    cursor: pointer;
  }
}
</style>

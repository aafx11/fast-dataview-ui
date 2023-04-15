<template>
  <FScrollTable :data="state.data" :columns="state.columns" style="color:black"></FScrollTable>
</template>
<script lang="ts" setup>
import { onMounted, ref, reactive, nextTick } from 'vue';
let state = reactive({
  data: [
    { name: '测试名称01', title: '测试标题01', num: 500, },
    { name: '测试名称02', title: '测试标题02', num: 1500, },
    { name: '测试名称03', title: '测试标题03', num: 2500, },
    { name: '测试名称04', title: '测试标题04', num: 100, },
    { name: '测试名称05', title: '测试标题05', num: 300, },
    { name: '测试名称06', title: '测试标题06', num: 400, },
    { name: '测试名称07', title: '测试标题07', num: 400, },
    { name: '测试名称08', title: '测试标题08', num: 700, },
    { name: '测试名称09', title: '测试标题09', num: 800, },
    { name: '测试名称10', title: '测试标题10', num: 900, },
    { name: '测试名称11', title: '测试标题11', num: 1000, },
    { name: '测试名称21', title: '测试标题21', num: 200, },
  ],
  columns: [
    { prop: 'name', label: '名称', width: 150 },
    { prop: 'title', label: '标题', width: 100, type: 'scroll' },
    { prop: 'num', label: '字数', width: 150 },
  ],

});
</script>
<style lang="scss">
body {
  margin: 0;
  overflow: hidden;
}
</style>

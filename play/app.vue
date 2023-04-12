<template>
  <div>123</div>
</template>
<script lang="ts" setup>
import { onMounted, ref, reactive, nextTick } from 'vue';

</script>
<style lang="scss">
html,
body {
  margin: 0 !important;
  // overflow: hidden;
  // background-color: #333;
  // background-color: #e8e8e8;
  // background-color: #212121;
  // background-color: gray;
}

polyline {
  animation: dash 5s linear infinite;
}

@keyframes dash {
  to {
    stroke-dashoffset: -200000;
  }
}
</style>
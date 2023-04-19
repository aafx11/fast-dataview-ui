<template>
  <div>
    <div>123</div>
  </div>
  <div style="height: 400px;">
    <!-- v-slot="slotProps" -->
    <FVirtualList ref="ccc" :data="state.data" :scrollInterval="1000" :autoScroll="true" :bufferScale="1"
      :estimatedItemSize="100">
      <template #default="{ item }">
        <div class="list">
          <div class="list-item">{{ item._index_ }}</div>
          <div class="list-item">{{ item.name }}</div>
          <div class="list-item">{{ item.value }}</div>
        </div>
      </template>
    </FVirtualList>
    <!-- <VirtualList v-if="show" :estimatedItemSize="100" :listData="state.data" v-slot="slotProps">
      <Item :item="slotProps.item" />
    </VirtualList> -->
    <!-- {{ slotProps.item }} -->
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref, reactive, nextTick } from 'vue';
import VirtualList from './comp/VirtualList.vue';
import Item from './comp/Item.vue';
let show = ref(false);
let state = reactive<{
  data: any[];
}>({
  data: []
});

const ccc = ref<HTMLElement | null>(null);

onMounted(() => {
  let tempData = [];
  for (let i = 0; i < 1000; i++) {
    tempData.push(...[
      { id: i, name: 'id animi est alias fugit exercitationem. Et ullam quia nisi sit autem architecto quod perferendis. Rem voluptatum vitae voluptas voluptas aut. Et et molestias tenetur quaerat. Consequuntur nobis aut non et quo molestias fuga. Consequatur eveniet qui provident excepturi reprehenderit dolores unde mollitia.', value: 200 },

    ]);

  }
  state.data = tempData;


  console.log(ccc.value);
  //   setInterval(() => {
  //   console.log('virtualList', List.value);

  //   console.log('scrollTop', List.value.scrollTop);

  //   // virtualList.value.scrollTop;
  // }, 300);
});



</script>
<style lang="scss">
body {
  margin: 0;
  overflow: hidden;
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

.list {
  display: flex;

  .list-item {
    padding: 10px;
    border: 1px solid black;
  }
}
</style>

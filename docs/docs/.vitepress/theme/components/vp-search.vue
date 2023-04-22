<template>
  <div class="vp-search">
    <input class="vp-search__input" v-model="searchText" type="text" placeholder="搜索组件" @input="onInputSearch" @keyup.enter="onEnterSearch" />
    <!-- 搜索结果 -->
    <div v-if="isShow && resultList && resultList.length" class="vp-search__result" @click.stop="hiddenResult">
      <a v-for="(item, index) in resultList" class="vp-search__link" :key="index" :href="`/fast-dataview-ui/${item.url}.html`">
        {{ item.title }}
      </a>
    </div>
  </div>
</template>

<script setup lang="ts" name="VpSearch">
import { ref } from 'vue';
import { searchList } from './src';
import type { SearchList } from './src/search-list';

/**
 * 输入框输入的内容
 */
const searchText = ref('');
/**
 * 是否展示下拉菜单
 */
const isShow = ref(false);
/**
 * 搜索结果列表
 */
const resultList = ref(null as unknown as SearchList);

/**
 * 输入文本触发搜索
 */
const onInputSearch = () => {
  if (!searchText.value) {
    resultList.value = [];
    return;
  }
  // 过滤搜索结果
  resultList.value = searchList.filter(item => {
    return item.rule.includes(searchText.value.toLowerCase());
  });
  // 检测有结果
  if (resultList.value && resultList.value.length) {
    isShow.value = true;
  }
};

/**
 * 按下回车跳转
 */
const onEnterSearch = () => {
  const link = document.querySelectorAll('.vp-search__link');
  if (link.length === 1) {
    (link[0] as HTMLElement).click();
  }
};

/**
 * 关闭搜索结果菜单
 */
const hiddenResult = () => {
  isShow.value = false;
  searchText.value = '';
};
</script>

<style lang="scss" scoped>
.vp-search {
  max-width: 200px;
  min-width: 100px;
  margin: 0 16px;
  transition: width 0.4s;
  display: inline-block;
  position: relative;

  // 输入框
  .vp-search__input{
    
  }

  // 搜索结果
  .vp-search__result {
    position: absolute;
    background: #fff;
    width: 100%;
    box-shadow: 0 1px 6px rgb(0 0 0 / 20%);
    max-height: 400px;
    overflow: auto;

    .vp-search__link {
      margin: 4px;
      transition: 0.3s;
      display: block;
      line-height: 40px;
      padding: 0 5px;
      box-sizing: border-box;

      &:hover {
        background: #eee;
        color: #2d5af1;
      }
    }
  }
}

// 解决在 810px ~ 710px 区间样式显示不正确的问题
@media screen and (max-width: 840px) and (min-width: 760px) {
  .vp-search {
    width: 140px;
    transition: width 0.4s;
    
  }
}
</style>

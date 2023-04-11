import type { App } from "vue";
import ScrollRank from './src/index.vue';

// 声明为插件
ScrollRank.install = function (app: App): void {
  app.component('FScrollRank', ScrollRank);
  // app.component(ScrollRank.name, ScrollRank);
};
export { ScrollRank };
// 单独引入，后续做按需引用
export default {
  title: 'scrollRank 轮播排名表格',
  name:'scrollRank',
  category: '数据展示',
  status: '100%',
  install(app: App): void {
    app.use(ScrollRank as any);
  }
};
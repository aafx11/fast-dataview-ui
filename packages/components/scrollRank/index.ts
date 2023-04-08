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
  title: 'ScrollRank 滚动排名',
  category: '滚动排名',
  status: '20%',
  install(app: App): void {
    app.use(ScrollRank as any);
  }
};
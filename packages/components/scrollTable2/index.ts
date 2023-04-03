import type { App } from "vue";
import ScrollTable2 from './src/index.vue';


// 声明为插件
ScrollTable2.install = function (app: App): void {
  // app.component(ScrollTable2.name, ScrollTable2);
  app.component('FScrollTable2', ScrollTable2);
};
export { ScrollTable2 };
// 单独引入，后续做按需引用
export default {
  title: 'scrollTable2 滚动表格',
  category: '数据展示',
  status: '20%',
  install(app: App): void {
    app.use(ScrollTable2 as any);
  }
};
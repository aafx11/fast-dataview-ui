import type { App } from "vue";
import ScrollTable from './src/index.vue';


// 声明为插件
ScrollTable.install = function (app: App): void {
  // app.component(ScrollTable.name, ScrollTable);
  app.component('FScrollTable', ScrollTable);
};
export { ScrollTable };
// 单独引入，后续做按需引用
export default {
  title: 'scrollTable 滚动表格',
  category: '数据展示',
  status: '20%',
  install(app: App): void {
    app.use(ScrollTable as any);
  }
};
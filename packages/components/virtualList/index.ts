import type { App } from "vue";
import VirtualList from './src/index.vue';


// 声明为插件
VirtualList.install = function (app: App): void {
  app.component('FVirtualList', VirtualList);
};
export { VirtualList };
// 单独引入，后续做按需引用
export default {
  title: 'VirtualList 虚拟列表',
  name:'virtualList',
  category: '数据展示',
  status: '100%',
  install(app: App): void {
    app.use(VirtualList as any);
  }
};
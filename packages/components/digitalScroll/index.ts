import type { App } from "vue";
import DigitalScroll from './src/index.vue';

// 声明为插件
DigitalScroll.install = function (app: App): void {
  app.component('FDigitalScroll', DigitalScroll)
}
export { DigitalScroll }
// 单独引入，后续做按需引用
export default {
  title: 'digitalScroll 滚动数字',
  name:'digitalScroll',
  category: '数据展示',
  status: '100%',
  install(app: App): void {
    app.use(DigitalScroll as any)
  }
}
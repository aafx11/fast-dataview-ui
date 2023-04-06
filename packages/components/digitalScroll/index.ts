import type { App } from "vue";
import DigitalScroll from './src/index.vue';

// 声明为插件
DigitalScroll.install = function (app: App): void {
  app.component('FDigitalScroll', DigitalScroll)
}
export { DigitalScroll }
// 单独引入，后续做按需引用
export default {
  title: 'digitalScroll 数字滚动',
  category: '数字滚动',
  status: '20%',
  install(app: App): void {
    app.use(DigitalScroll as any)
  }
}
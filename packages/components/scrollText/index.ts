import type { App } from "vue";
import ScrollText from './src/index.vue';

// 声明为插件
ScrollText.install = function (app: App): void {
  app.component('FScrollText', ScrollText)
}
export { ScrollText }
// 单独引入，后续做按需引用
export default {
  title: 'scrollText 轮播文本',
  name:'scrollText',
  category: '数据展示',
  status: '100%',
  install(app: App): void {
    app.use(ScrollText as any)
  }
}
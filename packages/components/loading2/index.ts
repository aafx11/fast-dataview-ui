import type { App } from "vue";
import Loading2 from './src/index.vue';

// 声明为插件
Loading2.install = function (app: App): void {
  app.component(Loading2.name, Loading2)
}
export { Loading2 }
// 单独引入，后续做按需引用
export default {
  title: 'loading 加载',
  category: '加载',
  status: '20%',
  install(app: App): void {
    app.use(Loading2 as any)
  }
}
import type { App } from "vue";
import Loading1 from './src/index';

// 声明为插件
Loading1.install = function (app: App): void {
  app.component(Loading1.name, Loading1)
}
export { Loading1 }
// 单独引入，后续做按需引用
export default {
  title: 'loading 加载',
  category: '加载',
  status: '20%',
  install(app: App): void {
    app.use(Loading1 as any)
  }
}
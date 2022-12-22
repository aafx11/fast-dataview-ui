import type { App } from "vue";
import BorderBox1 from './src/index';

// 声明为插件
BorderBox1.install = function (app: App): void {
  app.component(BorderBox1.name, BorderBox1)
}
export { BorderBox1 }
// 单独引入，后续做按需引用
export default {
  title: 'border 边框',
  category: '边框',
  status: '20%',
  install(app: App): void {
    app.use(BorderBox1 as any)
  }
}
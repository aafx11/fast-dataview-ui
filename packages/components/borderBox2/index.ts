import type { App } from "vue";
import BorderBox2 from './src/index';

// 声明为插件
BorderBox2.install = function (app: App): void {
  app.component(BorderBox2.name, BorderBox2)
}
export { BorderBox2 }
// 单独引入，后续做按需引用
export default {
  title: 'border-02 边框',
  name:'border02',
  category: '边框',
  status: '100%',
  install(app: App): void {
    app.use(BorderBox2 as any)
  }
}
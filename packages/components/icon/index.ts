import type { App } from "vue";
import Icon from './src/icon.vue';
// import { withInstall } from '@fast-dataview-ui/utils/with-install';

// const FIcon = withInstall(Icon)
// 声明为插件
Icon.install = function (app: App): void {
  app.component(Icon.name, Icon)
}
export { Icon }
// 单独引入，后续做按需引用
export default {
  title: 'Icon 图标',
  category: '装饰',
  status: '20%',
  install(app: App): void {
    app.use(Icon as any)
  }
}
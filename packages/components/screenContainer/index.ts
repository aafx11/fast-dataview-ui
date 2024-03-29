import type { App } from "vue";
import ScreenContainer from './src/index.vue';

ScreenContainer.install = function (app: App): void {
  app.component('FScreenContainer', ScreenContainer)
}
export { ScreenContainer }
export default {
  title: 'container 容器',
  name:'container',
  category: '容器',
  status: '100%',
  install(app: App): void {
    app.use(ScreenContainer as any)
  }
}
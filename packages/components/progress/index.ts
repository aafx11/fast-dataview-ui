import type { App } from "vue";
import Progress from './src/index.vue';

// 声明为插件
Progress.install = function (app: App): void {
  app.component(Progress.name, Progress)
}
export { Progress }
// 单独引入，后续做按需引用
export default {
  title: 'progress 进度条',
  category: '进度条',
  status: '20%',
  install(app: App): void {
    app.use(Progress as any)
  }
}
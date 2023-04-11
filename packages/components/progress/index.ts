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
  name:'progress',
  category: '数据展示',
  status: '100%',
  install(app: App): void {
    app.use(Progress as any)
  }
}
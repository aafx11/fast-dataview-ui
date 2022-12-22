import type { App } from 'vue';
import IconInstall, { Icon } from './icon';
import BorderBox1Install, { BorderBox1 } from "./borderBox1";
const installs = [
  IconInstall,
  BorderBox1Install
]

export {
  Icon,
  BorderBox1
}

// 实现一个vue3插件，需要实现一个install方法
// 接受一个App实例就算createApp()返回的实例
// 在use这个默认导出对象时，会调用里面的install方法
export default {
  version: '1.0.12',
  install(app: App): void {
    installs.forEach(p => app.use(p as any));
  }
}
import type { App } from 'vue';
import IconInstall, { Icon } from './icon';
import BorderBox1Install, { BorderBox1 } from "./borderBox1";
import BorderBox2Install, { BorderBox2 } from "./borderBox2";
import Loading1Install, { Loading1 } from "./loading1";
import Loading2Install, { Loading2 } from "./loading2";
import ScreenContainerInstall, { ScreenContainer } from './screenContainer';
import DynamicParticleInstall, { DynamicParticle } from './dynamicParticle';
import ScrollTableInstall, { ScrollTable } from './scrollTable';
import ScrollTextInstall, { ScrollText } from './scrollText';
import ProgressInstall, { Progress } from './progress';
import ScrollTable2Install, { ScrollTable2 } from './scrollTable2';

const installs = [
  IconInstall,
  BorderBox1Install,
  BorderBox2Install,
  Loading1Install,
  Loading2Install,
  ScreenContainerInstall,
  DynamicParticleInstall,
  ScrollTableInstall,
  ScrollTable2Install,
  ScrollTextInstall,
  ProgressInstall
];

export {
  Icon,
  BorderBox1,
  BorderBox2,
  Loading1,
  Loading2,
  ScreenContainer,
  DynamicParticle,
  ScrollTable,
  ScrollTable2,
  ScrollText,
  Progress
};

// 实现一个vue3插件，需要实现一个install方法
// 接受一个App实例就算createApp()返回的实例
// 在use这个默认导出对象时，会调用里面的install方法
export default {
  version: '1.0.12',
  install(app: App): void {
    installs.forEach(p => app.use(p as any));
  }
};
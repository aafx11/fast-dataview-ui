import type { App } from "vue";
import DynamicParticle from './src/index.vue';

DynamicParticle.install = function (app: App): void {
  app.component('FDynamicParticle', DynamicParticle)
}
export { DynamicParticle }
export default {
  title: 'particle 粒子',
  category: '粒子',
  status: '20%',
  install(app: App): void {
    app.use(DynamicParticle as any)
  }
}
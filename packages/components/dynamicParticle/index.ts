import type { App } from "vue";
import DynamicParticle from './src/index.vue';

DynamicParticle.install = function (app: App): void {
  app.component('FDynamicParticle', DynamicParticle)
}
export { DynamicParticle }
export default {
  title: 'particle 粒子动效',
  name:'particle',
  category: 'canvas动效',
  status: '100%',
  install(app: App): void {
    app.use(DynamicParticle as any)
  }
}
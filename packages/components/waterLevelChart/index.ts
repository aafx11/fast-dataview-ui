import type { App } from "vue";
import WaterLevelChart from './src/index.vue';

// 声明为插件
WaterLevelChart.install = function (app: App): void {
  app.component('FWaterLevelChart', WaterLevelChart);
};
export { WaterLevelChart };
// 单独引入，后续做按需引用
export default {
  title: 'WaterLevelChart 水位图',
  name:'WaterLevelChart',
  category: '图表',
  status: '100%',
  install(app: App): void {
    app.use(WaterLevelChart as any);
  }
};
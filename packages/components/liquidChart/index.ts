import type { App } from "vue";
import LiquidChart from './src/index';

// 声明为插件
LiquidChart.install = function (app: App): void {
  app.component(LiquidChart.name, LiquidChart);
};
export { LiquidChart };
// 单独引入，后续做按需引用
export default {
  title: 'liquidChart 水位图',
  name: 'liquidChart',
  category: '图表',
  status: '100%',
  install(app: App): void {
    app.use(LiquidChart as any);
  }
};
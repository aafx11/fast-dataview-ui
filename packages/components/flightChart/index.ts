import type { App } from "vue";
import FlightChart from './src/index.vue';

// 声明为插件
FlightChart.install = function (app: App): void {
  app.component('FFlightChart', FlightChart)
}
export { FlightChart }
// 单独引入，后续做按需引用
export default {
  title: 'FFlightChart 飞线图',
  category: '飞线图',
  status: '20%',
  install(app: App): void {
    app.use(FlightChart as any)
  }
}
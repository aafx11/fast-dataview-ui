import type { App } from "vue";
import FlightChart from './src/index.vue';

// 声明为插件
FlightChart.install = function (app: App): void {
  app.component('FFlightChart', FlightChart)
}
export { FlightChart }
// 单独引入，后续做按需引用
export default {
  title: 'flightChart 飞线图',
  name:'flightChart',
  category: '图表',
  status: '100%',
  install(app: App): void {
    app.use(FlightChart as any)
  }
}
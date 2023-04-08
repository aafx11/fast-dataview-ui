import { createApp } from 'vue';
import App from './app.vue';

// 打包阶段
// import fastDataviewUi from '../dist/fast-dataview-ui.mjs';
// import '../dist/theme/index.css';

// 开发阶段
// import fastDataviewUi from '@fast-dataview-ui/components/index';
// import '@fast-dataview-ui/theme-chalk/index.scss';
import fastDataviewUi from '../packages/components/index';
import '../packages/theme-chalk/index.scss';




const app = createApp(App);
app.use(fastDataviewUi);
app.mount('#app');
import { createApp } from 'vue';
import App from './app.vue';

// 打包阶段
import fastDataviewUi from '../dist/fast-dataview-ui.mjs';
import '../dist/theme/index.css';

const app = createApp(App)
app.use(fastDataviewUi)
app.mount('#app')
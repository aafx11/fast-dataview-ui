# 快速上手

## 完整引入

在 `main.ts` 中引入下面内容

```ts
import { createApp } from 'vue'
import App from './App.vue'
import fastDataviewUi from 'fast-dataview-ui';
import 'fast-dataview-ui/theme/index.css';

createApp(App).use(fastDataviewUi).mount('#app')
```

## 按需引入

为了减小体积，只希望引入部分组件，可以使用按需引入的方式

```ts
import { createApp } from 'vue'
import App from './App.vue'

// 组件按需引入
import { Progress, BorderBox1 } from 'fast-dataview-ui';

// 样式按需引入
import 'fast-dataview-ui/theme/progress.css';
import 'fast-dataview-ui/theme/borderBox1.css';

createApp(App).use(Progress).use(BorderBox1).mount('#app')
```





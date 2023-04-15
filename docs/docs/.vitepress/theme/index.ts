import { h } from 'vue'
import Theme from 'vitepress/theme'
import './style/vitepress.scss'
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue'
// import '../../utils/vitepress-theme-demoblock/dist/theme/styles/index.css';
// import Demo from '../../utils/vitepress-theme-demoblock/dist/client/components/Demo.vue';
// import DemoBlock from '../../utils/vitepress-theme-demoblock/dist/client/components/DemoBlock.vue';
// import '../../utils/dist/theme/styles/index.css';
// import Demo from '../../utils/dist/client/components/Demo.vue';
// import DemoBlock from '../../utils/dist/client/components/DemoBlock.vue';
import '../../../../dist/theme/index.css';
import fastDataViewUi from '../../../../dist/fast-dataview-ui.mjs';
import vpSearch from './components/vp-search.vue'

export default {
  ...Theme,
  Layout() {
    return h(Theme.Layout, null, {
      /**
       * 导航栏插入搜索的输入框插槽
       *
       * 更多插槽参考
       *
       * @see layout-slots https://vitepress.vuejs.org/guide/theme-introduction#layout-slots
       */
      'nav-bar-content-before': () => h(vpSearch)
    })
  },
  enhanceApp({ app }) {
    app.use(fastDataViewUi)
    app.component('Demo', Demo)
    app.component('DemoBlock', DemoBlock)
  }
}

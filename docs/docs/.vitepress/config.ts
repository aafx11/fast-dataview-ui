import { nav } from './utils/nav';
import { sidebar } from './utils/sidebar';
import { description } from './utils/description';
import { head } from './utils/head';
import { defineConfig } from 'vitepress';
import { demoBlockPlugin } from 'vitepress-theme-demoblock'
// import { demoBlockPlugin } from '../utils/vitepress-theme-demoblock';
// import { demoBlockPlugin } from '../utils/dist/node/index.mjs';
export default defineConfig({
  title: 'fast-dataview-ui',
  head,
  description,
  lastUpdated: true,
  base: '/fast-dataview-ui/',
  themeConfig: {
    lastUpdatedText: '最后更新时间',
    nav,
    sidebar,
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/aafx11/fast-dataview-ui'
      }
    ],
    // logo: ''
  },
  markdown: {
    config: (md) => {
      md.use(demoBlockPlugin);
    }
  }
});

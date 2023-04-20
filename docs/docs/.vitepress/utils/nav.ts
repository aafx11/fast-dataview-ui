import { version } from '../../../../dist/package.json';

/**
 * 顶部导航栏菜单
 */
export const nav = [
  {
    text: '文档',
    activeMatch: '^/docs/',
    link: '/docs/install'
  },
  {
    text: '基础组件',
    activeMatch: '^/components/',
    link: '/components/scrollTable'
  },
  {
    text: version,
    link: ''
  },
]
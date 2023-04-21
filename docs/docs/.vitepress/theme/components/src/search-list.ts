
export type SearchList = { title: string, rule: string, url: string }[]

/**
 * 搜索列表
 *
 * @param title 展示的标题
 * @param rule 匹配规则
 * @param url 跳转的地址
 */
export const searchList = [
  { title: '安装', rule: 'a安装', url: 'docs/install' },
  {
    title: '快速上手',
    rule: 'k快速上手完整引入按需引入使用',
    url: 'docs/import'
  },
  { title: '介绍', rule: '介绍', url: 'docs/introduce' },
  { title: 'border-01 边框', rule: 'border1边框', url: 'components/border01' },
  { title: 'border-02 边框', rule: 'border2边框', url: 'components/border02' },
  { title: 'particle 粒子动效', rule: 'particle粒子动效动画canvas', url: 'components/particle' },
  { title: 'flightChart 飞线图', rule: 'flightChart飞线图管道图图表', url: 'components/flightChart' },
  { title: 'loading-01 加载', rule: 'loading1加载动画', url: 'components/loading01' },
  { title: 'loading-02 加载', rule: 'loading2加载动画', url: 'components/loading02' },
  { title: 'progress 进度条', rule: 'progress进度条数据展示', url: 'components/progress' },
  { title: 'container 容器', rule: 'container容器', url: 'components/container' },
  { title: 'scrollTable 轮播表格', rule: 'scrolltable轮播表格数据展示', url: 'components/scrollTable' },
  { title: 'scrollText 轮播文本', rule: 'scrolltext轮播文本数据展示', url: 'components/scrollText' },
  { title: 'virtualList 虚拟列表', rule: 'virtuallist虚拟列表数据展示', url: 'components/virtualList' },
  { title: 'digitalScroll 滚动数字', rule: 'digitalScroll滚动数字数据展示', url: 'components/digitalScroll' },
  { title: 'scrollRank 轮播排名表格', rule: 'scrollrank轮播排名表格数据展示', url: 'components/scrollRank' },
] as const

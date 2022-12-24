
export type SearchList = { title: string, rule: string, url: string }[]

/**
 * 搜索列表
 *
 * @param title 展示的标题
 * @param rule 匹配规则
 * @param url 跳转的地址
 */
export const searchList = [
  { title: '安装', rule: '安装', url: 'docs/install' },
  {
    title: '快速上手',
    rule: '快速上手完整引入自动导入按需引入',
    url: 'docs/import'
  },
  { title: '介绍', rule: '介绍', url: 'docs/introduce' },
] as const

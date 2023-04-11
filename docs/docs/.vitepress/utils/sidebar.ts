/**
 * 侧边栏菜单
 */
import { installs } from '../../../../dist/fast-dataview-ui.mjs';
const sort = (arr: Array<any>, attr: string, order: 'normal' | 'reverse' = 'reverse') => {
  return arr.sort(compare(attr, order));
};

const compare = (attr: string, order: 'normal' | 'reverse' = 'reverse') => {
  return function (value1: any, value2: any) {
    if (value1[attr] < value2[attr]) {
      return order === 'normal' ? -1 : 1;
    }
    if (value1[attr] > value2[attr]) {
      return order === 'normal' ? 1 : -1;
    }
    return 0;
  };
};

const sortMap = [
  { category: '数据展示', sort: 10 },
  { category: 'canvas动效', sort: 20 },
  { category: '图表', sort: 30 },
  { category: '容器', sort: 40 },
  { category: '边框', sort: 50 },
  { category: '加载', sort: 60 },
];

const getComponents = () => {
  let result: any = [];
  installs.forEach(component => {
    let findItem = result.find(item => item.text === component.category);
    if (findItem) {
      findItem.items.push({
        text: component.title,
        link: `/components/${component.name}`
      });
    } else {
      result.push({
        text: component.category,
        sort: sortMap.find(item => item.category === component.category)?.sort,
        link: '/components/',
        items: [
          { text: component.title, link: `/components/${component.name}` }
        ]
      });
    }
  });
  result = sort(result, 'sort', 'normal');
  return result;
};

export const sidebar = {
  '/docs/': [
    {
      text: '开发指南',
      link: '/docs/',
      items: [
        { text: '安装', link: '/docs/install' },
      ]
    },
  ],
  // '/components/': [
  //   {
  //     text: '基础组件',
  //     link: '/components/',
  //     items: [
  //       { text: 'Button 按钮', link: '/components/button', },
  //     ]
  //   },
  //   {
  //     text: '基础组件2',
  //     link: '/components/',
  //     items: [
  //       { text: 'Button 按钮', link: '/components/button' },
  //     ]
  //   },
  // ]
  '/components/': getComponents()
};
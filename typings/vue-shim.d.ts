declare module '*.vue' { // 声明.vue类型文件
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any> // 声明类型
  export default component
}
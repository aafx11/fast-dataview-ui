import type { App, Plugin } from 'vue';

// 类型导出才能生成.d.ts文件
export type SFCWithInstall<T> = T & Plugin
export const withInstall = <T>(comp: T) => {
  (comp as SFCWithInstall<T>).install = function (app: App) {
    app.component((comp as any).name, comp)
  }
  return comp as SFCWithInstall<T>
}

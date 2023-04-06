import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from "@vitejs/plugin-vue-jsx";
export default defineConfig({
  plugins: [vue(), vueJsx()],
  css: {
    /* CSS 预处理器 */
    // preprocessorOptions: {
    //   scss: {
    //     additionalData: '@import "packages/theme-chalk/src/**";'
    //   }
    // }
  },
});
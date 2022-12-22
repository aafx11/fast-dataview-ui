const path = require("path");
const fs = require("fs");
const { defineConfig, build } = require("vite");

// import { resolve } from 'path'
// import { readdirSync } from 'fs'
// import { defineConfig, build } from 'vite';
const entryDir = path.resolve(__dirname, "../packages/theme-chalk/src")
const outDir = path.resolve(__dirname, "../dist/theme")
// 单独css文件打包
const singleCssBuildConfig = {
  build: {
    // asserts: 'theme',
    outDir: path.resolve(__dirname, "../dist/theme"),
    rollupOptions: {
      input: fs.readdirSync(entryDir).map((name) => {
        return `${entryDir}/${name}`
      }),
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]'
      }
    }
  }
}
const singleCssBuild = async () => {
  console.log('singleCssBuild', singleCssBuildConfig);
  await build(defineConfig(singleCssBuildConfig))
}

// // 全部css文件打包
// const allCssBuildConfig = {
//   build: {
//     outDir: path.resolve(__dirname, "../dist/theme"),
//     emptyOutDir: false,
//     rollupOptions: {
//       input: path.resolve(__dirname, '../packages/theme-chalk/index.scss'),
//       output: {
//         assetFileNames: '[name].[ext]' // 取消文件名 hash 值 https://rollupjs.org/guide/en/#outputassetfilenames
//       }
//     }
//   }
// }
// const allCssBuild = async () => {
//   console.log('allCssBuild', allCssBuildConfig);
//   await build(defineConfig(allCssBuildConfig))
// }

// allCssBuild()
singleCssBuild() 
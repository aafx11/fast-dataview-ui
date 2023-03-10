const path = require("path");
const fs = require("fs");
const { defineConfig, build } = require("vite");
const entryDir = path.resolve(__dirname, "../packages/theme-chalk/src")
const outDir = path.resolve(__dirname, "../dist/theme")

// 单独css文件打包
const singleCssBuildConfig = {
  build: {
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
  await build(defineConfig(singleCssBuildConfig))
}

// 全部css文件打包
const allCssBuildConfig = {
  build: {
    outDir: path.resolve(__dirname, "../dist/theme"),
    emptyOutDir: false,
    rollupOptions: {
      input: path.resolve(__dirname, '../packages/theme-chalk/index.scss'),
      output: {
        assetFileNames: '[name].[ext]' // 取消文件名 hash 值 https://rollupjs.org/guide/en/#outputassetfilenames
      }
    }
  }
}
const allCssBuild = async () => {
  await build(defineConfig(allCssBuildConfig))
}

allCssBuild()
singleCssBuild() 
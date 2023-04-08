const path = require("path");
const fs = require("fs");
const { defineConfig, build } = require("vite");
const vue = require("@vitejs/plugin-vue");
const vueJsx = require("@vitejs/plugin-vue-jsx");
const libCss = require("vite-plugin-libcss");
const fsExtra = require("fs-extra");
const setupName = require('./utils/setupName.js');

const entryDir = path.resolve(__dirname, "../packages/components");
const outputDir = path.resolve(__dirname, "../dist");

// 单组件按需构建
const buildSingle = async (name) => {
  await build(
    defineConfig({
      ...baseConfig,
      build: {
        rollupOptions,
        lib: {
          entry: path.resolve(entryDir, name),
          name: "index",
          fileName: "index",
          formats: ["es", "umd"],
        },
        outDir: path.resolve(outputDir, name),
      },
    })
  );
};
// 生成组件的 package.json 文件
const createPackageJson = (name) => {
  const fileStr = `{
    "name": "${name}",
    "version": "0.0.0",
    "main": "index.umd.js",
    "module": "index.mjs",
    "style": "style.css"
  }`;
  fsExtra.outputFile(
    path.resolve(outputDir, `${name}/package.json`),
    fileStr,
    "utf-8"
  );
};

// 生成全量包的package.json
const createMainPackageJson = () => {
  const packageJson = require('../packages/components/package.json');
  packageJson.name = 'fast-dataview-ui';
  packageJson.main = 'fast-dataview-ui.umd.js';
  packageJson.module = 'fast-dataview-ui.mjs';
  packageJson.license = 'MIT';
  fsExtra.outputFile(
    path.resolve(outputDir, `package.json`),
    JSON.stringify(packageJson, null, 2)
  );
};

// 打包配置
const baseConfig = defineConfig({
  configFile: false,
  publicDir: false,
  // setupName(),
  plugins: [vue(), vueJsx(), libCss()],
});

const rollupOptions = {
  external: ["vue", "vue-router"],
  output: {
    extend: true,
    globals: {
      vue: "Vue",
    },
  },
};

//全量构建
const buildAll = async () => {
  await build(
    defineConfig({
      ...baseConfig,
      build: {
        rollupOptions,
        lib: {
          entry: path.resolve(entryDir, "index.ts"),
          name: "fast-dataview-ui",
          fileName: "fast-dataview-ui",
          formats: ["es", "umd", "iife"],
        },
        outDir: outputDir,
      },
    })
  );
};

const buildLib = async () => {
  // 全量打包
  await buildAll();
  createMainPackageJson();
  // 打包单个组件
  // 获取组件名称组成的数组
  const components = fs.readdirSync(entryDir).filter((name) => {
    const componentDir = path.resolve(entryDir, name);
    const isDir = fs.lstatSync(componentDir).isDirectory();
    return isDir && fs.readdirSync(componentDir).includes("index.ts");
  });

  // 循环一个一个组件构建
  for (const name of components) {
    console.log('name', name);
    // 构建单组件
    await buildSingle(name);

    // 生成组件的 package.json 文件
    createPackageJson(name);
  }
};

buildLib();

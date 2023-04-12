import prettier from "prettier";
import yaml from "yaml";
import path from "path";
import fs from "fs";
const cwd = process.cwd();
const resolve = (...args) => path.resolve(cwd, ...args);
const prettierConfigPath = ".prettierrc";
export const format = (content, userOptions = { parser: "javascript" }) => {
  const defaultOptionBuffer = fs.readFileSync(resolve(prettierConfigPath));
  const defaultOptions = yaml.parse(defaultOptionBuffer.toString());
  const options = Object.assign({}, defaultOptions, userOptions);
  return prettier.format(content, options);
};

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const mdContainer = require('markdown-it-container');
const compilerSfc = require('@vue/compiler-sfc');
const os = require('os');
const pluginSfc = require('@mdit-vue/plugin-sfc');

const ScriptSetupPattern = /<(script)(?:.* \bsetup\b)?[^>]*>([\s\S]+)<\/\1>/;
const StylePattern = /<(style)[^>]*>([\s\S]+)<\/\1>/;
const ScriptOrStyleReplacePattern = /<(script|style)[\s\S]+<\/\1>/g;
const TemplateReplacePattern = /<template>([\s\S]+)<\/template>/g;

function stripScript(content, id) {
  const result = content.match(ScriptSetupPattern);
  const source = result && result[0] ? result[0].trim() : "";
  if (source) {
    const { descriptor } = compilerSfc.parse(source);
    const { content: scriptContent } = compilerSfc.compileScript(descriptor, {
      refSugar: true,
      id
    });
    return scriptContent;
  }
  return source;
}
function stripStyle(content) {
  const result = content.match(StylePattern);
  return result && result[2] ? result[2].trim() : "";
}
function stripTemplate(content) {
  content = content.trim();
  if (!content) {
    return content;
  }
  return content.replace(ScriptOrStyleReplacePattern, "").trim();
}
function pad(source) {
  return source.split(/\r?\n/).map((line) => `  ${line}`).join("\n");
}
function genInlineComponentText(id, template, script, options) {
  let source = template;
  if (TemplateReplacePattern.test(source)) {
    source = source.replace(TemplateReplacePattern, "$1");
  }
  const finalOptions = {
    id: `inline-component-${id}`,
    source: `${source}`,
    filename: `inline-component-${id}.vue`,
    compilerOptions: {
      mode: "function"
    }
  };
  const compiled = compilerSfc.compileTemplate(finalOptions);
  if (compiled.tips && compiled.tips.length) {
    compiled.tips.forEach((tip) => {
      console.warn(tip);
    });
  }
  if (compiled.errors && compiled.errors.length) {
    console.error(
      `
  Error compiling template:
${pad(compiled.source)}
` + compiled.errors.map((e) => `  - ${e}`).join("\n") + "\n"
    );
  }
  let demoComponentContent = `
    ${compiled.code.replace("return function render", "function render")}
  `;
  script = script.trim();
  if (script) {
    script = script.replace(/export\s+default/, "const democomponentExport =").replace(/import ({.*}) from 'vue'/g, (s, s1) => `const ${s1} = Vue`).replace(
      /const ({ defineComponent as _defineComponent }) = Vue/g,
      "const { defineComponent: _defineComponent } = Vue"
    );
    if (options?.scriptReplaces) {
      for (const s of options.scriptReplaces) {
        script = script.replace(s.searchValue, s.replaceValue);
      }
    }
  } else {
    script = "const democomponentExport = {}";
  }
  demoComponentContent = `(function() {
    ${demoComponentContent}
    ${script}
    return {
      render,
      ...democomponentExport
    }
  })()`;
  return demoComponentContent;
}

let seed = 0;
const render = (content, options) => {
  if (!content) {
    return;
  }
  const startTag = "<!--vue-demo:";
  const startTagLen = startTag.length;
  const endTag = ":vue-demo-->";
  const endTagLen = endTag.length;
  let componenetsString = "";
  const templateArr = [];
  let styleArr = [];
  let id = 0;
  let start = 0;
  let commentStart = content.indexOf(startTag);
  let commentEnd = content.indexOf(endTag, commentStart + startTagLen);
  while (commentStart !== -1 && commentEnd !== -1) {
    templateArr.push(content.slice(start, commentStart));
    const commentContent = content.slice(commentStart + startTagLen, commentEnd);
    const html = stripTemplate(commentContent);
    const script = stripScript(commentContent, `render-demo-${id}-script`);
    const style = stripStyle(commentContent);
    seed = seed + 1;
    const demoComponentContent = genInlineComponentText(seed, html, script, options);
    const demoComponentName = `render-demo-${id}`;
    templateArr.push(`<${demoComponentName} />`);
    styleArr.push(style);
    componenetsString += `${JSON.stringify(demoComponentName)}: ${demoComponentContent},`;
    id++;
    start = commentEnd + endTagLen;
    commentStart = content.indexOf(startTag, start);
    commentEnd = content.indexOf(endTag, commentStart + startTagLen);
  }
  let pageScript = "";
  if (componenetsString) {
    pageScript = `<script lang="ts">
      import * as Vue from 'vue'
      ${options?.scriptImports?.join(os.EOL)}
      const { defineComponent } = Vue
      export default defineComponent({
        name: 'component-doc',
        components: {
          ${componenetsString}
        }
      })
    <\/script>`;
  } else if (content.indexOf("<script>") === 0) {
    start = content.indexOf("<\/script>") + "<\/script>".length;
    pageScript = content.slice(0, start);
  }
  styleArr = [...new Set(styleArr)];
  let styleString = "";
  const preprocessors = ["scss", "sass", "less", "stylus"];
  let _style = "style";
  if (preprocessors.includes(options.cssPreprocessor)) {
    _style = `style lang="${options.cssPreprocessor}"`;
  }
  if (options.customStyleTagName) {
    _style = options.customStyleTagName;
  }
  if (styleArr && styleArr.length > 0) {
    styleString = `<${_style}>${styleArr.join("")}</style>`;
  } else {
    styleString = `<style></style>`;
  }
  if (options?.styleReplaces) {
    for (const s of options.styleReplaces) {
      styleString = styleString.replace(s.searchValue, s.replaceValue);
    }
  }
  templateArr.push(content.slice(start));
  return {
    template: templateArr.join(""),
    script: pageScript,
    style: styleString
  };
};

const blockPlugin = (md, options) => {
  md.use(mdContainer, "demo", {
    validate(params) {
      return params.trim().match(/^demo\s*(.*)$/);
    },
    render(tokens, idx) {
      if (tokens[idx].nesting === 1) {
        const content = tokens[idx + 1].type === "fence" ? tokens[idx + 1].content : "";
        return `<demo customClass="${options.customClass}" sourceCode="${md.utils.escapeHtml(
          content
        )}">${content ? `<!--vue-demo:${content}:vue-demo-->` : ""}`;
      }
      return "</demo>";
    }
  });
};
const codePlugin = (md, options) => {
  const lang = options?.lang || "vue";
  const defaultRender = md.renderer.rules.fence;
  md.renderer.rules.fence = (tokens, idx, options2, env, self) => {
    const token = tokens[idx];
    const prevToken = tokens[idx - 1];
    const isInDemoContainer = prevToken && prevToken.nesting === 1 && prevToken.info.trim().match(/^demo\s*(.*)$/);
    if (token.info.trim() === lang && isInDemoContainer) {
      const m = prevToken.info.trim().match(/^demo\s*(.*)$/);
      const description = m && m.length > 1 ? m[1] : "";
      return `
        ${description ? `<template #description>
          <div>${md.renderInline(description)}</div>
        </template>` : ""}
        <template #highlight>
          <div v-pre class="language-${lang}">
            ${md.options.highlight?.(token.content, lang, "") || ""}
          </div>
        </template>`;
    }
    return defaultRender?.(tokens, idx, options2, env, self);
  };
};
const sfcRegexp = pluginSfc.createSfcRegexp({ customBlocks: [pluginSfc.TAG_NAME_TEMPLATE] });
const renderPlugin = (md, options) => {
  const render$1 = md.render.bind(md);
  md.render = (src, env) => {
    let rendered = render$1(src, env);
    const startTag = "<!--vue-demo:";
    const endTag = ":vue-demo-->";
    if (rendered.indexOf(startTag) !== -1 && rendered.indexOf(endTag) !== -1) {
      const { template, script, style } = render(rendered, options) || {};
      const templateSfcBlock = `<template>${template}</template>`.match(sfcRegexp)?.groups;
      const scriptSfcBlock = script?.match(sfcRegexp)?.groups;
      const styleSfcBlock = style?.match(sfcRegexp)?.groups;
      env.sfcBlocks.template = templateSfcBlock || null;
      env.sfcBlocks.script = scriptSfcBlock || null;
      if (scriptSfcBlock) {
        env.sfcBlocks.scripts.push(scriptSfcBlock);
      }
      if (styleSfcBlock) {
        env.sfcBlocks.styles.push(styleSfcBlock);
      }
      rendered = template;
    }
    return rendered;
  };
};
const demoblock = (md, options = {}) => {
  md.use(blockPlugin, options);
  md.use(codePlugin, options);
  md.use(renderPlugin, options);
};

exports.blockPlugin = blockPlugin;
exports.codePlugin = codePlugin;
exports.default = demoblock;
exports.demoBlockPlugin = demoblock;
exports.demoblock = demoblock;
exports.renderPlugin = renderPlugin;

// import type { Plugin } from 'vite'
//@vue/compiler-sfc 这个插件是处理我们单文件组件的代码解析
// import { compileScript, parse } from '@vue/compiler-sfc'
const compiler = require('@vue/compiler-sfc')
 function setupName() {
    return {

        name: 'vite:plugin:vue:name',
        //一个 Vite 插件可以额外指定一个 `enforce` 属性
        //（类似于 webpack 加载器）来调整它的应用顺序。`enforce` 的值可以是`pre` 或 `post`
        //加载顺序为
          //Alias
          //带有 `enforce: 'pre'` 的用户插件
          //Vite 核心插件
          //没有 enforce 值的用户插件
          //Vite 构建用的插件
          //带有 `enforce: 'post'` 的用户插件
         //Vite 后置构建插件（最小化，manifest，报告）
        enforce: "pre",
        //transform code参数就是我们写的代码比如vue代码  id就是路径例如/src/xx/xx.vue
        transform(code, id) {
            //只处理vue结尾的文件
            if (/.vue$/.test(id)) {
                let { descriptor } = compiler.parse(code)
                //通过compileScript 处理script 返回result
                  //attrs: { name: 'xm', lang: 'ts', setup: true },
                  //lang: 'ts',
                  //setup: true,
                const result = compiler.compileScript(descriptor, { id })
                //attrs 此时就是一个对象
                const name = result.attrs.name 
                const lang = result.attrs.lang
                const inheritAttrs = result.attrs.inheritAttrs
                //写入script
                const template = `
                <script ${lang ? `lang=${lang}` :  ''}>
                 export default {
                    ${name ? `name:"${name}",`  : ''}
                    ${inheritAttrs ? `inheritAttrs: ${inheritAttrs !== 'false'},` : ''}
                 }
                </script>
                `;
                //最后拼接上这段代码 也就是我们加的script这一段 返回code
                code += template;
               // console.log(code)
            }

            return code
        }
    }
}
module.exports = setupName
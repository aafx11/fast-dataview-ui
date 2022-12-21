import { series, parallel } from 'gulp';
import { withTashName, run } from './utils';


// gulp 不是用来打包的，是用来控制流程做代码转行，vite运行就不打包的
// 串行打包
export default series(
  withTashName('clean', async () => run('rm -rf ./dist')),
  withTashName('buildPackages',()=>run('pnpm run --filter ./packages --parallel build')) // 找到packages文件夹，并行执行里面的build指令
)

// 并行打包 
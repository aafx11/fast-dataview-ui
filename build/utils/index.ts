import { spawn } from 'child_process';
import { projectRoot } from './paths';

export const withTashName = <T>(name: string, fn: T) => Object.assign(fn, { displayName: name })

// 在node 使用子进程运行脚本
export const run = async (command: string) => {
  return new Promise((resolve) => {
    const [cmd, ...args] = command.split(" ") // 命令和参数
    const app = spawn(cmd, args, {
      cwd: projectRoot, // 在根目录执行命令
      stdio: 'inherit', // 将子进程的输出共享给父进程
      shell: true, // 支持linux的命令rm -rf
    })
    app.on('close', resolve)
  })
}
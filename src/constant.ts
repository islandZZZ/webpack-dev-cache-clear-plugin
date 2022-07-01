import * as path from "path"

import { homedir as homeDir } from 'os'//系统的home目录 home dir

const home: string = process.env.HOME || homeDir() // 系统配置的home环境变量 home variable

// require('../build/applescript/clear.scpt')
export const scriptPath: string = path.join(__dirname, '../applescript/clear.scpt')

export const defaultChromeCacheDir: string = `${process.env.HOME}/Library/Caches/Google/Chrome/Default/Cache`

export const MACOS_SYSTEM: string = 'Darwin'

export const defaultConfigPath: string = path.join(home, 'node-cache-clear.config.json')

export const domainErrMsg: string = 'WebpackDevCacheClearPlugin: error. domains must be an array with a length greater than 0.'

export const systemErrMsg: string = 'WebpackDevCacheClearPlugin: error. only macOS system is supported.'
const homeDir = require('os').homedir //系统的home目录 home dir
const home = process.env.HOME || homeDir // 系统配置的home环境变量 home variable
const path = require('path')
const scriptPath = path.join(__dirname, './dependency/applescript/clear.scpt')
const defaultChromeCacheDir = `${process.env.HOME}/Library/Caches/Google/Chrome/Default/Cache`

const MACOS_SYSTEM = 'Darwin'
const defaultConfigPath = path.join(home, 'node-cache-clear.config.json')
const domainErrMsg = 'WebpackDevCacheClearPlugin: error. domains must be an array with a length greater than 0.'
const systemErrMSg = 'WebpackDevCacheClearPlugin: error. only macOS system is supported.'

module.exports = {
    MACOS_SYSTEM,
    defaultConfigPath,
    scriptPath,
    defaultChromeCacheDir,
    domainErrMsg,
    systemErrMSg
}
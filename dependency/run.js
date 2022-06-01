const { execSync } = require('child_process')
const path = require('path')
const colors = require('colors')
const fsExtra = require('fs-extra')
const { chmodSync } = require('fs')
const scriptPath = path.join(__dirname, './applescript/clear.scpt')
const defaultChromeCacheDir = `${process.env.HOME}/Library/Caches/Google/Chrome/Default/Cache`
const domainErrMsg = 'WebpackDevCacheClearPlugin: error. Domain must be an array with a length greater than 0.'
const systemErrMSg = 'WebpackDevCacheClearPlugin: error. only macOS system is supported.'

const { isMacOS } = require('./util/index')

const runTask = async (_domains) => {
    const domains = _domains || []

    if (!Array.isArray(_domains) || !_domains.length) {
        console.log(colors.red(domainErrMsg))
        return Promise.reject(domainErrMsg)
    }

    if (!isMacOS()) {
        console.log(colors.red(systemErrMSg));
        return Promise.reject(systemErrMSg)
    }

    chmodSync(scriptPath, 755)
    const shell = `sudo osascript ${scriptPath} ${domains.join(',')}`
    try {
        // 1. clear chrome app cache
        fsExtra.removeSync(defaultChromeCacheDir)
        // 2. run shell 
        execSync(shell)
        console.log(colors.green('WebpackDevCacheClearPlugin: cleanup succeeded!'))
        return Promise.resolve()
    } catch (error) {
        console.error(colors.red(error))
        return Promise.reject(error)
    }
}

module.exports = {
    runTask,
    domainErrMsg,
    systemErrMSg
}


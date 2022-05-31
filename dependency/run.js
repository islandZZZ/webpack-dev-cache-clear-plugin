const { execSync } = require('child_process')
const path = require('path')
const colors = require('colors')
const fsExtra = require('fs-extra')
const { chmodSync } = require('fs')
const scriptPath = path.join(__dirname, './applescript/clear.scpt')
const defaultChromeCacheDir = `${process.env.HOME}/Library/Caches/Google/Chrome/Default/Cache`
const errMsg = 'WebpackDevCacheClearPlugin: Domains length must be greater than 0.'

const runTask = async (_domains) => {
    const domains = _domains || []
    
    if (!_domains.length) {
        console.log(colors.red(errMsg))
        return Promise.reject(errMsg)
        return
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
    runTask
}


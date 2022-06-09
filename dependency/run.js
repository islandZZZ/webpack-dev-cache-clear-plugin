const { execSync } = require('child_process')
const path = require('path')
const colors = require('colors')
const fsExtra = require('fs-extra')
const { chmodSync } = require('fs')
const { isMacOS } = require('./util/index')
const { scriptPath, defaultChromeCacheDir, domainErrMsg, systemErrMSg } = require('../constant')

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


import { execSync } from 'child_process'
const colors = require('colors')
const fsExtra = require('fs-extra')
// import fsExtra from 'fs-extra'
import { chmodSync } from 'fs'

import { isMacOS } from './util/index'
import { scriptPath, defaultChromeCacheDir, domainErrMsg, systemErrMsg } from '../constant'

export const runTask = async (_domains) => {
    const domains = _domains || []

    if (!Array.isArray(_domains) || !_domains.length) {
        console.log(colors.red(domainErrMsg))
        return Promise.reject(domainErrMsg)
    }

    if (!isMacOS()) {
        console.log(colors.red(systemErrMsg));
        return Promise.reject(systemErrMsg)
    }

    chmodSync(scriptPath, 777)
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


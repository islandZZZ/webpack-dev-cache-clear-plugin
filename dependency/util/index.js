const path = require('path')
const fs = require('fs')
const { MACOS_SYSTEM, defaultConfigPath } = require('../../constant')

const readFile = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, { flag: 'a+' }, (err, data) => {
            if (err) return reject(console.log(`read file ${path} failed`));
            resolve(data.toString())
        })
    })

}

const getConfig = (path = defaultConfigPath) => {
    return new Promise(async (resolve, reject) => {
        const fileStr = await readFile(path)
        let config = null
        try {
            config = JSON.parse(fileStr)
        } catch (error) {
            config = []
        }
        resolve(config)
    })
}

const setConfig = (arr, path = defaultConfigPath) => {
    const data = JSON.stringify(arr)
    return new Promise((resolve, reject) => {
        fs.writeFile(path, data, (err) => {
            if (err) {
                console.log(err);
                reject(err)
                return
            }
            resolve(data)
        })
    })
}

const isMacOS = () => {
    return require('os').type() === MACOS_SYSTEM
}

module.exports = {
    getConfig,
    setConfig,
    isMacOS,
    MACOS_SYSTEM
}
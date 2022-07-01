import * as fs from 'fs'
import { MACOS_SYSTEM, defaultConfigPath } from '../../constant'

const readFile = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, { flag: 'a+' }, (err, data) => {
            if (err) return reject(console.log(`read file ${path} failed`));
            resolve(data.toString())
        })
    })

}

export const getConfig = (path = defaultConfigPath) => {
    return new Promise(async (resolve, reject) => {
        const fileStr = await readFile(path)
        let config = null
        try {
            config = JSON.parse(fileStr as string)
        } catch (error) {
            config = []
        }
        resolve(config)
    })
}

export const setConfig = (arr, path = defaultConfigPath) => {
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

export const isMacOS = () => {
    return require('os').type() === MACOS_SYSTEM
}


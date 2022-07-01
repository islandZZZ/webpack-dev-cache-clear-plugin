import { runTask } from "../dependency/run"

type OptionsType = {
    domains: Array<string>
}

export interface Options {
    options: OptionsType
}



export class WebpackDevCacheClearPlugin {

    private options: OptionsType

    constructor(options) {
        this.options = options
        this.options.domains = options.domains || []
    }

    apply(compiler) {
        compiler.hooks.beforeRun.tapAsync('WebpackDevCacheClearPlugin', async (compilation, callback) => {
            await runTask(this.options.domains)
            callback()
        })
    }
}


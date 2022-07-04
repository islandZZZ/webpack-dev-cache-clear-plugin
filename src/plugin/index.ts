import { runTask } from "../dependency/run"

export type Options = Record<'domains', Array<String>>

export class WebpackDevCacheClearPlugin {

    private options: Options

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


import { runTask } from "../dependency/run"

export type Options = Record<'domains', Array<String>>

export class WebpackDevCacheClearPlugin {

    private options: Options

    constructor(options) {
        this.options = options
        this.options.domains = options.domains || []
    }

    apply(compiler) {
        compiler.hooks.environment.tap('WebpackDevCacheClearPlugin', () => {
            runTask(this.options.domains)
        })
    }
}


const { runTask } = require("../dependency/run")

module.exports = class WebpackDevCacheClearPlugin {
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


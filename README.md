# webpack-dev-cache-clear-plugin
a webpack plugin for Chrome dns &amp; socket pools cache clearing.


# usage

~~~js
const WebpackDevCacheClearPlugin = require('./plugin/clear-plugin')

module.exports = {
    plugins: [
        new WebpackDevCacheClearPlugin({
            domains: ['a.com', 'b.com']
        })
    ]
}
~~~



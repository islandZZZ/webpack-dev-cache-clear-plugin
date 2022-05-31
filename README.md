# webpack-dev-cache-clear-plugin
a webpack plugin for Chrome dns &amp; socket pools cache clearing.


# usage

~~~
npm i webpack-dev-cache-clear-plugin -D
~~~

~~~js
const WebpackDevCacheClearPlugin = require('webpack-dev-cache-clear-plugin')

module.exports = {
    plugins: [
        new WebpackDevCacheClearPlugin({
            domains: ['test.com']
        })
    ]
}
~~~



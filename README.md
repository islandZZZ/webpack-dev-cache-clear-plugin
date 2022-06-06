# webpack-dev-cache-clear-plugin
a webpack plugin for clearing dns & sockets pool & htsts cache.

## Install
~~~
npm i webpack-dev-cache-clear-plugin -D
~~~

## Usage
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



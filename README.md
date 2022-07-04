# webpack-dev-cache-clear-plugin
a webpack plugin for clearing Chrome dns & socket pools & htsts cache.

## Installation
~~~
npm i webpack-dev-cache-clear-plugin -D
~~~

## Usage
~~~js
const WebpackDevCacheClearPlugin = require('webpack-dev-cache-clear-plugin')

module.exports = {
    plugins: [
        new WebpackDevCacheClearPlugin({
            domains: ['google.com']
        })
    ]
}
~~~



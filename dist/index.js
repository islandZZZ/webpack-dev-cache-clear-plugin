!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r(require("child_process"),require("fs"),require("path"),require("os")):"function"==typeof define&&define.amd?define(["child_process","fs","path","os"],r):(e="undefined"!=typeof globalThis?globalThis:e||self).index=r(e.child_process,e.fs,e.path,e.os)}(this,(function(e,r,o,n){"use strict";function s(e){if(e&&e.__esModule)return e;var r=Object.create(null);return e&&Object.keys(e).forEach((function(o){if("default"!==o){var n=Object.getOwnPropertyDescriptor(e,o);Object.defineProperty(r,o,n.get?n:{enumerable:!0,get:function(){return e[o]}})}})),r.default=e,Object.freeze(r)}var t=s(o);const c=process.env.HOME||n.homedir(),i=t.join(__dirname,"../applescript/clear.scpt"),a=`${process.env.HOME}/Library/Caches/Google/Chrome/Default/Cache`;t.join(c,"node-cache-clear.config.json");const l="WebpackDevCacheClearPlugin: error. domains must be an array with a length greater than 0.",u="WebpackDevCacheClearPlugin: error. only macOS system is supported.",p=require("colors"),d=require("fs-extra"),f=async o=>{const n=o||[];if(!Array.isArray(o)||!o.length)return console.log(p.red(l)),Promise.reject(l);if("Darwin"!==require("os").type())return console.log(p.red(u)),Promise.reject(u);r.chmodSync(i,777);const s=`sudo osascript ${i} ${n.join(",")}`;try{return d.removeSync(a),e.execSync(s),console.log(p.green("WebpackDevCacheClearPlugin: cleanup succeeded!")),Promise.resolve()}catch(e){return console.error(p.red(e)),Promise.reject(e)}};return class{options;constructor(e){this.options=e,this.options.domains=e.domains||[]}apply(e){e.hooks.beforeRun.tapAsync("WebpackDevCacheClearPlugin",(async(e,r)=>{await f(this.options.domains),r()}))}}}));

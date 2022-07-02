import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser' // 输出代码压缩
import replace from '@rollup/plugin-replace' // 将代码中设置的变量进行替换

const mode = process.env.MODE;
const isProd = mode === 'prod';
const pkg = require('./package.json');

export default {
    input: `src/index.ts`,
    output: {
        file: pkg.main,
        format: 'umd',
        name: 'index',
        sourcemap: !isProd,
        plugins: [terser()] 
    },
    plugins: [
        typescript({
            useTsconfigDeclarationDir: true,
            tsconfigOverride: { compilerOptions: { sourceMap: !isProd } }
        }),
        replace()
    ]
}
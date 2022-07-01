import typescript from 'rollup-plugin-typescript2';

const mode = process.env.MODE;
const isProd = mode === 'prod';
const pkg = require('./package.json');

export default {
    input: `src/index.ts`,
    output: {
        file: pkg.main,
        format: 'umd',
        name:'index',
        sourcemap: !isProd
    },
    plugins: [
        typescript({
            useTsconfigDeclarationDir: true,
            tsconfigOverride: { compilerOptions: { sourceMap: !isProd } }
        })
    ]
}
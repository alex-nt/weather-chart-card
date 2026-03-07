import { nodeResolve } from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import { copy } from '@web/rollup-plugin-copy'
import serve from 'rollup-plugin-serve'

const dev = process.env.ROLLUP_WATCH

const serveopts = {
    contentBase: ['./dist'],
    host: '0.0.0.0',
    port: 5001,
    allowCrossOrigin: true,
    headers: {
        'Access-Control-Allow-Origin': '*',
    },
}

export default {
    input: 'src/main.js',
    output: {
        file: 'dist/weather-chart-card-fork.js',
        format: 'cjs',
        name: 'WeatherChartCard',
        sourcemap: dev ? true : false,
    },
    plugins: [
        nodeResolve(),
        copy({ patterns: 'icons/**', rootDir: './src' }),
        copy({ patterns: 'icons2/**', rootDir: './src' }),
        replace({
            '"weather-chart-card"': '"weather-chart-card-fork"',
            '"weather-chart-card-editor"': '"weather-chart-card-fork-editor"',
            "'weather-chart-card'": '"weather-chart-card-fork"',
            "'weather-chart-card-editor'": '"weather-chart-card-fork-editor"',
        }),
        dev && serve(serveopts),
    ],
}

import { nodeResolve } from '@rollup/plugin-node-resolve';
import { copy } from '@web/rollup-plugin-copy';
import replace from '@rollup/plugin-replace';

const serveopts = {
    contentBase: ['./dist'],
    host: '0.0.0.0',
    port: 5000,
    allowCrossOrigin: true,
    headers: {
        'Access-Control-Allow-Origin': '*',
    },
};

export default {
    input: 'src/main.js',
    output: {
        file: 'dist/weather-chart-card.js',
        format: 'cjs',
        name: 'WeatherChartCard',
        sourcemap: false,
    },
    plugins: [
        nodeResolve(),
        copy({ patterns: 'icons/**', rootDir: './src' }),
        copy({ patterns: 'icons2/**', rootDir: './src' }),
    ],
};

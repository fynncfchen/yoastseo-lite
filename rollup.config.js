const progress = require('rollup-plugin-progress');
const babel = require('rollup-plugin-babel');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const json = require('@rollup/plugin-json');

module.exports = {
  input: 'index.js',
  output: [
    {
      file: 'dist/index.js',
      sourcemap: true,
      format: 'cjs',
    },
    {
      file: 'dist/index.es.js',
      sourcemap: true,
      format: 'es',
    },
  ],
  plugins: [
    progress(),
    babel({
      exclude: 'node_modules/**',
      include: 'node_modules/lodash-es/**',
    }),
    resolve({
      preferBuiltins: true,
    }),
    commonjs(),
    json(),
  ],
  external: ['util', 'url', 'htmlparser2'],
};

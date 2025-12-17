import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/address-parse.umd.js',
      format: 'umd',
      name: 'AddressParse',
      exports: 'named'
    },
    {
      file: 'dist/address-parse.umd.min.js',
      format: 'umd',
      name: 'AddressParse',
      exports: 'named',
      plugins: [terser()]
    },
    {
      file: 'dist/address-parse.esm.js',
      format: 'es'
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    json()
  ]
};

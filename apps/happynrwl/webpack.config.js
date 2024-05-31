const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');
const { join } = require('path');

// q: How do i add the type webpack config?
// a: You can add the type to the module.exports like this:
// module.exports: import { Configuration } from 'webpack';
/**
 * @type {import('webpack').WebpackOptionsNormalized}
 */

let config = {
  output: {
    // Relative to projectRoot
    path: join(__dirname, '../../dist/apps/happynrwl'),
  },
  plugins: [
    new NxAppWebpackPlugin({
      compiler: 'babel',
      index: './src/index.html',
      baseHref: '/',
      main: './src/main.tsx',
      tsConfig: './tsconfig.app.json',
      assets: ['./src/favicon.ico', './src/assets'],
      styles: ['./src/styles.scss'],
      scripts: [],
    }),
  ],
};

module.exports = config;
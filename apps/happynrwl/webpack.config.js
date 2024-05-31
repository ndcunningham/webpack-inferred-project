const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');
const { join } = require('path');

const configValues = {
    build: {
        default: {
            extractLicenses: false,
            optimization: false,
            sourceMap: true,
            vendorChunk: true
        },
        production: {
            optimization: true,
            outputHashing: "all",
            sourceMap: false,
            namedChunks: false,
            extractLicenses: true,
            vendorChunk: false
        },
        serve: {
            default: {
                hot: true
            },
            production: {
                hot: false
            
            }
        }
    }
}

const nxTarget = process.env.NX_TASK_TARGET_NAME ?? 'build';
const nxConfiguration = process.env.NX_TASK_CONFIGURATION_NAME ?? 'default';
/**
 * @type {import('webpack').WebpackOptionsNormalized}
 */
let config = {
  output: {
    path: join(__dirname, '../../dist/apps/happynrwl'),
  },
  devServer: {
    port: 4200,
    ...configValues['serve'][nxConfiguration]
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
       ...configValues[nxTarget][nxConfiguration]
    }),
  ],
};

module.exports = config;
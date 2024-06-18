const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');
const { NxReactWebpackPlugin } = require('@nx/react/webpack-plugin');
const { useLegacyNxPlugin } = require('@nx/webpack');

// This file was migrated using @nx/webpack:convert-config-to-webpack-plugin from your './webpack.config.old.js'
// Please check that the options here are correct as they were moved from the old webpack.config.js to this file.
const options = {
  build: {
    // These options are the default values for the build target (taken from project.json file which has the default to be production)
    default: {
      compiler: 'babel',
      outputPath: '../../dist/apps/happynrwl',
      index: './src/index.html',
      baseHref: '/',
      main: './src/main.tsx',
      tsConfig: './tsconfig.app.json',
      assets: ['./src/favicon.ico', './src/assets'],
      styles: ['./src/styles.scss'],
      scripts: [],
      optimization: true,
      outputHashing: 'all',
      sourceMap: false,
      namedChunks: false,
      extractLicenses: true,
      vendorChunk: false,
    },
    development: {
      extractLicenses: false,
      optimization: false,
      sourceMap: true,
      vendorChunk: true,
    },
  },
  serve: {
    default: {
      port: 4200,
      host: 'localhost',
      open: false,
      liveReload: true,
      hot: true,
      // These options below would be provided from project.json file if they are not present they should not be added
      // server: {
      //   type: 'https',
      //   default: {
      //     key: './ssl/server.key',
      //     cert: './ssl/server.crt',
      //   },
      //   proxy:[
      //     {
      //       context: ['/api'],
      //       target: 'http://localhost:3333',
      //       secure: false
      //     }
      //   ]
      // }
    },
    production: {
      hot: false,
    },
  },
};

const configuration = process.env.NX_TASK_TARGET_CONFIGURATION || 'production';

/**
 * @type{import('webpack').WebpackOptionsNormalized}
 */
module.exports = async () => ({
  devServer: {
    ...options.serve.default,
    ...options.serve[configuration],
  },
  plugins: [
    new NxAppWebpackPlugin({
      ...options.build.default,
      ...options['build'][configuration],
    }),
    new NxReactWebpackPlugin({
      // Uncomment this line if you don't want to use SVGR
      // See: https://react-svgr.com/
      // svgr: false
    }),
    // eslint-disable-next-line react-hooks/rules-of-hooks
    await useLegacyNxPlugin(require('./webpack.config.old'), {
      ...options.build.default,
      ...options['build'][configuration],
    }),
  ],
});

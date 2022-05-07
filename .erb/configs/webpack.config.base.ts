/**
 * Base webpack config used across other specific configs
 */
import path from 'path';
import webpack from 'webpack';
import webpackPaths from './webpack.paths';
import { dependencies as externals } from '../../release/app/package.json';
import overideTheme from '../../src/renderer/config-color';

const configuration: webpack.Configuration = {
  externals: [...Object.keys(externals || {})],

  stats: 'errors-only',

  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            // Remove this line to enable type checking in webpack builds
            transpileOnly: true,
          },
        },
      },
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
                modifyVars: overideTheme,
              },
            },
          },
        ],
      },
    ],
  },

  output: {
    path: path.join(__dirname, '../../src'),
    // https://github.com/webpack/webpack/issues/1114
    library: {
      type: 'commonjs2',
    },
  },

  /**
   * Determine the array of extensions that should be used to resolve modules.
   */
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    modules: [path.join(__dirname, '../../src'), 'node_modules'],
    fallback: {
      path: require.resolve('path-browserify'),
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify'),
      fs: false,
      buffer: require.resolve("buffer"),
    },
  },

  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ["buffer", "Buffer"],
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production',
    }),
    new webpack.DefinePlugin({
      'process.env.PATH_ENV': JSON.stringify(path.join(__dirname, '../../'))
  })
  ],
  node: {
    __dirname: true,
    __filename: true,
  },
};

export default configuration;

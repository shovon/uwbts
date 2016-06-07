import * as webpack from 'webpack';
import * as path from 'path';
import * as WebpackIsomorphicToolsPlugin from 'webpack-isomorphic-tools/plugin';
import webpackIsomorphicToolsConfiguration from './webpack-isomorphic-tools-configuration';

const webpackIsomorphicToolsPlugin =
  new WebpackIsomorphicToolsPlugin(webpackIsomorphicToolsConfiguration)
    .development();

console.log('From webpack config');

export default {
  context: path.resolve(__dirname, '..'),
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'app.bundle.js'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.ts', '.tsx', '.js']
  },
  module: {
    loaders: [
      { test: /.tsx?$/, loader: 'ts' }
    ]
  },
  plugins: [
    webpackIsomorphicToolsPlugin
  ]
};
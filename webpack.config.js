const webpack = require('webpack');
const path = require('path');
const WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');
const webpackIsomorphicToolsConfiguration =
  require('./src/webpack-isomorphic-tools-configuration')

const webpackIsomorphicToolsPlugin =
  new WebpackIsomorphicToolsPlugin(webpackIsomorphicToolsConfiguration)
    .development();

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.tsx',
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

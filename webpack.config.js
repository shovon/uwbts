const webpack = require('webpack');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: './public',
    filename: 'app.bundle.js'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.ts', '.tsx', '.js']
  },
  module: {
    loaders: [
      { test: /.tsx?$/, loader: 'ts' }
    ]
  }
};

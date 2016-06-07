import * as webpack from 'webpack';
import * as path from 'path';

export default {
  context: path.resolve(__dirname, '../../src'),
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
  }
};

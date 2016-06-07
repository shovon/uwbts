import WebpackDevServer = require('webpack-dev-server');
import * as webpack from 'webpack';
import config from './webpack.config';
import * as path from 'path';

const compiler = webpack(config);

const server = new WebpackDevServer(compiler, {
  hot: true,
  contentBase: path.resolve(__dirname, '../../public'),
  proxy: {
    '*': 'http://localhost:3000'
  }
});

server.listen(8080, 'localhost', function () {
  console.log(this.address());
});

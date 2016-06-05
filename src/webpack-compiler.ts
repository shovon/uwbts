import * as webpack from 'webpack';
import configuration from './webpack/webpack.config';
import * as webpackDevMiddleware from 'webpack-dev-middleware';

const compiler = webpack(configuration);
export default compiler;

export const webpackMiddleware = webpackDevMiddleware(compiler, {
  lazy: true
});

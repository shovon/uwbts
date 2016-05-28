declare module 'webpack-dev-server' {
  import * as webpack from 'webpack';
  class WebpackDevServer {
    constructor(webpack: webpack.compiler.Compiler, options?: any);

    listen(port: number, host: string, callback: Function): void;
    listen(port: number, callback: Function): void;
  }

  export = WebpackDevServer;
}

declare module 'webpack-dev-middleware' {
  import * as webpack from 'webpack';
  import * as express from 'express';

  type options = any;

  type webpackDevMiddleware = (compiler: webpack.compiler.Compiler, o?: options) => express.Router;

  var _webpackDevMiddleware : webpackDevMiddleware;

  export = _webpackDevMiddleware;
}

// TODO: separate these definitions out, so that they are easier to find.

declare module 'webpack-isomorphic-tools' {
  interface WebpackIsomorphicToolsConfiguration {

  }

  class WebpackIsomorphicTools {
    constructor(configuration: WebpackIsomorphicToolsConfiguration);
    development(isDevelopment: boolean): WebpackIsomorphicTools;
    server(path: string): Promise<any>;
  }

  var _WebpackIsomorphicTools: new (configuration: WebpackIsomorphicToolsConfiguration) => WebpackIsomorphicTools;

  export = _WebpackIsomorphicTools;
}

declare module NodeJS {
  interface Global {
    webpackIsomorphicTools: any;
  }
}

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

declare var _development_: any;

declare module _WebpackIsomorphicTools {
  class WebpackIsomorphicTools {
    development(shouldBeInDevelopment: boolean): WebpackIsomorphicTools
    server(path: string, callback: Function): void
    refresh(): void
  }
}

declare var webpackIsomorphicTools: _WebpackIsomorphicTools.WebpackIsomorphicTools;

declare module 'serialize-javascript' {
  var toExport: any;
  export = toExport;
}

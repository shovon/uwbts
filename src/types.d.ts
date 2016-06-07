// TODO: separate these definitions out, so that they are easier to find.

declare module WebpackIsomorphicTools {
  interface WebpackIsomorphicToolsConfiguration {}
}

declare module 'webpack-isomorphic-tools' {
  class WebpackIsomorphicTools {
    constructor(configuration: WebpackIsomorphicTools.WebpackIsomorphicToolsConfiguration);
    development(isDevelopment: boolean): WebpackIsomorphicTools;
    server(path: string): Promise<any>;
  }

  var _WebpackIsomorphicTools: new (configuration: WebpackIsomorphicTools.WebpackIsomorphicToolsConfiguration) => WebpackIsomorphicTools;

  export = _WebpackIsomorphicTools;
}

declare module 'webpack-isomorphic-tools/plugin' {
  class WebpackIsomorphicToolsPlugin {
    constructor(configuration: WebpackIsomorphicTools.WebpackIsomorphicToolsConfiguration);
    development(isDevelopment?: boolean): WebpackIsomorphicToolsPlugin;
  }

  var _WebpackIsomorphicToolsPlugin: new (configuration: WebpackIsomorphicTools.WebpackIsomorphicToolsConfiguration) => WebpackIsomorphicToolsPlugin;

  export = _WebpackIsomorphicToolsPlugin;
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

declare module 'webpack-hot-middleware' {
  import * as webpack from 'webpack';
  import * as express from 'express';

  type webpackHotMiddleware = (compiler: webpack.compiler.Compiler) => express.Router;

  var _webpackHotMiddleware : webpackHotMiddleware;

  export = _webpackHotMiddleware;
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

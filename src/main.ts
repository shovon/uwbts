import * as WebpackIsomorphicTools from 'webpack-isomorphic-tools';
import * as path from 'path';
import webpackIsomorphicToolsConfiguration from './webpack-isomorphic-tools-configuration';
import './webpack-compiler';

// In order for this to work, we need to generate a webpack-stat.json file.
// Without it, Webpack will continue polling for that file.
//
// In order to generate it, we need to initialize a webpack compiler, with
// an instance of WebpackIsomorphicToolsPlugin initialized, and passed-in as
// a plugin.

const projectBasePath = path.resolve(__dirname, './');

global.webpackIsomorphicTools =
  new WebpackIsomorphicTools(webpackIsomorphicToolsConfiguration)
    .development(!/(production|staging)/.test(process.env.NODE_ENV || 'development'));

global.webpackIsomorphicTools
  .server(projectBasePath).then(() => {
    require('./server')
  });

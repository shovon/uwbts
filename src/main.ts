import * as WebpackIsomorphicTools from 'webpack-isomorphic-tools';
import * as path from 'path';
import webpackIsomorphicToolsConfiguration from './webpack-isomorphic-tools-configuration';
import './webpack-compiler';

const projectBasePath = path.resolve(__dirname, './');

global.webpackIsomorphicTools =
  new WebpackIsomorphicTools(webpackIsomorphicToolsConfiguration)
    .development(!/(production|staging)/.test(process.env.NODE_ENV || 'development'));

global.webpackIsomorphicTools
  .server(projectBasePath).then(() => {
    require('./server')
  });

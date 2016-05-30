import * as WebpackIsomorphicTools from 'webpack-isomorphic-tools';
import * as path from 'path';
import webpackIsomorphicToolsConfiguration from './webpack-isomorphic-tools-configuration';

const projectBasePath = path.resolve(__dirname, './');

var webpack = require('webpack');

global.webpackIsomorphicTools =
  new WebpackIsomorphicTools(webpackIsomorphicToolsConfiguration)
    .development(!/(production|staging)/.test(process.env.NODE_ENV || 'development'))
    .server(projectBasePath).then(() => {
      require('./server')
    });

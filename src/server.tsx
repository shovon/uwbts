import * as React from 'react';
import * as express from 'express';
import { renderToStaticMarkup } from 'react-dom/server';
import { match, RouterContext, Router } from 'react-router'
import routes from './routes';
import getStateElementCreator from './getStateElementCreator';
import * as webpack from 'webpack';
import * as webpackDevMiddleware from 'webpack-dev-middleware';
import * as webpackHotMiddleware from 'webpack-hot-middleware';
import * as path from 'path';
import webpackConfig from './webpack/webpack.config';

const publicPath = path.resolve(__dirname, '..', 'public');

const app = express();

class HTML extends React.Component<{}, {}> {
  render() {
    return (
      <html lang='en'>
        <head>
          <meta charSet='utf-8' />
          <title>Some Example Crud Application</title>

          {/* TODO: grab assets from webpack. */}
          <link rel='stylesheet' href='bootstrap-3.3.6-dist/css/bootstrap.css' />
        </head>

        <body>
          {/*
              TODO: consider "dangerously setting" the inner HTML of the
              `<div id="application"></div>` tag.
          */}
          <div id='application'>{this.props.children}</div>

          {/* TODO: grab assets from webpack. */}
          <script src='app.bundle.js'></script>
        </body>
      </html>
    );
  }
}

app.use(express.static(publicPath));

app.get('*', (req, res, next) => {
  if (!req.accepts('html')) {
    next();
  }

  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      const props = renderProps;
      res
        .status(200)
        .send(`
          <!doctype html>
          ${renderToStaticMarkup(
            <HTML>
              <RouterContext
                router={Router}
                createElement={getStateElementCreator({})}
                {...renderProps} />
            </HTML>
          )}
        `)
    } else {
      // TODO: this is not entirely correct. Return a rendered page instead.
      res.status(404).send('Not found')
    }
  });
});

app.listen(3000 || process.env.PORT, function () {
  console.log(this.address());
});

import * as React from 'react';
import * as express from 'express';
import { renderToString } from 'react-dom/server';
import { match, RouterContext, Router } from 'react-router'
import routes from './routes';
import getStateElementCreator from './getStateElementCreator';
import * as webpack from 'webpack';
import * as webpackDevMiddleware from 'webpack-dev-middleware';
import * as path from 'path';

const configuration = require('../webpack.config');
const publicPath = path.resolve(__dirname, '..', 'public');

const app = express();

console.log(configuration);
const compiler = webpack(configuration);

class HTML extends React.Component<{}, {}> {
  render() {
    return (
      <html lang='en'>
        <head>
          <meta charSet='utf-8' />
          <title>Some Example Crud Application</title>
          <link rel='stylesheet' href='bootstrap-3.3.6-dist/css/bootstrap.css' />
        </head>

        <body>
          <div id='application'>{this.props.children}</div>
          <script src='app.bundle.js'></script>
        </body>
      </html>
    );
  }
}

app.use(express.static(publicPath));

if (!/(production|staging)/.test(process.env.NODE_ENV)) {
  app.use(webpackDevMiddleware(compiler, {
    lazy: true
  }));
}

// TODO: return HTML, instead.
app.get('*', (req, res) => {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      const props = renderProps;
      // You can also check renderProps.components or renderProps.routes for
      // your "not found" component or route respectively, and send a 404 as
      // below, if you're using a catch-all route.
      res
        .status(200)
        .send(`
          <!doctype html>
          ${renderToString(
            <HTML>
              <RouterContext
                router={Router}
                createElement={getStateElementCreator({})}
                {...renderProps} />
            </HTML>
          )}
        `)
    } else {
      res.status(404).send('Not found')
    }
  })
});

app.listen(3000 || process.env.PORT, function () {
  console.log(this.address());
});

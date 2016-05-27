import * as React from 'react';
import * as express from 'express';
import { renderToString } from 'react-dom/server';
import { match, RouterContext, Router } from 'react-router'
import routes from './routes';
import getStateElementCreator from './getStateElementCreator';

const app = express();

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
      res.status(200).send(renderToString(
        <RouterContext
          router={Router}
          createElement={getStateElementCreator({})}
          {...renderProps} />
      ))
    } else {
      res.status(404).send('Not found')
    }
  })
});

app.listen(3000 || process.env.PORT, function () {
  console.log(this.address());
});

import * as React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import App from './components/App';
import NotFound from './components/NotFound';
import Root from './components/Root';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Root} />
    <Route path='notfound' component={NotFound} />
    <Redirect from='*' to='notfound' />
  </Route>
);

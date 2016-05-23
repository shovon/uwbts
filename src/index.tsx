import * as React from 'react';
import { Component } from 'react';
import ReactDOM = require('react-dom');
import App from './components/App';
import * as redux from 'redux';
import { store, IState } from './store';
import { dispatchers } from './dispatch';
import history from './history';
import { Router, Route, Redirect, IndexRoute } from 'react-router';
import NotFound from './components/NotFound';
import Root from './components/Root';

type ComponentType = (props: { state: IState }) => JSX.Element;

const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Root} />
    <Route path='notfound' component={NotFound} />
    <Redirect from='*' to='notfound' />
  </Route>
);

function render(state: IState): void {
  const createElement = (Comp: ComponentType, props: any) =>
    <Comp {...props} state={store.getState()} />

  ReactDOM.render(
    <Router history={history} routes={routes} createElement={createElement} />,
    document.getElementById('application')
  );
}

function bootstrap() {
  store.subscribe(state => {
    render(state);
  });

  render(store.getState());

  history.listen(location => {
    dispatchers.setLocation(location);
  });
}

bootstrap();

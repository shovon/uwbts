import * as React from 'react';
import { Component } from 'react';
import ReactDOM = require('react-dom');
import * as redux from 'redux';
import { store, IState } from './store';
import { dispatchers } from './dispatch';
import { Router, Route, Redirect, IndexRoute } from 'react-router';
import routes from './routes';
import getStateElementCreator from './getStateElementCreator';
import { browserHistory } from 'react-router';

type ComponentType = (props: { state: IState }) => JSX.Element;

function render(state: IState): void {
  const createElement = getStateElementCreator(store.getState());

  ReactDOM.render(
    <Router
      history={browserHistory}
      routes={routes}
      createElement={createElement} />,
    document.getElementById('application')
  );
}

function bootstrap() {
  store.subscribe(state => {
    render(state);
  });

  render(store.getState());
}

bootstrap();

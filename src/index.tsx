import * as React from 'react';
import { Component } from 'react';
import ReactDOM = require('react-dom');
import App from './components/App';
import * as redux from 'redux';
import { store, IState } from './store';
import { dispatchers } from './dispatch';
import history from './history';
import { Router, Route } from 'react-router';

type ComponentType = (props: { state: IState }) => JSX.Element;

history.listen(location => { console.log(location); });

const createElement = (Comp: ComponentType, props: any) =>
  <Comp {...props} state={store.getState()} />

ReactDOM.render(
  <Router history={history} createElement={createElement}>
    <Route path='/' component={App}></Route>
  </Router>,
  document.getElementById('application')
);

// function render(state: IState): void {
//   ReactDOM.render(
//     <App state={state} />,
//     document.getElementById('application')
//   );
// }
//
// function bootstrap() {
//   store.subscribe(state => {
//     render(state);
//   });
//
//   render(store.getState());
//
//   history.listen(location => {
//     dispatchers.setLocation(location);
//   });
//
//   dispatchers.setLocation(history.getCurrentLocation());
// }
//
// bootstrap();

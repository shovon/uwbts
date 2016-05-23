import React = require('react');
import ReactDOM = require('react-dom');
import App from './components/App';
import * as redux from 'redux';
import { store, IState } from './store';
import { dispatchers } from './dispatch';
import history from './history';

function render(state: any): void {
  ReactDOM.render(
    <App />,
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

  dispatchers.setLocation(history.getCurrentLocation());
}

bootstrap();

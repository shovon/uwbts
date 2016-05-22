import React = require('react');
import ReactDOM = require('react-dom');
import App from './components/App';
import { createStore, combineReducers } from 'redux';

const store = createStore(
  (state = null, action: any) => state
);

function render(state: any): void {
  ReactDOM.render(
    <App />,
    document.getElementById('application')
  );
}

store.subscribe(state => {
  render(state);
});

render(store.getState());

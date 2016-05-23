import route, { IRouteState } from './modules/route';
import { createStore, combineReducers } from 'redux';

export interface IState {
  route: IRouteState
}

export const store = createStore<IState>(
  combineReducers({
    route
  })
);

import { createStore, IAction } from 'redux';

export interface IState {
}

export const store = createStore<IState>(
  (state: IState, action: IAction) => ({
  })
);

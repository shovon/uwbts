import { setLocation } from './modules/route';
import { store, IState } from './store';
import { Location } from 'history';

export interface IDispatchers {
  setLocation: (location: Location) => void
}

export const dispatchers: IDispatchers = {
  setLocation(location: Location) {
    store.dispatch(setLocation(location));
  }
};

import { setLocation } from './modules/route';
import { store, IState } from './store';

export interface IDispatchers {
  setLocation: (location: HistoryModule.Location) => void
}

export const dispatchers: IDispatchers = {
  setLocation(location: HistoryModule.Location) {
    store.dispatch(setLocation(location));
  }
};

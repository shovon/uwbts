import * as _ from 'lodash';
// import { Location } from 'react-router/history';

export interface IRouteState {
  location: HistoryModule.Location
}

type SET_LOCATION = 'route/SET_LOCATION';
const SET_LOCATION: SET_LOCATION = 'route/SET_LOCATION';

const defaultState: IRouteState = {
  location: {
    pathname: '',
    search: '',
    query: {},
    state: {},
    action: '',
    key: ''
  }
};

interface IRouteAction {
  type: SET_LOCATION
}

interface ISetPathnameAction extends IRouteAction {
  type: SET_LOCATION,
  location: HistoryModule.Location
}

export default function reducer(state = defaultState, action: IRouteAction): IRouteState {
  switch (action.type) {
  case SET_LOCATION:
    return _.assign(
      {},
      state,
      { location: _.assign({}, (action as ISetPathnameAction).location) }
    ) as IRouteState;
  default:
    return state
  }
}

export const setLocation = (location: HistoryModule.Location): ISetPathnameAction => ({
  type: SET_LOCATION,
  location
});

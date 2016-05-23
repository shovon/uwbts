import * as _ from 'lodash';
import { Location } from 'history';

let foo: Location;

export interface IRouteState {
  location: Location
}

type SET_LOCATION = 'route/SET_LOCATION';
const SET_LOCATION: SET_LOCATION = 'route/SET_LOCATION';

const defaultState: IRouteState = {
  location: {}
};

interface IRouteAction {
  type: SET_LOCATION
}

interface ISetPathnameAction extends IRouteAction {
  type: SET_LOCATION,
  location: Location
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

export const setLocation = (location: Location): ISetPathnameAction => ({
  type: SET_LOCATION,
  location
});

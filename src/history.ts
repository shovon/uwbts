import { browserHistory } from 'react-router';

const history = browserHistory;

export const getRootPath = (location: Location) =>
  `/${location.pathname.split('/')[0]}`

export const getChildPath = (location: Location) =>
  location.pathname.split('/').slice(1);

export default history;

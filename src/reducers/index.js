import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { routeList } from './routes';

const createRootReducers = (history) => {
  return combineReducers({
    router: connectRouter(history),
    routeList,
  });
};

export default createRootReducers;

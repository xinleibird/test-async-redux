import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { routes } from './routes';

const createRootReducers = (history) => {
  return combineReducers({
    router: connectRouter(history),
    routes,
  });
};

export default createRootReducers;

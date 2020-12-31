import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { routes } from './routes';
import { login } from './login';
import { user } from './user';

const createRootReducers = (history) => {
  return combineReducers({
    router: connectRouter(history),
    routes,
    login,
    user,
  });
};

export default createRootReducers;

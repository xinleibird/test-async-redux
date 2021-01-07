import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { routes } from './routes';
import { login } from './login';
import { user } from './user';
import { admin } from './admin';

const createRootReducers = (history) => {
  return combineReducers({
    router: connectRouter(history),
    routes,
    login,
    user,
    admin,
  });
};

export default createRootReducers;

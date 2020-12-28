import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { officerList } from './officer';
import { login } from './user';

const createRootReducers = (history) => {
  return combineReducers({
    router: connectRouter(history),
    officerList,
    login,
  });
};

export default createRootReducers;

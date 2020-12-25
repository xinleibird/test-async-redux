import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { officerList } from './officer';

const createRootReducers = (history) => {
  return combineReducers({
    router: connectRouter(history),
    officerList,
  });
};

export default createRootReducers;

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { officerList } from './officer';
import { sidebar } from './sidebar';

const createRootReducers = (history) => {
  return combineReducers({
    router: connectRouter(history),
    officerList,
    sidebar,
  });
};

export default createRootReducers;

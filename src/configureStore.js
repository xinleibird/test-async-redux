import { createBrowserHistory } from 'history';
import { createStore, compose, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createRootReducers from './reducers';
import thunk from 'redux-thunk';

export const history = createBrowserHistory();

const configureStore = (preloadState) => {
  const store = createStore(
    createRootReducers(history),
    preloadState,
    compose(applyMiddleware(routerMiddleware(history), thunk))
  );

  return store;
};

export default configureStore;

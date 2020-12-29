import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import configureStore, { history } from './configureStore';
import { ConnectedRouter } from 'connected-react-router';
import BasicLayout from './layouts/BasicLayout';

const store = configureStore({});
const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <>
          <BasicLayout />
        </>
      </ConnectedRouter>
    </Provider>
  );
};

export default App;

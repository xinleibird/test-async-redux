import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Authentication from './components/Authentication';
import configureStore, { history } from './configureStore';
import './index.css';
import BasicLayout from './layouts/BasicLayout';

const store = configureStore({});

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Authentication>
          <BasicLayout />
        </Authentication>
      </ConnectedRouter>
    </Provider>
  );
};

export default App;

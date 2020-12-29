import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import configureStore, { history } from './configureStore';
import { Route } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import Login from './pages/login';
import UserInfo from './pages/user';
import SideBar from './components/sidebar';

const store = configureStore({});
const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <>
          <SideBar />
          {/* <Route path="/user" exact component={UserInfo} />
          <Route component={Login} /> */}
        </>
      </ConnectedRouter>
    </Provider>
  );
};

export default App;

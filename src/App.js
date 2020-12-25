import React from 'react';
import './App.css';
import { Provider, useDispatch, useSelector } from 'react-redux';
import configureStore, { history } from './configureStore';
import { Route } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { queryOfficerList } from './actions/officer';

const store = configureStore({});

const Test = () => {
  const dispatch = useDispatch();
  const { officerList } = useSelector(({ officerList }) => {
    return { officerList };
  });

  const { atDoor, atBuilding } = officerList;
  return (
    <>
      <button
        onClick={() => {
          dispatch(queryOfficerList());
        }}
      >
        query
      </button>
      <h3>守门的</h3>
      <ul>
        {Object.entries(atDoor).map(([key, value]) => {
          return <li key={key}>{value.name}</li>;
        })}
      </ul>
      <h3>守楼的</h3>
      <ul>
        {Object.entries(atBuilding).map(([key, value]) => {
          return <li key={key}>{value.name}</li>;
        })}
      </ul>
    </>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <>
          <Route component={Test} />
        </>
      </ConnectedRouter>
    </Provider>
  );
};

export default App;

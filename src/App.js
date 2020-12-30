import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import BasicLayout from './layouts/BasicLayout';

const App = () => {
  const authenticated = useSelector(({ login }) => {
    console.log(login);
    return login.authenticated;
  });
  return <BasicLayout authenticated={authenticated} />;
};

export default App;

import React from 'react';
import { useSelector } from 'react-redux';

const Authentication = ({ children }) => {
  const authenticated = useSelector(({ login }) => {
    return login.authenticated;
  });

  return React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { authenticated });
    }
    return child;
  });
};

export default Authentication;

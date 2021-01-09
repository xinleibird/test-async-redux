import React from 'react';
import { useSelector } from 'react-redux';

const Authentication = ({ children }) => {
  const authenticated = useSelector(({ login }) => {
    return login.authenticated;
  });
  const role = useSelector(({ login }) => {
    return login.role;
  });

  return React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { authenticated, role });
    }
    return child;
  });
};

export default Authentication;

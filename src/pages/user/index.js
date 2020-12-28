import React from 'react';
import { useSelector } from 'react-redux';

const UserInfo = () => {
  const login = useSelector(({ login }) => {
    return login;
  });
  return <p>{`${login}`}</p>;
};

export default UserInfo;

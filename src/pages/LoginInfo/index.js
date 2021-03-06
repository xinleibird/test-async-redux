import React from 'react';
import { useSelector } from 'react-redux';
import { Descriptions } from 'antd';

const LoginInfo = () => {
  const login = useSelector(({ login }) => {
    return login;
  });

  return (
    <Descriptions title="用户信息">
      <Descriptions.Item label="用户名">{login.username}</Descriptions.Item>
      <Descriptions.Item label="角色">{login.role}</Descriptions.Item>
    </Descriptions>
  );
};

export default LoginInfo;

import React from 'react';
import { useSelector } from 'react-redux';
import { Descriptions } from 'antd';

const UserInfo = () => {
  const login = useSelector(({ login }) => {
    return login;
  });

  console.log(login);
  return (
    <Descriptions title="用户信息">
      <Descriptions.Item label="用户名">{login.username}</Descriptions.Item>
      <Descriptions.Item label="姓名">{login.name}</Descriptions.Item>
      <Descriptions.Item label="登录地址">{login.remoteAddress}</Descriptions.Item>
    </Descriptions>
  );
};

export default UserInfo;

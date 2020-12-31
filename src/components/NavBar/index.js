import React, { useMemo } from 'react';
import { Dropdown, Menu, Avatar, Row, Col } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import { setUserLoginState } from '../../actions';

const logoResponse = {
  xs: 16,
  sm: 8,
  md: 3,
};

const iconResponse = {
  xs: { offset: 7 },
  sm: { offset: 15 },
  md: { offset: 20 },
};

const NavBar = () => {
  const username = useSelector(({ login }) => {
    return login.username;
  });

  const dispatch = useDispatch();
  const SubMenu = useMemo(() => {
    return (
      <Menu>
        <Menu.Item
          onClick={() => {
            dispatch(push('/user'));
          }}
        >
          用户信息
        </Menu.Item>
        <Menu.Item
          onClick={() => {
            dispatch(setUserLoginState(false));
          }}
        >
          退出登录
        </Menu.Item>
      </Menu>
    );
  }, [dispatch]);

  return (
    <>
      <Row>
        <Col {...logoResponse}>
          <h1 style={{ color: 'white' }}>LOGO</h1>
        </Col>

        <Col span={1} {...iconResponse}>
          <Dropdown overlay={SubMenu}>
            <button
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer',
                display: 'inline',
                margin: 0,
                padding: 0,
                outline: 0,
              }}
            >
              <Avatar style={{ backgroundColor: '#87d068' }}>{username}</Avatar>
            </button>
          </Dropdown>
        </Col>
      </Row>
    </>
  );
};

export default NavBar;

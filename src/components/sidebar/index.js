import React from 'react';
import { Menu } from 'antd';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { push } from 'connected-react-router';

const SideBar = () => {
  const sidebarState = useSelector(({ routeList }) => {
    return routeList;
  });

  const dispatch = useDispatch();

  const loopSideBar = (arr) => {
    return arr.map((item) => {
      if (item.path === '/login') {
        return;
      }
      if (item.routes) {
        return (
          <Menu.SubMenu key={item.path} title={item.title}>
            {loopSideBar(item.routes)}
          </Menu.SubMenu>
        );
      }

      return (
        <Menu.Item
          key={item.path}
          onClick={() => {
            dispatch(push('/user'));
          }}
        >
          {item.title}
        </Menu.Item>
      );
    });
  };

  return (
    <>
      <Menu theme="dark" mode="inline">
        {loopSideBar(sidebarState)}
      </Menu>
    </>
  );
};

export default SideBar;

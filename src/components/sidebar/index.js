import React from 'react';
import { Menu } from 'antd';
import { useSelector, useStore } from 'react-redux';

const SideBar = () => {
  const sidebarState = useSelector(({ routeList }) => {
    return routeList;
  });

  const loopSideBar = (arr) => {
    return arr.map((item) => {
      if (item.routes) {
        return (
          <Menu.SubMenu key={item.path} title={item.title}>
            {loopSideBar(item.routes)}
          </Menu.SubMenu>
        );
      }

      return <Menu.Item key={item.path}>{item.title}</Menu.Item>;
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

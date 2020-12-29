import React from 'react';
import { Menu } from 'antd';
import { useSelector, useStore } from 'react-redux';

const SideBar = () => {
  const store = useStore();
  console.log(store.getState());
  const sidebarState = useSelector(({ sidebar }) => {
    return sidebar;
  });

  const loopSidebar = (arr) => {
    return arr.map((item) => {
      if (item.routes) {
        return (
          <Menu.SubMenu key={item.path} title={item.title}>
            {loopSidebar(item.routes)}
          </Menu.SubMenu>
        );
      }

      return <Menu.Item key={item.path}>{item.title}</Menu.Item>;
    });
  };

  return (
    <>
      <Menu theme="dark" mode="inline">
        {loopSidebar(sidebarState)}
      </Menu>
    </>
  );
};

export default SideBar;

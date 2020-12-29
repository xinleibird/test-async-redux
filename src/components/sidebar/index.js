import React from 'react';
import { Menu } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';

const SideBar = () => {
  const sidebarState = useSelector(({ routes }) => {
    return routes;
  });

  const pathname = useSelector(({ router }) => {
    return router.location.pathname;
  });

  const dispatch = useDispatch();

  const loopSideBar = (arr) => {
    return arr.map((item) => {
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
            dispatch(push(item.path));
          }}
        >
          {item.title}
        </Menu.Item>
      );
    });
  };

  return (
    <>
      <Menu theme="dark" mode="inline" selectedKeys={[pathname]}>
        {loopSideBar(sidebarState)}
      </Menu>
    </>
  );
};

export default SideBar;

import React from 'react';
import SideBar from '../components/sidebar';
import { Layout } from 'antd';
import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router';

import UserInfo from '../pages/UserInfo';

const pages = { UserInfo };

const { Header, Content, Sider, Footer } = Layout;

const BasicLayout = () => {
  const pathname = useSelector(({ router }) => {
    return router.location.pathname;
  });

  const routeList = useSelector(({ routeList }) => {
    return routeList;
  });

  return (
    <>
      <Layout>
        <Header></Header>
        <Layout>
          <Sider>
            <SideBar />
          </Sider>
          <Content style={{ minHeight: 1000 }}>
            <Switch>
              {routeList.map((item) => {
                const Page = pages[item.component];
                return <Route path={item.path} component={Page} />;
              })}
            </Switch>
          </Content>
        </Layout>

        <Footer>Fotter</Footer>
      </Layout>
    </>
  );
};

export default BasicLayout;

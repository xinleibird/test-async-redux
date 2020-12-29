import React, { lazy, Suspense } from 'react';
import SideBar from '../components/sidebar';
import { Layout } from 'antd';
import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router';

const AsyncLoadedWrapper = (Comp) => {
  return () => {
    return (
      <Suspense fallback={<p>loading</p>}>
        <Comp />
      </Suspense>
    );
  };
};

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
      {pathname === '/login' ? (
        <Layout>
          <Header></Header>
          <Content>
            <Route path={'/login'} component={'Login'} />
          </Content>
          <Footer></Footer>
        </Layout>
      ) : (
        <Layout>
          <Header></Header>
          <Layout>
            <Sider>
              <SideBar />
            </Sider>
            <Content style={{ minHeight: 1000 }}>
              <Switch>
                {routeList.map((item) => {
                  return (
                    <Route
                      key={item.path}
                      path={item.path}
                      component={AsyncLoadedWrapper(
                        lazy(() => {
                          return import(`../pages/${item.component}`);
                        })
                      )}
                    />
                  );
                })}
              </Switch>
            </Content>
          </Layout>

          <Footer>Fotter</Footer>
        </Layout>
      )}
    </>
  );
};

export default BasicLayout;

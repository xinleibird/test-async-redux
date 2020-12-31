import { Layout } from 'antd';
import { push } from 'connected-react-router';
import React, { Component, lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router';
import SideBar from '../components/SideBar';
import Login from '../pages/Login';

const { Header, Content, Sider, Footer } = Layout;

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {}

  render() {
    if (this.state.hasError) {
      return <h1>Oops</h1>;
    }
    return this.props.children;
  }
}

const AsyncLoadedWrapper = (Comp) => {
  return () => {
    return (
      <ErrorBoundary>
        <Suspense fallback={<p>loading</p>}>
          <Comp />
        </Suspense>
      </ErrorBoundary>
    );
  };
};

const BasicLayout = ({ authenticated }) => {
  const pathname = useSelector(({ router }) => {
    return router.location.pathname;
  });

  const routes = useSelector(({ routes }) => {
    return routes;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (!authenticated) {
      dispatch(push('/login'));
    }
  }, [authenticated, dispatch]);

  return (
    <>
      {pathname === '/login' ? (
        <Layout>
          <Header></Header>
          <Content>
            <div style={{ textAlign: 'center' }}>
              <h1 style={{ paddingTop: '3rem' }}>后台系统</h1>
              <h3>登录界面</h3>
              <Login />
            </div>
          </Content>
          <Footer style={{ alignSelf: 'center' }}>copyright @ 鼎曦源</Footer>
        </Layout>
      ) : (
        <Layout>
          <Header></Header>
          <Layout>
            <Sider>
              <SideBar />
            </Sider>
            <Content style={{ minHeight: 1000, padding: '3rem' }}>
              <Switch>
                {routes.map((item) => {
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

          <Footer style={{ alignSelf: 'center' }}>copyright @ 鼎曦源</Footer>
        </Layout>
      )}
    </>
  );
};

export default BasicLayout;

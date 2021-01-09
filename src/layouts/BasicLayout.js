import { Layout } from 'antd';
import { push } from 'connected-react-router';
import React, { Component, lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import Login from '../pages/Login';
import { Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import Authentication from '../components/Authentication';

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

const BasicLayout = ({ authenticated, role }) => {
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
          <Content>
            <Login />
          </Content>
          <Footer style={{ alignSelf: 'center', margin: '2.2rem' }}>copyright @ 鼎曦源</Footer>
        </Layout>
      ) : (
        <Layout>
          <Header>
            <NavBar />
          </Header>
          <Layout>
            <Sider>
              <SideBar role={role} />
            </Sider>
            <Content style={{ minHeight: 1000, padding: '3rem' }}>
              <Breadcrumb>
                <Breadcrumb.Item>
                  <HomeOutlined />
                </Breadcrumb.Item>
                <Breadcrumb.Item>{pathname.substr(1)}</Breadcrumb.Item>
              </Breadcrumb>
              <br />
              <Switch>
                {routes.map((item) => {
                  const h = item.allow
                    ? item.allow.some((r) => {
                        return r === role;
                      })
                    : true;
                  if (h) {
                    return (
                      <Route
                        key={item.path}
                        path={item.path}
                        exact
                        component={AsyncLoadedWrapper(
                          lazy(() => {
                            return import(`../pages/${item.component}`);
                          })
                        )}
                      />
                    );
                  }

                  return null;
                })}
                <Route
                  path="/users/:username"
                  component={AsyncLoadedWrapper(
                    lazy(() => {
                      return import(`../pages/UserInfo`);
                    })
                  )}
                />
                <Route
                  path="/staffList/:staff_name"
                  component={AsyncLoadedWrapper(
                    lazy(() => {
                      return import(`../pages/UpdateStaff`);
                    })
                  )}
                />

                <Route
                  path="/"
                  component={AsyncLoadedWrapper(
                    lazy(() => {
                      dispatch(push('/loginInfo'));
                    })
                  )}
                />
                <Route
                  component={AsyncLoadedWrapper(
                    lazy(() => {
                      return import('../pages/404');
                    })
                  )}
                />
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

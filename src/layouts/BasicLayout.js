import React, { Component, lazy, Suspense } from 'react';
import SideBar from '../components/SideBar';
import { Layout } from 'antd';
import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router';

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

const BasicLayout = () => {
  const pathname = useSelector(({ router }) => {
    return router.location.pathname;
  });

  const routes = useSelector(({ routes }) => {
    return routes;
  });

  return (
    <>
      {pathname === '/login' ? (
        <Layout>
          <Header></Header>
          <Content>
            <p>login</p>
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

          <Footer>Fotter</Footer>
        </Layout>
      )}
    </>
  );
};

export default BasicLayout;

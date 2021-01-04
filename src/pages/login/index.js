import { Button, Checkbox, Form, Input } from 'antd';
import { push } from 'connected-react-router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { queryUserLogin } from '../../actions';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};

const tailLayout = {
  labelCol: { span: 8 },
  wrapperCol: { xs: { offset: 0 }, sm: { offset: 8, span: 8 } },
};

const Login = () => {
  const dispatch = useDispatch();

  const authenticated = useSelector(({ login }) => {
    return login.authenticated;
  });

  useEffect(() => {
    if (authenticated) {
      dispatch(push('/user'));
    }
  }, [dispatch, authenticated]);

  return (
    <>
      <header style={{ textAlign: 'center', padding: '2rem 2rem 6rem 2rem' }}>
        <h1 style={{ paddingTop: '3rem' }}>
          <span style={{ color: 'blue' }}> LOGO</span>
          后台系统
        </h1>
        <h3>登录界面</h3>
      </header>
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={(value) => {
          dispatch(queryUserLogin(value));
        }}
      >
        <Form.Item
          label="账号"
          name="username"
          rules={[
            {
              required: true,
              message: '请输入账号',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[
            {
              required: true,
              message: '请输入密码',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="" {...tailLayout}>
          <Checkbox>记住密码</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" block>
            登录
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Login;

import { Button, Form, Input, Checkbox } from 'antd';
import { push } from 'connected-react-router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { queryUserLogin } from '../../actions';

const Login = () => {
  const dispatch = useDispatch();
  const authenticated = useSelector(({ login }) => {
    return login.authenticated;
  });

  return (
    <div style={{ padding: '2rem' }}>
      <Form
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

        <Form.Item name="remember" valuePropName="">
          <Checkbox>记住密码</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
      <Button
        type="secondary"
        htmlType="button"
        onClick={() => {
          console.log(authenticated);
        }}
      >
        注册
      </Button>
    </div>
  );
};

export default Login;

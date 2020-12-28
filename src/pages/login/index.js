import { Button, Form, Input, Checkbox } from 'antd';
import { push } from 'connected-react-router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { queryUserLogin } from '../../actions';

const Login = () => {
  const login = useSelector(({ login }) => {
    return login;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    // if (!login.expired) {
    //   dispatch(push('/user'));
    // }
  });
  return (
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
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;

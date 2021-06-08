import { Form, Input, Button, message } from 'antd';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './css.less';
import icon from '../../assets/icon.jpeg';

const Login = () => {
  const history = useHistory();

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const [loading, setLoading] = useState(false);

  const onFinish = async () => {
    setLoading(true);
    await sleep(2500);

    setLoading(false);
    message.success('Welcome! ;))))');
    await sleep(1200);

    history.push('/');
  };

  const onFinishFailed = () => {
    setLoading(false);
    message.error('good bye!');
  };

  return (
    <div id="login-content">
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        className="login-wrap"
      >
        <img className="logo-login" src={icon} alt="icon" />
        <h3 className="logo-name"> ElectronJS - React - Ant </h3>
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button
            className="login-button"
            type="primary"
            htmlType="submit"
            loading={loading}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;

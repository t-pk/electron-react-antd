import { Form, Input, Button, message } from 'antd';
import React, { useState } from 'react';
import { useNavigate, Redirect } from 'react-router-dom';
import icon from '../../assets/icon.jpeg';
import authentication from '../../utils/authentication';
// import history from '../../utils/history';
import './ui.less';

const MESSAGE_LOGIN_FAIL =
  'username or password is incorrect. Please try again !';

const LoginPage = () => {
 const navigate = useNavigate();

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const [loading, setLoading] = useState(false);

  const onFinishFailed = () => {
    setLoading(false);
    message.error({
      content: MESSAGE_LOGIN_FAIL,
      className: 'custom-class',
      style: {
        textAlign: "right"
      },
    });
  };

  const onFinish = async (user) => {
    setLoading(true);
    await sleep(500);

    const isTrue = authentication.userLogin(user);
    console.log('iss', isTrue);
    if (!isTrue) return onFinishFailed();

    setLoading(false);
    // message.success('Welcome! ;))))');
 //   await sleep(1200);

    // return  <Redirect to="/" />
    // history('/', { replace: true });
    navigate('/');
    // window.location.reload();
    //  return true;
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
          <Input.Password autoComplete="false" />
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

export default LoginPage;

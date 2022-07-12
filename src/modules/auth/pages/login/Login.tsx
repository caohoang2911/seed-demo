import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '~/app/hooks';
import { LogoIcon } from '~/components/Icons';
import { getLoadingLogin, loginRequest } from '../../authSlice';

import './Login.scss';
import { LoginPayload } from './types/loginTypes';

const Login: React.FC<void> = () => {
  const dispatch = useAppDispatch();

  const loading = useAppSelector(getLoadingLogin);

  const onFinish = (values: LoginPayload) => {
    dispatch(loginRequest({ ...values }));
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className="form-login">
      <div className="form-content">
        <LogoIcon width={'300px'} height={'35px'} />
        <Form
          style={{ width: '100%' }}
          layout="vertical"
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input size="large" autoComplete="off" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password size="large" autoComplete="off" />
          </Form.Item>

          <Form.Item style={{ textAlign: 'center', marginTop: '20px' }}>
            <Button loading={loading} type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;

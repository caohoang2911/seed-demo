import {
  MailOutlined,
  NotificationOutlined,
  SettingOutlined,
  UserOutlined,
  PhoneOutlined,
  ProfileOutlined,
  CalendarOutlined,
} from '@ant-design/icons';
import { Avatar, Badge, Button, Dropdown, Layout, Menu, Space } from 'antd';
import { Content } from 'antd/lib/layout/layout';

import React, { Dispatch } from 'react';

import classNames from 'classnames/bind';
import { LogoIcon } from '~/components/Icons';

import styles from './IHeader.module.scss';
import { useAppDispatch } from '~/app/hooks';
import { logout } from '~/modules/auth/authSlice';
import { useNavigate } from 'react-router-dom';

const { Header } = Layout;
const cx = classNames.bind(styles);
const menu = (dispatch: Dispatch<any>, navigate: any) => (
  <Menu
    items={[
      {
        key: '1',
        label: (
          <a
            target="_blank"
            className={cx('user-menu')}
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            <Avatar src="https://joeschmoe.io/api/v1/random" />
            <div className={cx('user-des')}>
              <span>
                <strong>An Nguyen</strong>
              </span>
              <span>Product Designer</span>
            </div>
          </a>
        ),
      },
      {
        type: 'divider',
      },
      {
        key: '2',
        label: <span>annguyen@seedcom.com</span>,
        icon: <MailOutlined />,
      },
      {
        key: '3',
        label: <span>+84 989633508</span>,
        icon: <PhoneOutlined />,
      },
      {
        type: 'divider',
      },
      {
        key: '4',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
            Profile
          </a>
        ),
        icon: <ProfileOutlined />,
      },
      {
        key: '5',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
            Calendar
          </a>
        ),
        icon: <CalendarOutlined />,
      },
      {
        key: '6',
        label: (
          <Button onClick={() => dispatch(logout())} style={{ width: '100%' }} type="primary">
            Logout
          </Button>
        ),
      },
    ]}
  />
);
const IHeader: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  console.log('renderHeader');
  return (
    <Header
      style={{
        backgroundColor: 'var(--bg-white)',
        padding: '0px 19px',
        borderBottom: '1px solid #dfdfdf',
      }}
    >
      <Content
        style={{
          display: 'flex',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <LogoIcon />
        <Space>
          <Button type="link" icon={<SettingOutlined className="text-primary" />}></Button>
          <Badge offset={[-7, 8]} count={9} size="small">
            <Button type="link" icon={<NotificationOutlined className="text-primary" />}></Button>
          </Badge>
          <Dropdown overlay={menu(dispatch, navigate)}>
            <Button type="link" icon={<UserOutlined className="text-primary" />}></Button>
          </Dropdown>
        </Space>
      </Content>
    </Header>
  );
};

export default IHeader;

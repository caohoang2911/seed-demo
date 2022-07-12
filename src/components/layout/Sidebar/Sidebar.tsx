import { Layout, Menu, MenuProps } from 'antd';

import { useState } from 'react';

import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import './Sidebar.scss';

import { useLocation } from 'react-router-dom';
import { _nav } from './_nav';
import { PAGE_DEFAULT_REDIRECT } from '~/config/globalVariable';

const cx = classNames.bind(styles);

const { Sider } = Layout;

const ROOT_MENU: string[] | undefined = _nav && _nav.map((nav: any) => nav.key);
const NAV_NOT_CHILD = _nav && _nav.filter((nav: any) => !nav.children).map((nav: any) => nav.key);

const Sidebar: React.FC = (): React.ReactElement => {
  const location = useLocation();
  const parentPath = location.pathname.split('/')[1] || PAGE_DEFAULT_REDIRECT;
  const [openKeys, setOpenKeys] = useState([parentPath]);

  const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (ROOT_MENU && ROOT_MENU.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const handleMenuClick = (obj: any) => {
    console.log(NAV_NOT_CHILD, obj);
    if (NAV_NOT_CHILD?.includes(obj.key)) {
      setOpenKeys([]);
    }
  };

  return (
    <>
      <Sider
        className={cx('hidden-scroll', 'sidebar')}
        width={250}
        style={{
          backgroundColor: '#ffffff',
          height: '100vh',
          overflow: 'auto',
          position: 'sticky',
          left: '0',
          top: '0',
          borderRight: '1px solid rgba(0,0,0,.06)',
        }}
      >
        <Menu
          onClick={handleMenuClick}
          mode="inline"
          selectedKeys={[location.pathname]}
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          defaultSelectedKeys={[PAGE_DEFAULT_REDIRECT]}
          defaultOpenKeys={[PAGE_DEFAULT_REDIRECT]}
          style={{ height: '100%', borderRight: 0 }}
          items={_nav}
        />
      </Sider>
    </>
  );
};
export default Sidebar;

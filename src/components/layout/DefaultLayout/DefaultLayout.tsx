import { Layout } from 'antd';
import React, { memo } from 'react';
import IHeader from '../IHeader';
import Sidebar from '../Sidebar/Sidebar';

const { Content } = Layout;
const DefaultLayout: React.FC = ({
  children,
}: {
  children?: React.ReactNode;
}): React.ReactElement => {
  return (
    <Layout>
      <IHeader />
      <Layout>
        <Sidebar />
        <Layout>
          <Content
            style={{
              padding: '10px 20px 20px 20px',
              margin: 0,
              minHeight: 280,
              backgroundColor: 'var(--bg-white)',
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default memo(DefaultLayout);

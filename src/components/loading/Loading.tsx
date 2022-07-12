import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { LoadingOutlined } from '@ant-design/icons';

import * as NProgress from 'nprogress';

// import './Loading.scss';

const Loading: React.FC = (): React.ReactElement => {
  useEffect(() => {
    NProgress.start();
    return () => {
      NProgress.done();
    };
  }, []);

  return ReactDOM.createPortal(
    <div className="loading-container">
      <LoadingOutlined />
    </div>,
    document.querySelector('body') as HTMLElement
  );
};

export default Loading;

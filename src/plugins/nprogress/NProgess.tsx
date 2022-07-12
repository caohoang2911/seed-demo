import React from 'react';
import * as NProgress from 'nprogress';
import './nprogress.css';

NProgress.configure({ showSpinner: false, easing: 'ease', speed: 500 });
const INProgess: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  return <>{children}</>;
};

export default INProgess;

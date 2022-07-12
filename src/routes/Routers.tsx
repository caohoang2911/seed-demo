import React, { Fragment, memo } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loading from '~/components/loading';
import routers, { RouterDefine, ScopeRoute } from '.';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const Routers: React.FC = (): React.ReactElement => {
  const renderRouter = (routers: RouterDefine[]): React.ReactNode => {
    return routers.map((route: RouterDefine, index: number) => {
      const Layout = route.layout ? route.layout : Fragment;
      const Page = route.element;
      const RounterType = route.scope === ScopeRoute.PUBLIC ? PublicRoute : PrivateRoute;
      const renderPage = (
        <Layout>
          <React.Suspense fallback={<Loading />}>
            <Page />
          </React.Suspense>
        </Layout>
      );
      return (
        <Route key={index} path={route.path} element={<RounterType>{renderPage}</RounterType>}>
          {route.children && <>{renderRouter(route.children)}</>}
        </Route>
      );
    });
  };

  return <Routes>{renderRouter(routers)}</Routes>;
};
export default memo(Routers);

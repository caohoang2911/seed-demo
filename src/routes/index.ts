import React from 'react';
import AuthLayout from '~/components/layout/AuthLayout/AuthLayout';
import DefaultLayout from '~/components/layout/DefaultLayout/DefaultLayout';
import notfound from '~/components/notfound';
import Login from '~/modules/auth/pages/login/Login';
import OperateOrder from '~/modules/operate-order';
import MonitorOrder from '~/modules/monitor-order';

const Home = React.lazy(() => import('~/modules/home/Home'));

const ListOrder = React.lazy(() => import('~/modules/operate-order/pages/ListOrder'));
const AutoOrder = React.lazy(() => import('~/modules/operate-order/pages/AutoOrder'));
const HandOrder = React.lazy(() => import('~/modules/operate-order/pages/HandOrder'));
const OrderByPatch = React.lazy(() => import('~/modules/operate-order/pages/OrderByPatch'));
const OrderExport = React.lazy(() => import('~/modules/operate-order/pages/OrderExport'));

const CustomizationView = React.lazy(
  () => import('~/modules/monitor-order/pages/customization-view')
);
const ListView = React.lazy(() => import('~/modules/monitor-order/pages/list-view'));
const OrderPending = React.lazy(() => import('~/modules/monitor-order/pages/order-pending'));
const OrderPacked = React.lazy(() => import('~/modules/monitor-order/pages/order-packed'));
const OrderTransporting = React.lazy(
  () => import('~/modules/monitor-order/pages/order-transporting')
);

export enum ScopeRoute {
  'PRIVATE' = 'PRIVATE',
  'PUBLIC' = 'PUBLIC',
}

export interface RouterDefine {
  path: string;
  element: React.FC<any>;
  layout?: React.FC<{ children: React.ReactNode }>;
  scope: ScopeRoute;
  children?: RouterDefine[];
}

const routers: RouterDefine[] = [
  {
    path: '/',
    element: Home,
    layout: DefaultLayout,
    scope: ScopeRoute.PRIVATE,
  },
  {
    path: 'opera-order',
    element: OperateOrder,
    layout: DefaultLayout,
    scope: ScopeRoute.PRIVATE,
    children: [
      {
        path: '',
        element: ListOrder,
        scope: ScopeRoute.PRIVATE,
      },
      {
        path: 'list-order',
        element: ListOrder,
        scope: ScopeRoute.PRIVATE,
      },
      {
        path: 'auto-order',
        element: AutoOrder,
        scope: ScopeRoute.PRIVATE,
      },
      {
        path: 'hand-order',
        element: HandOrder,
        scope: ScopeRoute.PRIVATE,
      },
      {
        path: 'order-by-patch',
        element: OrderByPatch,
        scope: ScopeRoute.PRIVATE,
      },
      {
        path: 'order-export',
        element: OrderExport,
        scope: ScopeRoute.PRIVATE,
      },
    ],
  },
  {
    path: 'monitor-order',
    element: MonitorOrder,
    layout: DefaultLayout,
    scope: ScopeRoute.PRIVATE,
    children: [
      {
        path: '',
        element: CustomizationView,
        scope: ScopeRoute.PRIVATE,
      },
      {
        path: 'customization-view',
        element: CustomizationView,
        scope: ScopeRoute.PRIVATE,
      },
      {
        path: 'list-view',
        element: ListView,
        scope: ScopeRoute.PRIVATE,
      },
      {
        path: 'order-pending',
        element: OrderPending,
        scope: ScopeRoute.PRIVATE,
      },
      {
        path: 'order-packed',
        element: OrderPacked,
        scope: ScopeRoute.PRIVATE,
      },
      {
        path: 'order-transporting',
        element: OrderTransporting,
        scope: ScopeRoute.PRIVATE,
      },
    ],
  },
  {
    path: '/login',
    element: Login,
    layout: AuthLayout,
    scope: ScopeRoute.PUBLIC,
  },
  {
    path: '*',
    element: notfound,
    layout: DefaultLayout,
    scope: ScopeRoute.PUBLIC,
  },
];

export default routers;

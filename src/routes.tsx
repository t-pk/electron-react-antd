import React from 'react';
import { PrivateLayout } from './layout/PrivateLayout';
import { PublicLayout } from './layout/PublicLayout';
import { Router } from './dto';
const Home = React.lazy(() => import('./components/Home'));
const Test = React.lazy(() => import('./components/Test'));
const DynamicPage = React.lazy(() => import('./components/DynamicPage'));

const routes: Router[] = [
  {
    path: '/test',
    exact: true,
    layout: PrivateLayout,
    main: Test,
    isPrivate: true,
  },
  {
    path: '/dynamic',
    exact: true,
    layout: PublicLayout,
    main: DynamicPage,
    isPrivate: false,
  },
  {
    path: '/',
    exact: true,
    layout: PublicLayout,
    main: Home,
    isPrivate: false,
  },
];

export default routes;

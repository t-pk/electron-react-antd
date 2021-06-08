import React from 'react';
import { PrivateLayout } from './layout/PrivateLayout';
import { PublicLayout } from './layout/PublicLayout';

const Home = React.lazy(() => import('./components/Home'));
const Test = React.lazy(() => import('./components/Test'));
const DynamicPage = React.lazy(() => import('./components/DynamicPage'));
const NoMatch = React.lazy(() => import('./components/NoMatch'));

const Login = React.lazy(() => import('./pages/login'));

// import Home from './components/Home';

// import Test from './components/Test';
// import DynamicPage from './components/DynamicPage';

// import Login from './pages/login';

const routes = [
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
  {
    path: '/login',
    exact: true,
    layout: PublicLayout,
    main: Login,
    isPrivate: false,
  },
  {
    path: '/noMatch',
    exact: true,
    layout: PublicLayout,
    main: NoMatch,
    isPrivate: false,
  },
];

export default routes;

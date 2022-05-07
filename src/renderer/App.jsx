import React, { Suspense } from 'react';
import {
  Switch,
  Router,
  Route,
  Routes,
  Redirect,
  Navigate,
  HashRouter,
} from 'react-router-dom';
import { Spin } from 'antd';
import shortid from 'shortid';
import routes from './routes';
import PublicRoute from './layouts/PublicRoute';
import PrivateRoute from './layouts/PrivateRoute';
import PrivateLayout from './layouts/PrivateLayout';
import { LOGIN_URL, TOKEN_KEY } from './constants';

const LoginPage = React.lazy(() => import('./pages/login'));
const HomePage = React.lazy(() => import('./pages/home'));
const AccountPage = React.lazy(() => import('./pages/account'));
const NotFoundPage = React.lazy(() => import('./pages/not-found'));

const App = () => {
  return (
    <HashRouter>
      <Suspense fallback={<Spin />}>
        <Routes>
          <Route
            key={shortid()}
            index={true}
            path="/login"
            element={
              <Suspense
                fallback={
                  <Spin>
                    <div className="is-spining-full" />
                  </Spin>
                }
              >
                <LoginPage />
              </Suspense>
            }
          />
           <Route
            key={shortid()}
            index={true}
            path="/"
            element={
              <Suspense
                fallback={
                  <Spin>
                    <div className="is-spining-full" />
                  </Spin>
                }
              >
                {localStorage.getItem(TOKEN_KEY) ? (
                  <HomePage />
                ) : (
                  <Navigate to={LOGIN_URL} />
                )}
              </Suspense>
            }
          />
        </Routes>
      </Suspense>
    </HashRouter>
  );
};
export default App;

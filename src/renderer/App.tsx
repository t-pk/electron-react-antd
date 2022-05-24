import { Button, Spin } from 'antd';
import React, { Suspense } from 'react';
import {
  MemoryRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from 'react-router-dom';
const Page1 = React.lazy(() => import('./page1')); // Lazy-loaded
const Page2 = React.lazy(() => import('./page2')); // Lazy-loaded
const Page3 = React.lazy(() => import('./page3')); // Lazy-loaded

const LoginPage = React.lazy(() => import('./pages/login'));
const HomePage = React.lazy(() => import('./pages/home'));
const AccountPage = React.lazy(() => import('./pages/account'));
const NotFoundPage = React.lazy(() => import('./pages/not-found'));
import './App.less';

import authentication from './utils/authentication';
authentication.init();

export const Rec = () => {
  const nav = useNavigate();

  const button1 = (page: string) => () => {
    nav(page);
  };

  return (
    <div>
      <Button onClick={button1('/page2')}>page 2</Button>
      <Button onClick={button1('/page3')}>page 3</Button>
      <Button onClick={button1('/')}>page 1</Button>
      <Button onClick={button1('/login')}>Login</Button>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Suspense
        fallback={
          <Spin>
            <div className="is-spining-full" />
          </Spin>
        }
      >
        <Routes>
          <Route
            path="/"
            element={
              <Suspense
                fallback={
                  <Spin>
                    <div className="is-spining-full" />
                  </Spin>
                }
              >
                <HomePage />
              </Suspense>
            }
          />
          <Route
            path="/account"
            element={
              <Suspense
                fallback={
                  <Spin>
                    <div className="is-spining-full" />
                  </Spin>
                }
              >
                <AccountPage />{' '}
              </Suspense>
            }
          />
          <Route
            path="/404"
            element={
              <Suspense
                fallback={
                  <Spin>
                    <div className="is-spining-full" />
                  </Spin>
                }
              >
                <NotFoundPage />{' '}
              </Suspense>
            }
          />
          <Route
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
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;

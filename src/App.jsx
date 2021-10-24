import React, { Suspense } from 'react';
import {
  Switch,
  HashRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom';
import { Spin } from 'antd';
import shortid from 'shortid';
import routes from './routes';
import PublicRoute from './layout/PublicRoute';
import PrivateRoute from './layout/PrivateRoute';

const App = () => {
  const showContent = (rt) => {
    let pages = [];

    if (rt.length > 0) {
      pages = rt.map((route) => {
        return route.isPrivate ? (
          <PrivateRoute
            key={shortid()}
            path={route.path}
            exact={route.exact}
            component={route.main}
            layout={route.layout}
          />
        ) : (
          <PublicRoute
            key={shortid()}
            path={route.path}
            exact={route.exact}
            component={route.main}
            layout={route.layout}
          />
        );
      });
    }

    pages.push(<Route key="login" render={() => <Redirect to="/login" />} />);

    return (
      <Suspense fallback={<Spin />}>
        <Switch>{pages}</Switch>
      </Suspense>
    );
  };
  return <Router> {showContent(routes)} </Router>;
};

export default App;

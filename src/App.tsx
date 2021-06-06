import React, { Suspense } from 'react';
import { Switch, HashRouter as Router, Route, Redirect } from 'react-router-dom';
import { Spin } from 'antd';
import shortid from 'shortid';
import routes from './routes';
import { Router as Rt } from './dto';

import { PrivateRoute, PublicRoute } from './layout';

const App = () => {
  const showContent = (routes: Rt[]) => {
    let result: JSX.Element[] = [];

    if (routes.length > 0) {
      result = routes.map((route) => {
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

    result.push(<Route key= {shortid()} render={() => <Redirect to="/" />} />);

    return (
      <Switch>
        <Suspense
          fallback={
            <Spin>
              <div className="is-spining" />
            </Spin>
          }
        >
          {result}
        </Suspense>{' '}
      </Switch>
    );
  };
  return (
    <Router> {showContent(routes)} </Router>
  );
};

export default App;

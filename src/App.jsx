import React, { Suspense } from 'react';
import {
  Switch,
  HashRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom';
import { Spin } from 'antd';
import shortid from 'shortid';
import { TransitionGroup } from 'react-transition-group';
import routes from './routes';
import { PrivateRoute, PublicRoute } from './layout';

const App = () => {
  const showContent = (rt) => {
    let result = [];

    if (rt.length > 0) {
      result = rt.map((route) => {
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

    result.push(<Route key="login" render={() => <Redirect to="/login" />} />);

    return (
      <TransitionGroup>
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
      </TransitionGroup>
    );
  };
  return <Router> {showContent(routes)} </Router>;
};

export default App;

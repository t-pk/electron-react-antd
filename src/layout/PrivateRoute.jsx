import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export const PrivateRoute = ({
  component: Component,
  layout: Layout,
  exact,
  path,
}) => {
  return (
    <Route
      {...{ exact, path }}
      render={() => {
        return localStorage.getItem('token') ? (
          <Layout>
            <Component />
          </Layout>
        ) : (
          <Redirect
            to={{
              pathname: '/',
            }}
          />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  layout: PropTypes.elementType.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
};

export default PrivateRoute;

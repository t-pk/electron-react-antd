/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const PublicRoute = ({ element: Component, layout: Layout, ...rest }) => {
  return (
    <Route
      {...rest}
      element={
        <Layout>
          <Component />
        </Layout>
      }
    />
  );
};

PublicRoute.propTypes = {
  element: PropTypes.elementType.isRequired,
  layout: PropTypes.elementType.isRequired,
};

export default PublicRoute;

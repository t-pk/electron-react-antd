import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const PublicRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
);

// PublicRoute.propTypes = {
//   component: PropTypes.elementType.isRequired,
//   layout: PropTypes.elementType.isRequired,
// };

export default PublicRoute;

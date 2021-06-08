import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';

export const PrivateLayout = ({ children }) => (
  <Layout>
    <>{children}</>
  </Layout>
);

PrivateLayout.propTypes = {
  children: PropTypes.elementType.isRequired,
};

export default PrivateLayout;

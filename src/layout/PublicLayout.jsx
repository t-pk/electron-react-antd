import React, { Suspense } from 'react';
import { Spin } from 'antd';
// import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

export const PublicLayout = ({ children }) => {
  // ({ path, children })
  return (
    <Suspense
      fallback={
        <Spin>
          <div className="is-spining-full" />
        </Spin>
      }
    >
      {/* <CSSTransition in key={path} classNames="page" timeout={500}> */}
      <div className="page">{children}</div>
      {/* </CSSTransition> */}
    </Suspense>
  );
};

PublicLayout.defaultProps = {
  // path: null,
  children: null,
};

PublicLayout.propTypes = {
  // path: PropTypes.string,
  children: PropTypes.element,
};

export default PublicLayout;

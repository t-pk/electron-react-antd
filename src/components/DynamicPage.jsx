import React from 'react';
import { Link } from 'react-router-dom';
import LayoutP from './Layout';

const DynamicPage = () => {
  return (
    <LayoutP>
      <p>sadad</p>
      <Link to="/">This page was loaded asynchronously!!!</Link>
      {/* <Link to="/login">Login</Link>
      <Link to="/test">Test</Link>
      <Link to="/noMatch">noMatch</Link> */}
    </LayoutP>
  );
};

export default DynamicPage;

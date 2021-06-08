import React from 'react';
import Icon from '@ant-design/icons';
import { Link } from 'react-router-dom';
import LayoutP from './Layout';

const NoMatch = () => {
  return (
    <LayoutP>
      <Icon type="minus circle" theme="twoTone" twoToneColor="#eb2f96" />
      <strong>Page not found!</strong>
      <Link to="/login">go to login</Link>
    </LayoutP>
  );
};

export default NoMatch;

import React from 'react';
import './layout.less';
import PropTypes from 'prop-types';
import { SmileTwoTone } from '@ant-design/icons';
import { Layout, Divider } from 'antd';
import icon from '../../assets/test.jpeg';

const { Header } = Layout;

const LayoutP = ({ children }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Header className="h1">webpack-for-react</Header>
      {children}
      <Divider />
      <p className="pull-right">
        Made with <SmileTwoTone /> by Tai Pham
      </p>
      <div className="hello">
        <img width="50%" alt="icon" src={icon} />
      </div>
    </div>
  );
};

LayoutP.defaultProps = {
  children: null,
};

LayoutP.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object),
};

export default LayoutP;

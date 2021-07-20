import React from 'react';
// import './layout.less';
import PropTypes from 'prop-types';
import { SmileTwoTone } from '@ant-design/icons';
import { Layout, Divider } from 'antd';
import './a.scss';

const { Header } = Layout;

const LayoutP = ({ children }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Header className="h1">webpack-for-react</Header>
      {children}
      <Divider />
      <p className="ttt">
        Made with <SmileTwoTone /> by Tai Pham
      </p>
      <div className="hello">
        <img width="50%" alt="icon" src="../assets/test.jpeg" />
      </div>
      <div className="hello">
        <img width="50%" alt="124" src="../assets/haha.png" />
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

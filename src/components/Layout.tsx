import './layout.less';
import React from 'react';
import { Layout, Divider } from 'antd';
import { SmileTwoTone } from '@ant-design/icons';
const { Header } = Layout;
import icon from '../../assets/test.jpeg';

const LayoutP = ({ children }: any) => {
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

export default LayoutP;

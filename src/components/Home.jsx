import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import shortid from 'shortid';
import { Button } from 'antd';
import LayoutP from './Layout';
import { actionTest, actionClick } from '../actions';
import WebCapture from './Capture';
 
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrClick: [],
      input: '',
    };
  }

  handleOnchange = (e) => {
    const { reduxTest } = this.props;
    const { value } = e.target;
    this.setState({
      input: value,
    });
    reduxTest(value);
  };

  handeClick = () => {
    actionClick()
      .then((res) => {
        return this.setState({
          arrClick: res.data,
        });
      })
      .catch((err) => {
        throw err;
      });
  };

  render() {
    const { arrClick, input } = this.state;
    return (
      <LayoutP>
        <p>Hello World of React and Webpack!</p>
        <p>
          {/* <input onChange={this.handleOnchange} value={input} /> */}

          <Link to="/dynamic">Navigate to Dynamic Page</Link>
        </p>
        {/* <Button onClick={this.handeClick}>TEst</Button> */}
        <div>
          {/* <WebCapture /> */}
          {/* {arrClick.map((item) => (
            <span key={shortid.generate()}>{item.template}</span>
          ))} */}
        </div>
      </LayoutP>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    test: state.test,
  };
};

const mapDispatchToProps = (dispatch) => ({
  reduxTest: (data) => {
    return dispatch(actionTest(data));
  },
});

Home.propTypes = {
  reduxTest: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import store from './store';
import { DevTools } from './components';
// import * as serviceWorker from './serviceWorker';
import './reset.scss';
import './index.less';
import './index.scss';
import App from './App';

process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = 'true';

const Main = ({ state }) => (
  <div>
    <Provider store={state}>
      <App />
    </Provider>
  </div>
);

Main.defaultProps = {
  state: null,
};

Main.propTypes = {
  state: PropTypes.shape({
    subscribe: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
    getState: PropTypes.func.isRequired,
  }),
};

ReactDOM.render(
  <div>
    <Main state={store} />
    {process.env.REACT_APP_NODE_ENV.toUpperCase().startsWith('PROD') && (
      <DevTools store={store} />
    )}
  </div>,
  document.getElementById('root'),
);

// serviceWorker.unregister();

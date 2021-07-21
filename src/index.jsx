import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import store from './store';
import { DevTools } from './components';
import * as serviceWorker from './serviceWorker';
import './reset.scss';
import './index.less';
import './index.scss';
import App from './App';

// process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';

const Main = ({ state }) => (
  <div>
    <Provider store={state}>
      <App />
    </Provider>
  </div>
);

// Main.defaultProps = {
//   state: {},
// };

// Main.propTypes = {
//   state: PropTypes.objectOf(PropTypes.object()),
// };

ReactDOM.render(
  <div>
    <Main state={store} />
    <DevTools store={store} />
  </div>,
  document.getElementById('root'),
);

serviceWorker.unregister();

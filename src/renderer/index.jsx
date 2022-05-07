import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import { DevTools } from './components';
import './reset.scss';
import './index.less';
import './index.scss';


const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <Provider store={store}>
      <App />
      {!process?.env?.NODE_ENV.startsWith('prod') && <DevTools store={store} />}
    </Provider>
);

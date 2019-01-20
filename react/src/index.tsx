import './index.css';
import 'semantic-ui-css/semantic.min.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux';
// @ts-ignore
import { routerReducer, syncHistoryWithStore } from 'react-router-redux';
import reducers from './reducers';
import { Provider } from 'react-redux';

const root = document.getElementById('root') as HTMLElement;
const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  })
)

ReactDOM.render(
  <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
  </Provider>

,
  root
);
registerServiceWorker();

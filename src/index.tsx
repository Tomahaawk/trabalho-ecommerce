import './index.css';
import 'semantic-ui-css/semantic.min.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const root = document.getElementById('root') as HTMLElement;

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  root
);
registerServiceWorker();

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import ProductDetailsPage from './pages/product-details';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';

const root = document.getElementById('root') as HTMLElement;

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/product-details" component={ProductDetailsPage} />
    </Switch>
  </BrowserRouter>,
  root
);
registerServiceWorker();

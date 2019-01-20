import * as React from 'react';
import Header from './components/Header';
import Main from './pages/Main';
import ProductDetailsPage from './pages/ProductDetailsPage';
import { Switch, Route } from 'react-router';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/product-details" component={ProductDetailsPage} />
            </Switch>
        </main>
      </div>
    );
  }
}

export default App;

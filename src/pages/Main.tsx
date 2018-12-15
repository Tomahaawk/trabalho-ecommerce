import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProductDetailsPage from './product-details';
import App from '../App';

const Main = () => {
    return (
        <main>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/product-details" component={ProductDetailsPage} />
            </Switch>
        </main>
    );
};

export default Main;

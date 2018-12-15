import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

const Header = () => {
    return (
        <header>
            <nav>
                <Link to="/">
                    <Button>Home</Button>
                </Link>
                <Link to="/product-details">
                    <Button> Produto</Button>
                </Link>
            </nav>
        </header>
    );
};

export default Header;
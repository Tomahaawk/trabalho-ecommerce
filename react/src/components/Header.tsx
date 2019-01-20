import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import '../assets/css/Header.css';

const Header = () => {
    return (
        <header className='header-wrapper'>
            <div className='left-header'>
                <a href="javascript:void(0)">
                   Cool Name
                </a>
            </div>
            <div className='center-header'>
                    <nav>
                        <Link to="/">
                            Home
                        </Link>
                        <Link to="/product-details">
                            Produtos
                        </Link>
                        <Link to="/product-details">
                            FAQ
                        </Link>
                        <Link to="/product-details">
                            Contato
                        </Link>
                    </nav>
            </div>
            <div className='right-header'>
                <Icon className='cart' name='shopping cart'></Icon>
                <div className='user-wrapper'>
                    <Icon name='user'></Icon>
                </div>
            </div>
        </header>
    );
};

export default Header;
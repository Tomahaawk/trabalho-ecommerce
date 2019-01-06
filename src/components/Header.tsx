import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Icon, Image } from 'semantic-ui-react';
import '../assets/css/Header.css';

const Header = () => {
    return (
        <header className='header-wrapper'>
            <div className='left-header'>
                <a href="javascript:void(0)">
                    <Icon name='bars' size='big'></Icon>
                </a>
            </div>
            <div className='center-header'>
                <Container>
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
                </Container>
            </div>
            <div className='right-header'>
                <span>Usuário</span>
                <Image src='../src/assets/images/logo.svg' avatar/>
            </div>
        </header>
    );
};

export default Header;
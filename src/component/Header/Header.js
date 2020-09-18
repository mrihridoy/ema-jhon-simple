import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt=""/>
            <nav>
                <a href="/shop">Store</a>
                <a href="/review">Review Order</a>
                <a href="/manage">Manager Inventory </a>
            </nav>
        </div>
    );
};

export default Header;
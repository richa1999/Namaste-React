import React from 'react';
import { LOGO_URL } from '../utils/constants';

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img
                    src={LOGO_URL}
                    className="logo"
                />
            </div>
            <div className="nav-bar">
                <ul>
                    <li>Home</li>
                    <li>Menu</li>
                    <li>Order</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;
import React, { useState } from 'react';
import { LOGO_URL } from '../utils/constants';  
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {
    const [btnLogin, setbtnLogin] = useState("Login")

    const onlineStatus = useOnlineStatus();

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
                    <li>OnlineStatus: {onlineStatus ? '🟢' : '🔴'}</li>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li>Order</li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link to='/grocery'>Grocery</Link></li>
                    <li>Cart</li>
                    <button className="login" onClick={() => {
                        btnLogin === "Login" ? setbtnLogin("Logout") : setbtnLogin("Login")
                    }}>{btnLogin}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;
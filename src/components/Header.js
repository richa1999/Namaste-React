import React, { useState } from 'react';
import { LOGO_URL } from '../utils/constants';  
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {
    const [btnLogin, setbtnLogin] = useState("Login")

    const onlineStatus = useOnlineStatus();

    return (
        <div className="flex justify-between shadow-lg bg-yellow-400">
            <div>
                <img
                    src={LOGO_URL}
                    className="w-30 h-20 bg-yellow-100"
                />
            </div>
            <div className="flex items-center">
                <ul className='flex p-4 m-4'>
                    <li className='px-4'>OnlineStatus: {onlineStatus ? '🟢' : '🔴'}</li>
                    <li className='px-4'><Link to='/'>Home</Link></li>
                    <li className='px-4'><Link to='/about'>About</Link></li>
                    <li className='px-4'>Order</li>
                    <li className='px-4'><Link to='/contact'>Contact</Link></li>
                    <li className='px-4'><Link to='/grocery'>Grocery</Link></li>
                    <li className='px-4'>Cart</li>
                    <button className="px-4" onClick={() => {
                        btnLogin === "Login" ? setbtnLogin("Logout") : setbtnLogin("Login")
                    }}>{btnLogin}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;
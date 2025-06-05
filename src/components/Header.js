import React, { useState, useContext } from 'react';
import { LOGO_URL } from '../utils/constants';  
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';

const Header = () => {
  const [btnLogin, setbtnLogin] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.cartItems);

  return (
    <header className="flex justify-between items-center bg-yellow-400 shadow-md px-6 py-3">
      <div>
        <img
          src={LOGO_URL}
          alt="logo"
          className="w-32 h-20 object-contain bg-yellow-100 rounded-md"
        />
      </div>

      <nav>
        <ul className="flex items-center space-x-6 text-gray-900 font-semibold">
          <li className="flex items-center space-x-1">
            <span>Online Status:</span>
            <span className={onlineStatus ? "text-green-600" : "text-red-600"}>
              {onlineStatus ? "🟢" : "🔴"}
            </span>
          </li>
          <li>
            <Link
              to="/"
              className="hover:text-yellow-700 transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-yellow-700 transition-colors duration-200"
            >
              About
            </Link>
          </li>
          <li className="cursor-default select-none text-gray-700">Order</li>
          <li>
            <Link
              to="/contact"
              className="hover:text-yellow-700 transition-colors duration-200"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/grocery"
              className="hover:text-yellow-700 transition-colors duration-200"
            >
              Grocery
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="font-bold hover:text-yellow-800 transition-colors duration-200"
            >
              Cart - {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
            </Link>
          </li>
          <li>
            <button
              onClick={() =>
                btnLogin === "Login" ? setbtnLogin("Logout") : setbtnLogin("Login")
              }
              className="px-4 py-2 rounded-md bg-yellow-600 text-white font-semibold hover:bg-yellow-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            >
              {btnLogin}
            </button>
          </li>
          <li className="font-bold text-gray-900 select-none">{loggedInUser}</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

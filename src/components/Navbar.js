import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/logo.png';

const Navbar = () => {
  return (
    <nav className="flex flex-col md:flex-row items-center justify-between py-6">
      <Link to="/" className="flex cursor-pointer items-center">
        <img src={logo} width={40} height={35} alt="Logo" />
        <span className="text-2xl font-bold ml-2 text-primary">QUOTS</span>
      </Link>
      <ul className="flex items-center mt-4 md:mt-0">
        <li className="mr-6 font-medium text-gray-600">
          <Link to="/">Home</Link>
        </li>
        <li className="mr-6 font-medium text-gray-600">
          <Link to="/favourite">Favourites</Link>
        </li>
        <li className="font-medium text-gray-600">
          <a
            href="#"
            className="bg-primary py-2 px-4 rounded-sm text-white hover:bg-primary-dark transition-all"
          >
            Sign up
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-around items-center bg-[#808a81] p-4 gap-4 md:gap-0">
      
      {/* Logo */}
      <div>
        <h1 className="text-white font-bold text-xl cursor-pointer">{` {BookStore} `}</h1>
      </div>

      {/* Menu */}
      <div>
        <ul className="flex flex-col md:flex-row gap-4 md:gap-10 mt-2 md:mt-0">
          <li className="text-white font-bold cursor-pointer">Home</li>
          <li className="text-white font-bold cursor-pointer">About</li>
          <li className="text-white font-bold cursor-pointer">Contact</li>
        </ul>
      </div>

      {/* Search */}
      <div>
        <input
          className="border rounded p-1 bg-white border-none"
          type="text"
          placeholder="search here.."
        />
      </div>

      {/* Cart */}
      <div>
        {/* <h3 className="text-white font-bold cursor-pointer"><FaShoppingCart /></h3> */}
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
        <Link to={'/cart'}><h3 className="text-white font-bold cursor-pointer"><FaShoppingCart /></h3></Link>
        <button className="text-white font-bold cursor-pointer">Login</button>
        <button className="text-white font-bold cursor-pointer">SignUp</button>
      </div>

    </div>
  );
};

export default Navbar;

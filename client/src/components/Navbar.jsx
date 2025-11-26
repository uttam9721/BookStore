import React, { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const [searchTerm,setSearchTerm]=useState();
  const navigate=useNavigate();


  const submitHandler=(e)=>{
    e.preventDefault();
    navigate(`/product/search/${searchTerm}`);
    setSearchTerm('');


  }
  return (
    <div className="flex flex-col md:flex-row md:justify-around items-center bg-gray-900 p-4 gap-4 md:gap-0">
      
      {/* Logo */}
      <div>
        <Link to={'/'} className="text-white font-bold text-xl cursor-pointer">{` {BookStore} `}</Link>
      </div>

      {/* Menu */}
      <div>
        <ul className="flex flex-col md:flex-row gap-4 md:gap-10 mt-2 md:mt-0">
          <li className="text-white font-bold cursor-pointer">Home</li>
          <Link to={'/about'} className="text-white font-bold cursor-pointer">About</Link>
          <li className="text-white font-bold cursor-pointer">Contact</li>
        </ul>
      </div>

      {/* Search */}
      <form onSubmit={submitHandler}>
        <input
          className="border rounded p-1 bg-white border-none"
          value={searchTerm}
          onChange={(e)=>setSearchTerm(e.target.value)}
          type="text"
          placeholder="search here.."
        />
      </form>

      {/* Cart */}
      <div>
        {/* <h3 className="text-white font-bold cursor-pointer"><FaShoppingCart /></h3> */}
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center">
        <Link to={'/cart'}><h3 className="text-white font-bold cursor-pointer"><FaShoppingCart /></h3></Link>
        <Link to={'/login'} className="text-white border rounded py-1 px-2 font-bold cursor-pointer">Login</Link>
        <Link to={'/register'} className="text-white py-1 px-2 border rounded font-bold cursor-pointer">SignUp</Link>
      </div>

    </div>
  );
};

export default Navbar;

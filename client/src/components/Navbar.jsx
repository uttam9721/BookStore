// import React, { useState } from 'react';
// import { FaShoppingCart } from "react-icons/fa";
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// const Navbar = () => {
//   const [searchTerm,setSearchTerm]=useState();
//   const navigate=useNavigate();


//   const submitHandler=(e)=>{
//     e.preventDefault();
//     navigate(`/product/search/${searchTerm}`);
//     setSearchTerm('');


//   }
//   return (
//     <div className="flex flex-col md:flex-row md:justify-around items-center bg-gray-900 p-4 gap-4 md:gap-0">
      
//       {/* Logo */}
//       <div>
//         <Link to={'/'} className="text-white font-bold text-xl cursor-pointer">{` {BookStore} `}</Link>
//       </div>

//       {/* Menu */}
//       <div>
//         <ul className="flex flex-col md:flex-row gap-4 md:gap-10 mt-2 md:mt-0">
//           <li className="text-white font-bold cursor-pointer">Home</li>
//           <Link to={'/about'} className="text-white font-bold cursor-pointer">About</Link>
//           <li className="text-white font-bold cursor-pointer">Contact</li>
//         </ul>
//       </div>

//       {/* Search */}
//       <form onSubmit={submitHandler}>
//         <input
//           className="border rounded p-1 bg-white border-none"
//           value={searchTerm}
//           onChange={(e)=>setSearchTerm(e.target.value)}
//           type="text"
//           placeholder="search here.."
//         />
//       </form>

//       {/* Cart */}
//       <div>
//         {/* <h3 className="text-white font-bold cursor-pointer"><FaShoppingCart /></h3> */}
//       </div>

//       {/* Buttons */}
//       <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center">
//         <Link to={'/cart'}><h3 className="text-white font-bold cursor-pointer"><FaShoppingCart /></h3></Link>
//         <Link to={'/login'} className="text-white border rounded py-1 px-2 font-bold cursor-pointer">Login</Link>
//         <Link to={'/register'} className="text-white py-1 px-2 border rounded font-bold cursor-pointer">SignUp</Link>
//       </div>

//     </div>
//   );
// };

// export default Navbar;






import React, { useState } from "react";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if (!searchTerm) return;
    navigate(`/product/search/${searchTerm}`);
    setSearchTerm("");
    setIsOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <div className="flex justify-between items-center bg-gray-900 p-4 md:px-10">
        {/* Logo */}
        <Link to="/" className="text-white font-bold text-xl">
          {`{BookStore}`}
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 items-center">
          <Link to="/" className="text-white font-bold">Home</Link>
          <Link to="/about" className="text-white font-bold">About</Link>
          <Link to="/contact" className="text-white font-bold">Contact</Link>

          <form onSubmit={submitHandler}>
            <input
              className="p-1 rounded border border-[#ccc] text-white font-bold"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search..."
            />
          </form>

          <Link to="/cart" className="text-white text-xl">
            <FaShoppingCart />
          </Link>

          <Link to="/login" className="text-white border px-3 py-1 rounded">
            Login
          </Link>
          <Link to="/register" className="text-white border px-3 py-1 rounded">
            SignUp
          </Link>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(true)}
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile Slider */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            className="text-white text-2xl"
            onClick={() => setIsOpen(false)}
          >
            <FaTimes />
          </button>
        </div>

        {/* Mobile Menu Items */}
        <ul className="flex flex-col gap-6 p-6 text-white font-bold">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>

          <form onSubmit={submitHandler}>
            <input
              className="p-2 rounded w-full text-black"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search..."
            />
          </form>

          <Link to="/cart" onClick={() => setIsOpen(false)}>
            <FaShoppingCart />
          </Link>

          <Link to="/login" onClick={() => setIsOpen(false)}>Login</Link>
          <Link to="/register" onClick={() => setIsOpen(false)}>SignUp</Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;

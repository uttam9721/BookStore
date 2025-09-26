import React from 'react';
import book from '../assets/book.jpg';
import Products from './Products';

const Hero = () => {
  return (
    <>
    <div className="bg-gray-100 rounded-xl p-10 md:p-16 lg:p-24 flex flex-col md:flex-row items-center gap-8">
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
          Discover your next <br /> favorite book! 📚
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          Browse our extensive categories. Discover thrilling mysteries, heartwarming romances, and more. Find your next favorite read today.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          Explore Now
        </button>
      </div>
      <div className="flex-1 flex justify-center md:justify-end">
        <img 
          src={book} 
          alt="Book" 
          className="w-[300px] max-w-sm rounded-lg shadow-xl object-cover"
        />
      </div>
    </div>
    <Products />
    </>
  );
};

export default Hero;

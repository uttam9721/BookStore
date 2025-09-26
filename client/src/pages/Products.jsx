import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { Link } from 'react-router-dom';

const Products = () => {
  const { product } = useContext(AppContext);

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {product && product.length > 0 ? (
        product.map((item, idx) => (
          <Link to={`/product/${item._id}`}
          
            key={idx}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col w-[250px] justify-around"
          >
            {/* Image Container */}
            <div className="h-48 w-full flex items-center justify-center bg-gray-100 overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-4 flex flex-col flex-1">
              <h2 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-1">
                {item.title}
              </h2>
              <p className="text-gray-500 text-sm mb-4 line-clamp-3">{item.desc}</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-blue-600 font-bold text-lg">₹{item.price}</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <p className="text-center col-span-full text-gray-500">No products available</p>
      )}
    </div>
  );
};

export default Products;

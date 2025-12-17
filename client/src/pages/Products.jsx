// import React, { useContext } from 'react';
// import AppContext from '../context/AppContext';
// import { Link } from 'react-router-dom';

// const Products = () => {
//   const { product } = useContext(AppContext);

//   return (
//     <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//       {product && product.length > 0 ? (
//         product.map((item, idx) => (
//           <Link to={`/product/${item._id}`}
          
//             key={idx}
//             className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col w-[250px] justify-around"
//           >
//             <div className="h-48 w-full flex items-center justify-center bg-gray-100 overflow-hidden">
//               <img
//                 src={item.img}
//                 alt={item.title}
//                 className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-105"
//               />
//             </div>
//             <div className="p-4 flex flex-col flex-1">
//               <h2 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-1">
//                 {item.title}
//               </h2>
//               <p className="text-gray-500 text-sm mb-4 line-clamp-3">{item.desc}</p>
//               <p className="text-gray-500 text-sm mb-4 line-clamp-3">Author:{item.author}  </p>
//               <div className="flex items-center justify-between mt-auto">
//                 <span className="text-blue-600 font-bold text-lg">₹{item.price}</span>
//                 <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           </Link>
//         ))
//       ) : (
//         <p className="text-center col-span-full text-gray-500">No products available</p>
//       )}
//     </div>
//   );
// };

// export default Products;



import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { Link } from 'react-router-dom';

const Products = () => {
  const { product, handleAddToCart } = useContext(AppContext);

  return (
    <div className="p-8 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {product && product.length > 0 ? (
        product.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-[#ccc] flex flex-col"
          >
            <Link to={`/product/${item._id}`} className="block">
              {/* Image */}
              <div className="relative h-56 bg-gray-100 flex items-center justify-center overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="object-contain h-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </Link>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-lg font-semibold text-gray-800 mb-1 truncate">
                {item.title}
              </h3>

              <p className="text-sm text-gray-600 line-clamp-2 mb-2">{item.desc}</p>

              <p className="text-xs text-gray-500 mb-4">
                <span className="font-semibold">Author:</span> {item.author}
              </p>

              {/* Footer with price and button */}
              <div className="mt-auto flex items-center justify-between">
                <span className="text-indigo-600 font-bold text-lg">₹{item.price}</span>
                <button
                  onClick={() => handleAddToCart(item)}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm px-4 py-2 rounded-lg transition duration-300"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center col-span-full text-gray-500 text-lg">
          No products available.
        </p>
      )}
    </div>
  );
};

export default Products;

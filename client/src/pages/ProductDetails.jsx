import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const url = "http://localhost:3000/api";

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`${url}/product/${id}`);
        setProduct(res.data.product || res.data);
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) {
    return <Link to={'/'} className="text-center mt-20 text-gray-500">Loading product...</Link>;
  }

  return (
    <div className="container mx-auto p-6 flex flex-col md:flex-row gap-10">
      <div className="flex-1 flex items-center justify-center bg-gray-100 rounded-xl overflow-hidden">
        <img
          src={product.img}
          alt={product.title}
          className="w-[600px] h-[400px] object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.title}</h1>
          <p className="text-gray-600 mb-6">{product.desc}</p>
          <p className="text-gray-600 mb-6">Author:{product.author}</p>
          <span className="text-2xl font-semibold text-blue-600">₹{product.price}</span>
        </div>

        <div className="flex gap-4 mt-6">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Add to Cart
          </button>
          <Link
            to="/"
            className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

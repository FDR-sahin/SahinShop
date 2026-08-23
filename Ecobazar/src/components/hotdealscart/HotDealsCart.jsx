import React from 'react';
import { AiFillEye, AiOutlineHeart } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import hot from '../../assets/hotapple.jpg'

const HotDealsCart = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md md:w-[428px] w-[310px] md:h-[654px] h-[550px]">
      <div className="relative mb-4">
        <img src={hot} alt="Product Name" className="w-full h-auto " />
        <span className="absolute top-1 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm">
          Sale 50%
        </span>
        <span className="absolute top-1 left-25 bg-blue-500 text-white px-2 py-1 rounded text-sm">
          Best Sale
        </span>
      </div>

      <div className="flex items-center justify-between mb-4">
        <button className="text-gray-500 hover:bg-green-500 hover:text-white rounded-full p-2">
          <AiOutlineHeart className="w-6 h-6" />
        </button>
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-7 rounded-3xl flex items-center gap-2">
          <FiShoppingCart className="w-5 h-5" />
          Add to Cart
        </button>
        <button className="text-gray-500 hover:bg-green-500 hover:text-white rounded-full p-2">
          <AiFillEye className="w-6 h-6" />
        </button>

      </div>

      <div className="text-center mb-2">
        <p className="text-lg font-semibold text-green-700">Chinese cabbage</p>
        <div className="flex items-center justify-center gap-2">
          <span className="text-xl font-bold text-gray-900">$12.00</span>
          <span className="text-lg text-gray-500 line-through">$24.00</span>
        </div>
      </div>

      <div className="flex items-center justify-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-yellow-500 text-xl">
            &#9733;
          </span>
        ))}
        <span className="text-sm text-gray-600">(524 Feedback)</span>
      </div>

      <div className="text-center">
        <p className="text-sm text-gray-600 mb-2">Hurry up! Offer ends in:</p>
        <div className="flex items-center justify-center gap-4 text-center">
          <div>
            <span className="text-3xl font-bold text-gray-900">01</span>
            <span className="text-xs text-gray-600 block">DAYS</span>
          </div>
          <div>
            <span className="text-3xl font-bold text-gray-900">:</span>
          </div>
          <div>
            <span className="text-3xl font-bold text-gray-900">23</span>
            <span className="text-xs text-gray-600 block">HOURS</span>
          </div>
          <div>
            <span className="text-3xl font-bold text-gray-900">:</span>
          </div>
          <div>
            <span className="text-3xl font-bold text-gray-900">34</span>
            <span className="text-xs text-gray-600 block">MINS</span>
          </div>
          <div>
            <span className="text-3xl font-bold text-gray-900">:</span>
          </div>
          <div>
            <span className="text-3xl font-bold text-gray-900">57</span>
            <span className="text-xs text-gray-600 block">SECS</span>
          </div>
        </div>
        <h1 className='text-3xl font-bold mt-7'>Quicl Oeder</h1>
      </div>
    </div>
  );
};

export default HotDealsCart;
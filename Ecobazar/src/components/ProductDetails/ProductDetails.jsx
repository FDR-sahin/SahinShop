import React, { useState } from 'react';
import { 
  FaStar, 
  FaFacebookF, 
  FaTwitter, 
  FaPinterestP, 
  FaInstagram, 
  FaShoppingBag, 
  FaHeart, 
  FaPlus, 
  FaMinus, 
  FaChevronUp, 
  FaChevronDown, 
  FaCheckCircle, 
  FaPlay 
} from 'react-icons/fa';
import { CiDiscount1 } from 'react-icons/ci';
 import { PiLeafBold } from "react-icons/pi"; // বা অন্য কোনো লিফ আইকন, নিচে TbLeaf/FaLeaf দেওয়া হয়েছে

import { FaLeaf } from 'react-icons/fa6';
import CustomerFeedback from '../CustomerFeedback/CustomerFeedback';

export default function ProductDetails() {
  const [quantity, setQuantity] = useState(5);
  const [activeTab, setActiveTab] = useState('descriptions');

  // Thumbnail Images
  const images = [
    'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300&auto=format&fit=crop&q=80',
  ];

  const [selectedImg, setSelectedImg] = useState(images[0]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 font-sans text-gray-800">
      
      {/* Upper Section: Image Gallery + Product Info */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
        
        {/* Left Side: Images (Thumbnails + Main View) */}
        <div className="lg:col-span-6 flex flex-col sm:flex-row gap-4 items-center sm:items-start">
          
          {/* Thumbnail List with Nav Arrows */}
          <div className="flex sm:flex-col items-center space-x-2 sm:space-x-0 sm:space-y-3">
            <button className="text-gray-400 hover:text-gray-600 p-1">
              <FaChevronUp className="w-4 h-4 hidden sm:block" />
            </button>
            
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`thumb-${index}`}
                onClick={() => setSelectedImg(img)}
                className={`w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg cursor-pointer border-2 transition-all ${
                  selectedImg === img ? 'border-green-600' : 'border-gray-200 hover:border-gray-300'
                }`}
              />
            ))}

            <button className="text-gray-400 hover:text-gray-600 p-1">
              <FaChevronDown className="w-4 h-4 hidden sm:block" />
            </button>
          </div>

          {/* Main Display Image */}
          <div className="flex-1 w-full bg-gray-50 rounded-2xl p-4 flex items-center justify-center border border-gray-100 min-h-[350px] sm:min-h-[450px]">
            <img
              src={selectedImg}
              alt="Chinese Cabbage"
              className="max-h-[400px] w-auto object-contain"
            />
          </div>
        </div>

        {/* Right Side: Product Details */}
        <div className="lg:col-span-6 space-y-5">
          
          {/* Title & Stock */}
          <div className="flex items-center space-x-3">
            <h1 className="text-3xl font-bold text-gray-900">Chinese Cabbage</h1>
            <span className="bg-green-100 text-green-700 text-xs font-semibold px-2.5 py-1 rounded-md">
              In Stock
            </span>
          </div>

          {/* Ratings & SKU */}
          <div className="flex items-center space-x-4 text-xs text-gray-500">
            <div className="flex items-center text-amber-500 space-x-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="w-3.5 h-3.5" />
              ))}
              <span className="text-gray-700 font-semibold ml-1">4 Review</span>
            </div>
            <span>•</span>
            <div>
              <span className="font-semibold text-gray-700">SKU:</span> 251,594
            </div>
          </div>

          {/* Pricing */}
          <div className="flex items-center space-x-3">
            <span className="text-gray-400 line-through text-lg">$48.00</span>
            <span className="text-2xl font-bold text-green-600">$17.28</span>
            <span className="bg-red-100 text-red-600 text-xs font-semibold px-2 py-0.5 rounded-full">
              64% Off
            </span>
          </div>

          <hr className="border-gray-100 my-4" />

          {/* Brand & Share */}
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center space-x-2">
              <span className="text-gray-500">Brand:</span>
              <div className="border rounded px-2 py-1 flex items-center space-x-1 text-gray-700 font-medium">
                <FaLeaf className="text-green-600" />
                <span>farmery</span>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-gray-500">Share item:</span>
              <div className="flex space-x-2">
                <button className="p-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition"><FaFacebookF className="w-3 h-3" /></button>
                <button className="p-2 text-gray-600 hover:text-green-600 transition"><FaTwitter className="w-3 h-3" /></button>
                <button className="p-2 text-gray-600 hover:text-green-600 transition"><FaPinterestP className="w-3 h-3" /></button>
                <button className="p-2 text-gray-600 hover:text-green-600 transition"><FaInstagram className="w-3 h-3" /></button>
              </div>
            </div>
          </div>

          {/* Description Snippet */}
          <p className="text-xs text-gray-500 leading-relaxed">
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla
            varius magna a consequat pulvinar.
          </p>

          {/* Quantity, Add to Cart & Wishlist */}
          <div className="flex items-center space-x-4 pt-2">
            {/* Quantity Selector */}
            <div className="flex items-center border border-gray-200 rounded-full p-1 bg-gray-50">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-8 h-8 flex items-center justify-center bg-white rounded-full text-gray-600 shadow-sm hover:bg-gray-100"
              >
                <FaMinus className="w-2.5 h-2.5" />
              </button>
              <span className="px-4 text-sm font-semibold text-gray-800">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="w-8 h-8 flex items-center justify-center bg-white rounded-full text-gray-600 shadow-sm hover:bg-gray-100"
              >
                <FaPlus className="w-2.5 h-2.5" />
              </button>
            </div>

            {/* Add To Cart */}
            <button className="flex-1 bg-[#00B207] hover:bg-[#009A06] text-white font-semibold py-3 px-6 rounded-full flex items-center justify-center space-x-2 text-sm transition shadow-sm">
              <span>Add to Cart</span>
              <FaShoppingBag className="w-4 h-4" />
            </button>

            {/* Wishlist Button */}
            <button className="p-3.5 bg-green-50 text-green-600 rounded-full hover:bg-green-100 transition">
              <FaHeart className="w-4 h-4" />
            </button>
          </div>

          <hr className="border-gray-100 my-4" />

          {/* Meta Info */}
          <div className="space-y-1.5 text-xs">
            <div>
              <span className="text-gray-900 font-semibold">Category: </span>
              <span className="text-gray-500">Vegetables</span>
            </div>
            <div className="flex flex-wrap gap-1">
              <span className="text-gray-900 font-semibold">Tag: </span>
              <span className="text-gray-500">Vegetables, Healthy, </span>
              <span className="text-gray-900 font-semibold">Chinese</span>
              <span className="text-gray-500">, Cabbage, Green Cabbage</span>
            </div>
          </div>

        </div>
      </div>

      {/* Tabs Section Header */}
      <div className="border-b border-gray-200 flex justify-center space-x-8 mb-8 text-sm font-semibold">
        {['descriptions', 'additional', 'feedback'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-3 capitalize transition-all ${
              activeTab === tab
                ? 'border-b-2 border-green-600 text-gray-900 font-bold'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab === 'descriptions' && 'Descriptions'}
            {tab === 'additional' && 'Additional Information'}
            {tab === 'feedback' && 'Customer Feedback'}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === 'descriptions' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-xs text-gray-500 leading-relaxed">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-4">
            <p>
              Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at posuere ac, viverra at
              mauris. Maecenas tincidunt ligula a sem vestibulum pharetra. Maecenas auctor tortor lacus,
              nec laoreet nisi porttitor vel. Etiam tincidunt metus vel dui interdum sollicitudin. Mauris sem
              ante, vestibulum nec orci vitae, aliquam mollis lacus. Sed et condimentum arcu, id molestie
              tellus. Nulla facilisi. Nam scelerisque vitae justo a convallis. Morbi urna ipsum, placerat quis
              commodo quis, egestas elementum leo. Donec convallis mollis enim. Aliquam id mi quam.
              Phasellus nec fringilla elit.
            </p>
            <p>
              Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui. Sed iaculis, metus faucibus
              elementum tincidunt, turpis mi viverra velit, pellentesque tristique neque mi eget nulla. Proin
              luctus elementum neque et pharetra.
            </p>

            {/* Checklist */}
            <div className="space-y-2 pt-2 text-gray-700 font-medium">
              {[
                '100 g of fresh leaves provides.',
                'Aliquam ac est at augue volutpat elementum.',
                'Quisque nec enim eget sapien molestie.',
                'Proin convallis odio volutpat finibus posuere.',
              ].map((text, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <FaCheckCircle className="text-green-600 w-4 h-4 flex-shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>

            <p className="pt-2">
              Cras et diam maximus, accumsan sapien et, sollicitudin velit. Nulla blandit eros non turpis
              lobortis iaculis at ut massa.
            </p>
          </div>

          {/* Right Video / Banner & Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Video Thumbnail Box */}
            <div className="relative rounded-2xl overflow-hidden group cursor-pointer shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&auto=format&fit=crop&q=80"
                alt="Delivery Courier"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <FaPlay className="w-4 h-4 ml-0.5" />
                </div>
              </div>
            </div>

            {/* Promo Cards */}
            <div className="grid grid-cols-2 gap-4 border border-gray-100 rounded-xl p-4 bg-white shadow-sm">
              
              <div className="flex items-center space-x-3 border-r border-gray-100 pr-2">
                <CiDiscount1 className="w-8 h-8 text-green-600 flex-shrink-0" />
                <div>
                  <div className="font-bold text-gray-900">64% Discount</div>
                  <div className="text-[10px] text-gray-400">Save your 64% money with us</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 pl-2">
                <FaLeaf className="w-6 h-6 text-green-600 flex-shrink-0" />
                <div>
                  <div className="font-bold text-gray-900">100% Organic</div>
                  <div className="text-[10px] text-gray-400">100% Organic Vegetables</div>
                </div>
              </div>

            </div>

          </div>

        </div>
      )}

      {activeTab === 'additional' && (
        <div className="p-8 text-xs text-gray-500 flex justify-between gap-2">
        <div className='flex flex-col gap-3'>
          <div className='flex items-center gap-10'>
            <p className='text-[14px]'>Weight:</p>
            <p className='text-[14px] text-[#666666]'>03</p>
          </div>
          <div className='flex items-center gap-13'>
            <p className='text-[14px]'>Color::</p>
            <p className='text-[14px] text-[#666666]'>Green</p>
          </div>
          <div className='flex items-center gap-13'>
            <p className='text-[14px]'>Type::</p>
            <p className='text-[14px] text-[#666666]'>Organic</p>
          </div>
          <div className='flex items-center gap-7'>
            <p className='text-[14px]'>Category::</p>
            <p className='text-[14px] text-[#666666]'>Available (5,413)</p>
          </div>
          <div className='flex items-center gap-13'>
            <p className='text-[14px]'>Tags::</p>
            <p className='text-[14px] text-[#666666]'>Vegetables, Healthy,  Chinese, Cabbage, Green Cabbage,</p>
          </div>
        </div>
        <div className="lg:col-span-5 space-y-4">
            
            {/* Video Thumbnail Box */}
            <div className="relative rounded-2xl overflow-hidden group cursor-pointer shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&auto=format&fit=crop&q=80"
                alt="Delivery Courier"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <FaPlay className="w-4 h-4 ml-0.5" />
                </div>
              </div>
            </div>

            {/* Promo Cards */}
            <div className="grid grid-cols-2 gap-4 border border-gray-100 rounded-xl p-4 bg-white shadow-sm">
              
              <div className="flex items-center space-x-3 border-r border-gray-100 pr-2">
                <CiDiscount1 className="w-8 h-8 text-green-600 flex-shrink-0" />
                <div>
                  <div className="font-bold text-gray-900">64% Discount</div>
                  <div className="text-[10px] text-gray-400">Save your 64% money with us</div>
                </div>
              </div>

              <div className="flex items-center space-x-3 pl-2">
                <FaLeaf className="w-6 h-6 text-green-600 flex-shrink-0" />
                <div>
                  <div className="font-bold text-gray-900">100% Organic</div>
                  <div className="text-[10px] text-gray-400">100% Organic Vegetables</div>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

      {activeTab === 'feedback' && (
        <div className="p-8 text-xs text-gray-500 text-center">
          <CustomerFeedback/>
        </div>
      )}

    </div>
  );
}


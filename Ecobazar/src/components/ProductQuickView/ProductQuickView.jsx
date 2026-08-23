import React, { useState } from "react";
import {
  FaStar,
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
  FaHeart,
} from "react-icons/fa";
import { FiMinus, FiPlus, FiX } from "react-icons/fi";

const images = [
  "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=600",
  "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600",
  "https://images.unsplash.com/photo-1518843875459-f738682238a6?w=600",
  "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=600",
];

export default function ProductQuickView() {
  const [activeImage, setActiveImage] = useState(images[0]);
  const [qty, setQty] = useState(1);

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 p-4">
      <div className="relative bg-white rounded-xl w-full max-w-6xl overflow-hidden">

        {/* Close Button */}
        <button className="absolute top-5 right-5 text-gray-500 hover:text-red-500">
          <FiX size={24} />
        </button>

        <div className="grid lg:grid-cols-2 gap-10 p-8">

          {/* Left Side */}
          <div className="flex gap-5">

            {/* Thumbnails */}
            <div className="flex flex-col gap-4">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(img)}
                  className={`border rounded-lg p-2 w-20 h-20 overflow-hidden ${
                    activeImage === img
                      ? "border-green-500"
                      : "border-gray-200"
                  }`}
                >
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 flex justify-center items-center">
              <img
                src={activeImage}
                alt=""
                className="max-h-[420px] object-contain"
              />
            </div>
          </div>

          {/* Right Side */}
          <div>

            {/* Title */}
            <div className="flex items-center gap-3">
              <h2 className="text-3xl font-bold">
                Chinese Cabbage
              </h2>

              <span className="bg-green-100 text-green-600 text-sm px-3 py-1 rounded">
                In Stock
              </span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-4">
              <div className="flex text-yellow-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <span className="text-gray-500 text-sm">
                4 Reviews
              </span>

              <span className="text-gray-400">•</span>

              <span className="text-gray-500 text-sm">
                SKU: 2,51,594
              </span>
            </div>

            {/* Price */}
            <div className="mt-5 flex items-center gap-4">
              <span className="text-gray-400 line-through text-xl">
                $48.00
              </span>

              <span className="text-3xl font-bold text-green-600">
                $17.28
              </span>

              <span className="bg-red-100 text-red-500 text-sm px-2 py-1 rounded-full">
                64% OFF
              </span>
            </div>

            <hr className="my-6" />

            {/* Brand & Share */}
            <div className="flex justify-between items-center flex-wrap gap-4">

              <div>
                <p className="font-medium">
                  Brand :
                  <span className="ml-2 text-green-600">
                    Ecobazar
                  </span>
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-sm">Share :</span>

                <button className="w-9 h-9 rounded-full bg-green-500 text-white flex items-center justify-center">
                  <FaFacebookF />
                </button>

                <button>
                  <FaTwitter />
                </button>

                <button>
                  <FaPinterestP />
                </button>

                <button>
                  <FaInstagram />
                </button>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-500 leading-7 mt-6">
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel
              consequat nec, ultrices et ipsum.
            </p>

            <hr className="my-6" />

            {/* Quantity */}
            <div className="flex flex-wrap gap-5 items-center">

              <div className="flex border rounded-full overflow-hidden">

                <button
                  onClick={() =>
                    setQty((prev) => Math.max(1, prev - 1))
                  }
                  className="px-4 py-3"
                >
                  <FiMinus />
                </button>

                <span className="px-6 flex items-center">
                  {qty}
                </span>

                <button
                  onClick={() => setQty(qty + 1)}
                  className="px-4 py-3"
                >
                  <FiPlus />
                </button>

              </div>

              <button className="bg-green-500 hover:bg-green-600 text-white px-10 py-3 rounded-full font-semibold">
                Add to Cart
              </button>

              <button className="w-12 h-12 rounded-full border flex justify-center items-center">
                <FaHeart />
              </button>

            </div>

            {/* Category */}
            <div className="mt-8 space-y-2 text-sm">

              <p>
                <span className="font-semibold">Category :</span>
                <span className="text-gray-500 ml-2">
                  Vegetables
                </span>
              </p>

              <p>
                <span className="font-semibold">Tag :</span>
                <span className="text-gray-500 ml-2">
                  Vegetables Healthy Chinese Cabbage Green
                  Cabbage
                </span>
              </p>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
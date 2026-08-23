import React from "react";
import { FiX } from "react-icons/fi";

const NewsLetterModaL = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 px-4">
      <div className="relative bg-white rounded-lg overflow-hidden max-w-3xl w-full shadow-xl">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
        >
          <FiX size={22} />
        </button>

        <div className="grid md:grid-cols-2">

          {/* Left Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=700"
              alt="newsletter"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-center p-8">

            <h2 className="text-3xl font-bold text-center leading-tight">
              Subscribe to Our
              <br />
              Newsletter
            </h2>

            <p className="text-gray-500 text-center mt-4 text-sm leading-6">
              Subscribe to our newsletter and Save your
              <span className="text-orange-500 font-semibold">
                {" "}
                20% Money
              </span>{" "}
              with discount code today.
            </p>

            {/* Input */}
            <div className="flex mt-8 border rounded-full overflow-hidden">

              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 outline-none"
              />

              <button className="bg-green-600 hover:bg-green-700 text-white px-8 font-medium">
                Subscribe
              </button>

            </div>

            {/* Checkbox */}
            <label className="flex items-center gap-2 mt-6 text-gray-500 text-sm cursor-pointer">
              <input type="checkbox" />
              Do not show this window
            </label>

          </div>

        </div>
      </div>
    </div>
  );
};

export default NewsLetterModaL;
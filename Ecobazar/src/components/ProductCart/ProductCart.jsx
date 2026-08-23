import React from "react";
import allProducts from "../../api/allProducts";
import Container from "../contener/Container";
import { FaShoppingBag, FaEye, FaHeart, FaStar } from "react-icons/fa";

function ProductCart() {
  return (
    <Container>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
        {allProducts.map((item) => (
          <div
            key={item.id}
            className={`relative  border  border-zinc-300 hover:border-zinc-500 hover:shadow-lg rounded-md p-4 gap-3 md:mb-0 mb-3 group transition-all
      ${item.featured ? "border-green-500" : "border-gray-200"}`}
          >
            {/* Sale Badge */}
            {item.sale && (
              <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
                {item.sale}
              </span>
            )}

            {/* Out of Stock */}
            {item.stock === "Out of Stock" && (
              <span className="absolute top-3 left-3 bg-black text-white text-xs px-2 py-1 rounded">
                Out of Stock
              </span>
            )}

            {/* Right Side Icons */}
            <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 duration-300">
              <button className="w-9 h-9 rounded-full border bg-white flex justify-center items-center hover:bg-green-500 hover:text-white">
                <FaHeart />
              </button>

              <button className="w-9 h-9 rounded-full border bg-white flex justify-center items-center hover:bg-green-500 hover:text-white">
                <FaEye />
              </button>
            </div>

            {/* Product Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-contain"
            />

            {/* Product Name */}
            <p className="text-gray-500 mt-3">{item.name}</p>

            {/* Price + Cart */}
            <div className="flex justify-between items-center mt-2">
              <div>
                <span className="font-bold">${item.price}</span>
                <span className="line-through text-gray-400 ml-2">
                  ${item.oldPrice}
                </span>
              </div>

              <button
                className={`w-10 h-10 rounded-full flex justify-center items-center
          `}
              >
                <FaShoppingBag className="text-black w-10 h-10 rounded-full p-2 bg-zinc-200 hover:bg-green-500 hover:text-white" />
              </button>
            </div>

            {/* Rating */}
            <div className="flex text-yellow-400 mt-2">
              {[...Array(item.rating)].map((_, i) => (
                <FaStar key={i} size={12} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default ProductCart;

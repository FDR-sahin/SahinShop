// import React from "react";
// import Container from "../../components/contener/Container";
// import apple from "../../assets/apple.jpg";
// import Subscrive from "../../components/subscribe/Subscrive";
// import { FaFacebookF } from "react-icons/fa6";
// import { FaTwitter } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { IoGitMergeOutline } from "react-icons/io5";
// import PageBanner from "../../components/PageBanner/PageBanner";

// function Wishlist() {
//   const carts = [
//     {
//       id: 1,
//       name: "Green Apple",
//       image: apple,
//       price: 14.99,
//       oldPrice: 20.99,
//       rating: 5,
//       stock: "In Stock",
//       sale: "Sale 50%",
//     },
//     {
//       id: 1,
//       name: "Green Apple",
//       image: apple,
//       price: 14.99,
//       oldPrice: 20.99,
//       rating: 5,
//       stock: "In Stock",
//       sale: "Sale 50%",
//     },
//     {
//       id: 1,
//       name: "Green Apple",
//       image: apple,
//       price: 14.99,
//       oldPrice: 20.99,
//       rating: 5,
//       stock: "Out of stock",
//       sale: "Sale 50%",
//     },
    
//   ];
//   return (
//     <>
//     <PageBanner links="wishlist"/>
//     <Container>
//       <h1 className="text-[32px] mb-3 text-center font-semibold">My Wishlist Cart</h1>
//       <div className=" ">
//         <div className="flex-1">
//           <div className="flex items-center justify-between gap-3 border border-zinc-300 bg-zinc-40 px-4 py-2">
//             <p className="text-[14px] text-[#808080] w-50">Product</p>
//             <p className="text-[14px] text-[#808080]">price </p>
//             <p className="text-[14px] text-[#808080]">Stock Status </p>
            
//             <p className="text-[14px] text-[#808080]">Action</p>
//           </div>
//           {carts.map((cart, i) => {
//             return (
//               <div
//                 className="flex items-center justify-between border border-zinc-300   p-2"
//                 key={i}
//               >
//                 <div className="flex items-center gap-1">
//                   <img className="w-[80px] h-[80px]" src={cart.image} alt="" />
//                   <p>{cart.name}</p>
//                 </div>
//                 <div>
//                   <p>{cart.price}</p>
//                 </div>
                
//                 <div>
//                   <p>{cart.stock}</p>
//                 </div>


//                 <div className="flex items-center gap-2">
//                  <button className="bg-[#00B207] px-5 py-2 rounded-3xl text-white">Add to Cart</button>
//                   <p>X</p>
//                 </div>
//               </div>
//             );
//           })}


//          <div className="flex items-start justify-start gap-2 py-5 px-4 border border-zinc-300">
//             <p>Shere :</p>

//              <div className="flex items-center justify-center md:gap-2 gap-5 md:mt-0 mt-3">
//                         <FaFacebookF className="text-zinc-700 hover:bg-green-500 hover:text-white w-8 h-8 p-1 rounded-full" />
//                         <FaTwitter className="text-zinc-700 hover:bg-green-500 hover:text-white w-8 h-8 p-1 rounded-full" />
//                         <FaInstagram className="text-zinc-700 hover:bg-green-500 hover:text-white w-8 h-8 p-1 rounded-full" />
//                         <IoGitMergeOutline className="text-zinc-700 hover:bg-green-500 hover:text-white w-8 h-8 p-1 rounded-full" />
//          </div>
//          </div>

          
//         </div> 
//       </div>

  

//     </Container>

//       <div>
//           <Subscrive/>
//       </div>

//       </>
//   );
// }

// export default Wishlist;


import React, { useState } from "react";
import Container from "../../components/contener/Container";
import apple from "../../assets/apple.jpg";
import Subscrive from "../../components/subscribe/Subscrive";
import PageBanner from "../../components/PageBanner/PageBanner";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa6";
import { IoGitMergeOutline } from "react-icons/io5";
import { FaHeart, FaRegHeart, FaTrashAlt, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: "Green Apple",
      image: apple,
      price: 14.99,
      oldPrice: 20.99,
      rating: 5,
      stock: "In Stock",
      sale: "50% OFF",
      inStock: true,
    },
    {
      id: 2,
      name: "Fresh Orange",
      image: apple,
      price: 12.49,
      oldPrice: 18.99,
      rating: 4,
      stock: "In Stock",
      sale: "35% OFF",
      inStock: true,
    },
    {
      id: 3,
      name: "Organic Banana",
      image: apple,
      price: 8.99,
      oldPrice: null,
      rating: 5,
      stock: "Out of Stock",
      sale: null,
      inStock: false,
    },
    {
      id: 4,
      name: "Red Grapes",
      image: apple,
      price: 19.99,
      oldPrice: 25.99,
      rating: 4,
      stock: "In Stock",
      sale: "25% OFF",
      inStock: true,
    },
    {
      id: 5,
      name: "Fresh Strawberry",
      image: apple,
      price: 9.99,
      oldPrice: 14.99,
      rating: 5,
      stock: "In Stock",
      sale: "33% OFF",
      inStock: true,
    },
  ]);

  const removeItem = (id) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id));
  };

  const addToCart = (id) => {
    alert(`Product ${id} added to cart!`);
  };

  return (
    <>
      <PageBanner links="wishlist" />

      <Container>
        {/* Header */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800 flex items-center gap-3">
            <FaHeart className="text-green-600" />
            My Wishlist
            <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
              {wishlistItems.length} items
            </span>
          </h1>
          <Link
            to="/shoppage"
            className="text-sm text-green-600 hover:text-green-700 font-medium flex items-center gap-1 border-b-2 border-green-600 pb-1"
          >
            Continue Shopping →
          </Link>
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto">
          <div className="min-w-full">
            {/* Table Header */}
            <div className="grid grid-cols-5 gap-4 bg-gray-50 px-4 py-3 rounded-t-xl border border-gray-200">
              <div className="col-span-2 text-sm font-semibold text-gray-600">Product</div>
              <div className="text-sm font-semibold text-gray-600 text-center">Price</div>
              <div className="text-sm font-semibold text-gray-600 text-center">Stock Status</div>
              <div className="text-sm font-semibold text-gray-600 text-right">Action</div>
            </div>

            {/* Table Rows */}
            {wishlistItems.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-5 gap-4 items-center px-4 py-3 border-x border-b border-gray-200 hover:bg-green-50/50 transition-colors duration-200"
              >
                {/* Product Info */}
                <div className="col-span-2 flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg shadow-md"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">{item.name}</p>
                    {item.sale && (
                      <span className="inline-block text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full font-medium">
                        {item.sale}
                      </span>
                    )}
                  </div>
                </div>

                {/* Price */}
                <div className="text-center">
                  <span className="font-bold text-green-600">${item.price.toFixed(2)}</span>
                  {item.oldPrice && (
                    <span className="text-xs text-gray-400 line-through ml-2">
                      ${item.oldPrice.toFixed(2)}
                    </span>
                  )}
                </div>

                {/* Stock */}
                <div className="text-center">
                  <span
                    className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                      item.inStock
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {item.stock}
                  </span>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-end gap-2">
                  <button
                    onClick={() => addToCart(item.id)}
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                      item.inStock
                        ? "bg-green-600 hover:bg-green-700 text-white shadow-md hover:shadow-lg"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                    disabled={!item.inStock}
                  >
                    <FaShoppingCart className="text-xs" />
                    Add to Cart
                  </button>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors p-2 hover:bg-red-50 rounded-full"
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          {wishlistItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex p-4 gap-4">
                {/* Image */}
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  {item.sale && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                      {item.sale}
                    </span>
                  )}
                </div>

                {/* Details */}
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">{item.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="font-bold text-green-600">${item.price.toFixed(2)}</span>
                    {item.oldPrice && (
                      <span className="text-xs text-gray-400 line-through">
                        ${item.oldPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                  <span
                    className={`inline-block mt-2 text-xs font-medium px-2.5 py-0.5 rounded-full ${
                      item.inStock
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {item.stock}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 p-4 pt-0 border-t border-gray-100">
                <button
                  onClick={() => addToCart(item.id)}
                  className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-medium rounded-xl transition-all duration-300 ${
                    item.inStock
                      ? "bg-green-600 hover:bg-green-700 text-white shadow-md"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
                  disabled={!item.inStock}
                >
                  <FaShoppingCart />
                  Add to Cart
                </button>
                <button
                  onClick={() => removeItem(item.id)}
                  className="p-2.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-colors"
                >
                  <FaTrashAlt />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {wishlistItems.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl text-gray-300 mb-4">🛒</div>
            <h3 className="text-2xl font-bold text-gray-600">Your wishlist is empty</h3>
            <p className="text-gray-400 mt-2">Start adding your favorite products!</p>
            <Link
              to="/shoppage"
              className="inline-block mt-6 bg-green-600 hover:bg-green-700 text-white font-medium px-8 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Browse Products
            </Link>
          </div>
        )}

        {/* Share Section */}
        {wishlistItems.length > 0 && (
          <div className="flex flex-wrap items-center justify-between gap-4 mt-8 p-4 bg-gray-50 rounded-xl border border-gray-200">
            <p className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <span className="text-lg">🔗</span> Share your wishlist:
            </p>
            <div className="flex items-center gap-2">
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white hover:bg-[#1877F2] hover:text-white text-gray-600 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-transparent">
                <FaFacebookF />
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white hover:bg-[#1DA1F2] hover:text-white text-gray-600 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-transparent">
                <FaTwitter />
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white hover:bg-[#E4405F] hover:text-white text-gray-600 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-transparent">
                <FaInstagram />
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white hover:bg-[#333] hover:text-white text-gray-600 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-transparent">
                <IoGitMergeOutline />
              </button>
            </div>
          </div>
        )}
      </Container>

      <Subscrive />
    </>
  );
}

export default Wishlist;
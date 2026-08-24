// import React from "react";
// import Container from "../../components/contener/Container";
// import apple from "../../assets/apple.jpg";
// import Subscrive from "../../components/subscribe/Subscrive";
// import PageBanner from "../../components/PageBanner/PageBanner";
// import { Link } from "react-router-dom";

// function ShippingCart() {
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
    
//   ];
//   return (
//     <>
//     <PageBanner links="shippingcart"/>

//     <Container>
//       <h1 className="text-[32px] mb-3 text-center font-semibold">My Shopping Cart</h1>
//       <div className="flex justify-between gap-2 ">
//         <div className="flex-1">
//           <div className="flex items-center justify-between gap-3 border border-zinc-300 bg-zinc-40 px-4 py-2">
//             <p className="text-[14px] text-[#808080] w-50">Product</p>
//             <p className="text-[14px] text-[#808080]">price </p>
//             <p className="text-[14px] text-[#808080]">Quantity </p>
//             <p className="text-[14px] text-[#808080]">Subtotal</p>
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
//                 <div className="flex items-center gap-2 bg-white rounded-3xl border border-zinc-300 p-1">
//                   <span className="w-6 h-6 flex items-center justify-center rounded-full bg-zinc-200">
//                     -
//                   </span>
//                   <p>1</p>
//                   <span className="w-6 h-6 flex items-center justify-center rounded-full bg-zinc-200">
//                     +
//                   </span>
//                 </div>
//                 <div>
//                   <p>$70</p>
//                 </div>

//                 <div>
//                   <p>X</p>
//                 </div>
//               </div>
//             );
//           })}


//           <div className="flex items-center justify-between px-4 py-5  border border-zinc-300">
//             <button className="bg-[#F2F2F2] px-2 py-1.5 rounded-3xl text-black">Return to shop</button>
//             <button className="bg-[#F2F2F2] px-2 py-1.5 rounded-3xl text-black">Update Cart</button>
//           </div>

//           <div className="flex items-center justify-between px-4 mt-5 border border-zinc-300 py-2 mb-3">

//             <p>Coupon Code</p>

//              <div className="flex border border-zinc-300 border-r-0  items-center gap-2 md:w-[498px] w-[398px] h-[45px] bg-white  pl-3 rounded-3xl">
//               <input
//                 className=" outline-none w-full"
//                 type="text"
//                 placeholder="search"
//               />
//               <button className="bg-[#000] px-10 py-3  text-white text-[14px]  rounded-3xl ">
//                 ApplyCoupon
//               </button>
//             </div> 

//           </div>
//         </div>

//         <div className="p-2 border-2 border-zinc-300 flex flex-col gap-2 h-57">
//           <h1 className="text-[20px]">Cart Total</h1>
//           <div className="flex items-center justify-between gap-2 border-b border-b-zinc-300 mb-2">
//             <p className="text-[14px] text-[#4D4D4D]">Subtotal:</p>
//             <p className="font-semibold">$84.00</p>
//           </div>
//           <div className="flex items-center justify-between gap-2 border-b border-b-zinc-300 mb-2">
//             <p className="text-[14px] text-[#4D4D4D]">Shipping::</p>
//             <p className="font-semibold">Free</p>
//           </div>
//           <div className="flex items-center justify-between gap-2 border-b border-b-zinc-300 mb-2">
//             <p className="text-[14px] text-[#4D4D4D]">Total::</p>
//             <p className="font-semibold">$84.00</p>
//           </div>

//           <Link to="/checkout" className="bg-[#00B207] px-5 py-2 rounded-3xl text-white">Proceed to checkout</Link>
//         </div>
//       </div>
//      {/* // import { PiLeafBold } from "react-icons/pi"; */}

  

//     </Container>

//       <div>
//           <Subscrive/>
//       </div>

//       </>
//   );
// }

// export default ShippingCart;


import React, { useState } from "react";
import Container from "../../components/contener/Container";
import apple from "../../assets/apple.jpg";
import Subscrive from "../../components/subscribe/Subscrive";
import PageBanner from "../../components/PageBanner/PageBanner";
import { Link } from "react-router-dom";
import { FaTrashAlt, FaPlus, FaMinus, FaShoppingCart, FaArrowLeft } from "react-icons/fa";

function ShippingCart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Green Apple",
      image: apple,
      price: 14.99,
      oldPrice: 20.99,
      quantity: 2,
      inStock: true,
    },
    {
      id: 2,
      name: "Fresh Orange",
      image: apple,
      price: 12.49,
      oldPrice: 18.99,
      quantity: 1,
      inStock: true,
    },
    {
      id: 3,
      name: "Organic Banana",
      image: apple,
      price: 8.99,
      oldPrice: null,
      quantity: 3,
      inStock: true,
    },
  ]);

  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);

  // Update quantity
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Remove item
  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Apply coupon (demo)
  const applyCoupon = () => {
    if (couponCode.toLowerCase() === "save10") {
      setDiscount(subtotal * 0.1);
      alert("Coupon applied! 10% off");
    } else if (couponCode.toLowerCase() === "free20") {
      setDiscount(20);
      alert("$20 off applied!");
    } else {
      setDiscount(0);
      alert("Invalid coupon code");
    }
  };

  const total = subtotal - discount;

  return (
    <>
      <PageBanner links="shopping cart" />

      <Container>
        {/* Header */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800 flex items-center gap-3">
            <FaShoppingCart className="text-green-600" />
            Shopping Cart
            <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
              {cartItems.length} items
            </span>
          </h1>
          <Link
            to="/shoppage"
            className="flex items-center gap-2 text-sm text-green-600 hover:text-green-700 font-medium border-b-2 border-green-600 pb-1"
          >
            <FaArrowLeft />
            Continue Shopping
          </Link>
        </div>

        {cartItems.length === 0 ? (
          // Empty State
          <div className="text-center py-16">
            <div className="text-6xl text-gray-300 mb-4">🛒</div>
            <h3 className="text-2xl font-bold text-gray-600">Your cart is empty</h3>
            <p className="text-gray-400 mt-2">Looks like you haven't added anything yet.</p>
            <Link
              to="/shoppage"
              className="inline-block mt-6 bg-green-600 hover:bg-green-700 text-white font-medium px-8 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Cart Items Table */}
            <div className="flex-1 overflow-x-auto">
              {/* Desktop Table Header */}
              <div className="hidden md:grid grid-cols-6 gap-4 bg-gray-50 px-4 py-3 rounded-t-xl border border-gray-200">
                <div className="col-span-2 text-sm font-semibold text-gray-600">Product</div>
                <div className="text-sm font-semibold text-gray-600 text-center">Price</div>
                <div className="text-sm font-semibold text-gray-600 text-center">Quantity</div>
                <div className="text-sm font-semibold text-gray-600 text-center">Subtotal</div>
                <div className="text-sm font-semibold text-gray-600 text-center">Action</div>
              </div>

              {/* Cart Items */}
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center px-4 py-4 border-x border-b border-gray-200 hover:bg-green-50/50 transition-colors duration-200"
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
                      {item.oldPrice && (
                        <span className="text-xs text-gray-400 line-through">
                          ${item.oldPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Price */}
                  <div className="text-center md:text-left">
                    <span className="font-bold text-green-600">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>

                  {/* Quantity */}
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <div className="flex items-center gap-2 bg-white rounded-full border border-gray-300 px-2 py-1">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-600"
                      >
                        <FaMinus className="text-xs" />
                      </button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-600"
                      >
                        <FaPlus className="text-xs" />
                      </button>
                    </div>
                  </div>

                  {/* Subtotal */}
                  <div className="text-center font-semibold text-gray-800">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>

                  {/* Remove */}
                  <div className="text-center">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors p-2 hover:bg-red-50 rounded-full"
                    >
                      <FaTrashAlt />
                    </button>
                  </div>
                </div>
              ))}

              {/* Bottom Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-4 py-4 border-x border-b border-gray-200 rounded-b-xl bg-gray-50/50">
                <Link
                  to="/shoppage"
                  className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-green-600 transition-colors"
                >
                  <FaArrowLeft />
                  Return to Shop
                </Link>
                <button
                  onClick={() => alert("Cart updated!")}
                  className="px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium rounded-full transition-colors"
                >
                  Update Cart
                </button>
              </div>

              {/* Coupon Section */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 p-4 border border-gray-200 rounded-xl bg-white shadow-sm">
                <p className="text-sm font-medium text-gray-700">Coupon Code</p>
                <div className="flex flex-1 max-w-md gap-2">
                  <input
                    type="text"
                    placeholder="Enter coupon (SAVE10 / FREE20)"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                  />
                  <button
                    onClick={applyCoupon}
                    className="px-6 py-2 bg-gray-900 hover:bg-black text-white font-medium rounded-full transition-colors"
                  >
                    Apply Coupon
                  </button>
                </div>
              </div>
            </div>

            {/* Cart Total Sidebar */}
            <div className="lg:w-80 w-full flex-shrink-0">
              <div className="bg-white rounded-xl border border-gray-200 shadow-lg p-6 sticky top-4">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Cart Total</h2>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Subtotal:</span>
                    <span className="font-semibold">${subtotal.toFixed(2)}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-sm text-green-600">
                      <span>Discount:</span>
                      <span className="font-semibold">-${discount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Shipping:</span>
                    <span className="font-semibold text-green-600">Free</span>
                  </div>
                  <div className="border-t border-gray-200 pt-3 mt-2">
                    <div className="flex justify-between text-lg font-bold text-gray-800">
                      <span>Total:</span>
                      <span className="text-green-600">${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                <Link
                  to="/checkout"
                  className="block w-full mt-6 bg-green-600 hover:bg-green-700 text-white font-bold text-center py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </div>
        )}
      </Container>

      <Subscrive />
    </>
  );
}

export default ShippingCart;
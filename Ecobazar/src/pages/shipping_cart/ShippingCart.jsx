import React from "react";
import Container from "../../components/contener/Container";
import apple from "../../assets/apple.jpg";
import Subscrive from "../../components/subscribe/Subscrive";
import PageBanner from "../../components/PageBanner/PageBanner";
import { Link } from "react-router-dom";

function ShippingCart() {
  const carts = [
    {
      id: 1,
      name: "Green Apple",
      image: apple,
      price: 14.99,
      oldPrice: 20.99,
      rating: 5,
      stock: "In Stock",
      sale: "Sale 50%",
    },
    {
      id: 1,
      name: "Green Apple",
      image: apple,
      price: 14.99,
      oldPrice: 20.99,
      rating: 5,
      stock: "In Stock",
      sale: "Sale 50%",
    },
    
  ];
  return (
    <>
    <PageBanner links="shippingcart"/>

    <Container>
      <h1 className="text-[32px] mb-3 text-center font-semibold">My Shopping Cart</h1>
      <div className="flex justify-between gap-2 ">
        <div className="flex-1">
          <div className="flex items-center justify-between gap-3 border border-zinc-300 bg-zinc-40 px-4 py-2">
            <p className="text-[14px] text-[#808080] w-50">Product</p>
            <p className="text-[14px] text-[#808080]">price </p>
            <p className="text-[14px] text-[#808080]">Quantity </p>
            <p className="text-[14px] text-[#808080]">Subtotal</p>
            <p className="text-[14px] text-[#808080]">Action</p>
          </div>
          {carts.map((cart, i) => {
            return (
              <div
                className="flex items-center justify-between border border-zinc-300   p-2"
                key={i}
              >
                <div className="flex items-center gap-1">
                  <img className="w-[80px] h-[80px]" src={cart.image} alt="" />
                  <p>{cart.name}</p>
                </div>
                <div>
                  <p>{cart.price}</p>
                </div>
                <div className="flex items-center gap-2 bg-white rounded-3xl border border-zinc-300 p-1">
                  <span className="w-6 h-6 flex items-center justify-center rounded-full bg-zinc-200">
                    -
                  </span>
                  <p>1</p>
                  <span className="w-6 h-6 flex items-center justify-center rounded-full bg-zinc-200">
                    +
                  </span>
                </div>
                <div>
                  <p>$70</p>
                </div>

                <div>
                  <p>X</p>
                </div>
              </div>
            );
          })}


          <div className="flex items-center justify-between px-4 py-5  border border-zinc-300">
            <button className="bg-[#F2F2F2] px-2 py-1.5 rounded-3xl text-black">Return to shop</button>
            <button className="bg-[#F2F2F2] px-2 py-1.5 rounded-3xl text-black">Update Cart</button>
          </div>

          <div className="flex items-center justify-between px-4 mt-5 border border-zinc-300 py-2 mb-3">

            <p>Coupon Code</p>

             <div className="flex border border-zinc-300 border-r-0  items-center gap-2 md:w-[498px] w-[398px] h-[45px] bg-white  pl-3 rounded-3xl">
              <input
                className=" outline-none w-full"
                type="text"
                placeholder="search"
              />
              <button className="bg-[#000] px-10 py-3  text-white text-[14px]  rounded-3xl ">
                ApplyCoupon
              </button>
            </div> 

          </div>
        </div>

        <div className="p-2 border-2 border-zinc-300 flex flex-col gap-2 h-57">
          <h1 className="text-[20px]">Cart Total</h1>
          <div className="flex items-center justify-between gap-2 border-b border-b-zinc-300 mb-2">
            <p className="text-[14px] text-[#4D4D4D]">Subtotal:</p>
            <p className="font-semibold">$84.00</p>
          </div>
          <div className="flex items-center justify-between gap-2 border-b border-b-zinc-300 mb-2">
            <p className="text-[14px] text-[#4D4D4D]">Shipping::</p>
            <p className="font-semibold">Free</p>
          </div>
          <div className="flex items-center justify-between gap-2 border-b border-b-zinc-300 mb-2">
            <p className="text-[14px] text-[#4D4D4D]">Total::</p>
            <p className="font-semibold">$84.00</p>
          </div>

          <Link to="/checkout" className="bg-[#00B207] px-5 py-2 rounded-3xl text-white">Proceed to checkout</Link>
        </div>
      </div>
     {/* // import { PiLeafBold } from "react-icons/pi"; */}

  

    </Container>

      <div>
          <Subscrive/>
      </div>

      </>
  );
}

export default ShippingCart;

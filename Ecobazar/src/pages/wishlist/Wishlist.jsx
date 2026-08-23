import React from "react";
import Container from "../../components/contener/Container";
import apple from "../../assets/apple.jpg";
import Subscrive from "../../components/subscribe/Subscrive";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoGitMergeOutline } from "react-icons/io5";
import PageBanner from "../../components/PageBanner/PageBanner";

function Wishlist() {
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
    {
      id: 1,
      name: "Green Apple",
      image: apple,
      price: 14.99,
      oldPrice: 20.99,
      rating: 5,
      stock: "Out of stock",
      sale: "Sale 50%",
    },
    
  ];
  return (
    <>
    <PageBanner links="wishlist"/>
    <Container>
      <h1 className="text-[32px] mb-3 text-center font-semibold">My Wishlist Cart</h1>
      <div className=" ">
        <div className="flex-1">
          <div className="flex items-center justify-between gap-3 border border-zinc-300 bg-zinc-40 px-4 py-2">
            <p className="text-[14px] text-[#808080] w-50">Product</p>
            <p className="text-[14px] text-[#808080]">price </p>
            <p className="text-[14px] text-[#808080]">Stock Status </p>
            
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
                
                <div>
                  <p>{cart.stock}</p>
                </div>


                <div className="flex items-center gap-2">
                 <button className="bg-[#00B207] px-5 py-2 rounded-3xl text-white">Add to Cart</button>
                  <p>X</p>
                </div>
              </div>
            );
          })}


         <div className="flex items-start justify-start gap-2 py-5 px-4 border border-zinc-300">
            <p>Shere :</p>

             <div className="flex items-center justify-center md:gap-2 gap-5 md:mt-0 mt-3">
                        <FaFacebookF className="text-zinc-700 hover:bg-green-500 hover:text-white w-8 h-8 p-1 rounded-full" />
                        <FaTwitter className="text-zinc-700 hover:bg-green-500 hover:text-white w-8 h-8 p-1 rounded-full" />
                        <FaInstagram className="text-zinc-700 hover:bg-green-500 hover:text-white w-8 h-8 p-1 rounded-full" />
                        <IoGitMergeOutline className="text-zinc-700 hover:bg-green-500 hover:text-white w-8 h-8 p-1 rounded-full" />
         </div>
         </div>

          
        </div> 
      </div>

  

    </Container>

      <div>
          <Subscrive/>
      </div>

      </>
  );
}

export default Wishlist;

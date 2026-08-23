import React from 'react'
import Container from "../contener/Container"
import f1 from "../../assets/f1.png"
import f2 from "../../assets/f2.png"
import f3 from "../../assets/f3.png"
import f4 from "../../assets/f4.png"
import f5 from "../../assets/f5.png"
import logo from "../../assets/logo.png";
import { Link } from 'react-router-dom'



function Footer() {
  return (
    <div className='bg-[#1A1A1A] text-white'>
        <Container>
            <div className='md:flex md:flex-row flex-col  items-center py-5 border-b-2 border-b-zinc-800  gap-10'>

                <div className='md:mb-0 mb-3 md:max-w-[336px] max-w-[270px] flex flex-col gap-4'>
                    <Link to="/" className="flex items-center gap-1">
                        <img className="w-[24px] h-[22px]" src={logo} alt="" />
                        <h1 className="md:text-[32px] text-[25px] font-semibold">Sahin Shop</h1>
                    </Link>
                    <p className='text-[14px] text-[#808080]'>Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.</p>
                    <div className='flex items-center gap-3'>
                        <p className='text-[15px] font-semibold border-b-2 border-b-green-500 w-fit pb-2'>(219) 555-0114</p>
                        <p className='text-[#808080]'>Or</p>
                        <p className='text-[15px] font-semibold border-b-2 border-b-green-500 w-fit pb-2'>Proxy@gmail.com</p>
                    </div>
                </div>


                <div className='md:mb-0 mb-3 flex-1'>
                    <h1 className='text-[16px] pb-3 text-white font-semibold'>My Account</h1>
                    <ul>
                        <li><Link className='text-[#999999] text-[14px] pb-2' to="/myaccount">My Account</Link></li>
                        <li><Link className='text-[#999999] text-[14px] pb-2' to="/orderhistory">Order History</Link></li>
                        <li><Link className='text-[#999999] text-[14px] pb-2' to="/shippingcart">Shoping Cart</Link></li>
                        <li><Link className='text-[#999999] text-[14px] pb-2' to="/wishlist">Wishlist</Link></li>  
                    </ul>
                </div>

               <div className='md:mb-0 mb-3 flex-1'>
                    <h1 className='text-[16px] pb-3 text-white font-semibold'>Helps</h1>
                    <ul>
                        <li><Link className='text-[#999999] text-[14px] pb-2' to="/contact">Contact</Link></li>
                        <li><Link className='text-[#999999] text-[14px] pb-2' to="/faqs">Faqs</Link></li>
                        <li><Link className='text-[#999999] text-[14px] pb-2' to="/termscondition">Terms & Condition</Link></li>
                        <li><Link className='text-[#999999] text-[14px] pb-2' to="/privacypolicy">Privacy Policy</Link></li>  
                    </ul>
                </div>

               <div className='md:mb-0 mb-3 flex-1'>
                    <h1 className='text-[16px] pb-3 text-white font-semibold'>Proxy</h1>
                    <ul>
                        <li><Link className='text-[#999999] text-[14px] pb-2' to="/about">About</Link></li>
                        <li><Link className='text-[#999999] text-[14px] pb-2' to="/shoppage">Shop</Link></li>
                        <li><Link className='text-[#999999] text-[14px] pb-2' to="/product">Product</Link></li>
                        <li><Link className='text-[#999999] text-[14px] pb-2' to="/trackorder">Track Order</Link></li>  
                    </ul>
                </div>

                <div className='md:mb-0 mb-3 flex-1'>
                    <h1 className='text-[16px] pb-3 text-white font-semibold'>Categories</h1>
                    <ul>
                        <li><Link className='text-[#999999] text-[14px] pb-2' to="/fruitvegetables">Fruit & Vegetables</Link></li>
                        <li><Link className='text-[#999999] text-[14px] pb-2' to="/meatfish">Meat & Fish</Link></li>
                        <li><Link className='text-[#999999] text-[14px] pb-2' to="/breadbakery">Bread & Bakery Cart</Link></li>
                        <li><Link className='text-[#999999] text-[14px] pb-2' to="/beautyhealth">Beauty & Health</Link></li>  
                    </ul>
                </div>


            </div>

            <div className='md:flex md:flex-row flex-col items-center justify-between gap-2 py-5'>
                <div>
                    <p className='text-[#808080] text-[14px ] md:mb-0 mb-3'>Ecobazar eCommerce © 2021. All Rights Reserved</p>

                </div>
                <div className='flex items-center gap-3'>
                    <img src={f1} alt="" />
                    <img src={f2} alt="" />
                    <img src={f3} alt="" />
                    <img src={f4} alt="" />
                    <img src={f5} alt="" />  
                </div>
            </div>





        </Container>
      
    </div>
  )
}

export default Footer

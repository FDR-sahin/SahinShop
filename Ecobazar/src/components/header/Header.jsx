import React, { useState } from "react";
import Container from "../contener/Container";
import { CiLocationOn } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { GiSelfLove } from "react-icons/gi";
import { FaCartArrowDown } from "react-icons/fa6";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className="border-b border-b-zinc-300">
        <Container>
          <div className="flex items-center justify-between gap-5">
            <div className="flex items-center justify-between gap-1 text-[12px] text-[#666666]">
              <CiLocationOn className="text-[16px]" />
              <p>Store Location: Lincoln- 344, Illinois, Chicago, USA</p>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <div className="flex items-center  gap-1 text-[12px] text-[#666666]">
                <p>Eng</p>
                <FaChevronDown />
              </div>
              <div className="flex items-center border-r border-zinc-300 pr-3 gap-1 text-[12px] text-[#666666]">
                <p>USD</p>
                <FaChevronDown />
              </div>
              <div className="flex items-center justify-between gap-1 text-[12px] text-[#666666]">
                
                <Link to="/signin">Sign In</Link>
                <span>/</span>
                <Link to="/signup">Sign Up</Link>
                
              </div>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <div className="py-3 flex items-center justify-between gap-3">
          <Link to="/" className="flex items-center gap-1">
            <img
              className="md:w-[24px] w-[20px] md:h-[22px] h-[20px]"
              src={logo}
              alt=""
            />
            <h1 className="md:text-[32px] text-[18px] font-bold">
              Sahin Shop
            </h1>
          </Link>

          <div className="flex border border-zinc-300 md:ml-0 ml-4 border-r-0  items-center gap-2 md:w-[498px] w-full md:h-[45px] h-[40px] bg-white pl-2 rounded-[10px]">
            <IoSearch className="text-[25px]" />
            <input
              className=" outline-none w-full"
              type="text"
              placeholder="search"
            />
            <button className="bg-[#00B207]  text-white md:text-[14px] text-[12px] rounded-tr-lg rounded-br-lg md:px-[24px] px-[10px] md:py-[12px] py-[10px]">
              Search
            </button>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <div>
              <Link to="/wishlist"><GiSelfLove className="w-[25px] h-[25px] text-zinc-600" /></Link>
            </div>
            <div className="flex gap-2">
             <Link to="/shippingcart"> <FaCartArrowDown className="w-[32px] h-[32px] border-l border-l-zinc-300 pl-2 text-zinc-600" /></Link>
              <div>
                <p className="text-[#4D4D4D] text-[11px]">Shopping cart:</p>
                <h3 className="text-[14px] font-bold">$57.00</h3>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="bg-[#333333] w-screen">
        <Container>
          <div className="flex items-center justify-between gap-2">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-2xl text-white"
            >
              {menuOpen ? <IoCloseOutline /> : <CiMenuBurger />}
            </button>

            <div className="lg:hidden flex items-center  gap-3">
              <div>
               <Link to="/wishlist"> <GiSelfLove className="w-[20px] h-[20px] text-zinc-300" /></Link>
              </div>
              <div className="flex items-center gap-2">
                <Link to="/shippingcart"><FaCartArrowDown className="w-[27px] h-[27px] border-l border-l-zinc-300 pl-2 text-zinc-300" /></Link>
                <div>
                  <p className="text-zinc-300 text-[11px]">Shopping cart:</p>
                  <h3 className="text-[12px] text-zinc-300 font-bold">
                    $57.00
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:flex md:flex-row items-center justify-between gap-3 ">
            <ol className="flex items-center gap-5 py-2">
              <li className="text-[14px] text-white">
                <Link className="flex items-center gap-1" to="/">
                  Home{" "}
                  <p>
                    {" "}
                    <FaChevronDown className="text-white" />{" "}
                  </p>
                </Link>
              </li>
              <li className="text-[14px] text-[#999999]">
                <Link className="flex items-center gap-1" to="/shoppage">
                  Shop{" "}
                  <p>
                    {" "}
                    <FaChevronDown className="text-white" />{" "}
                  </p>
                </Link>
              </li>
              <li className="text-[14px] text-[#999999]">
                <Link className="flex items-center gap-1" to="/page">
                  Pages{" "}
                  <p>
                    {" "}
                    <FaChevronDown className="text-white" />{" "}
                  </p>
                </Link>
              </li>
              <li className="text-[14px] text-[#999999]">
                <Link className="flex items-center gap-1" to="/bloglist">
                  Blog{" "}
                  <p>
                    {" "}
                    <FaChevronDown className="text-white" />{" "}
                  </p>
                </Link>
              </li>
              <li className="text-[14px] text-[#999999]">
                <Link to="/about">About Us </Link>
              </li>
              <li className="text-[14px] text-[#999999]">
                <Link to="/contact">Contact us</Link>
              </li>
            </ol>
            <div className="text-white flex  items-center gap-1">
              <MdOutlineWifiCalling3 className="font-bold" />
              <h1>(219) 555-0114</h1>
            </div>
          </div>

          {menuOpen && (
            <div className="lg:hidden bg-[#333333]">
              <ul className="flex flex-col">
                <li>
                  <Link
                    onClick={() => setMenuOpen(false)}
                    to="/"
                    className="block px-5 py-4 border-b border-zinc-700 text-white"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    onClick={() => setMenuOpen(false)}
                    to="/shoppage"
                    className="block px-5 py-4 border-b border-zinc-700 text-white"
                  >
                    Shop
                  </Link>
                </li>

                <li>
                  <Link
                    onClick={() => setMenuOpen(false)}
                    to="/pages"
                    className="block px-5 py-4 border-b border-zinc-700 text-white"
                  >
                    Pages
                  </Link>
                </li>

                <li>
                  <Link
                    onClick={() => setMenuOpen(false)}
                    to="/bloglist"
                    className="block px-5 py-4 border-b border-zinc-700 text-white"
                  >
                    Blog
                  </Link>
                </li>

                <li>
                  <Link
                    onClick={() => setMenuOpen(false)}
                    to="/about"
                    className="block px-5 py-4 border-b border-zinc-700 text-white"
                  >
                    About Us
                  </Link>
                </li>

                <li>
                  <Link
                    onClick={() => setMenuOpen(false)}
                    to="/contact"
                    className="block px-5 py-4 border-b border-zinc-700 text-white"
                  >
                    Contact Us
                  </Link>
                </li>

                <li>
                  <Link
                    onClick={() => setMenuOpen(false)}
                    to="/signin"
                    className="block px-5 py-4 border-b border-zinc-700 text-white"
                  >
                    Sign In
                  </Link>
                </li>

                <li>
                  <Link
                    onClick={() => setMenuOpen(false)}
                    to="/signup"
                    className="block px-5 py-4 border-b border-zinc-700 text-white"
                  >
                    Sign Up
                  </Link>
                </li>

                <li className="flex items-center gap-2 px-5 py-4 text-white">
                  <MdOutlineWifiCalling3 />
                  <span>(219) 555-0114</span>
                </li>
              </ul>
            </div>
          )}
        </Container>
      </div>
    </>
  );
}

export default Header;

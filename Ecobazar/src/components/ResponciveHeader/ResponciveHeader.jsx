import React, { useState } from "react";
import Container from "../contener/Container";
import { CiLocationOn } from "react-icons/ci";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { GiSelfLove } from "react-icons/gi";
import { FaCartArrowDown } from "react-icons/fa6";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

function ResponciveHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top Header */}
      <div className="border-b border-zinc-300 hidden lg:block">
        <Container>
          <div className="flex justify-between items-center py-2">
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <CiLocationOn className="text-base" />
              <p>Store Location: Lincoln-344, Illinois, Chicago, USA</p>
            </div>

            <div className="flex items-center gap-4 text-xs text-gray-500">
              <div className="flex items-center gap-1 cursor-pointer">
                <p>Eng</p>
                <FaChevronDown />
              </div>

              <div className="flex items-center gap-1 border-r pr-3 cursor-pointer">
                <p>USD</p>
                <FaChevronDown />
              </div>

              <div className="flex items-center gap-1">
                <Link>Sign In</Link>
                <span>/</span>
                <Link>Sign Up</Link>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Middle Header */}
      <Container>
        <div className="py-4 flex flex-col lg:flex-row items-center justify-between gap-4">

          {/* Logo */}
          <div className="w-full lg:w-auto flex items-center justify-between">

            <div className="flex items-center gap-2">
              <img src={logo} className="w-8" alt="" />
              <h1 className="text-3xl font-bold">
                Ecobazar
              </h1>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-2xl"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

          </div>

          {/* Search */}
          <div className="w-full lg:w-[500px] h-[45px] flex border border-zinc-300 rounded-lg overflow-hidden">

            <div className="px-3 flex items-center">
              <IoSearch className="text-xl" />
            </div>

            <input
              type="text"
              placeholder="Search"
              className="w-full outline-none px-2"
            />

            <button className="bg-green-600 text-white px-6">
              Search
            </button>

          </div>

          {/* Cart */}
          <div className="flex items-center gap-4">

            <GiSelfLove className="text-3xl text-gray-600 cursor-pointer" />

            <div className="flex items-center gap-2">
              <FaCartArrowDown className="text-3xl border-l pl-2 text-gray-600" />

              <div className="hidden md:block">
                <p className="text-xs text-gray-500">
                  Shopping cart:
                </p>
                <h2 className="font-bold">$57.00</h2>
              </div>

            </div>

          </div>

        </div>
      </Container>

            {/* Desktop Navbar */}
      <div className="hidden lg:block bg-[#333333]">
        <Container>
          <div className="flex items-center justify-between py-4">

            <ul className="flex items-center gap-8">

              <li>
                <Link
                  to="/"
                  className="text-white flex items-center gap-1 hover:text-green-500 duration-300"
                >
                  Home <FaChevronDown className="text-xs" />
                </Link>
              </li>

              <li>
                <Link
                  to="/shop"
                  className="text-[#999] flex items-center gap-1 hover:text-green-500 duration-300"
                >
                  Shop <FaChevronDown className="text-xs" />
                </Link>
              </li>

              <li>
                <Link
                  to="/pages"
                  className="text-[#999] flex items-center gap-1 hover:text-green-500 duration-300"
                >
                  Pages <FaChevronDown className="text-xs" />
                </Link>
              </li>

              <li>
                <Link
                  to="/blog"
                  className="text-[#999] flex items-center gap-1 hover:text-green-500 duration-300"
                >
                  Blog <FaChevronDown className="text-xs" />
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="text-[#999] hover:text-green-500 duration-300"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-[#999] hover:text-green-500 duration-300"
                >
                  Contact Us
                </Link>
              </li>

            </ul>

            <div className="flex items-center gap-2 text-white">
              <MdOutlineWifiCalling3 />
              <span>(219) 555-0114</span>
            </div>

          </div>
        </Container>
      </div>

      {/* Mobile Menu */}
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
                to="/shop"
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
                to="/blog"
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

            <li className="flex items-center gap-2 px-5 py-4 text-white">
              <MdOutlineWifiCalling3 />
              <span>(219) 555-0114</span>
            </li>

          </ul>

        </div>
      )}
    </>
  );
}

export default ResponciveHeader;
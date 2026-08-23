import React, { useState } from "react";
import Container from "../contener/Container";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

import { CiLocationOn } from "react-icons/ci";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { GiSelfLove } from "react-icons/gi";
import { FaCartArrowDown } from "react-icons/fa6";
import { MdOutlineWifiCalling3 } from "react-icons/md";

function Navber() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* ================= Top Bar ================= */}

      <div className="hidden lg:block border-b border-zinc-200">
        <Container>
          <div className="flex items-center justify-between py-3">

            <div className="flex items-center gap-2 text-sm text-[#666666]">
              <CiLocationOn className="text-lg" />
              <p>
                Store Location: Lincoln-344, Illinois, Chicago, USA
              </p>
            </div>

            <div className="flex items-center gap-5 text-sm text-[#666666]">

              <div className="flex items-center gap-1 cursor-pointer">
                <span>Eng</span>
                <FaChevronDown className="text-xs" />
              </div>

              <div className="flex items-center gap-1 border-r pr-4 cursor-pointer">
                <span>USD</span>
                <FaChevronDown className="text-xs" />
              </div>

              <div className="flex items-center gap-2">
                <Link className="hover:text-green-600">
                  Sign In
                </Link>

                <span>/</span>

                <Link className="hover:text-green-600">
                  Sign Up
                </Link>
              </div>

            </div>

          </div>
        </Container>
      </div>

      {/* ================= Middle Header ================= */}

      <Container>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-5 py-5">

          {/* Logo */}

          <div className="w-full lg:w-auto flex items-center justify-between">

            <Link
              to="/"
              className="flex items-center gap-2"
            >
              <img
                src={logo}
                alt="logo"
                className="w-8"
              />

              <h2 className="text-3xl font-bold">
                Ecobazar
              </h2>
            </Link>

            {/* Mobile Menu */}

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-3xl"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

          </div>

          {/* Search */}

          <div className="w-full lg:w-[500px] flex border rounded-lg overflow-hidden">

            <div className="px-4 flex items-center">
              <IoSearch className="text-2xl text-gray-600" />
            </div>

            <input
              type="text"
              placeholder="Search"
              className="w-full outline-none px-2"
            />

            <button
              className="bg-[#00B207] text-white px-6"
            >
              Search
            </button>

          </div>


                    {/* Wishlist & Cart */}

          <div className="flex items-center gap-4">

            {/* Wishlist */}

            <button className="relative">
              <GiSelfLove className="text-[28px] text-[#333]" />

              <span className="absolute -top-2 -right-2 bg-[#2C742F] text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                2
              </span>
            </button>

            <div className="w-[1px] h-8 bg-zinc-300"></div>

            {/* Cart */}

            <button className="flex items-center gap-3">

              <div className="relative">

                <FaCartArrowDown className="text-[30px] text-[#333]" />

                <span className="absolute -top-2 -right-2 bg-[#2C742F] text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
                  3
                </span>

              </div>

              <div className="hidden md:block text-left">

                <p className="text-[11px] text-[#666666]">
                  Shopping cart:
                </p>

                <h3 className="text-[15px] font-semibold text-[#1A1A1A]">
                  $57.00
                </h3>

              </div>

            </button>

          </div>

        </div>

      </Container>

      {/* ================= Desktop Navbar ================= */}

      <div className="hidden lg:block bg-[#333333]">

        <Container>

          <div className="flex items-center justify-between h-[60px]">

            <ul className="flex items-center gap-8">

              <li>
                <Link
                  to="/"
                  className="text-white hover:text-[#2C742F] duration-300 flex items-center gap-1"
                >
                  Home
                  <FaChevronDown className="text-xs" />
                </Link>
              </li>

              <li>
                <Link
                  to="/shop"
                  className="text-[#999] hover:text-white duration-300 flex items-center gap-1"
                >
                  Shop
                  <FaChevronDown className="text-xs" />
                </Link>
              </li>

              <li>
                <Link
                  to="/pages"
                  className="text-[#999] hover:text-white duration-300 flex items-center gap-1"
                >
                  Pages
                  <FaChevronDown className="text-xs" />
                </Link>
              </li>

              <li>
                <Link
                  to="/blog"
                  className="text-[#999] hover:text-white duration-300 flex items-center gap-1"
                >
                  Blog
                  <FaChevronDown className="text-xs" />
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="text-[#999] hover:text-white duration-300"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-[#999] hover:text-white duration-300"
                >
                  Contact Us
                </Link>
              </li>

            </ul>

            <div className="flex items-center gap-2 text-white">

              <MdOutlineWifiCalling3 className="text-xl" />

              <span>(219) 555-0114</span>

            </div>

          </div>

        </Container>

      </div>

            {/* ================= Mobile Menu ================= */}

      {menuOpen && (
        <div className="lg:hidden bg-[#333333]">

          <Container>

            <ul className="py-4">

              <li>
                <Link
                  to="/"
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 text-white border-b border-zinc-700"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/shop"
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 text-white border-b border-zinc-700"
                >
                  Shop
                </Link>
              </li>

              <li>
                <Link
                  to="/pages"
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 text-white border-b border-zinc-700"
                >
                  Pages
                </Link>
              </li>

              <li>
                <Link
                  to="/blog"
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 text-white border-b border-zinc-700"
                >
                  Blog
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 text-white border-b border-zinc-700"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 text-white border-b border-zinc-700"
                >
                  Contact Us
                </Link>
              </li>

              <li className="flex items-center gap-2 text-white py-4">

                <MdOutlineWifiCalling3 className="text-xl" />

                <span>(219) 555-0114</span>

              </li>

            </ul>

          </Container>

        </div>
      )}

    </>
  );
}

export default Navber;
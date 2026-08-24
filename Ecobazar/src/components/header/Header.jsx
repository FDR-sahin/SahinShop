// import React, { useState } from "react";
// import Container from "../contener/Container";
// import { CiLocationOn } from "react-icons/ci";
// import { FaChevronDown } from "react-icons/fa";
// import { IoSearch } from "react-icons/io5";
// import { GiSelfLove } from "react-icons/gi";
// import { FaCartArrowDown } from "react-icons/fa6";
// import { MdOutlineWifiCalling3 } from "react-icons/md";
// import { Link } from "react-router-dom";
// import logo from "../../assets/logo.png";
// import { CiMenuBurger } from "react-icons/ci";
// import { IoCloseOutline } from "react-icons/io5";

// function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   return (
//     <>
//       <div className="border-b border-b-zinc-300">
//         <Container>
//           <div className="flex items-center justify-between gap-5">
//             <div className="flex items-center justify-between gap-1 text-[12px] text-[#666666]">
//               <CiLocationOn className="text-[16px]" />
//               <p>Store Location: Lincoln- 344, Illinois, Chicago, USA</p>
//             </div>
//             <div className="hidden md:flex items-center gap-4">
//               <div className="flex items-center  gap-1 text-[12px] text-[#666666]">
//                 <p>Eng</p>
//                 <FaChevronDown />
//               </div>
//               <div className="flex items-center border-r border-zinc-300 pr-3 gap-1 text-[12px] text-[#666666]">
//                 <p>USD</p>
//                 <FaChevronDown />
//               </div>
//               <div className="flex items-center justify-between gap-1 text-[12px] text-[#666666]">
                
//                 <Link to="/signin">Sign In</Link>
//                 <span>/</span>
//                 <Link to="/signup">Sign Up</Link>
                
//               </div>
//             </div>
//           </div>
//         </Container>
//       </div>

//       <Container>
//         <div className="py-3 flex items-center justify-between gap-3">
//           <Link to="/" className="flex items-center gap-1">
//             <img
//               className="md:w-[24px] w-[20px] md:h-[22px] h-[20px]"
//               src={logo}
//               alt=""
//             />
//             <h1 className="md:text-[32px] text-[17px] font-extrabold">
//               Sahin<span className="text-green-600">Shop</span>
//             </h1>
//           </Link>

//           <div className="flex border border-zinc-300 md:ml-0 ml-4 border-r-0  items-center gap-2 md:w-[498px] w-full md:h-[45px] h-[40px] bg-white pl-2 rounded-[10px]">
//             <IoSearch className="text-[25px]" />
//             <input
//               className=" outline-none w-full"
//               type="text"
//               placeholder="search"
//             />
//             <button className="bg-[#00B207]  text-white md:text-[14px] text-[12px] rounded-tr-lg rounded-br-lg md:px-[24px] px-[10px] md:py-[12px] py-[10px]">
//               Search
//             </button>
//           </div>

//           <div className="hidden md:flex items-center gap-3">
//             <div>
//               <Link to="/wishlist"><GiSelfLove className="w-[25px] h-[25px] text-zinc-600" /></Link>
//             </div>
//             <div className="flex gap-2">
//              <Link to="/shippingcart"> <FaCartArrowDown className="w-[32px] h-[32px] border-l border-l-zinc-300 pl-2 text-zinc-600" /></Link>
//               <div>
//                 <p className="text-[#4D4D4D] text-[11px]">Shopping cart:</p>
//                 <h3 className="text-[14px] font-bold">$57.00</h3>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Container>

//       <div className="bg-[#333333] w-screen">
//         <Container>
//           <div className="flex items-center justify-between gap-2">
//             <button
//               onClick={() => setMenuOpen(!menuOpen)}
//               className="lg:hidden text-2xl text-white"
//             >
//               {menuOpen ? <IoCloseOutline /> : <CiMenuBurger />}
//             </button>

//             <div className="lg:hidden flex items-center  gap-3">
//               <div>
//                <Link to="/wishlist"> <GiSelfLove className="w-[20px] h-[20px] text-zinc-300" /></Link>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Link to="/shippingcart"><FaCartArrowDown className="w-[27px] h-[27px] border-l border-l-zinc-300 pl-2 text-zinc-300" /></Link>
//                 <div>
//                   <p className="text-zinc-300 text-[11px]">Shopping cart:</p>
//                   <h3 className="text-[12px] text-zinc-300 font-bold">
//                     $57.00
//                   </h3>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="hidden md:flex md:flex-row items-center justify-between gap-3 ">
//             <ol className="flex items-center gap-5 py-2">
//               <li className="text-[14px] text-white">
//                 <Link className="flex items-center gap-1" to="/">
//                   Home{" "}
//                   <p>
//                     {" "}
//                     <FaChevronDown className="text-white" />{" "}
//                   </p>
//                 </Link>
//               </li>
//               <li className="text-[14px] text-[#999999]">
//                 <Link className="flex items-center gap-1" to="/shoppage">
//                   Shop{" "}
//                   <p>
//                     {" "}
//                     <FaChevronDown className="text-white" />{" "}
//                   </p>
//                 </Link>
//               </li>
//               <li className="text-[14px] text-[#999999]">
//                 <Link className="flex items-center gap-1" to="/page">
//                   Pages{" "}
//                   <p>
//                     {" "}
//                     <FaChevronDown className="text-white" />{" "}
//                   </p>
//                 </Link>
//               </li>
//               <li className="text-[14px] text-[#999999]">
//                 <Link className="flex items-center gap-1" to="/bloglist">
//                   Blog{" "}
//                   <p>
//                     {" "}
//                     <FaChevronDown className="text-white" />{" "}
//                   </p>
//                 </Link>
//               </li>
//               <li className="text-[14px] text-[#999999]">
//                 <Link to="/about">About Us </Link>
//               </li>
//               <li className="text-[14px] text-[#999999]">
//                 <Link to="/contact">Contact us</Link>
//               </li>
//             </ol>
//             <div className="text-white flex  items-center gap-1">
//               <MdOutlineWifiCalling3 className="font-bold" />
//               <h1>(219) 555-0114</h1>
//             </div>
//           </div>

//           {menuOpen && (
//             <div className="lg:hidden bg-[#333333]">
//               <ul className="flex flex-col">
//                 <li>
//                   <Link
//                     onClick={() => setMenuOpen(false)}
//                     to="/"
//                     className="block px-5 py-4 border-b border-zinc-700 text-white"
//                   >
//                     Home
//                   </Link>
//                 </li>

//                 <li>
//                   <Link
//                     onClick={() => setMenuOpen(false)}
//                     to="/shoppage"
//                     className="block px-5 py-4 border-b border-zinc-700 text-white"
//                   >
//                     Shop
//                   </Link>
//                 </li>

//                 <li>
//                   <Link
//                     onClick={() => setMenuOpen(false)}
//                     to="/pages"
//                     className="block px-5 py-4 border-b border-zinc-700 text-white"
//                   >
//                     Pages
//                   </Link>
//                 </li>

//                 <li>
//                   <Link
//                     onClick={() => setMenuOpen(false)}
//                     to="/bloglist"
//                     className="block px-5 py-4 border-b border-zinc-700 text-white"
//                   >
//                     Blog
//                   </Link>
//                 </li>

//                 <li>
//                   <Link
//                     onClick={() => setMenuOpen(false)}
//                     to="/about"
//                     className="block px-5 py-4 border-b border-zinc-700 text-white"
//                   >
//                     About Us
//                   </Link>
//                 </li>

//                 <li>
//                   <Link
//                     onClick={() => setMenuOpen(false)}
//                     to="/contact"
//                     className="block px-5 py-4 border-b border-zinc-700 text-white"
//                   >
//                     Contact Us
//                   </Link>
//                 </li>

//                 <li>
//                   <Link
//                     onClick={() => setMenuOpen(false)}
//                     to="/signin"
//                     className="block px-5 py-4 border-b border-zinc-700 text-white"
//                   >
//                     Sign In
//                   </Link>
//                 </li>

//                 <li>
//                   <Link
//                     onClick={() => setMenuOpen(false)}
//                     to="/signup"
//                     className="block px-5 py-4 border-b border-zinc-700 text-white"
//                   >
//                     Sign Up
//                   </Link>
//                 </li>

//                 <li className="flex items-center gap-2 px-5 py-4 text-white">
//                   <MdOutlineWifiCalling3 />
//                   <span>(219) 555-0114</span>
//                 </li>
//               </ul>
//             </div>
//           )}
//         </Container>
//       </div>
//     </>
//   );
// }

// export default Header;


// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import Container from "../contener/Container";
// import logo from "../../assets/logo.png";

// // Icons
// import { CiLocationOn, CiMenuBurger, CiSearch } from "react-icons/ci";
// import { FaChevronDown, FaPhoneAlt } from "react-icons/fa";
// import { IoCloseOutline } from "react-icons/io5";
// import { GiSelfLove } from "react-icons/gi";
// import { FaCartArrowDown } from "react-icons/fa6";

// function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const location = useLocation();

//   // Scroll effect for shadow
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Close mobile menu on route change
//   useEffect(() => {
//     setMenuOpen(false);
//   }, [location]);

//   // Navigation links
//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "Shop", path: "/shoppage" },
//     { name: "Pages", path: "/single" },
//     { name: "Blog", path: "/bloglist" },
//     { name: "About Us", path: "/about" },
//     { name: "Contact Us", path: "/contact" },
//   ];

//   // Active link check
//   const isActive = (path) => location.pathname === path;

//   return (
//     <>
//       {/* ====== TOP BAR ====== */}
//       <div className="border-b border-gray-200 bg-gray-50/80 backdrop-blur-sm hidden md:block">
//         <Container>
//           <div className="flex items-center justify-between h-10 text-xs text-gray-600">
//             <div className="flex items-center gap-1">
//               <CiLocationOn className="text-base text-green-600" />
//               <span>Store Location: Lincoln-344, Illinois, Chicago, USA</span>
//             </div>
//             <div className="flex items-center gap-4">
//               <div className="flex items-center gap-1 cursor-pointer hover:text-green-600 transition">
//                 <span>Eng</span>
//                 <FaChevronDown className="text-[10px]" />
//               </div>
//               <div className="flex items-center gap-1 cursor-pointer hover:text-green-600 transition border-l border-gray-300 pl-4">
//                 <span>USD</span>
//                 <FaChevronDown className="text-[10px]" />
//               </div>
//               <div className="flex items-center gap-1 border-l border-gray-300 pl-4">
//                 <Link to="/signin" className="hover:text-green-600 transition font-medium">
//                   Sign In
//                 </Link>
//                 <span className="text-gray-400">|</span>
//                 <Link to="/signup" className="hover:text-green-600 transition font-medium">
//                   Sign Up
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </Container>
//       </div>

//       {/* ====== MAIN HEADER ====== */}
//       <header
//         className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
//           scrolled ? "shadow-lg" : "shadow-sm"
//         }`}
//       >
//         <Container>
//           <div className="flex items-center justify-between py-3 gap-4">
//             {/* Logo */}
//             <Link to="/" className="flex items-center gap-2 shrink-0">
//               <img src={logo} alt="SahinShop" className="w-6 h-6 md:w-7 md:h-7" />
//               <h1 className="text-xl md:text-3xl font-extrabold text-gray-800 tracking-tight">
//                 Sahin<span className="text-green-600">Shop</span>
//               </h1>
//             </Link>

//             {/* Search Bar - Desktop & Tablet */}
//             <div className="hidden md:flex flex-1 max-w-2xl mx-4">
//               <div className="relative w-full">
//                 <input
//                   type="text"
//                   placeholder="Search for products..."
//                   className="w-full h-11 pl-12 pr-4 rounded-full border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all duration-200 bg-gray-50/50"
//                 />
//                 <CiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
//                 <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-6 py-1.5 rounded-full transition-all duration-200">
//                   Search
//                 </button>
//               </div>
//             </div>

//             {/* Right Icons - Desktop */}
//             <div className="hidden md:flex items-center gap-5">
//               <Link to="/wishlist" className="relative group">
//                 <GiSelfLove className="w-6 h-6 text-gray-600 group-hover:text-green-600 transition-colors duration-200" />
//                 <span className="absolute -top-1 -right-2 bg-green-600 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
//                   2
//                 </span>
//               </Link>
//               <Link to="/shippingcart" className="flex items-center gap-2 group">
//                 <div className="relative">
//                   <FaCartArrowDown className="w-7 h-7 text-gray-600 group-hover:text-green-600 transition-colors duration-200" />
//                   <span className="absolute -top-1 -right-2 bg-green-600 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
//                     3
//                   </span>
//                 </div>
//                 <div className="text-left">
//                   <p className="text-[11px] text-gray-400">Shopping cart:</p>
//                   <h3 className="text-sm font-bold text-gray-800">$57.00</h3>
//                 </div>
//               </Link>
//             </div>

//             {/* Mobile Icons & Menu Toggle */}
//             <div className="flex items-center gap-3 md:hidden">
//               <Link to="/wishlist" className="relative">
//                 <GiSelfLove className="w-5 h-5 text-gray-600" />
//                 <span className="absolute -top-1 -right-2 bg-green-600 text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
//                   2
//                 </span>
//               </Link>
//               <Link to="/shippingcart" className="relative">
//                 <FaCartArrowDown className="w-6 h-6 text-gray-600" />
//                 <span className="absolute -top-1 -right-2 bg-green-600 text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
//                   3
//                 </span>
//               </Link>
//               <button
//                 onClick={() => setMenuOpen(!menuOpen)}
//                 className="text-2xl text-gray-700 focus:outline-none"
//               >
//                 {menuOpen ? <IoCloseOutline /> : <CiMenuBurger />}
//               </button>
//             </div>
//           </div>

//           {/* Mobile Search Bar */}
//           <div className="md:hidden pb-3">
//             <div className="flex items-center border border-gray-300 rounded-full px-3 py-1.5 bg-gray-50/50">
//               <CiSearch className="text-gray-400 text-xl mr-2" />
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 className="flex-1 outline-none bg-transparent text-sm"
//               />
//               <button className="bg-green-600 text-white text-xs font-medium px-4 py-1.5 rounded-full">
//                 Search
//               </button>
//             </div>
//           </div>
//         </Container>
//       </header>

//       {/* ====== NAVIGATION (Desktop) ====== */}
//       <nav className="hidden md:block bg-gray-900 text-white shadow-inner">
//         <Container>
//           <div className="flex items-center justify-between h-12">
//             <ul className="flex items-center gap-7 text-sm font-medium">
//               {navLinks.map((link) => (
//                 <li key={link.path}>
//                   <Link
//                     to={link.path}
//                     className={`relative py-2 transition-colors duration-200 hover:text-green-400 ${
//                       isActive(link.path)
//                         ? "text-green-400 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-green-400"
//                         : "text-gray-300"
//                     }`}
//                   >
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//             <div className="flex items-center gap-2 text-sm">
//               <FaPhoneAlt className="text-green-400" />
//               <span className="text-gray-300">(219) 555-0114</span>
//             </div>
//           </div>
//         </Container>
//       </nav>

//       {/* ====== MOBILE MENU (Overlay) ====== */}
//       <div
//         className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
//           menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
//         }`}
//         onClick={() => setMenuOpen(false)}
//       ></div>

//       <div
//         className={`fixed top-0 left-0 z-50 w-3/4 max-w-xs h-full bg-white shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
//           menuOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         <div className="flex flex-col h-full">
//           <div className="flex items-center justify-between p-4 border-b border-gray-200">
//             <h2 className="text-xl font-bold text-gray-800">Menu</h2>
//             <button onClick={() => setMenuOpen(false)} className="text-3xl text-gray-600">
//               <IoCloseOutline />
//             </button>
//           </div>
//           <ul className="flex-1 overflow-y-auto p-4 space-y-1">
//             {navLinks.map((link) => (
//               <li key={link.path}>
//                 <Link
//                   to={link.path}
//                   className={`block px-4 py-3 rounded-lg transition-colors duration-200 ${
//                     isActive(link.path)
//                       ? "bg-green-50 text-green-600 font-semibold"
//                       : "text-gray-700 hover:bg-gray-100"
//                   }`}
//                 >
//                   {link.name}
//                 </Link>
//               </li>
//             ))}
//             <li className="pt-4 border-t border-gray-200 mt-4">
//               <Link
//                 to="/signin"
//                 className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition"
//               >
//                 Sign In
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="/signup"
//                 className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition"
//               >
//                 Sign Up
//               </Link>
//             </li>
//             <li className="flex items-center gap-2 px-4 py-3 text-gray-700">
//               <FaPhoneAlt className="text-green-600" />
//               <span>(219) 555-0114</span>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Header;


// src/components/Header.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "../contener/Container";
import logo from "../../assets/logo.png";
import { useSearch } from "../../context/SearchContext" // ← ইম্পোর্ট

// Icons
import { CiLocationOn, CiMenuBurger, CiSearch } from "react-icons/ci";
import { FaChevronDown, FaPhoneAlt } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { GiSelfLove } from "react-icons/gi";
import { FaCartArrowDown } from "react-icons/fa6";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { searchTerm, setSearchTerm } = useSearch(); // ← কন্টেক্সট ব্যবহার
  const [localSearch, setLocalSearch] = useState(searchTerm);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // ===== সার্চ হ্যান্ডেল =====
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(localSearch);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setSearchTerm(localSearch);
    }
  };

  // Navigation links
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shoppage" },
    { name: "Pages", path: "/single" },
    { name: "Blog", path: "/bloglist" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* ====== TOP BAR ====== */}
      <div className="border-b border-gray-200 bg-gray-50/80 backdrop-blur-sm hidden md:block">
        <Container>
          <div className="flex items-center justify-between h-10 text-xs text-gray-600">
            <div className="flex items-center gap-1">
              <CiLocationOn className="text-base text-green-600" />
              <span>Store Location: Lincoln-344, Illinois, Chicago, USA</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 cursor-pointer hover:text-green-600 transition">
                <span>Eng</span>
                <FaChevronDown className="text-[10px]" />
              </div>
              <div className="flex items-center gap-1 cursor-pointer hover:text-green-600 transition border-l border-gray-300 pl-4">
                <span>USD</span>
                <FaChevronDown className="text-[10px]" />
              </div>
              <div className="flex items-center gap-1 border-l border-gray-300 pl-4">
                <Link to="/signin" className="hover:text-green-600 transition font-medium">
                  Sign In
                </Link>
                <span className="text-gray-400">|</span>
                <Link to="/signup" className="hover:text-green-600 transition font-medium">
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* ====== MAIN HEADER ====== */}
      <header
        className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-lg" : "shadow-sm"
        }`}
      >
        <Container>
          <div className="flex items-center justify-between py-3 gap-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 shrink-0">
              <img src={logo} alt="SahinShop" className="w-6 h-6 md:w-7 md:h-7" />
              <h1 className="text-xl md:text-3xl font-extrabold text-gray-800 tracking-tight">
                Sahin<span className="text-green-600">Shop</span>
              </h1>
            </Link>

            {/* ===== SEARCH BAR - DESKTOP (আপডেট) ===== */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-4">
              <form onSubmit={handleSearch} className="relative w-full">
                <input
                  type="text"
                  placeholder="Search for products..."
                  value={localSearch}
                  onChange={(e) => setLocalSearch(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="w-full h-11 pl-12 pr-4 rounded-full border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all duration-200 bg-gray-50/50"
                />
                <CiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
                <button
                  type="submit"
                  className="absolute right-1 top-1/2 -translate-y-1/2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-6 py-1.5 rounded-full transition-all duration-200"
                >
                  Search
                </button>
              </form>
            </div>

            {/* Right Icons - Desktop */}
            <div className="hidden md:flex items-center gap-5">
              <Link to="/wishlist" className="relative group">
                <GiSelfLove className="w-6 h-6 text-gray-600 group-hover:text-green-600 transition-colors duration-200" />
                <span className="absolute -top-1 -right-2 bg-green-600 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  2
                </span>
              </Link>
              <Link to="/shippingcart" className="flex items-center gap-2 group">
                <div className="relative">
                  <FaCartArrowDown className="w-7 h-7 text-gray-600 group-hover:text-green-600 transition-colors duration-200" />
                  <span className="absolute -top-1 -right-2 bg-green-600 text-white text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    3
                  </span>
                </div>
                <div className="text-left">
                  <p className="text-[11px] text-gray-400">Shopping cart:</p>
                  <h3 className="text-sm font-bold text-gray-800">$57.00</h3>
                </div>
              </Link>
            </div>

            {/* Mobile Icons & Menu Toggle */}
            <div className="flex items-center gap-3 md:hidden">
              <Link to="/wishlist" className="relative">
                <GiSelfLove className="w-5 h-5 text-gray-600" />
                <span className="absolute -top-1 -right-2 bg-green-600 text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  2
                </span>
              </Link>
              <Link to="/shippingcart" className="relative">
                <FaCartArrowDown className="w-6 h-6 text-gray-600" />
                <span className="absolute -top-1 -right-2 bg-green-600 text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  3
                </span>
              </Link>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-2xl text-gray-700 focus:outline-none"
              >
                {menuOpen ? <IoCloseOutline /> : <CiMenuBurger />}
              </button>
            </div>
          </div>

          {/* ===== MOBILE SEARCH (আপডেট) ===== */}
          <div className="md:hidden pb-3">
            <form onSubmit={handleSearch} className="flex items-center border border-gray-300 rounded-full px-3 py-1.5 bg-gray-50/50">
              <CiSearch className="text-gray-400 text-xl mr-2" />
              <input
                type="text"
                placeholder="Search..."
                value={localSearch}
                onChange={(e) => setLocalSearch(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 outline-none bg-transparent text-sm"
              />
              <button
                type="submit"
                className="bg-green-600 text-white text-xs font-medium px-4 py-1.5 rounded-full"
              >
                Search
              </button>
            </form>
          </div>
        </Container>
      </header>

      {/* ====== NAVIGATION (Desktop) ====== */}
      <nav className="hidden md:block bg-gray-900 text-white shadow-inner">
        <Container>
          <div className="flex items-center justify-between h-12">
            <ul className="flex items-center gap-7 text-sm font-medium">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`relative py-2 transition-colors duration-200 hover:text-green-400 ${
                      isActive(link.path)
                        ? "text-green-400 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-green-400"
                        : "text-gray-300"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-2 text-sm">
              <FaPhoneAlt className="text-green-400" />
              <span className="text-gray-300">(219) 555-0114</span>
            </div>
          </div>
        </Container>
      </nav>

      {/* ====== MOBILE MENU ====== */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      ></div>

      <div
        className={`fixed top-0 left-0 z-50 w-3/4 max-w-xs h-full bg-white shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-800">Menu</h2>
            <button onClick={() => setMenuOpen(false)} className="text-3xl text-gray-600">
              <IoCloseOutline />
            </button>
          </div>
          <ul className="flex-1 overflow-y-auto p-4 space-y-1">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`block px-4 py-3 rounded-lg transition-colors duration-200 ${
                    isActive(link.path)
                      ? "bg-green-50 text-green-600 font-semibold"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="pt-4 border-t border-gray-200 mt-4">
              <Link
                to="/signin"
                className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition"
              >
                Sign In
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition"
              >
                Sign Up
              </Link>
            </li>
            <li className="flex items-center gap-2 px-4 py-3 text-gray-700">
              <FaPhoneAlt className="text-green-600" />
              <span>(219) 555-0114</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
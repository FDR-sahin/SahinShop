
// import React, { useState, useEffect } from "react";


// import Subscrive from "../../components/subscribe/Subscrive";

// import axios from "axios";

// const API_URL = "http://localhost:5000/api/products";

// function ShopPage() {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);

//   // ===== ফিল্টার স্টেট =====
//   const [filters, setFilters] = useState({
//     search: "",
//     category: "",
//     minPrice: "",
//     maxPrice: "",
//     status: "",
//     sortBy: "newest",
//   });

//   // ===== GET PRODUCTS =====
//   const getProducts = async () => {
//     try {
//       const response = await axios.get(API_URL);
//       if (response.data.success) {
//         setProducts(response.data.products);
//         setFilteredProducts(response.data.products);
//       }
//     } catch (error) {
//       console.log(error);
//       alert("Products load failed");
//     }
//   };

//   useEffect(() => {
//     getProducts();
//   }, []);

//   // ===== APPLY FILTERS =====
//   useEffect(() => {
//     let result = [...products];

//     // Search
//     if (filters.search.trim()) {
//       result = result.filter((p) =>
//         p.product_name.toLowerCase().includes(filters.search.toLowerCase())
//       );
//     }

//     // Category
//     if (filters.category) {
//       result = result.filter((p) =>
//         p.category?.toLowerCase().includes(filters.category.toLowerCase())
//       );
//     }

//     // Min Price
//     if (filters.minPrice) {
//       result = result.filter((p) => p.unit_price >= Number(filters.minPrice));
//     }

//     // Max Price
//     if (filters.maxPrice) {
//       result = result.filter((p) => p.unit_price <= Number(filters.maxPrice));
//     }

//     // Status
//     if (filters.status) {
//       result = result.filter((p) => p.product_status === filters.status);
//     }

//     // Sorting
//     switch (filters.sortBy) {
//       case "price_low":
//         result.sort((a, b) => a.unit_price - b.unit_price);
//         break;
//       case "price_high":
//         result.sort((a, b) => b.unit_price - a.unit_price);
//         break;
//       case "name_asc":
//         result.sort((a, b) => a.product_name.localeCompare(b.product_name));
//         break;
//       case "name_desc":
//         result.sort((a, b) => b.product_name.localeCompare(a.product_name));
//         break;
//       case "stock_low":
//         result.sort((a, b) => a.stock_quantity - b.stock_quantity);
//         break;
//       default:
//         result.sort((a, b) => b.product_id - a.product_id);
//         break;
//     }

//     setFilteredProducts(result);
//   }, [filters, products]);

//   // ===== HANDLE FILTER CHANGE =====
//   const handleFilterChange = (e) => {
//     const { name, value } = e.target;
//     setFilters((prev) => ({ ...prev, [name]: value }));
//   };

//   // ===== RESET FILTERS =====
//   const resetFilters = () => {
//     setFilters({
//       search: "",
//       category: "",
//       minPrice: "",
//       maxPrice: "",
//       status: "",
//       sortBy: "newest",
//     });
//   };

//   // ===== QUICK FILTERS =====
//   const applyQuickFilter = (filterType, value) => {
//     setFilters((prev) => ({
//       ...prev,
//       [filterType]: value,
//     }));
//   };


//   return (
//     <>
      

//       <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30">
//       {/* ================================= */}
//       {/* HEADER */}
//       {/* ================================= */}
//       <header className="sticky top-0 z-5 border-b border-white/20 bg-white/80 backdrop-blur-md shadow-sm">
//         <div className="mx-auto max-w-7xl px-4 py-4 md:px-8">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-3">
//               <span className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 p-2 text-white shadow-lg shadow-blue-500/30">
//                 <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
//                 </svg>
//               </span>
//               <div>
//                 <h1 className="text-2xl font-semibold text-slate-800">Shop Page</h1>
//                 <p className="text-xs text-slate-500">Discover amazing products</p>
//               </div>
//             </div>
//             <div className="flex items-center gap-4">
//               <div className="flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm text-blue-700">
//                 <span className="font-bold">{filteredProducts.length}</span>
//                 <span className="text-slate-400">|</span>
//                 <span>Products</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* ================================= */}
//       {/* MAIN CONTENT - SIDEBAR + PRODUCTS */}
//       {/* ================================= */}
//       <div className="mx-auto max-w-7xl px-4 py-6 md:px-8">
//         <div className="flex flex-col gap-6 lg:flex-row">
//           {/* ============================== */}
//           {/* LEFT SIDEBAR - FILTERS */}
//           {/* ============================== */}
//           <aside className="lg:w-72 xl:w-80 flex-shrink-0">
//             <div className="sticky top-24 space-y-4">
//               {/* ফিল্টার কার্ড */}
//               <div className="overflow-hidden rounded-2xl border border-white/50 bg-white shadow-xl shadow-blue-500/10">
//                 <div className="border-b border-slate-100 bg-gradient-to-r from-indigo-50/50 to-purple-50/50 px-5 py-4">
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-2">
//                       <svg className="h-5 w-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
//                       </svg>
//                       <h2 className="font-bold text-slate-800">Filters</h2>
//                     </div>
//                     <button
//                       onClick={resetFilters}
//                       className="text-xs font-medium text-indigo-600 hover:text-indigo-800"
//                     >
//                       Reset All
//                     </button>
//                   </div>
//                 </div>

//                 <div className="space-y-5 p-5">
//                   {/* 🔍 Search */}
//                   <div>
//                     <label className="mb-1.5 block text-sm font-semibold text-slate-700">
//                       🔍 Search Product
//                     </label>
//                     <input
//                       type="text"
//                       name="search"
//                       value={filters.search}
//                       onChange={handleFilterChange}
//                       placeholder="Type to search..."
//                       className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-2.5 text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
//                     />
//                   </div>

//                   {/* 📂 Category */}
//                   <div>
//                     <label className="mb-1.5 block text-sm font-semibold text-slate-700">
//                       📂 Category
//                     </label>
//                     <input
//                       type="text"
//                       name="category"
//                       value={filters.category}
//                       onChange={handleFilterChange}
//                       placeholder="e.g. Electronics, Food"
//                       className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-2.5 text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
//                     />
//                   </div>

//                   {/* 💰 Price Range */}
//                   <div>
//                     <label className="mb-1.5 block text-sm font-semibold text-slate-700">
//                       💰 Price Range
//                     </label>
//                     <div className="flex gap-3">
//                       <div className="relative flex-1">
//                         <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-slate-400">৳</span>
//                         <input
//                           type="number"
//                           name="minPrice"
//                           value={filters.minPrice}
//                           onChange={handleFilterChange}
//                           placeholder="Min"
//                           className="w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-7 pr-3 py-2.5 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
//                         />
//                       </div>
//                       <div className="relative flex-1">
//                         <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-slate-400">৳</span>
//                         <input
//                           type="number"
//                           name="maxPrice"
//                           value={filters.maxPrice}
//                           onChange={handleFilterChange}
//                           placeholder="Max"
//                           className="w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-7 pr-3 py-2.5 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
//                         />
//                       </div>
//                     </div>
//                   </div>

//                   {/* 📌 Status */}
//                   <div>
//                     <label className="mb-1.5 block text-sm font-semibold text-slate-700">
//                       📌 Status
//                     </label>
//                     <select
//                       name="status"
//                       value={filters.status}
//                       onChange={handleFilterChange}
//                       className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-2.5 text-slate-800 outline-none transition-all focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
//                     >
//                       <option value="">All Status</option>
//                       <option value="Active">Active</option>
//                       <option value="Inactive">Inactive</option>
//                     </select>
//                   </div>

//                   {/* 🔄 Sort By */}
//                   <div>
//                     <label className="mb-1.5 block text-sm font-semibold text-slate-700">
//                       🔄 Sort By
//                     </label>
//                     <select
//                       name="sortBy"
//                       value={filters.sortBy}
//                       onChange={handleFilterChange}
//                       className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-2.5 text-slate-800 outline-none transition-all focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
//                     >
//                       <option value="newest">Newest First</option>
//                       <option value="price_low">Price: Low to High</option>
//                       <option value="price_high">Price: High to Low</option>
//                       <option value="name_asc">Name: A to Z</option>
//                       <option value="name_desc">Name: Z to A</option>
//                       <option value="stock_low">Stock: Low to High</option>
//                     </select>
//                   </div>

//                   {/* ⚡ Quick Filters */}
//                   <div>
//                     <label className="mb-2 block text-sm font-semibold text-slate-700">
//                       ⚡ Quick Filters
//                     </label>
//                     <div className="flex flex-wrap gap-1.5">
//                       <button
//                         onClick={() => applyQuickFilter("minPrice", "100")}
//                         className="rounded-full bg-blue-100 px-3 py-1.5 text-xs font-medium text-blue-700 transition-all hover:bg-blue-200"
//                       >
//                         ৳100+
//                       </button>
//                       <button
//                         onClick={() => applyQuickFilter("category", "food")}
//                         className="rounded-full bg-green-100 px-3 py-1.5 text-xs font-medium text-green-700 transition-all hover:bg-green-200"
//                       >
//                         🍔 Food
//                       </button>
//                       <button
//                         onClick={() => applyQuickFilter("category", "electronics")}
//                         className="rounded-full bg-purple-100 px-3 py-1.5 text-xs font-medium text-purple-700 transition-all hover:bg-purple-200"
//                       >
//                         💻 Tech
//                       </button>
//                       <button
//                         onClick={() => applyQuickFilter("status", "Active")}
//                         className="rounded-full bg-emerald-100 px-3 py-1.5 text-xs font-medium text-emerald-700 transition-all hover:bg-emerald-200"
//                       >
//                         ✅ Active
//                       </button>
//                       <button
//                         onClick={() => {
//                           setFilters((prev) => ({
//                             ...prev,
//                             minPrice: "",
//                             maxPrice: "",
//                             category: "",
//                             status: "",
//                             search: "",
//                           }));
//                         }}
//                         className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600 transition-all hover:bg-slate-200"
//                       >
//                         Clear All
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* ফিল্টার ফলাফল কাউন্ট */}
//               <div className="rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 p-4 text-center text-white shadow-lg shadow-indigo-500/30">
//                 <p className="text-sm font-medium">Showing</p>
//                 <p className="text-3xl font-extrabold">{filteredProducts.length}</p>
//                 <p className="text-sm opacity-80">Products Available</p>
//               </div>
//             </div>
//           </aside>

//           {/* ============================== */}
//           {/* RIGHT SIDE - PRODUCT CARDS */}
//           {/* ============================== */}
//           <main className="flex-1">
//             {filteredProducts.length === 0 ? (
//               // Empty State
//               <div className="flex min-h-[400px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-white/50 p-8">
//                 <svg className="h-20 w-20 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
//                 </svg>
//                 <h3 className="mt-4 text-xl font-bold text-slate-600">No Products Found</h3>
//                 <p className="text-sm text-slate-400">Try adjusting your filters or search term</p>
//                 <button
//                   onClick={resetFilters}
//                   className="mt-4 rounded-full bg-indigo-600 px-6 py-2 text-sm font-medium text-white hover:bg-indigo-700"
//                 >
//                   Reset Filters
//                 </button>
//               </div>
//             ) : (
//               // Product Grid
//               <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 lg:grid-cols-4">
//                 {filteredProducts.map((product) => (
//                   <ProductCard key={product.product_id} product={product} />
//                 ))}
//               </div>
//             )}
//           </main>
//         </div>
//       </div>
//     </div>

//       <Subscrive />
//     </>
//   );
// }


// const ProductCard = ({ product }) => {
//   const [imageLoaded, setImageLoaded] = useState(false);

//   // ইমেজ প্লেসহোল্ডার (পরে রিয়েল ইমেজ যোগ করলে কাজ করবে)
//   const productImage = product.image || product.product_image || null;

//   return (
//     <div className="group overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-lg shadow-slate-200/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10">
//       {/* ===== Image Section ===== */}
//       <div className="relative overflow-hidden bg-gradient-to-br from-slate-100 to-blue-50/50">
//         {productImage ? (
//           <img
//             src={productImage}
//             alt={product.product_name}
//             onLoad={() => setImageLoaded(true)}
//             className={`h-52 w-full object-cover transition-all duration-500 group-hover:scale-105 ${
//               imageLoaded ? "opacity-100" : "opacity-0"
//             }`}
//           />
//         ) : (
//           // প্লেসহোল্ডার ইমেজ (যখন ইমেজ নেই)
//           <div className="flex h-52 w-full flex-col items-center justify-center bg-gradient-to-br from-slate-200 to-slate-300">
//             <svg className="h-16 w-16 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
//             </svg>
//             <span className="mt-2 text-xs font-medium text-slate-500">No Image</span>
//           </div>
//         )}

//         {/* ===== Discount Badge ===== */}
//         {product.discount > 0 && (
//           <div className="absolute left-3 top-3 rounded-full bg-gradient-to-r from-red-500 to-orange-500 px-3 py-1 text-xs font-bold text-white shadow-lg shadow-red-500/30">
//             -{Number(product.discount).toFixed(0)}%
//           </div>
//         )}

//         {/* ===== Stock Badge ===== */}
//         <div className="absolute right-3 top-3">
//           {product.stock_quantity === 0 ? (
//             <span className="rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white shadow-lg shadow-red-500/30">
//               Out of Stock
//             </span>
//           ) : product.stock_quantity < 5 ? (
//             <span className="rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white shadow-lg shadow-orange-500/30">
//               Low Stock
//             </span>
//           ) : (
//             <span className="rounded-full bg-emerald-500 px-3 py-1 text-xs font-bold text-white shadow-lg shadow-emerald-500/30">
//               In Stock
//             </span>
//           )}
//         </div>

//         {/* ===== Status Badge ===== */}
//         <div className="absolute bottom-3 left-3">
//           <span
//             className={`rounded-full px-3 py-1 text-xs font-bold shadow-lg ${
//               product.product_status === "Active"
//                 ? "bg-green-500 text-white shadow-green-500/30"
//                 : "bg-slate-500 text-white shadow-slate-500/30"
//             }`}
//           >
//             {product.product_status}
//           </span>
//         </div>
//       </div>

//       {/* ===== Product Info ===== */}
//       <div className="p-4">
//         <div className="mb-2 flex items-start justify-between gap-2">
//           <h3 className="text-sm font-bold text-slate-800 line-clamp-2 group-hover:text-indigo-600 transition-colors">
//             {product.product_name}
//           </h3>
//         </div>

//         <div className="mb-2 flex flex-wrap items-center gap-2 text-xs text-slate-500">
//           {product.category && (
//             <span className="rounded-full bg-slate-100 px-2 py-0.5 font-medium">
//               {product.category}
//             </span>
//           )}
//           {product.brand && (
//             <span className="rounded-full bg-slate-100 px-2 py-0.5 font-medium">
//               {product.brand}
//             </span>
//           )}
//         </div>

//         <div className="flex items-end justify-between pt-2 border-t border-slate-100">
//           <div>
//             <div className="flex items-baseline gap-2">
//               <span className="text-xl font-extrabold text-slate-800">
//                 ৳{Number(product.unit_price).toFixed(2)}
//               </span>
//               {product.discount > 0 && (
//                 <span className="text-sm text-slate-400 line-through">
//                   ৳{(Number(product.unit_price) * (1 + Number(product.discount) / 100)).toFixed(2)}
//                 </span>
//               )}
//             </div>
//             <div className="text-xs text-slate-400">
//               Stock: {product.stock_quantity} units
//             </div>
//           </div>

//           {/* ===== Action Button ===== */}
//           <button
//             className={`rounded-xl px-4 py-2 text-sm font-bold transition-all duration-300 ${
//               product.stock_quantity === 0
//                 ? "bg-slate-200 text-slate-400 cursor-not-allowed"
//                 : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/30 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105"
//             }`}
//             disabled={product.stock_quantity === 0}
//           >
//             {product.stock_quantity === 0 ? "Sold Out" : "Add to Cart"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShopPage;



// src/pages/ShopPage.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import { useSearch } from "../../context/SearchContext"; // ← ইম্পোর্ট
import Subscrive from "../../components/subscribe/Subscrive";
const API_URL = "http://192.168.0.106:5000/api/products";

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { searchTerm } = useSearch(); // ← কন্টেক্সট থেকে সার্চ টার্ম নিন

  const [filters, setFilters] = useState({
    category: "",
    minPrice: "",
    maxPrice: "",
    status: "",
    sortBy: "newest",
  });

  // GET Products
  const getProducts = async () => {
    try {
      const response = await axios.get(API_URL);
      if (response.data.success) {
        setProducts(response.data.products);
        setFilteredProducts(response.data.products);
      }
    } catch (error) {
      console.log(error);
      alert("Products load failed");
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  // ===== APPLY FILTERS (সার্চ সহ) =====
  useEffect(() => {
    let result = [...products];

    // 🔥 হেডারের সার্চ এখানে অ্যাপ্লাই হচ্ছে
    if (searchTerm.trim()) {
      result = result.filter((p) =>
        p.product_name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filters.search && filters.search.trim()) {
    result = result.filter((product) =>
      product.product_name.toLowerCase().includes(filters.search.toLowerCase().trim())
    );
  }


    // Category
    if (filters.category) {
      result = result.filter((p) =>
        p.category?.toLowerCase().includes(filters.category.toLowerCase())
      );
    }

    // Min Price
    if (filters.minPrice) {
      result = result.filter((p) => p.unit_price >= Number(filters.minPrice));
    }

    // Max Price
    if (filters.maxPrice) {
      result = result.filter((p) => p.unit_price <= Number(filters.maxPrice));
    }

    // Status
    if (filters.status) {
      result = result.filter((p) => p.product_status === filters.status);
    }

    // Sorting
    switch (filters.sortBy) {
      case "price_low":
        result.sort((a, b) => a.unit_price - b.unit_price);
        break;
      case "price_high":
        result.sort((a, b) => b.unit_price - a.unit_price);
        break;
      case "name_asc":
        result.sort((a, b) => a.product_name.localeCompare(b.product_name));
        break;
      case "name_desc":
        result.sort((a, b) => b.product_name.localeCompare(a.product_name));
        break;
      case "stock_low":
        result.sort((a, b) => a.stock_quantity - b.stock_quantity);
        break;
      default:
        result.sort((a, b) => b.product_id - a.product_id);
        break;
    }

    setFilteredProducts(result);
  }, [filters, products, searchTerm]); // ← searchTerm যোগ করুন

  // ===== বাকি সব ফাংশন আগের মতোই =====
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const resetFilters = () => {
    setFilters({
      category: "",
      minPrice: "",
      maxPrice: "",
      status: "",
      sortBy: "newest",
    });
  };

  // ... বাকি সব কোড আগের মতোই থাকবে (JSX সহ)

  return (
    <>
      

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30">
      {/* ================================= */}
      {/* HEADER */}
      {/* ================================= */}
      <header className="sticky top-0 z-5 border-b border-white/20 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-4 md:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 p-2 text-white shadow-lg shadow-blue-500/30">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </span>
              <div>
                <h1 className="text-2xl font-semibold text-slate-800">Shop Page</h1>
                <p className="text-xs text-slate-500">Discover amazing products</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm text-blue-700">
                <span className="font-bold">{filteredProducts.length}</span>
                <span className="text-slate-400">|</span>
                <span>Products</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ================================= */}
      {/* MAIN CONTENT - SIDEBAR + PRODUCTS */}
      {/* ================================= */}
      <div className="mx-auto max-w-7xl px-4 py-6 md:px-8">
        <div className="flex flex-col gap-6 lg:flex-row">
          {/* ============================== */}
          {/* LEFT SIDEBAR - FILTERS */}
          {/* ============================== */}
          <aside className="lg:w-72 xl:w-80 flex-shrink-0">
            <div className="sticky top-24 space-y-4">
              {/* ফিল্টার কার্ড */}
              <div className="overflow-hidden rounded-2xl border border-white/50 bg-white shadow-xl shadow-blue-500/10">
                <div className="border-b border-slate-100 bg-gradient-to-r from-indigo-50/50 to-purple-50/50 px-5 py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <svg className="h-5 w-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                      </svg>
                      <h2 className="font-bold text-slate-800">Filters</h2>
                    </div>
                    <button
                      onClick={resetFilters}
                      className="text-xs font-medium text-indigo-600 hover:text-indigo-800"
                    >
                      Reset All
                    </button>
                  </div>
                </div>

                <div className="space-y-5 p-5">
                  {/* 🔍 Search */}
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                      🔍 Search Product
                    </label>
                    <input
                      type="text"
                      name="search"
                      value={filters.search}
                      onChange={handleFilterChange}
                      placeholder="Type to search..."
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-2.5 text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                    />
                  </div>

                  {/* 📂 Category */}
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                      📂 Category
                    </label>
                    <input
                      type="text"
                      name="category"
                      value={filters.category}
                      onChange={handleFilterChange}
                      placeholder="e.g. Electronics, Food"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-2.5 text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                    />
                  </div>

                  {/* 💰 Price Range */}
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                      💰 Price Range
                    </label>
                    <div className="flex gap-3">
                      <div className="relative flex-1">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-slate-400">৳</span>
                        <input
                          type="number"
                          name="minPrice"
                          value={filters.minPrice}
                          onChange={handleFilterChange}
                          placeholder="Min"
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-7 pr-3 py-2.5 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                        />
                      </div>
                      <div className="relative flex-1">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-slate-400">৳</span>
                        <input
                          type="number"
                          name="maxPrice"
                          value={filters.maxPrice}
                          onChange={handleFilterChange}
                          placeholder="Max"
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-7 pr-3 py-2.5 text-sm text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                        />
                      </div>
                    </div>
                  </div>

                  {/* 📌 Status */}
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                      📌 Status
                    </label>
                    <select
                      name="status"
                      value={filters.status}
                      onChange={handleFilterChange}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-2.5 text-slate-800 outline-none transition-all focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                    >
                      <option value="">All Status</option>
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </div>

                  {/* 🔄 Sort By */}
                  <div>
                    <label className="mb-1.5 block text-sm font-semibold text-slate-700">
                      🔄 Sort By
                    </label>
                    <select
                      name="sortBy"
                      value={filters.sortBy}
                      onChange={handleFilterChange}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-2.5 text-slate-800 outline-none transition-all focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                    >
                      <option value="newest">Newest First</option>
                      <option value="price_low">Price: Low to High</option>
                      <option value="price_high">Price: High to Low</option>
                      <option value="name_asc">Name: A to Z</option>
                      <option value="name_desc">Name: Z to A</option>
                      <option value="stock_low">Stock: Low to High</option>
                    </select>
                  </div>

                  {/* ⚡ Quick Filters */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                      ⚡ Quick Filters
                    </label>
                    <div className="flex flex-wrap gap-1.5">
                      <button
                        onClick={() => applyQuickFilter("minPrice", "100")}
                        className="rounded-full bg-blue-100 px-3 py-1.5 text-xs font-medium text-blue-700 transition-all hover:bg-blue-200"
                      >
                        ৳100+
                      </button>
                      <button
                        onClick={() => applyQuickFilter("category", "food")}
                        className="rounded-full bg-green-100 px-3 py-1.5 text-xs font-medium text-green-700 transition-all hover:bg-green-200"
                      >
                        🍔 Food
                      </button>
                      <button
                        onClick={() => applyQuickFilter("category", "electronics")}
                        className="rounded-full bg-purple-100 px-3 py-1.5 text-xs font-medium text-purple-700 transition-all hover:bg-purple-200"
                      >
                        💻 Tech
                      </button>
                      <button
                        onClick={() => applyQuickFilter("status", "Active")}
                        className="rounded-full bg-emerald-100 px-3 py-1.5 text-xs font-medium text-emerald-700 transition-all hover:bg-emerald-200"
                      >
                        ✅ Active
                      </button>
                      <button
                        onClick={() => {
                          setFilters((prev) => ({
                            ...prev,
                            minPrice: "",
                            maxPrice: "",
                            category: "",
                            status: "",
                            search: "",
                          }));
                        }}
                        className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600 transition-all hover:bg-slate-200"
                      >
                        Clear All
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* ফিল্টার ফলাফল কাউন্ট */}
              <div className="rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 p-4 text-center text-white shadow-lg shadow-indigo-500/30">
                <p className="text-sm font-medium">Showing</p>
                <p className="text-3xl font-extrabold">{filteredProducts.length}</p>
                <p className="text-sm opacity-80">Products Available</p>
              </div>
            </div>
          </aside>

          {/* ============================== */}
          {/* RIGHT SIDE - PRODUCT CARDS */}
          {/* ============================== */}
          <main className="flex-1">
            {filteredProducts.length === 0 ? (
              // Empty State
              <div className="flex min-h-[400px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 bg-white/50 p-8">
                <svg className="h-20 w-20 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
                <h3 className="mt-4 text-xl font-bold text-slate-600">No Products Found</h3>
                <p className="text-sm text-slate-400">Try adjusting your filters or search term</p>
                <button
                  onClick={resetFilters}
                  className="mt-4 rounded-full bg-indigo-600 px-6 py-2 text-sm font-medium text-white hover:bg-indigo-700"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              // Product Grid
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 lg:grid-cols-4">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.product_id} product={product} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>

      <Subscrive />
    </>
  );
};




const ProductCard = ({ product }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  // ইমেজ প্লেসহোল্ডার (পরে রিয়েল ইমেজ যোগ করলে কাজ করবে)
  const productImage = product.image || product.product_image || null;

  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-lg shadow-slate-200/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/10">
      {/* ===== Image Section ===== */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-100 to-blue-50/50">
        {productImage ? (
          <img
            src={productImage}
            alt={product.product_name}
            onLoad={() => setImageLoaded(true)}
            className={`h-52 w-full object-cover transition-all duration-500 group-hover:scale-105 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
        ) : (
          // প্লেসহোল্ডার ইমেজ (যখন ইমেজ নেই)
          <div className="flex h-52 w-full flex-col items-center justify-center bg-gradient-to-br from-slate-200 to-slate-300">
            <svg className="h-16 w-16 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="mt-2 text-xs font-medium text-slate-500">No Image</span>
          </div>
        )}

        {/* ===== Discount Badge ===== */}
        {product.discount > 0 && (
          <div className="absolute left-3 top-3 rounded-full bg-gradient-to-r from-red-500 to-orange-500 px-3 py-1 text-xs font-bold text-white shadow-lg shadow-red-500/30">
            -{Number(product.discount).toFixed(0)}%
          </div>
        )}

        {/* ===== Stock Badge ===== */}
        <div className="absolute right-3 top-3">
          {product.stock_quantity === 0 ? (
            <span className="rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white shadow-lg shadow-red-500/30">
              Out of Stock
            </span>
          ) : product.stock_quantity < 5 ? (
            <span className="rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white shadow-lg shadow-orange-500/30">
              Low Stock
            </span>
          ) : (
            <span className="rounded-full bg-emerald-500 px-3 py-1 text-xs font-bold text-white shadow-lg shadow-emerald-500/30">
              In Stock
            </span>
          )}
        </div>

        {/* ===== Status Badge ===== */}
        <div className="absolute bottom-3 left-3">
          <span
            className={`rounded-full px-3 py-1 text-xs font-bold shadow-lg ${
              product.product_status === "Active"
                ? "bg-green-500 text-white shadow-green-500/30"
                : "bg-slate-500 text-white shadow-slate-500/30"
            }`}
          >
            {product.product_status}
          </span>
        </div>
      </div>

      {/* ===== Product Info ===== */}
      <div className="p-4">
        <div className="mb-2 flex items-start justify-between gap-2">
          <h3 className="text-sm font-bold text-slate-800 line-clamp-2 group-hover:text-indigo-600 transition-colors">
            {product.product_name}
          </h3>
        </div>

        <div className="mb-2 flex flex-wrap items-center gap-2 text-xs text-slate-500">
          {product.category && (
            <span className="rounded-full bg-slate-100 px-2 py-0.5 font-medium">
              {product.category}
            </span>
          )}
          {product.brand && (
            <span className="rounded-full bg-slate-100 px-2 py-0.5 font-medium">
              {product.brand}
            </span>
          )}
        </div>

        <div className="flex items-end justify-between pt-2 border-t border-slate-100">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-extrabold text-slate-800">
                ৳{Number(product.unit_price).toFixed(2)}
              </span>
              {product.discount > 0 && (
                <span className="text-sm text-slate-400 line-through">
                  ৳{(Number(product.unit_price) * (1 + Number(product.discount) / 100)).toFixed(2)}
                </span>
              )}
            </div>
            <div className="text-xs text-slate-400">
              Stock: {product.stock_quantity} units
            </div>
          </div>

          {/* ===== Action Button ===== */}
          <button
            className={`rounded-xl px-4 py-2 text-sm font-bold transition-all duration-300 ${
              product.stock_quantity === 0
                ? "bg-slate-200 text-slate-400 cursor-not-allowed"
                : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/30 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105"
            }`}
            disabled={product.stock_quantity === 0}
          >
            {product.stock_quantity === 0 ? "Sold Out" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};


export default ShopPage;
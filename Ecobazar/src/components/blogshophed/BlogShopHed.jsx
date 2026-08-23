import React from "react";
import filter from "../../assets/filter.png";
import Container from "../contener/Container";

function BlogShopHed() {
  return (
    <Container>
      <div className="hidden md:flex items-center justify-between gap-2">

        <button className="bg-[#00B207] px-6  py-2  rounded-full w-fit">
          <div className="flex items-center justify-center md:gap-3 gap-1">
            <p className="text-white font-bold">Filter</p>
            <img className="" src={filter} alt="" />
          </div>
        </button>

        <div className="flex items-center gap-3">
          <span className="text-gray-500 text-lg  font-medium">Sort by:</span>

          <select className="w-52 px-4 py-3 border border-gray-300 rounded-md bg-white text-gray-700 text-lg outline-none focus:ring-2 focus:ring-green-500 cursor-pointer">
            <option>Latest</option>
            <option>Oldest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>

        <div className="flex items-center gap-1">
            <span className="font-bold">16</span>
            <p className="text-gray-400">Result Found</p>
        </div>


      </div>
    </Container>
  );
}

export default BlogShopHed;

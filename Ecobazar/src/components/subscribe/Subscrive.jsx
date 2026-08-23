import React from "react";
import Container from "../contener/Container";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoGitMergeOutline } from "react-icons/io5";
function Subscrive() {
  return (
    <div className="bg-[#E5E5E5] py-10">
      <Container>
        <div className="md:flex md:flex-row flex-col items-center justify-between gap-3  ">

          <div className="md:mb-0 mb-5">
            <h3 className="md:text-[32px] text-[25px] font-bold">Subcribe our Newsletter</h3>
            <p className="text-[14px] text-[#999999]">
              Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
              Phasellus imperdiet elit eu magna.
            </p>
          </div>

          <div className="md:flex md:flex-row flex-col items-center gap-3">
            <div className="flex border border-zinc-300 border-r-0  items-center gap-2 md:w-[498px] w-[398px] h-[45px] bg-white  pl-3 rounded-3xl">
              <input
                className=" outline-none w-full"
                type="text"
                placeholder="search"
              />
              <button className="bg-[#00B207]  text-white text-[14px]  rounded-3xl px-[25px] py-[11px]">
                Search
              </button>
            </div>
            <div className="flex items-center justify-center md:gap-2 gap-5 md:mt-0 mt-3">
              <FaFacebookF className="text-zinc-700 hover:bg-green-500 hover:text-white w-8 h-8 p-1 rounded-full" />
              <FaTwitter className="text-zinc-700 hover:bg-green-500 hover:text-white w-8 h-8 p-1 rounded-full" />
              <FaInstagram className="text-zinc-700 hover:bg-green-500 hover:text-white w-8 h-8 p-1 rounded-full" />
              <IoGitMergeOutline className="text-zinc-700 hover:bg-green-500 hover:text-white w-8 h-8 p-1 rounded-full" />
            </div>
          </div>

        </div>
      </Container>
    </div>
  );
}

export default Subscrive;

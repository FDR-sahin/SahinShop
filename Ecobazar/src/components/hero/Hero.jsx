import React from "react";
import Container from "../../components/contener/Container";
import babu2 from "../../assets/babu2.png";
import hero1 from "../../assets/hero1.jpg";
import hero2 from "../../assets/hero2.jpg";
import h1 from "../../assets/h1.png";
import h2 from "../../assets/h2.png";
import h3 from "../../assets/h3.png";
import h4 from "../../assets/h4.png";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <Container>
      <div className="flex md:flex-row flex-col items-center justify-between gap-5 py-2 mt-3">
        <div
          className="md:w-[872px] w-[320px] md:h-[600px] h-[212px] bg-cover bg-center rounded-xl pl-12 pt-19"
          style={{ backgroundImage: `url(${babu2})` }}
        >
          <h1 className="text-[48px] text-white font-semibold w-[360px] mb-4">Fresh & Healthy Organic Food</h1>
          <div className="border-l mb-4 border-l-white px-4">
            <div className="text-[20px] text-white flex flex-row gap-4">
              <h2> Sale up to </h2>
              <button className="bg-[#FF8A00] px-3 py-1 rounded-[12px]">30% OFF</button>
            </div>
            <p className="text-[14px] text-[#FFFFFF]">Free shipping on all your orde</p>

          </div>
          <Link to="/shoppage" className="bg-[#ffff] mt-4 text-black px-3 py-1 rounded-2xl">Shop now </Link>
        </div>

        

        <div className="flex md:flex-col flex-row flex-col gap-5 ">
          <div
            className=" md:w-[423px] w-[150px] md:h-[288px] h-[130px] bg-cover bg-center rounded-xl pl-60 pt-7"
            style={{ backgroundImage: `url(${hero1})` }}
          >
            <p>SUMER SALE</p>
            <h3 className="font-black text-[18px]">75% OFF</h3>
            <p>Only Fruit & Vegetable</p>
            <Link to="/shoppage" className=" mt-4 text-green-600 py-1 rounded-2xl">Shop now </Link>
          </div>
          <div
            className="text-white md:w-[423px] w-[150px] md:h-[288px] h-[130px] bg-cover bg-center rounded-xl flex flex-col gap-3 justify-center items-center p-5"
            style={{ backgroundImage: `url(${hero2})` }}
          >
            <p>BEST DEAL</p>
            <h2 className="text-[32px] font-bold">Special Products Deal of the Month</h2>
            <Link to="/shoppage" className="text-[18px] font-bold mt-4 text-green-300 py-1 rounded-2xl">Shop now </Link>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between  py-3 px-4 mx-auto  my-5  shadow-2xl">
        <div className="md:flex md:items-center  md:gap-1 ">
          {" "}
          <img className="w-70 md:mb-0 mb-3" src={h1} alt="" />
          <img className="w-70" src={h2} alt="" />
        </div>
        <div className="md:flex md:items-center md:gap-1">
          <img className="w-70 md:mb-0 mb-3" src={h3} alt="" />
          <img className="w-70" src={h4} alt="" />
        </div>
      </div>
    </Container>
  );
}

export default Hero;

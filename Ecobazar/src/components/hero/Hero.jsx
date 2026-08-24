// import React from "react";
// import Container from "../../components/contener/Container";
// import babu2 from "../../assets/babu2.png";
// import hero1 from "../../assets/hero1.jpg";
// import hero2 from "../../assets/hero2.jpg";
// import h1 from "../../assets/h1.png";
// import h2 from "../../assets/h2.png";
// import h3 from "../../assets/h3.png";
// import h4 from "../../assets/h4.png";
// import { Link } from "react-router-dom";

// function Hero() {
//   return (
//     <Container>
//       <div className="flex md:flex-row flex-col items-center justify-between gap-5 py-2 mt-3">
//         <div
//           className="md:w-[872px] w-[320px] md:h-[600px] h-[212px] bg-cover bg-center rounded-xl pl-12 pt-19"
//           style={{ backgroundImage: `url(${babu2})` }}
//         >
//           <h1 className="text-[48px] text-white font-semibold w-[360px] mb-4">Fresh & Healthy Organic Food</h1>
//           <div className="border-l mb-4 border-l-white px-4">
//             <div className="text-[20px] text-white flex flex-row gap-4">
//               <h2> Sale up to </h2>
//               <button className="bg-[#FF8A00] px-3 py-1 rounded-[12px]">30% OFF</button>
//             </div>
//             <p className="text-[14px] text-[#FFFFFF]">Free shipping on all your orde</p>

//           </div>
//           <Link to="/shoppage" className="bg-[#ffff] mt-4 text-black px-3 py-1 rounded-2xl">Shop now </Link>
//         </div>

        

//         <div className="flex md:flex-col flex-row flex-col gap-5 ">
//           <div
//             className=" md:w-[423px] w-[150px] md:h-[288px] h-[130px] bg-cover bg-center rounded-xl pl-60 pt-7"
//             style={{ backgroundImage: `url(${hero1})` }}
//           >
//             <p>SUMER SALE</p>
//             <h3 className="font-black text-[18px]">75% OFF</h3>
//             <p>Only Fruit & Vegetable</p>
//             <Link to="/shoppage" className=" mt-4 text-green-600 py-1 rounded-2xl">Shop now </Link>
//           </div>
//           <div
//             className="text-white md:w-[423px] w-[150px] md:h-[288px] h-[130px] bg-cover bg-center rounded-xl flex flex-col gap-3 justify-center items-center p-5"
//             style={{ backgroundImage: `url(${hero2})` }}
//           >
//             <p>BEST DEAL</p>
//             <h2 className="text-[32px] font-bold">Special Products Deal of the Month</h2>
//             <Link to="/shoppage" className="text-[18px] font-bold mt-4 text-green-300 py-1 rounded-2xl">Shop now </Link>
//           </div>
//         </div>
//       </div>

//       <div className="flex items-center justify-between  py-3 px-4 mx-auto  my-5  shadow-2xl">
//         <div className="md:flex md:items-center  md:gap-1 ">
//           {" "}
//           <img className="w-70 md:mb-0 mb-3" src={h1} alt="" />
//           <img className="w-70" src={h2} alt="" />
//         </div>
//         <div className="md:flex md:items-center md:gap-1">
//           <img className="w-70 md:mb-0 mb-3" src={h3} alt="" />
//           <img className="w-70" src={h4} alt="" />
//         </div>
//       </div>
//     </Container>
//   );
// }

// export default Hero;


// import React from "react";
// import Container from "../../components/contener/Container";
// import babu2 from "../../assets/babu2.png";
// import hero1 from "../../assets/hero1.jpg";
// import hero2 from "../../assets/hero2.jpg";
// import h1 from "../../assets/h1.png";
// import h2 from "../../assets/h2.png";
// import h3 from "../../assets/h3.png";
// import h4 from "../../assets/h4.png";
// import { Link } from "react-router-dom";

// function Hero() {
//     return (
//         <Container>
//             {/* Main Hero Section */}
//             <div className="flex flex-col lg:flex-row items-stretch gap-6 py-4 mt-2">

//                 {/* Large Hero Card */}
//                 <div
//                     className="relative lg:w-[872px] w-full lg:h-[600px] h-[280px] rounded-2xl overflow-hidden group"
//                     style={{ backgroundImage: `url(${babu2})`, backgroundSize: "cover", backgroundPosition: "center" }}
//                 >
//                     {/* Overlay Gradient */}
//                     <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

//                     {/* Content */}
//                     <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 lg:pl-14">
//                         <span className="inline-block bg-[#FF8A00]/20 text-[#FF8A00] text-xs font-semibold px-4 py-1.5 rounded-full w-fit mb-4 backdrop-blur-sm border border-[#FF8A00]/30">
//                             🌿 Organic & Fresh
//                         </span>

//                         <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-md">
//                             Fresh & Healthy <br className="hidden sm:block" />
//                             <span className="text-[#FF8A00]">Organic Food</span>
//                         </h1>

//                         <div className="flex items-center gap-4 mt-4">
//                             <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
//                                 <span className="text-white text-sm font-medium">Sale up to</span>
//                                 <span className="bg-[#FF8A00] text-white text-sm font-bold px-4 py-1 rounded-full">
//                                     30% OFF
//                                 </span>
//                             </div>
//                         </div>

//                         <p className="text-white/80 text-sm mt-2 flex items-center gap-2">
//                             <span className="w-1.5 h-1.5 rounded-full bg-[#FF8A00]"></span>
//                             Free shipping on all your orders
//                         </p>

//                         <Link
//                             to="/shoppage"
//                             className="inline-flex items-center gap-2 w-fit mt-5 bg-white text-gray-900 font-semibold px-7 py-3 rounded-full hover:bg-[#FF8A00] hover:text-white transition-all duration-300 shadow-lg hover:shadow-[#FF8A00]/30 hover:scale-105"
//                         >
//                             Shop Now
//                             <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                             </svg>
//                         </Link>
//                     </div>
//                 </div>

//                 {/* Side Cards */}
//                 <div className="flex flex-col gap-6 lg:w-[423px] w-full">

//                     {/* Card 1 - Summer Sale */}
//                     <div
//                         className="relative lg:h-[288px] h-[160px] rounded-2xl overflow-hidden group"
//                         style={{ backgroundImage: `url(${hero1})`, backgroundSize: "cover", backgroundPosition: "center" }}
//                     >
//                         <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>
//                         <div className="relative z-10 h-full flex flex-col justify-center px-6">
//                             <span className="text-[#FF8A00] text-xs font-semibold uppercase tracking-wider">Summer Sale</span>
//                             <h3 className="text-3xl font-extrabold text-white mt-1">
//                                 75% <span className="text-[#FF8A00]">OFF</span>
//                             </h3>
//                             <p className="text-white/80 text-sm">Only Fruit & Vegetable</p>
//                             <Link
//                                 to="/shoppage"
//                                 className="inline-flex items-center gap-1 w-fit mt-2 text-[#FF8A00] font-medium hover:text-white transition-colors duration-300 group"
//                             >
//                                 Shop now
//                                 <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                                 </svg>
//                             </Link>
//                         </div>
//                     </div>

//                     {/* Card 2 - Best Deal */}
//                     <div
//                         className="relative lg:h-[288px] h-[160px] rounded-2xl overflow-hidden group"
//                         style={{ backgroundImage: `url(${hero2})`, backgroundSize: "cover", backgroundPosition: "center" }}
//                     >
//                         <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent"></div>
//                         <div className="relative z-10 h-full flex flex-col justify-center px-6">
//                             <span className="text-green-300 text-xs font-semibold uppercase tracking-wider">⭐ Best Deal</span>
//                             <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight max-w-xs">
//                                 Special Products <br /> Deal of the Month
//                             </h3>
//                             <Link
//                                 to="/shoppage"
//                                 className="inline-flex items-center gap-1 w-fit mt-3 text-green-300 font-medium hover:text-white transition-colors duration-300 group"
//                             >
//                                 Shop now
//                                 <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                                 </svg>
//                             </Link>
//                         </div>
//                     </div>

//                 </div>
//             </div>

//             {/* Bottom Brand / Category Cards */}
//             <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 py-4 px-2 my-6">
//                 {[h1, h2, h3, h4].map((img, index) => (
//                     <div
//                         key={index}
//                         className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
//                     >
//                         <img
//                             src={img}
//                             alt={`category-${index + 1}`}
//                             className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
//                             loading="lazy"
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                     </div>
//                 ))}
//             </div>
//         </Container>
//     );
// }

// export default Hero;


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
            {/* Main Hero Section */}
            <div className="flex flex-col lg:flex-row items-stretch gap-6 py-4 mt-2">

                {/* Large Hero Card (First Image) - Mobile এ লেখা ছোট করা হয়েছে */}
                <div
                    className="relative lg:w-[872px] w-full lg:h-[600px] h-[280px] rounded-2xl overflow-hidden group"
                    style={{ backgroundImage: `url(${babu2})`, backgroundSize: "cover", backgroundPosition: "center" }}
                >
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>

                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col justify-center px-5 sm:px-8 lg:pl-14">
                        <span className="inline-block bg-[#FF8A00]/20 text-[#FF8A00] text-[10px] sm:text-xs font-semibold px-3 py-1 sm:px-4 sm:py-1.5 rounded-full w-fit mb-3 sm:mb-4 backdrop-blur-sm border border-[#FF8A00]/30">
                            🌿 Organic & Fresh
                        </span>

                        {/* Mobile এ text-2xl (ছোট), ডেস্কটপে বড় */}
                        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-md">
                            Fresh & Healthy <br className="hidden sm:block" />
                            <span className="text-[#FF8A00]">Organic Food</span>
                        </h1>

                        <div className="flex items-center gap-3 sm:gap-4 mt-3 sm:mt-4">
                            <div className="flex items-center gap-1 sm:gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/20">
                                <span className="text-white text-[10px] sm:text-sm font-medium">Sale up to</span>
                                <span className="bg-[#FF8A00] text-white text-[10px] sm:text-sm font-bold px-2.5 py-0.5 sm:px-4 sm:py-1 rounded-full">
                                    30% OFF
                                </span>
                            </div>
                        </div>

                        <p className="text-white/80 text-[10px] sm:text-sm mt-1 sm:mt-2 flex items-center gap-2">
                            <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#FF8A00]"></span>
                            Free shipping on all your orders
                        </p>

                        <Link
                            to="/shoppage"
                            className="inline-flex items-center gap-2 w-fit mt-3 sm:mt-5 bg-white text-gray-900 font-semibold px-5 py-2 sm:px-7 sm:py-3 text-sm sm:text-base rounded-full hover:bg-[#FF8A00] hover:text-white transition-all duration-300 shadow-lg hover:shadow-[#FF8A00]/30 hover:scale-105"
                        >
                            Shop Now
                            <svg className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* Side Cards (Second Image) - Mobile এ লেখা টাইট করা হয়েছে */}
                <div className="flex flex-col gap-6 lg:w-[423px] w-full">

                    {/* Card 1 - Summer Sale */}
                    <div
                        className="relative lg:h-[288px] h-[160px] rounded-2xl overflow-hidden group"
                        style={{ backgroundImage: `url(${hero1})`, backgroundSize: "cover", backgroundPosition: "center" }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/30 to-transparent"></div>
                        <div className="relative z-10 h-full flex flex-col justify-center items-end px-4 sm:px-6"> {/* padding কমানো হয়েছে */}
                            <span className="text-[#FF8A00] text-[10px] sm:text-xs font-semibold uppercase tracking-wider">Summer Sale</span>
                            {/* Mobile এ text-2xl (ছোট) */}
                            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-0.5 sm:mt-1">
                                75% <span className="text-[#FF8A00]">OFF</span>
                            </h3>
                            <p className="text-white/80 text-[10px] sm:text-sm">Only Fruit & Vegetable</p>
                            <Link
                                to="/shoppage"
                                className="inline-flex items-center gap-1 w-fit mt-1 sm:mt-2 text-[#FF8A00] text-sm sm:text-base font-medium hover:text-white transition-colors duration-300 group"
                            >
                                Shop now
                                <svg className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    {/* Card 2 - Best Deal */}
                    <div
                        className="relative lg:h-[288px] h-[160px] rounded-2xl overflow-hidden group"
                        style={{ backgroundImage: `url(${hero2})`, backgroundSize: "cover", backgroundPosition: "center" }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent"></div>
                        <div className="relative z-10 h-full flex flex-col justify-center px-4 sm:px-6"> {/* padding কমানো হয়েছে */}
                            <span className="text-green-300 text-[10px] sm:text-xs font-semibold uppercase tracking-wider">⭐ Best Deal</span>
                            {/* Mobile এ text-base (আরও টাইট) */}
                            <h3 className="text-base sm:text-2xl font-bold text-white leading-tight max-w-xs">
                                Special Products <br className="sm:hidden" /> Deal of the Month
                            </h3>
                            <Link
                                to="/shoppage"
                                className="inline-flex items-center gap-1 w-fit mt-1 sm:mt-3 text-green-300 text-sm sm:text-base font-medium hover:text-white transition-colors duration-300 group"
                            >
                                Shop now
                                <svg className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom Brand / Category Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 py-4 px-2 my-6">
                {[h1, h2, h3, h4].map((img, index) => (
                    <div
                        key={index}
                        className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                    >
                        <img
                            src={img}
                            alt={`category-${index + 1}`}
                            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                ))}
            </div>
        </Container>
    );
}

export default Hero;
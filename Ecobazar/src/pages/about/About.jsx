// import React from "react";
// import PageBanner from "../../components/PageBanner/PageBanner";
// import Container from "../../components/contener/Container";
// import about1 from "../../assets/about1.png";
// import about2 from "../../assets/about2.jpg";
// import about3 from "../../assets/about3.png";
// import about4 from "../../assets/about4.png";
// import about5 from "../../assets/about5.jpg";
// import about6 from "../../assets/about6.jpg";
// import about7 from "../../assets/about7.jpg";
// import about10 from "../../assets/about10.png";
// import about11 from "../../assets/about11.png";
// import about12 from "../../assets/about12.png";
// import about13 from "../../assets/about13.png";
// import about14 from "../../assets/about14.png";
// import about15 from "../../assets/about15.png";
// import about16 from "../../assets/about16.png";
// import about9 from "../../assets/check.png";
// import brand1 from "../../assets/brand1.png";
// import brand2 from "../../assets/brand2.png";
// import brand3 from "../../assets/brand3.png";
// import brand4 from "../../assets/brand4.png";
// import brand5 from "../../assets/brand5.png";
// import AboutHeader from "../../components/AboutHeader/AboutHeader";
// import Testimonials from "../../components/testimonials/Testimonials";

// function About() {
//   return (
//     <>
//       <PageBanner links="about" />

//       <Container>
//         <div className="md:flex md:flex-row flex-col items-center justify-between  gap-2 mt-5">
//           <div>
//             <AboutHeader
//               hed="100% Trusted Organic Food Store"
//               para="Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae."
//             />
//           </div>
//           <div className="md:w-[616px] w-[330px] md:h-[450px] h-[292px] md:mt-0 mt-5">
//             <img className="w-full h-full rounded-xl" src={about1} alt="" />
//           </div>
//         </div>
//       </Container>

//       <div className="md:flex md:flex-row flex-col items-center justify-between  gap-4 md:pr-18">
//         <div
//           className="md:w-full w-[350px] md:h-[500px] h-[400px] flex-1 bg-cover bg-center bg-no-repeat"
//           style={{ backgroundImage: `url(${about2})` }}
//         >
//           <img src={about3} alt="" className="h-full object-contain" />
//         </div>
//         <div className="flex-1 w-[400px] h-[500px] p-2">
//           <AboutHeader
//             hed="100% TrustedOrganic Food Store"
//             para="Pellentesque a ante vulputate leo porttitor luctus sed eget eros. Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a mi. Nulla eu eros consequat tortor tincidunt feugiat. "
//           />

//           <div className="flex  justify-between items-center gap-2 mt-4">
//             <div className="flex flex-col gap-1">
//               <img className="md:w-[312px] w-[152px] md:h-[72px] h-[42px]" src={about11} alt="" />
//                <img className="md:w-[312px] w-[152px] md:h-[72px] h-[42px]" src={about12} alt="" />
//                 <img className="md:w-[312px] w-[152px] md:h-[72px] h-[42px]" src={about13} alt="" />
//             </div>
//             <div className="flex flex-col gap-1">
//                <img className="md:w-[312px] w-[152px] md:h-[72px] h-[42px]" src={about14} alt="" />
//                <img className="md:w-[312px] w-[152px] md:h-[72px] h-[42px]" src={about15} alt="" />
//                 <img className="md:w-[312px] w-[152px] md:h-[72px] h-[42px]" src={about16} alt="" />
//             </div>
//           </div>
//         </div>

//       </div>

//       <Container>
//         <div className="md:flex md:flex-row flex-col items-center justify-between  gap-2 mt-5">
//           <div>
//             <AboutHeader
//               hed="We Delivered, You Enjoy Your Order."
//               para="Ut suscipit egestas suscipit. Sed posuere pellentesque nunc, ultrices consectetur velit dapibus eu. Mauris sollicitudin dignissim diam, ac mattis eros accumsan rhoncus. Curabitur auctor bibendum nunc eget elementum."
//             />

//             <div className="flex flex-col gap-3 mt-6">
//               <div className="flex items-center gap-2">
//                 <img
//                   className="bg-zinc-300 w-6 h-6 p-1 rounded-full"
//                   src={about9}
//                   alt=""
//                 />
//                 <p className="text-[14px] text-[#666666]">
//                   Sed in metus pellentesque.
//                 </p>
//               </div>
//               <div className="flex items-center gap-2">
//                 <img
//                   className="bg-zinc-300 w-6 h-6 p-1 rounded-full"
//                   src={about9}
//                   alt=""
//                 />
//                 <p className="text-[14px] text-[#666666]">
//                   Sed in metus pellentesque.
//                 </p>
//               </div>
//               <div className="flex items-center gap-2 ">
//                 <img
//                   className="bg-zinc-300 w-6 h-6 p-1 rounded-full"
//                   src={about9}
//                   alt=""
//                 />
//                 <p className="text-[14px] text-[#666666]">
//                   Sed in metus pellentesque.
//                 </p>
//               </div>
//             </div>

//             <button className="bg-[#00B207]  text-white text-[14px]  rounded-3xl px-[25px] py-[11px] mt-6">
//               Send Message
//             </button>
//           </div>

//           <div className="md:w-[716px] w-[316px] md:h-[492px] h-[292px] md:mt-0 mt-5">
//             <img
//               className="w-full h-full object-contain rounded-xl"
//               src={about4}
//               alt=""
//             />
//           </div>
//         </div>
//       </Container>

//       <Container>
//         <div className="flex items-center justify-center mb-7 ">
//           <AboutHeader
//             hed="Our Awesome Team"
//             para="Pellentesque a ante vulputate leo porttitor luctus sed eget eros. Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a mi."
//           />
//         </div>

//         <div className="md:flex md:items-center items-center md:justify-between justify-center gap-2 flex-wrap mb-7">
//           <div
//             className="w-[250px] h-[280px] bg-cover bg-center rounded-xl md:mb-0 mb-4"
//             style={{ backgroundImage: `url(${about5})` }}
//           ></div>
//           <div
//             className="w-[250px] h-[280px] bg-cover bg-center rounded-xl md:mb-0 mb-4"
//             style={{ backgroundImage: `url(${about6})` }}
//           ></div>
//           <div
//             className="w-[250px] h-[280px] bg-cover bg-center rounded-xl md:mb-0 mb-4"
//             style={{ backgroundImage: `url(${about7})` }}
//           ></div>
//           <div
//             className="w-[250px] h-[280px] bg-cover bg-center rounded-xl md:mb-0 mb-4"
//             style={{ backgroundImage: `url(${about10})` }}
//           ></div>
//         </div>

//         <Testimonials />

//         <div className="flex flex-wrap items-center  justify-between gap-2 my-7">
//           <img src={brand1} alt="" />
//           <img src={brand2} alt="" />
//           <img src={brand3} alt="" />
//           <img src={brand4} alt="" />
//           <img src={brand5} alt="" />
//         </div>
//       </Container>
//     </>
//   );
// }

// export default About;



import React from "react";
import PageBanner from "../../components/PageBanner/PageBanner";
import Container from "../../components/contener/Container";
import about1 from "../../assets/about1.png";
import about2 from "../../assets/about2.jpg";
import about3 from "../../assets/about3.png";
import about4 from "../../assets/about4.png";
import about5 from "../../assets/about5.jpg";
import about6 from "../../assets/about6.jpg";
import about7 from "../../assets/about7.jpg";
import about10 from "../../assets/about10.png";
import about11 from "../../assets/about11.png";
import about12 from "../../assets/about12.png";
import about13 from "../../assets/about13.png";
import about14 from "../../assets/about14.png";
import about15 from "../../assets/about15.png";
import about16 from "../../assets/about16.png";
import about9 from "../../assets/check.png";
import brand1 from "../../assets/brand1.png";
import brand2 from "../../assets/brand2.png";
import brand3 from "../../assets/brand3.png";
import brand4 from "../../assets/brand4.png";
import brand5 from "../../assets/brand5.png";
import AboutHeader from "../../components/AboutHeader/AboutHeader";
import Testimonials from "../../components/testimonials/Testimonials";

function About() {
  return (
    <>
      <PageBanner links="about" />

      {/* Section 1: Trusted Organic Food Store */}
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 py-8 lg:py-12">
          <div className="flex-1">
            <AboutHeader
              hed="100% Trusted Organic Food Store"
              para="Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae."
            />
          </div>
          <div className="w-full lg:w-[616px] lg:h-[450px] h-[280px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500">
            <img
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              src={about1}
              alt="Organic Food Store"
            />
          </div>
        </div>
      </Container>

      {/* Section 2: Image + Features Grid */}
      <Container>
        <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12 py-8 lg:py-12">
          {/* Left: background image with overlay image */}
          <div
            className="relative w-full lg:w-1/2 h-[300px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl"
            style={{ backgroundImage: `url(${about2})`, backgroundSize: "cover", backgroundPosition: "center" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
            <img
              src={about3}
              alt="Organic"
              className="relative z-10 w-full h-full object-contain mix-blend-lighten"
            />
          </div>

          {/* Right: content with feature icons */}
          <div className="flex-1 flex flex-col justify-center">
            <AboutHeader
              hed="100% Trusted Organic Food Store"
              para="Pellentesque a ante vulputate leo porttitor luctus sed eget eros. Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a mi. Nulla eu eros consequat tortor tincidunt feugiat."
            />

            {/* Feature icons grid - fully responsive */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              {[about11, about12, about13, about14, about15, about16].map((img, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center bg-white/70 backdrop-blur-sm rounded-xl p-2 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-green-100"
                >
                  <img
                    src={img}
                    alt={`feature-${idx}`}
                    className="w-full h-auto max-h-[60px] object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      {/* Section 3: We Delivered, You Enjoy */}
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 py-8 lg:py-12">
          <div className="flex-1">
            <AboutHeader
              hed="We Delivered, You Enjoy Your Order."
              para="Ut suscipit egestas suscipit. Sed posuere pellentesque nunc, ultrices consectetur velit dapibus eu. Mauris sollicitudin dignissim diam, ac mattis eros accumsan rhoncus. Curabitur auctor bibendum nunc eget elementum."
            />

            <div className="space-y-4 mt-6">
              {[
                "Sed in metus pellentesque.",
                "Sed in metus pellentesque.",
                "Sed in metus pellentesque.",
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-3 group">
                  <div className="bg-green-100 p-1.5 rounded-full group-hover:bg-green-200 transition-colors">
                    <img src={about9} alt="check" className="w-5 h-5 object-contain" />
                  </div>
                  <p className="text-sm md:text-base text-gray-700 font-medium">
                    {text}
                  </p>
                </div>
              ))}
            </div>

            <button className="mt-8 bg-[#00B207] hover:bg-green-600 text-white font-semibold px-8 py-3.5 rounded-full shadow-lg hover:shadow-green-200/50 transition-all duration-300 hover:-translate-y-1">
              Send Message
            </button>
          </div>

          <div className="w-full lg:w-[716px] lg:h-[492px] h-[280px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500">
            <img
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              src={about4}
              alt="Delivery"
            />
          </div>
        </div>
      </Container>

      {/* Section 4: Team */}
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <AboutHeader
            hed="Our Awesome Team"
            para="Pellentesque a ante vulputate leo porttitor luctus sed eget eros. Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a mi."
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6 mb-12">
          {[about5, about6, about7, about10].map((img, idx) => (
            <div
              key={idx}
              className="group relative h-[200px] md:h-[280px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              style={{ backgroundImage: `url(${img})`, backgroundSize: "cover", backgroundPosition: "center" }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-bold text-lg">Team Member</p>
                <p className="text-sm text-green-200">Role</p>
              </div>
            </div>
          ))}
        </div>

        <Testimonials />
      </Container>

      {/* Section 5: Brands */}
      <Container>
        <div className="flex flex-wrap items-center justify-center lg:justify-between gap-6 md:gap-8 py-6 my-6 border-t border-b border-gray-100">
          {[brand1, brand2, brand3, brand4, brand5].map((brand, idx) => (
            <img
              key={idx}
              src={brand}
              alt={`brand-${idx}`}
              className="h-8 md:h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            />
          ))}
        </div>
      </Container>
    </>
  );
}

export default About;
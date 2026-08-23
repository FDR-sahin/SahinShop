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

      <Container>
        <div className="md:flex md:flex-row flex-col items-center justify-between  gap-2 mt-5">
          <div>
            <AboutHeader
              hed="100% Trusted Organic Food Store"
              para="Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae."
            />
          </div>
          <div className="md:w-[616px] w-[330px] md:h-[450px] h-[292px] md:mt-0 mt-5">
            <img className="w-full h-full rounded-xl" src={about1} alt="" />
          </div>
        </div>
      </Container>

      <div className="md:flex md:flex-row flex-col items-center justify-between  gap-4 md:pr-18">
        <div
          className="md:w-full w-[350px] md:h-[500px] h-[400px] flex-1 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${about2})` }}
        >
          <img src={about3} alt="" className="h-full object-contain" />
        </div>
        <div className="flex-1 w-[400px] h-[500px] p-2">
          <AboutHeader
            hed="100% TrustedOrganic Food Store"
            para="Pellentesque a ante vulputate leo porttitor luctus sed eget eros. Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a mi. Nulla eu eros consequat tortor tincidunt feugiat. "
          />

          <div className="flex  justify-between items-center gap-2 mt-4">
            <div className="flex flex-col gap-1">
              <img className="md:w-[312px] w-[152px] md:h-[72px] h-[42px]" src={about11} alt="" />
               <img className="md:w-[312px] w-[152px] md:h-[72px] h-[42px]" src={about12} alt="" />
                <img className="md:w-[312px] w-[152px] md:h-[72px] h-[42px]" src={about13} alt="" />
            </div>
            <div className="flex flex-col gap-1">
               <img className="md:w-[312px] w-[152px] md:h-[72px] h-[42px]" src={about14} alt="" />
               <img className="md:w-[312px] w-[152px] md:h-[72px] h-[42px]" src={about15} alt="" />
                <img className="md:w-[312px] w-[152px] md:h-[72px] h-[42px]" src={about16} alt="" />
            </div>
          </div>
        </div>

      </div>

      <Container>
        <div className="md:flex md:flex-row flex-col items-center justify-between  gap-2 mt-5">
          <div>
            <AboutHeader
              hed="We Delivered, You Enjoy Your Order."
              para="Ut suscipit egestas suscipit. Sed posuere pellentesque nunc, ultrices consectetur velit dapibus eu. Mauris sollicitudin dignissim diam, ac mattis eros accumsan rhoncus. Curabitur auctor bibendum nunc eget elementum."
            />

            <div className="flex flex-col gap-3 mt-6">
              <div className="flex items-center gap-2">
                <img
                  className="bg-zinc-300 w-6 h-6 p-1 rounded-full"
                  src={about9}
                  alt=""
                />
                <p className="text-[14px] text-[#666666]">
                  Sed in metus pellentesque.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <img
                  className="bg-zinc-300 w-6 h-6 p-1 rounded-full"
                  src={about9}
                  alt=""
                />
                <p className="text-[14px] text-[#666666]">
                  Sed in metus pellentesque.
                </p>
              </div>
              <div className="flex items-center gap-2 ">
                <img
                  className="bg-zinc-300 w-6 h-6 p-1 rounded-full"
                  src={about9}
                  alt=""
                />
                <p className="text-[14px] text-[#666666]">
                  Sed in metus pellentesque.
                </p>
              </div>
            </div>

            <button className="bg-[#00B207]  text-white text-[14px]  rounded-3xl px-[25px] py-[11px] mt-6">
              Send Message
            </button>
          </div>

          <div className="md:w-[716px] w-[316px] md:h-[492px] h-[292px] md:mt-0 mt-5">
            <img
              className="w-full h-full object-contain rounded-xl"
              src={about4}
              alt=""
            />
          </div>
        </div>
      </Container>

      <Container>
        <div className="flex items-center justify-center mb-7 ">
          <AboutHeader
            hed="Our Awesome Team"
            para="Pellentesque a ante vulputate leo porttitor luctus sed eget eros. Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a mi."
          />
        </div>

        <div className="md:flex md:items-center items-center md:justify-between justify-center gap-2 flex-wrap mb-7">
          <div
            className="w-[250px] h-[280px] bg-cover bg-center rounded-xl md:mb-0 mb-4"
            style={{ backgroundImage: `url(${about5})` }}
          ></div>
          <div
            className="w-[250px] h-[280px] bg-cover bg-center rounded-xl md:mb-0 mb-4"
            style={{ backgroundImage: `url(${about6})` }}
          ></div>
          <div
            className="w-[250px] h-[280px] bg-cover bg-center rounded-xl md:mb-0 mb-4"
            style={{ backgroundImage: `url(${about7})` }}
          ></div>
          <div
            className="w-[250px] h-[280px] bg-cover bg-center rounded-xl md:mb-0 mb-4"
            style={{ backgroundImage: `url(${about10})` }}
          ></div>
        </div>

        <Testimonials />

        <div className="flex flex-wrap items-center  justify-between gap-2 my-7">
          <img src={brand1} alt="" />
          <img src={brand2} alt="" />
          <img src={brand3} alt="" />
          <img src={brand4} alt="" />
          <img src={brand5} alt="" />
        </div>
      </Container>
    </>
  );
}

export default About;

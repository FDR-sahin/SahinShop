import React from "react";
import sale from "../../assets/sale.jpg"
import manso from "../../assets/manso.jpg"
import fol from "../../assets/fol.jpg"
import Container from "../contener/Container";

function Saleof() {
  return (
    <Container>
   
    <div className="md:flex md:flex-row flex-col items-center justify-between gap-3 mt-8">
      <div
        className="md:w-[424px] w-[310px] md:h-[536px] h-[350px] bg-cover bg-center rounded-sm md:mb-0 mb-4"
        style={{ backgroundImage: `url(${sale})` }}
      ></div>
      <div
        className="md:w-[424px] w-[310px] md:h-[536px] h-[350px] bg-cover bg-center rounded-sm md:mb-0 mb-4"
        style={{ backgroundImage: `url(${manso})` }}
      ></div>
      <div
        className="md:w-[424px] w-[310px] md:h-[536px] h-[350px] bg-cover bg-center rounded-sm md:mb-0 mb-4"
        style={{ backgroundImage: `url(${fol})` }}
      ></div>
    </div>
     </Container>
  );
}

export default Saleof;

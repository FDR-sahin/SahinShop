import React from "react";
import Container from "../contener/Container";
import offer from "../../assets/offer.jpg";

function Offer() {
  return (
    <Container>
      <div
        className="w-full h-[358px] bg-cover bg-center mt-8 rounded-sm"
        style={{ backgroundImage: `url(${offer})` }}
      ></div>
    </Container>
  );
}

export default Offer;

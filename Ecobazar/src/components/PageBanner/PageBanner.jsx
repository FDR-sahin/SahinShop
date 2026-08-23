import React from 'react'
import Container from "../contener/Container";
import { IoHomeOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import off from "../../assets/offer.jpg";

function PageBanner({links}) {
  return (
     <div
        className=" bg-cover bg-center py-5 scale-x-[-1] mb-1"
        style={{ backgroundImage: `url(${off})` }}
      >
        <Container>
          <div className="flex items-center gap-1 scale-x-[-1]">
           <Link to="/"> <IoHomeOutline className="text-white/50" /></Link>
            <IoIosArrowForward className="text-white/50" />
            <Link
               to={`/${links}`} 
              className="text-green-600 capitalize font-semibold flex items-center gap-1 hover:underline text-sm"
            >
              {links}
            </Link>
          </div>
        </Container>
      </div>
  )
}

export default PageBanner

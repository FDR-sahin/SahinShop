import React from 'react'
import Container from '../contener/Container'
import brand1 from "../../assets/brand1.png"
import brand2 from "../../assets/brand2.png"
import brand3 from "../../assets/brand3.png"
import brand4 from "../../assets/brand4.png"
import brand5 from "../../assets/brand5.png"
import in1 from "../../assets/in1.jpg"
import in2 from "../../assets/in2.jpg"
import in3 from "../../assets/in3.jpg"
import in4 from "../../assets/in4.jpg"
import in5 from "../../assets/in5.jpg"
import in6 from "../../assets/in6.jpg"




function FollowInstra() {
  return (
    <div className='bg-white py-10'>
        <Container>
            <div className='flex items-center flex-wrap justify-between gap-2'>

              <img src={brand1} alt="" />
              <img src={brand2} alt="" />
              <img src={brand3} alt="" />
              <img src={brand4} alt="" />
              <img src={brand5} alt="" />
                 
            </div>
            <h1 className='md:text-[32px] text-[25px] font-bold py-5 text-center'>Follow us on Instagram</h1>
            <div className='grid md:grid-cols-6 grid-cols-2 gap-5'>

              <img className='w-[200px] h-[200px] rounded-xl' src={in1} alt="" />
              <img className='w-[200px] h-[200px] rounded-xl' src={in2} alt="" />
              <img className='w-[200px] h-[200px] rounded-xl' src={in3} alt="" />
              <img className='w-[200px] h-[200px] rounded-xl' src={in4} alt="" />
              <img className='w-[200px] h-[200px] rounded-xl' src={in5} alt="" />
              <img className='w-[200px] h-[200px] rounded-xl' src={in6} alt="" />
                 
            </div>

        </Container>
      
    </div>
  )
}

export default FollowInstra

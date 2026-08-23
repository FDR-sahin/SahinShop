import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

function HomeHeader({homeheader}) {
  return (
    <div className='flex items-center justify-between gap-3 py-4'>
      <h2 className='md:text-[32px] text-[20px] font-bold '>{homeheader} </h2>
      <div className='flex items-center gap-2'>
        <p className='text-[16px] text-[#00B207]'>View All   </p>
        <FaArrowRightLong  className='text-[#00B207]'/> 
      </div>
    </div>
  )
}

export default HomeHeader

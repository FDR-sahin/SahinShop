import React from 'react'

function HomeHeader({hed, para}) {
  return (
    <div className='md:w-[607px] w-[407]'>
        <h3 className='md:text-[56px] text-[35px] font-bold mb-4'>{hed}</h3>
        <p className='text-[#666666] text-[18px]'>{para}</p>
    </div>
  )
}

export default HomeHeader

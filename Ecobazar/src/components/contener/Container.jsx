import React from 'react'

function Container({children}) {
  return (
    <div className='max-w-[1280px] px-10 mx-auto py-2'>
     {children}
    </div>
  )
}

export default Container

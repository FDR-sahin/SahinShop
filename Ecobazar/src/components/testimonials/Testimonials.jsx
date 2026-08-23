import React from 'react'
import Container from '../contener/Container'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import clientFeedBack from '../../api/clientfeed';

function Testimonials() {
  // console.log(clientFeedBack)
  const allCustomer = clientFeedBack;
  // console.log(allClient)
  return (
    <div className="bg-[#E5E5E5] py-8">
        <Container>
            <div className='flex items-center justify-between gap-3'>
               <h2 className='md:text-[32px] text-[25px] font-bold'>Client Testimonials</h2>
               <div className='flex items-center gap-3'>
                 <FaArrowLeft className="text-zinc-700 bg-white border border-zinc-300  hover:bg-green-500 hover:text-white md:w-8 w-6 md:h-8 h-6 p-1 rounded-full"/>
                <FaArrowRight className="text-zinc-700 bg-white border border-zinc-300  hover:bg-green-500 hover:text-white md:w-8 w-6 md:h-8 h-6 p-1 rounded-full"/>

               </div>
            </div>
            <div className='md:grid md:grid-cols-3 grid-cols-1 md:gap-3 pt-4'>
              {
                allCustomer.map((customer)=>{
                  return(
                    <div className='bg-white rounded-sm p-3 md:mb-0 mb-3' key={customer.id}>
                      <h3 className='text-[42px] text-[#00B207] font-bold'>❞</h3>
                      <p className='text-[14px] text-[#4D4D4D]'>{customer.des}</p>
                      <div className='flex items-center justify-between gap-2'>
                        <div className='flex items-center gap-3 pt-3'>
                          <div className='w-[56px] h-[56px] '>
                          <img className='w-full h-full object-cover rounded-full' src={customer.image} alt="" />
                        </div>
                        <div>
                          <h4 className='text-[16px] font-semibold'>{customer.name}</h4>
                        <p className='text-[#999999] text-[14px]'>{customer.title}</p>
                        </div>
                        </div>
                        <div className='flex items-center gap-1'>
                           <FaStar  className='text-[#FF8A00] '/>
                           <FaStar  className='text-[#FF8A00] '/>
                           <FaStar  className='text-[#FF8A00] '/>
                           <FaStar  className='text-[#FF8A00] '/>
                           <FaStar  className='text-[#FF8A00] '/>

                        </div>
                      </div>
                    </div>
                  )
                })
              }
              

            </div>
        </Container>
      
    </div>
  )
}

export default Testimonials

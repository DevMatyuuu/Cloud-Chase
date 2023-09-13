import React from 'react'
import { FaPlane } from 'react-icons/fa'
import { FaClock } from 'react-icons/fa'
import { FaShieldAlt } from 'react-icons/fa'


function OtherInfo() {
  return (
    <section>
      <div>
        <div className='flex justify-center items-center md:text-lg sl:text-[15px] sm:text-[12px] text-[10px] mx-auto text-white lg:gap-10 md:gap-12 sm:gap-20 gap-10  md:h-48 sm:h-48 sl:h-48  sm:pt-10  h-40 mb-10 md:w-full bg-gradient-to-r from-gray-700 via-gray-900 to-black shadow-lg md:mb-20'>
            <div className='md:flex-row sl:flex md:w-[23rem] sl:w-[22rem] w-28'>
               <FaPlane className='md:h-16 h-7 w-8 mx-auto mb-3  '/>
               <p className='md:mb-10 font-bold text-center '>Free Shipping on orders above ₱800 </p>
            </div>
            <div className='md:flex-row sl:flex md:gap-5 md:w-[19rem]  w-28'>
              <FaClock className='md:h-16 h-7 w-8  mx-auto mb-3'/>
              <p className='md:mb-10 font-bold  text-center '>24/7 Online Customer hotline </p>
            </div>
            <div className='lg:flex-col md:flex-row sl:flex md:gap-5 md:w-[18rem]  w-28'>
              <FaShieldAlt className='md:h-16 h-7 w-8 mx-auto mb-3 '/>
              <p className='md:mb-10 font-bold  text-center'>30 days return and refund </p>
            </div>
            </div>
          </div>
    </section>
  )
}

export default OtherInfo
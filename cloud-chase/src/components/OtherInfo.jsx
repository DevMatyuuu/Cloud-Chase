import React from 'react'
import { FaPlane } from 'react-icons/fa'
import { FaClock } from 'react-icons/fa'
import { FaShieldAlt } from 'react-icons/fa'


function OtherInfo() {
  return (
    <section>
        <div className='flex justify-center md:text-lg sl:text-[15px] sm:text-[12px] text-[10px] mx-auto text-white md:gap-[170px] sm:gap-20 gap-10 md:pt-16 md:h-48 sm:h-48 sl:h-48 sl:pt-10 sm:pt-10 h-28 mb-10 md:w-full bg-gradient-to-r from-gray-700 via-gray-900 to-black shadow-lg md:mb-20'>
            <div className='md:flex sl:flex md:gap-5 md:w-[22rem] sl:w-[22rem] w-28'>
               <FaPlane className='md:h-16 h-7 w-8 md:mx-auto md:ml-0 md:mb-0 md:mt-0 ml-10 mb-3 mt-5'/>
               <p className='md:mb-10 font-bold md:mt-5 text-center md:text-start'>Free Shipping on orders above ₱800 </p>
            </div>
            <div className='md:flex sl:flex md:gap-5 md:w-72 sl:w-[22rem] w-28'>
              <FaClock className='md:h-16 h-7 w-8 md:mx-auto md:ml-0 md:mb-0 md:mt-0 ml-10 mb-3 mt-5'/>
              <p className='md:mb-10 font-bold md:mt-5 text-center md:text-start'>24/7 Online Customer hotline </p>
            </div>
            <div className='md:flex sl:flex md:gap-5 md:w-60 sl:w-[22rem] w-28'>
              <FaShieldAlt className='md:h-16 h-7 w-8 md:mx-auto md:ml-0 md:mb-0 md:mt-0 ml-10 mb-3 mt-5'/>
              <p className='md:mb-10 font-bold md:mt-5 text-center md:text-start'>30 days return and refund </p>
            </div>
        </div>
    </section>
  )
}

export default OtherInfo
import React from 'react'
import { FaPlane } from 'react-icons/fa'
import { FaClock } from 'react-icons/fa'
import { FaShieldAlt } from 'react-icons/fa'


function OtherInfo() {
  return (
    <section>
        <div className='flex justify-center text-white md:gap-[230px] md:pt-16 md:h-48 md:w-full bg-gradient-to-r from-gray-700 via-gray-900 to-black shadow-lg md:mb-20'>
            <div className='flex gap-5'>
               <FaPlane className='h-16 w-8 md:mx-auto'/>
               <p className='md:mb-10 font-bold md:mt-5'>Free Shipping on orders above ₱800 </p>
            </div>
            <div className='flex gap-5'>
              <FaClock className='h-16 w-8'/>
              <p className='md:mb-10 font-bold md:mt-5'>24/7 Online Customer hotline </p>
            </div>
            <div className='flex gap-5'>
              <FaShieldAlt className='h-16 w-8'/>
              <p className='md:mb-10 font-bold md:mt-5'>30 days return and refund </p>
            </div>
        </div>
    </section>
  )
}

export default OtherInfo
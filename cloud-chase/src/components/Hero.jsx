import React from 'react'
import MainSlider from './MainSlider'
import sale1 from '../assets/sale1.png'
import sale2 from '../assets/sale2.png'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className='mx-auto lg:w-[90%] lg:mb-[100px] mb-14 lg:pt-5 sl:pt-[47px] pt-5 sm:pt-10 font-poppins'>
     <div className='container mx-auto lg:max-w-[1480px]'>
        <div className='flex flex-col gap-y-[20px] lg:flex-row lg:gap-x-[20px]'>
        <div className='lg:w-[67%]'>
          <MainSlider className='z-0'/>
        </div>
        <div className='flex flex-col sl: gap-y-[30px] w-full max-w-xs sm:max-w-lg sl:max-w-lg lg:max-w-[1500px] h-[500px] bg-primary lg:m-auto sl:m-auto sm:m-auto mx-auto mt-10 lg:mt-0 sm:mt-0 '>
            <div className='grad flex-1 h-[250px] rounded-xl overflow-hidden relative p-6 bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r text-white shadow-xl cursor-pointer'> 
            <Link to={`https://cloud-chase.vercel.app/products/3`}>
                <div className='flex flex-col lg:hover:duration-300 lg:hover:scale-105 mx-8 lg:mt-0 mt-5'>
                 <p className='text-2xl uppercase font-bold max-w-[300px] lg:mb-10 sl:mb-8 mb-8 lg:mt-3 lg:ml-2 '>Affordable and Quality Pods</p>
                 <p className='text-sm font-bold max-w-[100px] text-black px-2 py-2 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 rounded-xl text-center uppercase lg:ml-1'>shop now</p>
                </div>
                <img src={sale1} className='lg:h-80 sm:h-[350px] right-0 top-10 absolute' />
            </Link> 
            </div>
            
            <div className='grad flex-1 h-[250px] rounded-xl overflow-hidden relative p-6 bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r text-white z-21 shadow-xl cursor-pointer'> 
            <Link to={`http://localhost:5173/products/1`}>
              <div className='flex flex-col lg:hover:duration-300 lg:hover:scale-105 mx-8 lg:mt-0 mt-5'>
                 <p className='text-2xl uppercase font-bold max-w-[300px] lg:mb-10 sl:mb-8 mb-8 lg:mt-3 lg:ml-2 '>20% off for New disposables</p>
                 <p className='text-sm font-bold max-w-[100px] text-black px-2 py-2 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 rounded-xl text-center uppercase lg:ml-1'>shop now</p>
              </div> 
              <div>
                <img src={sale2} className='lg:h-80 left-48 top-10 absolute' />
              </div>
            </Link>
            </div>
          </div>
            
        </div>
      </div>
    </section>
  )
}

export default Hero


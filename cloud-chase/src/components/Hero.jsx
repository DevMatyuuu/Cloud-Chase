import React from 'react'
import MainSlider from './MainSlider'
import sale1 from '../assets/sale1.png'
import sale2 from '../assets/sale2.png'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className='md:mb-[100px] mb-14 md:pt-[40px] sl:md:pt-[47px] lg:md:pt-[47px] pt-5 sm:pt-0 font-poppins'>
     <div className='container mx-auto md:max-w-[1480px] lg:max-w-[1600px]'>
        <div className='flex flex-col gap-y-[20px] md:flex-row lg:flex-row md:gap-x-[20px]'>
        <div className='flex lg:max-w-[1000px] md:max-w-[1000px] sl:max-w-[1200px] sl:max-h-[500px] sm:max-w-[1000px] max-w-[690px] shadow-xl sl:mb-10'>
        <MainSlider />
        </div>
        <div className='flex flex-col gap-y-[30px] w-full max-w-xs sm:max-w-lg sl:max-w-xl md:max-w-[1500px] h-[600px] bg-primary md:m-auto sl:m-auto sm:m-auto mx-auto '>
            <div className='grad flex-1 h-[250px] rounded-xl overflow-hidden relative p-6 bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r text-white shadow-xl cursor-pointer'> 
            <Link to={`https://cloud-chase.vercel.app/products/3`}>
                <div className='flex flex-col md:hover:duration-300 md:hover:scale-105 md:ml-3 sm:ml-8 md:mt-0 mt-5'>
                 <p className='text-2xl uppercase font-bold max-w-[300px] md:mb-10 sl:mb-8 mb-8 md:mt-12 md:ml-2 '>Affordable and Quality Pods</p>
                 <p className='text-sm font-bold max-w-[100px] text-black px-2 py-2 bg-yellow-500 rounded-xl text-center uppercase md:ml-1'>shop now</p>
                 <img src={sale1} className='md:h-[350px] sm:h-[350px] md:ml-52 sl:ml-44 sm:ml-52  ml-28 md:mt-8 absolute' />
                </div>
            </Link> 
            </div>
            
            <div className='grad flex-1 h-[250px] rounded-xl overflow-hidden relative p-6 bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r text-white z-21 shadow-xl cursor-pointer'> 
            <Link to={`https://cloud-chase.vercel.app/products/2`}>
              <div className='flex flex-col md:hover:duration-300 md:hover:scale-105 md:ml-3 sm:ml-8 md:mt-0 mt-5'>
                 <p className='text-2xl uppercase font-bold max-w-[300px] md:mb-10 sl:mb-8 mb-8 md:mt-12 md:ml-2 '>20% off for New disposables</p>
                 <p className='text-sm font-bold max-w-[100px] text-black px-2 py-2 bg-yellow-500 rounded-xl text-center uppercase md:ml-1'>shop now</p>
                
                 <img src={sale2} className='md:h-[350px] sm:h-[350px] md:ml-44 sl:ml-36 sm:ml-40  ml-24 md:mt-8 absolute md:max-w-[320px]' />
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


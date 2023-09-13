import React from 'react'
import MainSlider from './MainSlider'
import { Link } from 'react-router-dom'
import { heroCards } from '../../constant'

function Hero() {
  return (
    <section className='mx-auto lg:w-[90%] lg:mb-[100px] mb-14 lg:pt-0 sl:pt-[47px] pt-5 sm:pt-5 font-poppins'>
     <div className='container mx-auto lg:max-w-[1480px]'>
        <div className='flex flex-col xl:flex-row md:flex-col lg:w-[100%] mx-auto gap-y-[20px] lg:flex-col lg:gap-x-[20px]'>
          <div className='lg:w-[100%] xl:w-[70%] h-full'>
            <MainSlider className='z-0'/>
          </div>
          <div className='flex xl:flex-col lg:flex-row flex-col md:flex-row sm:flex-row gap-y-[43px] sm:gap-x-10 sm:mt-10 mx-auto sm:h-[35vh] lg:h-[30vh] h-[500px]  bg-primary lg:m-auto sl:m-auto sm:m-auto jutify-center mt-5 lg:mt-0 sm:mt-0 '>
          {heroCards.map((item) => (
            <div className='mx-auto' key={item.id}>
              <div className='grad flex h-[30vh] mx-auto rounded-xl overflow-hidden p-6 bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r text-white shadow-xl cursor-pointer'> 
              <Link to={item.route}>
                <div className='flex relative hover:scale-105'>
                  <div className='flex flex-col  lg:hover:duration-30 lg:mt-0 mt-5'>
                    <p className='lg:w-[60%] w-[60%]  lg:text-2xl text-base uppercase font-bold  lg:mb-10 sl:mb-8 mb-8 lg:mt-3 lg:ml-2 '>{item.desc}</p>
                    <p className='text-sm font-bold max-w-[100px] text-black px-2 py-2 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 rounded-xl text-center uppercase lg:ml-1'>shop now</p>
                  </div>
                  <div>
                    <img src={item.image} className={`${item.id === 2 ? 'lg:left-40 sm:left-20 left-24' : 'lg:left-48 sm:left-20 left-32'} lg:h-80 h-60 sm:h-[350px] lg:top-12 sm:top-9 top-12 absolute`} />
                  </div>
                </div>
              </Link> 
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero


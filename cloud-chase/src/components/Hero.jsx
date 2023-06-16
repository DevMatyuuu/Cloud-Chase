import React from 'react'
import MainSlider from './MainSlider'

function Hero() {
  return (
    <section className='mb-[50px] pt-28 sm:pt-0 '>
     <div className='container mx-auto md:max-w-[1480px]'>
        <div className='flex flex-col gap-y-[20px] md:flex-row md:gap-x-[20px]'>
        <MainSlider />
        <div className='flex flex-col gap-y-[30px] w-full max-w-lg md:max-w-r-[1500px] h-[600px] bg-primary'>
            <div className='grad flex-1 h-[250px] rounded-xl overflow-hidden relative p-6 bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r'> 
                 promo 1
            </div>
            <div className='grad flex-1 h-[250px] rounded-xl overflow-hidden relaive p-6 bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r'> 
                 promo 2
            </div>
        </div>
      </div>
     </div>
    </section>
  )
}

export default Hero


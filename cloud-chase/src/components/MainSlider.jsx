import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Pagination, Autoplay} from 'swiper'
import slider1 from '../assets/slider1.jpg'
import slider2 from '../assets/slider2.png'
import slider3 from '../assets/slider3.jpg'
import slider4 from '../assets/slider4.jpg'

const sliderImg = [
    {
    image:[slider1],
    },
    {
    image:[slider2],
    },
    {
     image:[slider3],
    },
    {
      image:[slider4],
    },
]


function MainSlider() {
  return (
    <Swiper modules={[Pagination, Autoplay]}  loop={true} autoplay={{delay: 2000}} pagination={{clickable:true,}} className='sm:max-h-[500px] md:rounded-xl sl:rounded-xl lg:rounded-xl sm:rounded-xl'>
     
        <>
            {sliderImg.map((slide, index) => {
            return (
            <SwiperSlide key={index} > 
                <img src={slide.image} className='md:w-full lg:w-full sm:w-full sl:w-full lg:max-w-[2000px] md:max-w-[2000px] sl:max-w-[1000px] sm:max-w-[1000px] max-w-auto lg:max-h-[600px] md:max-h-[600px] sl:max-h-[500px] sm:max-h-[400px] max-h-auto sl:object-fit sm:object-fit object-fit md:object-fit lg:object-fit h-full sl:ml-3 sl-w-full sm:ml-0 md:ml-0 sl:mb-16 md:rounded-xl sl:rounded-xl lg:rounded-xl sm:rounded-xl '/> 
            </SwiperSlide>
            )})}
        </>
    </Swiper>
  )
}

export default MainSlider

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Pagination, Autoplay} from 'swiper'
import '../slider.css'
import slider1 from '../assets/slider1.jpg'
import slider2 from '../assets/slider2.jpg'
import slider3 from '../assets/slider3.jpg'

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
]


function MainSlider() {
  return (
    <Swiper modules={[Pagination, Autoplay]}  loop={true} autoplay={{delay: 2000}} pagination={{clickable:true,}} className='sm:max-h-[500px] rounded-xl'>
     
        <>
            {sliderImg.map((slide, index) => {
            return (
            <SwiperSlide key={index}> 
                <img src={slide.image} className='md:w-full md:max-w-[2000px] sm:max-w-[700px] md:max-h-[600px] md:object-fit md:h-full rounded-xl'/> 
            </SwiperSlide>
            )})}
        </>
    </Swiper>
  )
}

export default MainSlider

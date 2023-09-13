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
    <Swiper modules={[Pagination, Autoplay]}  loop={true} autoplay={{delay: 2000}} pagination={{clickable:true,}} className='lg:rounded-xl sl:rounded-xl sm:rounded-xl'>
     
        <>
            {sliderImg.map((slide, index) => {
            return (
            <SwiperSlide key={index}> 
                  <img src={slide.image} className='lg:h-[65vh] sm:h-[60vh] h-[30vh] w-full'/>
            </SwiperSlide>
            )})}
        </>
    </Swiper>
  )
}

export default MainSlider

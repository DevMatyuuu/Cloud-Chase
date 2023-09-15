import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Pagination, Navigation} from 'swiper'
import Product from './Product';
import '../slider.css'



function ProductSlider({latest}) {
    
  return (
    <Swiper modules={[Pagination, Navigation]} loop={false} navigation={true}
    breakpoints={{
        320: {
            slidesPerView: 1,
            spaceBetween:20
        },
        600: {
            slidesPerView: 2,
            spaceBetween:20
        },
        800: {
            slidesPerView: 3,
            spaceBetween:30
        },
        1440: {
            slidesPerView: 4,
            spaceBetween:30
        },
        2559: {
            slidesPerView: 7    ,
            spaceBetween:30
        }
    }} pagination={{
        clickable:true,
    }}
    className='productSlider z-0 mx-auto lg:w-[100%] w-[60%] md:pb-10 sm:pb-16 pb-10 justify-center'
    >
        <>
        {latest.map(product => {
            return (
            <SwiperSlide key={product.id}>
                <Product products={product}/>
            </SwiperSlide>
            )
        })}
        </>
    </Swiper>
  )
}

export default ProductSlider

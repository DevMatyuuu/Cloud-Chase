import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Pagination, Navigation} from 'swiper'
import Product from './Product';
import '../slider.css'



function RelatedSlider({data}) {
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
            slidesPerView: 5,
            spaceBetween:30
        },
        2559: {
            slidesPerView: 7    ,
            spaceBetween:30
        }
    }} pagination={{
        clickable:true,
    }}
    className='productSlider mx-auto md:pb-10 sm:pb-16 pb-10 justify-center'
    
    >
        <>
        {data?.map(product => {
            return (
            <SwiperSlide key={product.id}>
                <div className='w-60 xl:w-[120%] mx-auto first-letter:uppercase'>
                    <Product products={product}/>
                </div>
            </SwiperSlide>
            )
        })}
        </>
    </Swiper>
  )
}

export default RelatedSlider

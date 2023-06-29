import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Pagination, Navigation} from 'swiper'
import Product from './Product';
import '../slider.css'



function ProductSlider({data}) {
  return (
    <Swiper modules={[Pagination, Navigation]} loop={false} navigation={true}
    breakpoints={{
        320: {
            slidesPerView: 1,
            spaceBetween:20
        },
        421: {
            slidesPerView: 2,
            spaceBetween:20
        },
        1024: {
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
    className='productSlider mx-auto lg:pl-0 md:pl-0 sm:pl-28 sl:pl-0 pl-0 lg:max-w-[1600px] md:max-w-[1480px] max-w-[1000px] md:pb-10 sm:pb-16 pb-10 justify-center'
    
    >
        <>
        {data?.map(product => {
            return (
            <SwiperSlide key={product.id}>
                <Product product={product}/>
            </SwiperSlide>
            )
        })}
        </>
    </Swiper>
  )
}

export default ProductSlider

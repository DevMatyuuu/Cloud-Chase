import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Pagination, Navigation, EffectCoverflow } from 'swiper';
import Product from './Product';
import '../slider.css';

function ProductSlider({ data }) {
  return (
    <Swiper
      modules={[Pagination, Navigation, EffectCoverflow]}
      loop={false}
      navigation={true}
      effect="coverflow"
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      breakpoints={{
        320: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        600: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
        800: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1440: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
        2559: {
          slidesPerView: 7,
          spaceBetween: 30,
        },
      }}
      pagination={{
        clickable: true,
      }}
      className="productSlider mx-auto lg:pl-0 md:pl-0 sm:pl-0 sl:pl-0 lg:max-w-[1600px] md:max-w-[1480px] md:w-[1480px] w-[550px] max-w-[480px] md:pb-10 sm:pb-16 pb-10 justify-center"
    >
      {data?.map((product) => (
        <SwiperSlide key={product.id}>
          <Product product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ProductSlider;

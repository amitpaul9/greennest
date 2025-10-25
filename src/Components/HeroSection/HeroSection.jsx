import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {Autoplay, Navigation, Pagination} from 'swiper/modules';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Link } from 'react-router';

const HeroSection = () => {

    return (
       <div className='p-8 space-y-2'>
        <h1 className='text-5xl font-blod text-center text-[#344e41]'>Trees Are Life</h1>
        <p className='text-center text-[#344e4180]'>Bring nature closer to your home. Explore our beautifull indoor and outdoor plants</p>
        <div className='text-center mb-3'><Link className='btn bg-[#344e41] text-white' to="/allplants">Explore All Trees</Link></div>
        <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        navigation
      pagination={{ clickable: true }}
      autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      spaceBetween={10}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
       breakpoints={{
    // when window width is >= 0px (mobile)
    0: {
      slidesPerView: 1,
    },
    // when window width is >= 640px (tablet)
    640: {
      slidesPerView: 2,
    },
    // when window width is >= 1024px (desktop)
    1024: {
      slidesPerView: 3,
    },
  }}
    >
      <SwiperSlide><div className='flex justify-center item w-full h-full'><img src="/assets/banner1.png" alt="" /></div></SwiperSlide>
      <SwiperSlide><div className='flex justify-center item w-full h-full'><img src="/assets/banner3.png" alt="" /></div></SwiperSlide>
      <SwiperSlide><div className='flex justify-center item w-full h-full'><img src="/assets/banner2.png" alt="" /></div></SwiperSlide>
      <SwiperSlide><div className='flex justify-center item w-full h-full'><img src="/assets/banner4.png" alt="" /></div></SwiperSlide>
      <SwiperSlide><div className='flex justify-center item w-full h-full'><img src="/assets/banner5.png" alt="" /></div></SwiperSlide>
      <SwiperSlide><div className='flex justify-center item w-full h-full'><img src="/assets/banner6.png" alt="" /></div></SwiperSlide>
      <SwiperSlide><div className='flex justify-center item w-full h-full'><img src="/assets/banner7.png" alt="" /></div></SwiperSlide>
      <SwiperSlide><div className='flex justify-center item w-full h-full'><img src="/assets/banner8.png" alt="" /></div></SwiperSlide>
      <SwiperSlide><div className='flex justify-center item w-full h-full'><img src="/assets/banner9.png" alt="" /></div></SwiperSlide>
      <SwiperSlide><div className='flex justify-center item w-full h-full'><img src="/assets/banner10.png" alt="" /></div></SwiperSlide>
      <SwiperSlide><div className='flex justify-center item w-full h-full'><img src="/assets/banner11.png" alt="" /></div></SwiperSlide>

    </Swiper>
       </div>
    );
};

export default HeroSection;
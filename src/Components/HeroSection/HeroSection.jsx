import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination} from 'swiper/modules';
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
        modules={[Navigation, Pagination]}
        navigation
      pagination={{ clickable: true }}
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
      <SwiperSlide><div className='flex justify-center item w-full h-[300px]'><img src="/assets/banner1.jpg" alt="" /></div></SwiperSlide>
      <SwiperSlide><div className='flex justify-center item w-full h-[300px]'><img src="/assets/banner2.jpg" alt="" /></div></SwiperSlide>
      <SwiperSlide><div className='flex justify-center item w-full h-[300px]'><img src="/assets/banner3.jpg" alt="" /></div></SwiperSlide>
      <SwiperSlide><div className='flex justify-center item w-full h-[300px]'><img src="/assets/banner4.jpg" alt="" /></div></SwiperSlide>
      <SwiperSlide><div className='flex justify-center item w-full h-[300px]'><img src="/assets/banner5.jpg" alt="" /></div></SwiperSlide>
      <SwiperSlide><div className='flex justify-center item w-full h-[300px]'><img src="/assets/banner6.jpg" alt="" /></div></SwiperSlide>
      <SwiperSlide><div className='flex justify-center item w-full h-[300px]'><img src="/assets/banner7.jpg" alt="" /></div></SwiperSlide>
      <SwiperSlide><div className='flex justify-center item w-full h-[300px]'><img src="/assets/banner8.jpg" alt="" /></div></SwiperSlide>
      <SwiperSlide><div className='flex justify-center item w-full h-[300px]'><img src="/assets/banner9.jpg" alt="" /></div></SwiperSlide>
      <SwiperSlide><div className='flex justify-center item w-full h-[300px]'><img src="/assets/banner10.jpg" alt="" /></div></SwiperSlide>
      <SwiperSlide><div className='flex justify-center item w-full h-[300px]'><img src="/assets/banner11.jpg" alt="" /></div></SwiperSlide>

    </Swiper>
       </div>
    );
};

export default HeroSection;
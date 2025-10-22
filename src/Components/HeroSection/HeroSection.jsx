import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination} from 'swiper/modules';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Link } from 'react-router';

const HeroSection = () => {

    return (
       <div className='p-10 space-y-2'>
        <h1 className='text-5xl font-blod text-center text-[#344e41]'>Trees Are Life</h1>
        <p className='text-center text-[#344e4180]'>Bring nature closer to your home. Explore our beautifull indoor and outdoor plants</p>
        <div className='text-center'><Link className='btn bg-[#344e41] text-white'>Explore All Trees</Link></div>
        <Swiper
        modules={[Navigation, Pagination]}
        navigation
      pagination={{ clickable: true }}
      spaceBetween={20}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><div className='flex justify-center item w-full h-[400px]'><img src="/public/assets/banner1.jpg" alt="" /></div></SwiperSlide>
      <SwiperSlide><div className='flex justify-center item w-full h-[400px]'><img src="/public/assets/banner2.jpg" alt="" /></div></SwiperSlide>
      <SwiperSlide><div className='flex justify-center item w-full h-[400px]'><img src="/public/assets/banner3.jpg" alt="" /></div></SwiperSlide>
      <SwiperSlide><div className='flex justify-center item w-full h-[400px]'><img src="/public/assets/banner4.jpg" alt="" /></div></SwiperSlide>
      <SwiperSlide><div className='flex justify-center item w-full h-[400px]'><img src="/public/assets/banner5.jpg" alt="" /></div></SwiperSlide>
      <SwiperSlide><div className='flex justify-center item w-full h-[400px]'><img src="/public/assets/banner6.jpg" alt="" /></div></SwiperSlide>
      <SwiperSlide><div className='flex justify-center item w-full h-[400px]'><img src="/public/assets/banner7.jpg" alt="" /></div></SwiperSlide>
      <SwiperSlide><div className='flex justify-center item w-full h-[400px]'><img src="/public/assets/banner8.jpg" alt="" /></div></SwiperSlide>
      <SwiperSlide><div className='flex justify-center item w-full h-[400px]'><img src="/public/assets/banner9.jpg" alt="" /></div></SwiperSlide>
      <SwiperSlide><div className='flex justify-center item w-full h-[400px]'><img src="/public/assets/banner10.jpg" alt="" /></div></SwiperSlide>
      <SwiperSlide><div className='flex justify-center item w-full h-[400px]'><img src="/public/assets/banner11.jpg" alt="" /></div></SwiperSlide>

    </Swiper>
       </div>
    );
};

export default HeroSection;
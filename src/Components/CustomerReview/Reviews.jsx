import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {Autoplay, Navigation, Pagination} from 'swiper/modules';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Link } from 'react-router';
import { FaRegStar, FaStar } from 'react-icons/fa6';
import { Star } from 'lucide-react';

const Reviews = () => {

    return (
       <div className='mt-8 px-30 space-y-2 mb-8'>
        <h1 className='text-3xl text-center text-[#344e41] font-bold'>Customer's Reviews</h1>
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
      <SwiperSlide><div className='flex justify-center item]'>
        <div className="flex ">
         
          <div className="px-5 shadow-sm w-100 py-3 bg-[#344e4130]">
            <div className='flex items-center gap-2'>
                 <div className="">
            <img
              className="rounded-full w-10 h-10"
              src="https://i.ibb.co.com/FLwVJ0B1/premium-photo-1688740375397-34605b6abe48.jpg"
              alt="customer image"/> 
          </div>
          <div><h1 className="text-[#344e41] font-semibold">Lia Gomez</h1></div>
            </div>
            
            <p className=''>
              I absolutely love the plants I bought from this shop! The Snake
              Plant and Money Plant arrived in perfect condition — fresh, green,
              and beautifully packed. It really brightened up my living room.
              The owner also gave me some great tips for plant care. Highly
              recommended!
            </p>
            <div className="rating flex gap-2 ">
               <div><Star /></div>
               <div><Star /></div>
               <div><Star /></div>
               <div><Star /></div>
               <div><Star /></div>
            </div>
          </div>
        </div></div></SwiperSlide>


    </Swiper>
       </div>
    );
};

export default Reviews;
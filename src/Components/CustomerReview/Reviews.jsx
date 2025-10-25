import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {Autoplay, Navigation, Pagination} from 'swiper/modules';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Link } from 'react-router';



const Reviews = () => {



    return (
       <div className='mt-8 px-5 lg:px-30 space-y-2 mb-8'>
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
         
          <div className="px-5 shadow-sm w-70 md:w-80 lg:w-100 py-3 bg-[#344e4130]">
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
            </p>
            <p>⭐⭐⭐⭐⭐</p>
            
          </div>
        </div></div></SwiperSlide>


        <SwiperSlide><div className='flex justify-center item]'>
        <div className="flex ">
         
          <div className="px-5 shadow-sm w-70 md:w-80 lg:w-100 py-3 bg-[#344e4130]">
            <div className='flex items-center gap-2'>
                 <div className="">
            <img
              className="rounded-full w-10 h-10"
              src="https://i.ibb.co.com/VWVLkP69/profile-picture-young-indian-woman-renter-headshot-portrait-confident-tenant-pose-modern-own-new-apa.webp"
              alt="customer image"/> 
          </div>
          <div><h1 className="text-[#344e41] font-semibold">Sarah Mitchell</h1></div>
            </div>
            
            <p className=''>
              Absolutely in love with my new indoor plant setup! The arrangement is so thoughtfully done—it brings life and calm to my living room. Highly recommend for anyone looking to elevate their space!
            </p>
            <p>⭐⭐⭐⭐⭐</p>
            
          </div>
        </div></div></SwiperSlide>


         <SwiperSlide><div className='flex justify-center item]'>
        <div className="flex ">
         
          <div className="px-5 shadow-sm w-70 md:w-80 lg:w-100 py-3 bg-[#344e4130]">
            <div className='flex items-center gap-2'>
                 <div className="">
            <img
              className="rounded-full w-10 h-10"
              src="https://i.ibb.co.com/r983MTG/professional-profile-pictures-1276-x-1762-075347emr82ph3hj.jpg"
              alt="customer image"/> 
          </div>
          <div><h1 className="text-[#344e41] font-semibold">Jason Carter</h1></div>
            </div>
            
            <p className=''>
              I ordered a custom plant decor set for my office desk, and it’s perfect. The minimalist pots and healthy greenery make my workspace feel fresh and inspiring. Great service and fast delivery too!
            </p>
            <p>⭐⭐⭐⭐⭐</p>
            
          </div>
        </div></div></SwiperSlide>



        <SwiperSlide><div className='flex justify-center item]'>
        <div className="flex ">
         
          <div className="px-5 shadow-sm w-70 md:w-80 lg:w-100 py-3 bg-[#344e4130]">
            <div className='flex items-center gap-2'>
                 <div className="">
            <img
              className="rounded-full w-10 h-10"
              src="https://i.ibb.co.com/sftRFHx/images-2.jpg"
              alt="customer image"/> 
          </div>
          <div><h1 className="text-[#344e41] font-semibold">Emily Brooks</h1></div>
            </div>
            
            <p className=''>
              The attention to detail is amazing. From the ceramic planters to the plant care tips included, everything felt premium. My guests always compliment the setup!
            </p>
            <p>⭐⭐⭐⭐⭐</p>
            
          </div>
        </div></div></SwiperSlide>




 <SwiperSlide><div className='flex justify-center item]'>
        <div className="flex ">
         
          <div className="px-5 shadow-sm w-70 md:w-80 lg:w-100 py-3 bg-[#344e4130]">
            <div className='flex items-center gap-2'>
                 <div className="">
            <img
              className="rounded-full w-10 h-10"
              src="https://i.ibb.co.com/dsPBRMwr/professional-profile-pictures-1080-x-1080-460wjhrkbwdcp1ig.jpg"
              alt="customer image"/> 
          </div>
          <div><h1 className="text-[#344e41] font-semibold">Daniel Hayes</h1></div>
            </div>
            
            <p className=''>
              I’ve tried a few plant decor services before, but this one stands out. The plants are thriving, and the aesthetic is exactly what I wanted—modern, clean, and calming.
            </p>
            <p>⭐⭐⭐⭐⭐</p>
            
          </div>
        </div></div></SwiperSlide>


 <SwiperSlide><div className='flex justify-center item]'>
        <div className="flex ">
         
          <div className="px-5 shadow-sm w-70 md:w-80 lg:w-100 py-3 bg-[#344e4130]">
            <div className='flex items-center gap-2'>
                 <div className="">
            <img
              className="rounded-full w-10 h-10"
              src="https://i.ibb.co.com/xqMrZQHV/women-profile-pictures-2400-x-1600-n2or9xbo3q54wblo.jpg"
              alt="customer image"/> 
          </div>
          <div><h1 className="text-[#344e41] font-semibold">Olivia Bennett</h1></div>
            </div>
            
            <p className=''>
              As someone with zero plant knowledge, I was nervous. But the team made it so easy! They helped me pick low-maintenance plants and even followed up with care tips.
            </p>
            <p>⭐⭐⭐⭐⭐</p>
            
          </div>
        </div></div></SwiperSlide>




    </Swiper>
       </div>
    );
};

export default Reviews;
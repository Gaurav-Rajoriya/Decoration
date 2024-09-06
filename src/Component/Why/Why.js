import React from 'react'
import './Why.css'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules


const Why = () => {

  return (
    <div className='why-section max-w-[1900px] h-[30vh] bg-[#E7008A] py-5 px-2 md:py-10 px-5 h-[40vh] '>
        <div className='why w-full h-full flex flex-col items-center justify-center md:flex-row '>
            <div className='why-left w-full h-full md:w-[30%] '>
                <h1 className='text-[30px] font-semibold text-white  flex items-center justify-center md:text-7xl '>
                    Why Book  With Us?
                </h1>
            </div>
            <div className='why-right w-full h-full  md:px-4 md:w-[70%]'>
                 <Swiper
                 slidesPerView={'auto'}
                 centeredSlides={true}
                
                 breakpoints={{
                  340: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                }}
                 className=" md:w-full"
               >
                 <SwiperSlide className='swipeback'>
                 <div className='sec1 '>
                     <h2>SAFETY COMES FIRST</h2>
                     <p>We are fully licensed and insured because we all know safety comes first.</p>
                </div>
                 </SwiperSlide>
                 <SwiperSlide className='swipeback'>
                 <div className='sec1 '>
                     <h2>SAFETY COMES FIRST</h2>
                     <p>We are fully licensed and insured because we all know safety comes first.</p>
                </div>
                 </SwiperSlide>
                 <SwiperSlide className='swipeback'>
                 <div className='sec1 '>
                     <h2>SAFETY COMES FIRST</h2>
                     <p>We are fully licensed and insured because we all know safety comes first.</p>
                </div>
                 </SwiperSlide>
                
               </Swiper>
            </div>
        </div>
    </div>
  )
}

export default Why
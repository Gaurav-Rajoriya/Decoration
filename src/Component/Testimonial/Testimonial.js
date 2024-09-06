import React, { useState,useEffect } from 'react'
import './Testimonial.css'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';



const Testimonial = () => {
    const [slidesPerView, setSlidesPerView] = useState('2');
    const handleResize = () => {
        const windowWidth = window.innerWidth;
    
        // Adjust slidesPerView based on window width
        if (windowWidth < 400) {
          setSlidesPerView(1);
        } else if (windowWidth >= 400 && windowWidth < 768) {
          setSlidesPerView(2);
        } else {
          setSlidesPerView(2);
        }
      };
   
    
  return (
    <div className='testimonial-container'  data-aos="fade-up"
    data-aos-duration="1000">
        <h2>What Our Client Says <hr/></h2>
        <div className='testimonial'>
        <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            340: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
          }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='client'>
               
                <div className='client-text'>
                    <p>
                    Madathil Trading 4 Construction truly impressed me, bringing my vision to life with exceptional service. Highly recommended for their professionalism and top-notch craftsmanship!</p>
                    <h2>Shakti Builders</h2>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='client'>
               
                <div className='client-text'>
                    <p>
                    Exceptional service! Madathil Trading 4 Construction delivered beyond my expectations, transforming my dream home into a reality with professionalism and expertise.</p>
                    <h2>Anuj Sharma</h2>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='client'>
               
                <div className='client-text'>
                    <p>
                    Madathil Trading 4 Construction surpassed all expectations with their exceptional service, turning my dream project into a stunning reality. Highly recommend!</p>
                    <h2>Shyam Builders</h2>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='client'>
               
                <div className='client-text'>
                    <p>
                    Madathil Trading 4 Construction exceeded expectations, delivering outstanding service and turning my dream into reality. Highly recommended for top-notch professionalism!</p>
                    <h2>Anish Varma</h2>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='client'>
               
                <div className='client-text'>
                    <p>
                    Madathil Trading 4 Construction went above and beyond, turning my vision into reality with exceptional service. Highly recommended for their professionalism!</p>
                    <h2>Ram Kishan Builders</h2>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='client'>
                <div className='client-text'>
                    <p>
                    Madathil Trading 4 Construction exceeded expectations, bringing my vision to life with exceptional service. Highly recommend for their professionalism and quality workmanship!</p>
                    <h2>Himanshu Saksena</h2>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
        </div>
    </div>
  )
}

export default Testimonial
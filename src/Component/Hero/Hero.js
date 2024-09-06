import React from "react";
import "./Hero.css";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src='https://img.freepik.com/free-vector/happy-valentine-day-congratulation-with-red-pink-3d-heart-shapes_206725-239.jpg?t=st=1724497251~exp=1724500851~hmac=ad80f4d2df6cd919896e07be5bfb58c6149ab58e7d58eaeaea400df28775d5c1&w=900' alt="img" />
          </SwiperSlide>
          <SwiperSlide>
          <img src='https://img.freepik.com/free-photo/young-woman-having-fun-party_23-2148946079.jpg?t=st=1724497394~exp=1724500994~hmac=62988c1b3992e11fc9932c316c711d5bfb411749b6bf249c4b188ca02ab0e817&w=900' alt="img" />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://images.ctfassets.net/6m9bd13t776q/6JKjEQDezl4NhEPHamwg8C/f44cd9528935562c3b8e9a5f2c78ff35/wild-one-first-birthday-party-sunseeking_in_style.png?fm=webp&q=75' alt='img' />
          </SwiperSlide>
          <SwiperSlide>
            <img src='https://www.shutterstock.com/image-photo/decor-birthday-600nw-1665402841.jpg' alt="img" />
          </SwiperSlide>
        </Swiper>

        <div className="wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 10 1240 170">
          <path
            fill="#e7008a"
            fill-opacity="1"
            d="M0,32L40,64C80,96,160,160,240,170.7C320,181,400,139,480,101.3C560,64,640,32,720,37.3C800,43,880,85,960,106.7C1040,128,1120,128,1200,117.3C1280,107,1360,85,1400,74.7L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          >
          </path>
          <h1>
            Birthday Wishes
          </h1>
         
        </svg>
      </div>
      </div>
    </section>
  );
};

export default Hero;

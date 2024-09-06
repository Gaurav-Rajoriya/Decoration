import React from 'react'
import './About.css'

const About = () => {
  return (
    <section className='about-section'>
          <div className='heading '>
              <h1>Make Your Event Memorable With Us </h1>
              <p>Transform your special moments into unforgettable memories with our exceptional service. Let's craft a celebration that's uniquely yours, cherished for a lifetime.</p>
          </div>
        <div className='about w-full flex flex-col items-center justify-center md:flex-row gap-5 '>
            <div className='about-left '>
              <div className='pol'>
                  <h1>#RJ DECORATION</h1>
              </div>
              <div className='about-content w-full flex flex-col gap-7  '>
              <h1 className='color-[#76CCBD]'>Make Your Moment ...</h1>
              <p>Transform your special moments into unforgettable memories with our exceptional service. Let's craft a celebration that's uniquely yours, cherished for a lifetime.
              Transform your special moments into unforgettable memories with our exceptional service. Let's craft a celebration that's uniquely yours, cherished for a lifetime.
              Transform your special moments into unforgettable memories with our exceptional service. Let's craft a celebration that's uniquely yours, cherished for a lifetime.
              Transform your special moments into unforgettable memories with our exceptional service. Let's craft a celebration that's uniquely yours, cherished for a lifetime.
              Transform your special moments into unforgettable memories with our exceptional service. Let's craft a celebration that's uniquely yours, cherished for a lifetime.
              </p>
              </div>
            </div>

            <div className='about-right '>
              <div className='about-img'>
                 <img src='https://static.showit.co/800/zonX_xmeQ9Oi_Zmx8jNQPw/209024/7e243388-ae6a-4541-9365-a8bc31c555a6_1_105_c.jpg' alt='about' />
              </div>
              <div className='pol pol2'>
                  <h1>SPECIAL EVENTS</h1>
              </div>
              <div className='pol pol3'>
                  <h1>HOME CELEBRATION</h1>
              </div>
            </div>
        </div>
        <div className='btn'>
          <a href="tel:+91 9910021530">Request For Booking <i class="ri-arrow-right-line"></i> </a>
        </div>
    </section>
  )
}

export default About
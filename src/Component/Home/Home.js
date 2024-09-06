import React from 'react'
import Hero from '../Hero/Hero'
import About from '../About/About'
import Why from '../Why/Why'
import Product from '../Products/Product'
import Testimonial from '../Testimonial/Testimonial'

const Home = () => {
  return (
    <>
        <Hero/>
        <Why/>
        <About/>
        <Product/>
        <Testimonial/>
    </>
  )
}

export default Home
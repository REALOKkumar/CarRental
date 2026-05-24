import React from 'react'
import Hero from '../components/Hero'
import FeaturedSection from '../components/FeaturedSection'
import Banner from '../components/Banner'
import Testimonial from '../components/Testimonial'

const home = () => {
  return (
    <>
      <Hero/>
      <FeaturedSection /> 
      <Banner/>
      <Testimonial/>
    </>
  )
}

export default home

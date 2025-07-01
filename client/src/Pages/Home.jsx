import React from 'react'
import Hero from '../Components/Hero'
import FeaturedSection from '../Components/FeaturedSection'
import Banner from '../Components/Banner'
import Testimonial from '../Components/Testimonial'
import NewsLetter from '../Components/NewsLetter'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
      <Hero/>
      <FeaturedSection/>
      <Banner />
      <Testimonial />
      <NewsLetter/>
      <Footer />
    </div>
  )
}

export default Home

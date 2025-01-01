import React from 'react'
import AboutUs from '../components/AboutUs'
import FeaturesCompany from '../components/FeaturesCompany'
import Team from '../components/Team'
import Stats from '../components/Stats'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'
import ContactFull from '../components/ContactFull'

const page = () => {
  return (
    <div className='h-fit'>
      <div className='h-screen pt-32'>
        About
      </div>

      <AboutUs/>
      <FeaturesCompany/>
      <Team/>
      <Stats/>
      <Testimonials/>
      <CTA/>
      <ContactFull/>
    </div>
  )
}

export default page

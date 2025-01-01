import React from 'react'
import Projects from '../components/Projects'
import Testimonials from '../components/Testimonials'
import Gallery from '../components/Gallery'
import CTA from '../components/CTA'

const page = () => {
  return (
    <div className='h-fit'>
      <div className='h-screen pt-32'>
        Portfolio
      </div>

      <Projects/>
      <Testimonials/>
      <Gallery/>
      <CTA/>
    </div>
  )
}

export default page

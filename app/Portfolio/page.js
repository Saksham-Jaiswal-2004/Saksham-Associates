import React from 'react'
import Projects from '../components/Projects'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'
import ContactFull from '../components/ContactFull'
import Process from '../components/Process'
import Future from '../components/Future'

const page = () => {
  return (
    <div className='h-fit'>
      <div className='h-screen flex justify-start items-end bg2'>
        <div className='absolute h-full md:w-[55%] w-[100%] bg-[#0000009e] z-[1]'></div>
        <h1 className='md:text-6xl text-4xl mx-6 md:my-28 my-12 z-[2] bg-clip-text text-transparent'>Spaces That Speak Your Style</h1>
      </div>

      <div className='h-[50vh] flex flex-wrap'>
        <div className='md:w-1/2 w-full'>
          <img src="" alt="projects image" />
        </div>

        <div className='md:w-1/2 w-full flex flex-col justify-center'>
          <h1 className='text-4xl my-4'>Designs Tailored to Perfection</h1>
          <p className='text-lg w-[90%]'>Every project we design reflects a unique story. We blend elegance, practicality, and innovation to create interiors that leave a lasting impression.</p>
          <div className='text-lg my-4 mx-4'>
            <p className='my-1'>• Expertise across Residential, Commercial, and Luxury spaces.</p>
            <p className='my-1'>• Focus on both modern and timeless designs.</p>
            <p className='my-1'>• Over 100+ completed projects</p>
          </div>
        </div>
      </div>

      <Projects/>
      <Process/>
      <Future/>
      <Testimonials/>
      <CTA/>
      <ContactFull/>
    </div>
  )
}

export default page

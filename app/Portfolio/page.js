import React from 'react'
import Projects from '../components/Projects'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'
import ContactFull from '../components/ContactFull'
import Process from '../components/Process'
import Future from '../components/Future'
import Link from 'next/link'
import Seo from '../components/SEO';

const page = () => {
  return (
    <>
      <Seo
        title="Portfolio | Saksham Associates - Interior Design Projects"
        description="Explore our portfolio of residential, commercial, hospitality, and retail interior design projects in Kolkata. See how Saksham Associates transforms spaces."
        url="https://sakshamassociates.in/Portfolio"
        image="/images/SALOGO.svg"
        keywords="portfolio, interior design projects, Kolkata, Saksham Associates, residential, commercial, hospitality, retail"
      />
      <div className='h-fit'>
        <div className='h-screen flex justify-start items-end bg2'>
          <div className='absolute h-full md:w-[55%] w-[100%] bg-[#0000009e]'></div>
          <h1 className='md:text-6xl text-4xl mx-6 my-28 z-[2] head3'>Spaces That Speak Your Style</h1>
        </div>

        <div className='h-fit flex flex-wrap'>
          <div className='md:w-1/2 w-full'>
            <img src="https://miro.medium.com/v2/resize:fit:1024/1*atLWcBROZkzkfn8QYhw2ow.png" alt="projects image" />
          </div>

          <div className='md:w-1/2 w-full flex flex-col justify-center px-6'>
            <h1 className='text-4xl my-4 head'>Designs Tailored to Perfection</h1>
            <p className='text-lg w-[90%]'>Every project we design reflects a unique story. We blend elegance, practicality, and innovation to create interiors that leave a lasting impression.</p>
            <div className='text-lg my-4 mx-4'>
              <p className='my-1'>• Expertise across Residential, Commercial, and Luxury spaces.</p>
              <p className='my-1'>• Focus on both modern and timeless designs.</p>
              <p className='my-1'>• Over 100+ completed projects</p>
            </div>

            <div className="my-6 mx-6 w-full flex flex-wrap justify-start items-start gap-4">
              <Link  href="#cta" className="button2 px-3 py-2 rounded-xl text-base">Get Quote</Link>
              <Link href="/Portfolio#hiw" className="button3 px-3 py-2 rounded-xl text-base">How We Do It</Link>
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
    </>
  )
}

export default page

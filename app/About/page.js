import React from 'react'
import AboutUs from '../components/AboutUs'
import FeaturesCompany from '../components/FeaturesCompany'
import Team from '../components/Team'
import Stats from '../components/Stats'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'
import ContactFull from '../components/ContactFull'
import Link from 'next/link'
import Seo from '../components/SEO';

const page = () => {
  return (
    <>
      <Seo
        title="About Saksham Associates | Kolkata's Leading Interior Designers"
        description="Discover the story, vision, and team behind Saksham Associates. Learn how we craft timeless, innovative interiors for homes and businesses in Kolkata."
        url="https://sakshamassociates.in/About"
        image="/images/SALOGO.svg"
        keywords="about Saksham Associates, interior design team, Kolkata, company story, founders"
      />
      <div className='h-fit'>
        <div className='h-screen flex justify-start items-end bg2'>
          <div className='absolute h-full md:w-[60%] w-[100%] bg-[#0000009e] z-[1]'></div>
          <h1 className='md:text-6xl text-4xl mx-6 my-28 z-[2] head3'>Where Design Meets Inspiration</h1>
        </div>

        <div className='h-fit flex flex-wrap justify-center items-center'>
          <div className='md:w-1/2 w-full h-full p-8 flex flex-col justify-center items-start darkTxt'>
            <h1 className="text-4xl my-6 head">The Visionaries Behind Your Perfect Space</h1>
            <p className="text-lg">At Saksham Associates, we believe that every space tells a story. Our cutting-edge technology seamlessly blends design, functionality, and personalization to help you envision and organize your spaces like never before.</p>
            
            <div className="my-6 w-full flex flex-wrap justify-start items-start gap-4">
              <Link href="/" className="button2 px-3 py-2 rounded-xl text-base">Start Your Journey</Link>
              <Link href="/" className="button3 px-3 py-2 rounded-xl text-base">See Our Projects</Link>
            </div>
          </div>

          <div className='md:w-1/2 w-full flex justify-center items-center'>
            <img src="https://i.pinimg.com/736x/74/99/9e/74999e6a2dfefa2a882f2e2289a0fa99.jpg" alt="About Image" className='object-cover bg-center brightness-90'/>
          </div>
        </div>

        <AboutUs/>
        <FeaturesCompany/>
        <Team/>
        <Stats/>
        <Testimonials/>
        <CTA/>
        <ContactFull/>
      </div>
    </>
  )
}

export default page

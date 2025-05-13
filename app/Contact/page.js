"use client"
import React, { useState } from 'react';
import Features from '../components/Features';
import ContactFull from '../components/ContactFull';
import Seo from '../components/SEO';

const page = () => {

  return (
    <>
      <Seo
        title="Contact Saksham Associates | Book Your Consultation"
        description="Get in touch with Saksham Associates for personalized interior design solutions in Kolkata. Book a consultation or request a free quote today."
        url="https://sakshamassociates.in/Contact"
        image="/images/SALOGO.svg"
        keywords="contact, Saksham Associates, interior design consultation, Kolkata, book appointment"
      />
      <div className='h-fit' id='contact'>
        {/* Title */}
        <div className='h-screen flex justify-start items-end bg2'>
          <div className='absolute h-full md:w-[55%] w-[100%] bg-[#0000009e] z-[1]'></div>
          <h1 className='md:text-6xl text-4xl mx-6 my-28 z-[2] head3'>We’d Love to Hear From You!</h1>
        </div>

        <ContactFull/>
        <Features/>
      </div>
    </>
  )
}

export default page

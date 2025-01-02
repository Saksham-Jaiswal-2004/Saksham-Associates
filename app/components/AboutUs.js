import React from 'react'
import Link from 'next/link'

const AboutUs = () => {
  return (
    <div className='h-fit md:my-20 my-12 flex flex-col justify-center items-center'>
      <div className='w-full flex justify-start'>
        <h1 className='md:text-6xl text-4xl my-14 head'>About Our Company</h1>
      </div>

      <div className='flex flex-wrap h-fit justify-center items-center'>
        <div className='md:w-1/2 w-full'>
          <img src="" alt="About Company" />
        </div>

        <div className='md:w-1/2 w-full p-8'>
          <h1 className="md:text-4xl text-3xl my-6 head">Crafting Timeless Interiors Since 2013</h1>
          <p className="md:text-lg text-base my-3">The story of Saksham Associates began in 2013 with a simple idea: to reimagine spaces and bring design dreams to life. What started as a small venture fueled by passion and creativity has evolved into a distinguished design brand recognized for transforming spaces into works of art.</p>
          <p className="md:text-lg text-base my-3">Over the years, we’ve worked with countless clients to create personalized, functional, and beautiful interiors. From our very first project—our own bedroom—to larger and more ambitious designs, we’ve consistently pushed boundaries and set benchmarks in the world of interior design.</p>
          <p className="md:text-lg text-base my-3">Our philosophy has always been to embrace innovation while staying true to timeless principles of design. With every project, we continue to draw inspiration from our roots, honoring the trust and vision of our clients to create spaces that truly resonate with their unique lifestyles.</p>
          <p className="md:text-lg text-base my-3">Today, Saksham Associates is proud to look back at a legacy built on creativity, craftsmanship, and a relentless pursuit of excellence.</p>
          <p className="md:text-lg text-base my-3">From our humble beginnings to your dream interiors, our journey is all about creating lasting impressions.</p>

          <div className="my-6 w-full flex flex-wrap justify-start items-start gap-4">
            <Link href="/" className="button2 px-3 py-2 rounded-xl text-base">Reach Out</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs

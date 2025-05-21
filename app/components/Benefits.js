import React from 'react'
import Link from 'next/link'

const Benefits = () => {
  return (
    <div className='bg6 h-fit md:my-32 my-24 flex flex-col justify-center items-center' id='benefits'>
      <div className='w-full flex justify-start flex-col gap-4 my-10'>
        <h1 className='md:text-6xl text-4xl head'>The Perks of Perfect Interior Design <br /> by Saksham Associates</h1>
        <h1 className='md:text-2xl text-lg head'>Discover Why We’re Among the Top Interior Designers in Kolkata</h1>
      </div>

      <div className='flex flex-wrap h-fit justify-center items-center py-2'>
        <div className='md:w-[60%] w-[100%] flex md:flex-col flex-wrap items-center justify-center gap-2'>
          <div className='my-3 md:w-[85%] w-[46%]'>
            <h1 className='md:text-2xl text-base'>1.Enhanced Aesthetics & Elegant Interiors</h1>
            <p className='text-sm md:w-[80%]'>Transform your space into a visual masterpiece with our modern interior design in Kolkata. From sophisticated layouts to carefully curated decor, we ensure every detail adds beauty, harmony, and timeless style to your home or office interiors.</p>
          </div>

          <div className='my-3 md:w-[85%] w-[46%]'>
            <h1 className='md:text-2xl text-base'>2.Maximized Functionality with Smart Space Planning</h1>
            <p className='text-sm md:w-[80%]'>We specialize in space-saving interior solutions that are both functional and stunning. Every design element is purposeful—blending practicality with aesthetic appeal for efficient home or office interior designs that work for your lifestyle.</p>
          </div>

          <div className='my-3 md:w-[85%] w-[46%]'>
            <h1 className='md:text-2xl text-base'>3.Eco-Friendly & Sustainable Interior Design</h1>
            <p className='text-sm md:w-[80%]'>Our sustainable interior design services in Kolkata prioritize the use of eco-friendly materials and energy-efficient solutions. Build a greener future while enjoying interiors that are beautiful, responsible, and future-ready.</p>
          </div>

          <div className='my-3 md:w-[85%] w-[46%]'>
            <h1 className='md:text-2xl text-base'>4.Increased Property Value Through Smart Design</h1>
            <p className='text-sm md:w-[80%]'>Thoughtful, well-executed interior renovations significantly boost your property&apos;s appeal and market value. Whether you&apos;re remodeling a home in Salt Lake or designing a new office in New Town Kolkata, our work delivers long-term return on investment.</p>
          </div>

          <div className='my-3 md:w-[85%] w-[46%]'>
            <h1 className='md:text-2xl text-base'>5.Interiors That Improve Your Well-Being</h1>
            <p className='text-sm md:w-[80%]'>We design spaces that enhance comfort, productivity, and peace of mind. Our interiors foster mental and physical well-being through harmonious layouts, natural light optimization, and user-centric functionality.</p>
          </div>

          <div className='w-full flex justify-end'>
            <Link 
            href="#contact" 
            className='my-5 mx-3 button3 px-3 md:py-2 py-1 rounded-xl md:text-xl text-base'
            aria-label="Get a free quote for your interior design project">
              Get a Free Interior Design Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Benefits

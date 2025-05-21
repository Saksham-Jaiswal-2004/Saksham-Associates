import React from 'react'
import Link from 'next/link'

const Features = () => {
  return (
    <div className='h-fit md:my-32 my-24 flex flex-col justify-center items-center' id='features'>
      <div className='w-full flex justify-start flex-col my-14 gap-4'>
        <h1 className='md:text-6xl text-4xl head'>Transforming Spaces, Elevating Lives</h1>
        <h1 className='md:text-2xl text-lg head'>By Saksham Associates – Top Interior Designers in Kolkata</h1>
      </div>

      <div className='flex flex-wrap justify-center items-center'>
        <div className='flex card1 flex-col lg:w-[19%] md:w-[25%] sm:w-[46%] w-[98%]  md:min-h-[350px] min-h-[205px] h-fit p-4 rounded-lg mx-1 sm:my-3 my-1 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl'>
          <h1 className='md:text-2xl text-base font-bold my-1'>Personalized Interior Designs in Kolkata</h1>
          <p className='text-base my-1'>At Saksham Associates, we design interiors that reflect your personality and purpose. Each element is carefully tailored to match your lifestyle and preferences. Whether it’s a home in Salt Lake or an office in New Town, we deliver bespoke solutions just for you.</p>
        </div>
  
        <div className='flex card1 flex-col lg:w-[19%] md:w-[25%] sm:w-[46%] w-[98%] md:min-h-[350px] min-h-[205px] h-fit p-4 rounded-lg mx-1 sm:my-3 my-1 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl'>
          <h1 className='md:text-2xl text-base font-bold my-1'>Innovative and Creative Interior Design Concepts</h1>
          <p className='text-base my-1'>From bold, modern statements to subtle and elegant interiors, we bring a fresh perspective to every project. Our designers fuse contemporary, minimalist, and fusion-style interior designs to craft spaces that are truly one-of-a-kind.</p>
        </div>
  
        <div className='flex card1 flex-col lg:w-[19%] md:w-[25%] sm:w-[46%] w-[98%] md:min-h-[350px] min-h-[205px] h-fit p-4 rounded-lg mx-1 sm:my-3 my-1 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl'>
          <h1 className='md:text-2xl text-base font-bold my-1'>Sustainable Interior Design with Style</h1>
          <p className='text-base my-1'>Experience the perfect blend of eco-friendly materials and stylish elegance. We are committed to sustainable interior design in Kolkata, ensuring your space is not only stunning but also responsible and future-ready.</p>
        </div>
  
        <div className='flex card1 flex-col lg:w-[19%] md:w-[25%] sm:w-[46%] w-[98%] md:min-h-[350px] min-h-[205px] h-fit p-4 rounded-lg mx-1 sm:my-3 my-1 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl'>
          <h1 className='md:text-2xl text-base font-bold my-1'>Hassle-Free Turnkey Interior Solutions</h1>
          <p className='text-base my-1'>Relax while we manage everything — from concept development to final installation. With our interior design project management approach, we ensure timely delivery, budget-friendly execution, and meticulous attention to detail.</p>
        </div>
  
        <div className='flex card1 flex-col lg:w-[19%] md:w-[25%] sm:w-[50%] w-[98%] md:min-h-[350px] min-h-[205px] h-fit p-4 rounded-lg mx-1 sm:my-3 my-1 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl'>
          <h1 className='md:text-2xl text-base font-bold my-1'>Smart, Space-Saving Interior Solutions</h1>
          <p className='text-base'>Make the most of your space with intelligent and functional interior layouts. We specialize in space optimization interiors, offering practical designs that maximize utility without compromising on visual appeal — ideal for small apartments, rental homes, and modern workplaces.</p>
        </div>
      </div>

        <Link 
        href="/#contact" 
        className="my-4 button2 px-3 md:py-2 py-1 rounded-xl md:text-base text-sm" 
        aria-label="Get your personalized interior design estimate">
          Get Your Free Interior Design Estimate
        </Link>
    </div>
  )
}

export default Features

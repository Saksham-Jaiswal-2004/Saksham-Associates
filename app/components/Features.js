import React from 'react'
import Link from 'next/link'

const Features = () => {
  return (
    <div className='h-fit md:my-32 my-24 flex flex-col justify-center items-center'>
      <div className='w-full flex justify-start'>
        <h1 className='md:text-6xl text-4xl my-14 head'>Transforming Spaces, Elevating Lives</h1>
      </div>

      <div className='flex flex-wrap justify-center items-center'>
        <div className='flex card1 flex-col lg:w-[19%] md:w-[25%] w-[46%] h-[250px] p-4 rounded-lg mx-1 my-3 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl'>
          <h1 className='md:text-2xl text-base font-bold my-1'>Personalized Designs</h1>
          <p className='md:text-lg text-sm my-1'>We create interiors that reflect you. Every detail is thoughtfully tailored to match your lifestyle, preferences, and aspirations.</p>
        </div>
  
        <div className='flex card1 flex-col lg:w-[19%] md:w-[25%] w-[46%] h-[250px] p-4 rounded-lg mx-1 my-3 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl'>
          <h1 className='md:text-2xl text-base font-bold my-1'>Innovative Creativity</h1>
          <p className='md:text-lg text-sm my-1'>From bold concepts to subtle sophistication, we bring fresh, imaginative ideas that make your space truly one-of-a-kind.</p>
        </div>
  
        <div className='flex card1 flex-col lg:w-[19%] md:w-[25%] w-[46%] h-[250px] p-4 rounded-lg mx-1 my-3 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl'>
          <h1 className='md:text-2xl text-base font-bold my-1'>Sustainable Elegance</h1>
          <p className='md:text-lg text-sm my-1'>We combine style with sustainability by using eco-friendly materials and practices, designing spaces that are both stunning and responsible.</p>
        </div>
  
        <div className='flex card1 flex-col lg:w-[19%] md:w-[25%] w-[46%] h-[250px] p-4 rounded-lg mx-1 my-3 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl'>
          <h1 className='md:text-2xl text-base font-bold my-1'>Seamless Execution</h1>
          <p className='md:text-lg text-sm my-1'>Sit back and relax as we handle everything from concept to completion with precision, efficiency, and attention to detail.</p>
        </div>
  
        <div className='flex card1 flex-col lg:w-[19%] md:w-[25%] w-[50%] h-[250px] p-4 rounded-lg mx-1 my-3 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl'>
          <h1 className='md:text-[1.4rem]-text-basext-lg font-bold my-1'>Smart Space Solutions</h1>
          <p className='md:text-lg text-base sm'>Maximize functionality without compromising aesthetics. We design spaces that are practical, elegant, and timeless.</p>
        </div>
      </div>

      <div className='my-4 button2 px-3 py-2 rounded-xl text-xl'>
        <Link href="#contact">Get Estimate</Link>
      </div>
    </div>
  )
}

export default Features

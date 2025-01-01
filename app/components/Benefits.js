import React from 'react'
import Image from 'next/image';
import Link from 'next/link'

const Benefits = () => {
  return (
    <div className='bg2 h-fit md:my-32 my-24 flex flex-col justify-center items-center'>
      <div className='w-full flex justify-start'>
        <h1 className='text-6xl my-10 head'>The Perks of Perfect Design</h1>
      </div>

      <div className='flex flex-wrap h-fit justify-center items-center gap-6 py-2'>
        <div className='md:w-[49%] w-[90%] h-100%'>
          {/* <Image src="" alt="" width={800} height={800}/> */}
        </div>

        <div className='md:w-[49%] w-[90%]'>
          <div className='my-3'>
            <h1 className='md:text-2xl text-lg'>Enhanced Aesthetics</h1>
            <p className='text-base md:w-[80%]'>Transform your space into a visual masterpiece with designs that blend style and sophistication. We believe that beauty should be in every detail, from the smallest decor to the largest layout.</p>
          </div>

          <div className='my-3'>
            <h1 className='md:text-2xl text-lg'>Maximized Functionality</h1>
            <p className='text-base md:w-[80%]'>We design with purpose. Every element serves a function while enhancing the overall look, creating spaces that are both practical and beautiful.</p>
          </div>

          <div className='my-3'>
            <h1 className='md:text-2xl text-lg'>Sustainable Choices</h1>
            <p className='text-base md:w-[80%]'>Our eco-conscious approach ensures your space is not only stylish but also kind to the planet. By using sustainable materials, we create interiors that support a greener future.</p>
          </div>

          <div className='my-3'>
            <h1 className='md:text-2xl text-lg'>Increased Property Value</h1>
            <p className='text-base md:w-[80%]'>Smart design elevates your space and increases its value. Whether you're renovating or building from scratch, our designs offer long-term financial benefits and appeal to future buyers.</p>
          </div>

          <div className='my-3'>
            <h1 className='md:text-2xl text-lg'>Improved Well-Being</h1>
            <p className='text-base md:w-[80%]'>A thoughtfully designed space can positively impact your mood, productivity, and comfort. We create environments that nurture your mental and physical well-being by harmonizing design and functionality.</p>
          </div>

          <div className='w-full flex justify-end'>
            <Link href="/" className='my-5 mx-3 button3 px-3 py-2 rounded-xl text-xl'>Get Free Quote</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Benefits

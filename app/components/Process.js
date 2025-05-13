import React from 'react'
import Image from 'next/image'

const Process = () => {
  return (
    <div className='h-fit md:my-32 my-24 flex flex-col items-center' id='hiw'>
      <div className='w-full flex flex-col justify-start md:my-10 my-4'>
        <h1 className='md:text-5xl text-4xl head my-4'>How We Bring Your Vision to Life</h1>
        <p className='md:text-lg text-base'>Our design process ensures your ideas are seamlessly translated into reality</p>
      </div>


      <div className='w-full flex flex-wrap gap-2 justify-center items-center md:my-10 my-2'>
        
        <div className='h-[330px] md:w-[23%] w-[48%] p-3'>
          <Image
            src="/images/hiw1.svg"
            alt="Consultation Step"
            aria-label="Consultation Step"
            width={400}
            height={200}
            className='w-full h-[200px] my-4 hover:scale-110 transition-all'
          />
          <h1 className='md:text-2xl text-xl head my-1'>1. Consulttion</h1>
          <p className='md:text-base text-sm'>We understand your needs, style, and budget.</p>
        </div>

        <div className='h-[330px] md:w-[23%] w-[48%] p-3'>
          <Image
            src="/images/hiw2.svg"
            alt="Design Concept Step"
            aria-label="Design Concept Step"
            width={400}
            height={200}
            className='w-full h-[200px] my-4 hover:scale-110 transition-all'
          />
          <h1 className='md:text-2xl text-xl head my-1'>2. Design Concept</h1>
          <p className='md:text-base text-sm'>Create sketches, 3D visualizations, and material samples.</p>
        </div>

        <div className='h-[330px] md:w-[23%] w-[48%] p-3'>
          <Image
            src="/images/hiw3.svg"
            alt="Execution Step"
            aria-label="Execution Step"
            width={400}
            height={200}
            className='w-full h-[200px] my-4 hover:scale-110 transition-all'
          />
          <h1 className='md:text-2xl text-xl head my-1'>3. Execution</h1>
          <p className='md:text-base text-sm'>Deliver your dream space with expert craftsmanship.</p>
        </div>

        <div className='h-[330px] md:w-[23%] w-[48%] p-3'>
          <Image
            src="/images/hiw4.svg"
            alt="Move-in Ready Step"
            aria-label="Move-in Ready Step"
            width={400}
            height={200}
            className='w-full h-[200px] my-4 hover:scale-110 transition-all'
          />
          <h1 className='md:text-2xl text-xl head my-1'>4. Move-in Ready</h1>
          <p className='md:text-base text-sm'>We prepare every detail so you can step into your dream space effortlessly.</p>
        </div>
      </div>
    </div>
  )
}

export default Process
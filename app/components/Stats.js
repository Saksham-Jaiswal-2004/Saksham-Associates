import React from 'react'

const Stats = () => {
  return (
    <div className='h-fit md:my-32 my-24 flex flex-col justify-center items-center' id='stats'>
      <div className='w-full flex justify-start'>
        <h1 className='md:text-5xl text-4xl my-14 head'>Our Milestones: <br/>Crafted with Passion, Delivered with Excellence</h1>
      </div>

      <div className='w-full flex flex-col my-4'>
        <div>
          <p className='md:text-xl text-lg my-2 md:mx-6 mx-2'>Transforming Spaces, One Project at a Time</p>
        </div>

        <div className='flex flex-wrap w-full h-fit justify-center items-center md:gap-4 gap-0 my-14'>
          <div className='flex flex-col justify-start items-center md:w-[16%] w-[48%] my-2'>
            <h1 className='md:text-3xl text-2xl font-bold'>100+</h1>
            <h1 className='md:text-xl text-base'>Completed Projects</h1>
          </div>

          <div className='flex flex-col justify-start items-center md:w-[16%] w-[48%] my-2'>
            <h1 className='md:text-3xl text-2xl font-bold'>200+</h1>
            <h1 className='md:text-xl text-base'>Happy Clients</h1>
          </div>

          <div className='flex flex-col justify-start items-center md:w-[16%] w-[48%] my-2'>
            <h1 className='md:text-3xl text-2xl font-bold'>5+</h1>
            <h1 className='md:text-xl text-sm'>Awards and Recognitions</h1>
          </div>

          <div className='flex flex-col justify-start items-center md:w-[16%] w-[48%] my-2'>
            <h1 className='md:text-3xl text-2xl font-bold'>10+</h1>
            <h1 className='md:text-xl text-base'>Years Experience</h1>
          </div>

          <div className='flex flex-col justify-start items-center md:w-[16%] w-[48%] my-2'>
            <h1 className='md:text-3xl text-2xl font-bold'>1,00,000+</h1>
            <h1 className='md:text-xl text-base'>Square Feet Designed</h1>
          </div>
        </div>

        <div className='w-full flex justify-center items-center my-4'>
          <h1 className='md:text-3xl text:2xl font-bold'>"Every milestone is a reflection of our dedication to creating spaces that inspire and exceed expectations."</h1>
        </div>
      </div>
    </div>
  )
}

export default Stats

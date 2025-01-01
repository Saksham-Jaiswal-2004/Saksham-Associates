import React from 'react'

const Services = () => {
  return (
    <div className='h-[70vh] my-16 flex flex-col items-center'>
      <div className='w-full flex justify-start'>
        <h1 className='text-6xl my-10 head'>Crafting Dreams, One Space at a Time</h1>
      </div>

      <div className='w-[95%] h-[55vh]'>
        <div className='flex flex-wrap w-full items-center justify-center'>
            <img src="" alt="Services Image" className='w-[44%]'/>
            <img src="" alt="Services Image" className='w-[22%]'/>
            <img src="" alt="Services Image" className='w-[22%]'/>
        </div>

        <div className='flex flex-wrap w-full items-center justify-center'>
            <img src="" alt="Services Image" className='w-[22%]'/>
            <img src="" alt="Services Image" className='w-[22%]'/>
            <img src="" alt="Services Image" className='w-[44%]'/>
        </div>
      </div>
    </div>
  )
}

export default Services

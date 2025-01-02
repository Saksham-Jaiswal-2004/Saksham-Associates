import React from 'react'

const Services = () => {
  return (
    <div className='h-fit md:my-32 my-24 flex flex-col items-center'>
      <div className='w-full flex justify-start'>
        <h1 className='text-6xl my-10 head'>Crafting Dreams, One Space at a Time</h1>
      </div>

      <div className='w-[95%] h-fit'>
        <div className='flex flex-wrap w-full items-center justify-center my-1'>
            <img src="" alt="Services Image" className='w-[44%] h-[250px] border mx-1'/>
            <img src="" alt="Services Image" className='w-[22%] h-[250px] border mx-1'/>
            <img src="" alt="Services Image" className='w-[22%] h-[250px] border mx-1'/>
        </div>

        <div className='flex flex-wrap w-full items-center justify-center my-1'>
            <img src="" alt="Services Image" className='w-[22%] h-[250px] border mx-1'/>
            <img src="" alt="Services Image" className='w-[22%] h-[250px] border mx-1'/>
            <img src="" alt="Services Image" className='w-[44%] h-[250px] border mx-1'/>
        </div>
      </div>
    </div>
  )
}

export default Services

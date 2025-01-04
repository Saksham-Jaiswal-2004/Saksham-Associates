import React from 'react'

const Services = () => {
  return (
    <div className='h-fit md:my-32 my-24 flex flex-col items-center'>
      <div className='w-full flex justify-start'>
        <h1 className='md:text-6xl text-4xl my-10 head'>Crafting Dreams, One Space at a Time</h1>
      </div>

      <div className='md:w-[95%] w-100% h-fit'>
        <div className='flex flex-wrap w-full items-center justify-center md:my-4 my-1'>
            <img src="/images/service1.jpg" alt="Services Image" className='rounded-xl md:w-[35%] w-[65%] md:h-[250px] h-[150px] border md:m-2 m-1 object-cover'/>
            <img src="/images/service2.jpeg" alt="Services Image" className='rounded-xl md:w-[22%] w-[30%] md:h-[250px] h-[150px] border md:m-2 m-1 object-cover'/>
            <img src="/images/service3.webp" alt="Services Image" className='rounded-xl md:w-[22%] w-[45%] md:h-[250px] h-[150px] border md:m-2 m-1 object-cover'/>
        {/* </div> */}

        {/* <div className='flex flex-wrap w-full items-center justify-center md:my-4 my-1'> */}
            <img src="/images/service4.webp" alt="Services Image" className='rounded-xl md:w-[22%] w-[45%] md:h-[250px] h-[150px] border md:m-2 m-1 object-cover'/>
            <img src="/images/service5.webp" alt="Services Image" className='rounded-xl md:w-[22%] w-[30%] md:h-[250px] h-[150px] border md:m-2 m-1 object-cover'/>
            <img src="/images/service6.jpeg" alt="Services Image" className='rounded-xl md:w-[35%] w-[65%] md:h-[250px] h-[150px] border md:m-2 m-1 object-cover'/>
        </div>
      </div>
    </div>
  )
}

export default Services

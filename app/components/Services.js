import React from 'react'
import Link from 'next/link'

const Services = () => {
  return (
    <div className='h-fit md:my-32 my-24 flex flex-col items-center'>
      <div className='w-full flex justify-start'>
        <h1 className='md:text-6xl text-4xl my-10 head'>Crafting Dreams, One Space at a Time</h1>
      </div>

      <div className='md:w-[95%] w-100% h-fit'>
        <div className='flex flex-wrap w-full items-center justify-center md:my-4 my-1 md:m-2 m-1 border'>
          <div className='relative rounded-xl md:w-[35%] w-[65%] md:h-[250px] h-[150px] overflow-hidden md:m-2 m-1 cursor-pointer'>
            <Link href="/Residential">
              <img src="/images/service1.jpg" alt="Services Image" className='image w-[100%] object-cover'/>
              <h1 className='z-20 absolute md:text-xl text-sm bottom-[5%] left-[5%] bg-[#00000098] px-2 head3'>Residential</h1>
            </Link>
          </div>  

          <div className='relative rounded-xl md:w-[22%] w-[30%] md:h-[250px] h-[150px] overflow-hidden md:m-2 m-1 cursor-pointer'>
            <Link href="/Commercial">
              <img src="/images/service2.jpeg" alt="Services Image" className='image w-[100%] object-cover'/>
              <h1 className='z-20 absolute md:text-xl text-sm bottom-[5%] left-[5%] bg-[#00000098] px-2 head3'>Commercial</h1>
            </Link>
          </div>  

          <div className='relative rounded-xl md:w-[22%] w-[45%] md:h-[250px] h-[150px] overflow-hidden md:m-2 m-1 cursor-pointer'>
            <Link href="/Hospitality">
              <img src="/images/service3.webp" alt="Services Image" className='image w-[100%] object-cover'/>
              <h1 className='z-20 absolute md:text-xl text-sm bottom-[5%] left-[5%] bg-[#00000098] px-2 head3'>Hospitality</h1>
            </Link>
          </div>  

          <div className='relative rounded-xl md:w-[22%] w-[45%] md:h-[250px] h-[150px] overflow-hidden md:m-2 m-1 cursor-pointer'>
            <Link href="/">
              <img src="/images/service4.webp" alt="Services Image" className='image w-[100%] object-cover'/>
              <h1 className='z-20 absolute md:text-xl text-sm bottom-[5%] left-[5%] bg-[#00000098] px-2 head3'>Restraunts & Cafes</h1>
            </Link>
          </div>  

          <div className='relative rounded-xl md:w-[22%] w-[30%] md:h-[250px] h-[150px] overflow-hidden md:m-2 m-1 cursor-pointer'>
            <Link href="/Retail">
              <img src="/images/service5.webp" alt="Services Image" className='image w-[100%] object-cover'/>
              <h1 className='z-20 absolute md:text-xl text-sm bottom-[5%] left-[5%] bg-[#00000098] px-2 head3'>Retail Stores</h1>
            </Link>
          </div>  

          <div className='relative rounded-xl md:w-[35%] w-[65%] md:h-[250px] h-[150px] overflow-hidden md:m-2 m-1 cursor-pointer'>
            <Link href="/Factories">
              <img src="/images/service6.jpeg" alt="Services Image" className='image w-[100%] object-cover'/>
              <h1 className='z-20 absolute md:text-xl text-sm bottom-[5%] left-[5%] bg-[#00000098] px-2 head3'>Factories</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services

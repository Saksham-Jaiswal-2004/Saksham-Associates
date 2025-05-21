import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Services = () => {
  return (
    <div className='h-fit md:my-32 my-24 flex flex-col items-center' id='services'>
      <div className='w-full flex justify-start'>
        <h1 className='md:text-6xl text-4xl my-10 head'>Crafting Dreams, One Space at a Time</h1>
      </div>

      <div className='w-100% h-fit'>
        <div className='flex flex-wrap w-full items-center justify-center md:my-4 my-1 md:m-2 m-1 border'>
          <div className='relative rounded-xl md:w-[40%] w-[95%] md:h-[250px] h-[150px] overflow-hidden md:m-2 m-1 cursor-pointer'>
            <Link href="/Residential">
              <Image src="/images/service1.jpg" alt="Residential interior design preview" className='image w-[100%] object-cover' width={600} height={250}/>
              <h2 className='z-20 absolute md:text-xl text-sm bottom-[5%] left-[5%] bg-[#00000098] px-2 head3'>Residential</h2>
            </Link>
          </div>  

          <div className='relative rounded-xl md:w-[24%] w-[38%] md:h-[250px] h-[150px] overflow-hidden md:m-2 m-1 cursor-pointer'>
            <Link href="/Commercial">
              <Image src="/images/service2.jpeg" alt="Commercial interior design preview" className='image w-[100%] object-cover' width={400} height={250}/>
              <h2 className='z-20 absolute md:text-xl text-sm bottom-[5%] left-[5%] bg-[#00000098] px-2 head3'>Commercial</h2>
            </Link>
          </div>  

          <div className='relative rounded-xl md:w-[24%] w-[55%] md:h-[250px] h-[150px] overflow-hidden md:m-2 m-1 cursor-pointer'>
            <Link href="/Hospitality">
              <Image src="/images/service3.webp" alt="Hospitality design project preview" className='image w-[100%] object-cover' width={400} height={250}/>
              <h2 className='z-20 absolute md:text-xl text-sm bottom-[5%] left-[5%] bg-[#00000098] px-2 head3'>Hospitality</h2>
            </Link>
          </div>  

          <div className='relative rounded-xl md:w-[24%] w-[55%] md:h-[250px] h-[150px] overflow-hidden md:m-2 m-1 cursor-pointer'>
            <Link href="/Restaurants">
              <Image src="/images/service4.webp" alt="Restaurant and cafe interior preview" className='image w-[100%] object-cover' width={400} height={250}/>
              <h2 className='z-20 absolute md:text-xl text-sm bottom-[5%] left-[5%] bg-[#00000098] px-2 head3'>Restraunts & Cafes</h2>
            </Link>
          </div>  

          <div className='relative rounded-xl md:w-[24%] w-[38%] md:h-[250px] h-[150px] overflow-hidden md:m-2 m-1 cursor-pointer'>
            <Link href="/Retail">
              <Image src="/images/service5.webp" alt="Retail store interior design preview" className='image w-[100%] object-cover' width={400} height={250}/>
              <h2 className='z-20 absolute md:text-xl text-sm bottom-[5%] left-[5%] bg-[#00000098] px-2 head3'>Retail Stores</h2>
            </Link>
          </div>  

          <div className='relative rounded-xl md:w-[40%] w-[95%] md:h-[250px] h-[150px] overflow-hidden md:m-2 m-1 cursor-pointer'>
            <Link href="/Factories">
              <Image src="/images/service6.jpeg" alt="Factory design interior project image" className='image w-[100%] object-cover' width={600} height={250}/>
              <h2 className='z-20 absolute md:text-xl text-sm bottom-[5%] left-[5%] bg-[#00000098] px-2 head3'>Factories</h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services

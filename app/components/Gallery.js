import React from 'react'
import Image from 'next/image';
import Link from 'next/link'

const Gallery = () => {
  return (
    <div className='h-fit md:my-36 my-24 md:mx-10 mx-1 md:py-4 py-2 md:px-10 px-1 flex flex-col justify-center items-center rounded-xl bg-[#D9AE96]'>
      <div className='w-full flex justify-start'>
        <h1 className='md:text-6xl text-4xl my-14 head2'>A Visual Journey: Explore Our Creations</h1>
      </div>

      <div className='flex flex-wrap md:gap-2 gap-1 my-1 w-full justify-center items-center'>
        <img src="/images/service1.jpg" alt="Services Image" className='rounded-xl md:w-[42%] w-[58%] md:h-[250px] h-[150px] border md:m-2 my-1 mx-0 object-cover'/>
        <img src="/images/service2.jpeg" alt="Services Image" className='rounded-xl md:w-[26%] w-[40%] md:h-[250px] h-[150px] border md:m-2 m-y1  mx-0object-cover'/>
        <img src="/images/service3.webp" alt="Services Image" className='rounded-xl md:w-[26%] w-[49%] md:h-[250px] h-[150px] border md:m-2 m-y1  mx-0object-cover'/>
      {/* </div> */}

      {/* <div className='flex flex-wrap gap-2 my-1 w-full justify-center items-center'> */}
        <img src="/images/service4.webp" alt="Services Image" className='rounded-xl md:w-[26%] w-[49%] md:h-[250px] h-[150px] border md:m-2 my-1 mx-0 object-cover'/>
        <img src="/images/service5.webp" alt="Services Image" className='rounded-xl md:w-[26%] w-[40%] md:h-[250px] h-[150px] border md:m-2 my-1 mx-0 object-cover'/>
        <img src="/images/service6.jpeg" alt="Services Image" className='rounded-xl md:w-[42%] w-[58%] md:h-[250px] h-[150px] border md:m-2 my-1 mx-0 object-cover'/>
      {/* </div> */}

      {/* <div className='flex flex-wrap gap-2 my-1 w-full justify-center items-center'> */}
        <img src="/images/service1.jpg" alt="Services Image" className='rounded-xl md:w-[42%] w-[98%] md:h-[250px] h-[150px] border md:m-2 my-1 mx-0 object-cover'/>
        <img src="/images/service2.jpeg" alt="Services Image" className='rounded-xl md:w-[26%] w-[49%] md:h-[250px] h-[150px] border md:m-2 my-1 mx-0 object-cover'/>
        <img src="/images/service3.webp" alt="Services Image" className='rounded-xl md:w-[26%] w-[49%] md:h-[250px] h-[150px] border md:m-2 my-1 mx-0 object-cover'/>
      </div>

      <div className='flex justify-end w-full'>
        <Link href="/Portfolio" className='my-5 button2 px-3 py-2 rounded-xl text-xl'>See More</Link>
      </div>
    </div>
  )
}

export default Gallery

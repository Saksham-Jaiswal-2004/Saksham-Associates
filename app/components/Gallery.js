import React from 'react'
import Image from 'next/image';
import Link from 'next/link'

const Gallery = () => {
  return (
    <div className='h-fit md:my-36 my-24 md:mx-10 mx-2 md:py-4 py-2 md:px-10 px-4 flex flex-col justify-center items-center rounded-xl bg-[#D9AE96]'>
      <div className='w-full flex justify-start'>
        <h1 className='text-6xl my-14 head2'>A Visual Journey: Explore Our Creations</h1>
      </div>

      <div className='flex flex-wrap gap-2 my-1'>
        <Image src="" alt="" width={600} height={250}/>
        <Image src="" alt="" width={300} height={250}/>
        <Image src="" alt="" width={300} height={250}/>
      </div>

      <div className='flex flex-wrap gap-2 my-1'>
        <Image src="" alt="" width={300} height={250}/>
        <Image src="" alt="" width={300} height={250}/>
        <Image src="" alt="" width={600} height={250}/>
      </div>

      <div className='flex flex-wrap gap-2 my-1'>
        <Image src="" alt="" width={300} height={250}/>
        <Image src="" alt="" width={600} height={250}/>
        <Image src="" alt="" width={300} height={250}/>
      </div>

      <div className='flex justify-end w-full'>
        <Link href="/Portfolio" className='my-5 button2 px-3 py-2 rounded-xl text-xl'>See More</Link>
      </div>
    </div>
  )
}

export default Gallery

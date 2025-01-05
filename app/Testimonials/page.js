import React from 'react'
import Stats from '../components/Stats'
import CTA from '../components/CTA'

const page = () => {
  return (
    <div className='h-fit'>
      <div className='h-screen flex justify-start items-end bg2'>
        <div className='absolute h-full md:w-[55%] w-[100%] bg-[#0000009e]'></div>
        <h1 className='md:text-6xl text-4xl mx-6 my-28 z-[2] head3'>Spaces That Speak Your Style</h1>
      </div>

      <Stats/>
      <CTA/>
    </div>
  )
}

export default page

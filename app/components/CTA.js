import React from 'react'
import Link from 'next/link'

const CTA = () => {
  return (
    <div className='h-fit p-10 md:my-14 my-8 flex flex-col text-center justify-center items-center bg4' id='cta'>
      <h1 className='md:text-4xl text-2xl my-10'>Let’s Create Your Dream Space Together</h1>
      <Link href="/Contact" className='m-3 button4 px-3 md:py-2 py-1 rounded-xl md:text-xl text-base'>Let's Begin</Link>
    </div>
  )
}

export default CTA

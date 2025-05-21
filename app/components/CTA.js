import React from 'react'
import Link from 'next/link'

const CTA = () => {
  return (
    <div className='h-fit p-10 md:my-14 my-8 flex flex-col text-center justify-center items-center bg4' id='cta'>
      <h1 className='md:text-5xl text-2xl mt-10 mb-4'>Let&apos;s Design Your Dream Interior</h1>
      <h1 className='md:text-2xl text-base mb-8'>Personalized. Sustainable. Stunning.</h1>
      <Link href="/Contact" className='m-3 button4 px-3 md:py-2 py-1 rounded-xl md:text-xl text-base'>Get a Free Design Quote</Link>
    </div>
  )
}

export default CTA

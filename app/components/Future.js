import React from 'react'

const Future = () => {
  return (
    <div className='h-fit md:my-32 my-24 flex flex-col items-center' id='future'>
      <div className='w-full flex justify-start'>
        <h1 className='text-5xl md:my-14 my-6 head'>Designing for Tomorrow</h1>
      </div>

      <div className='flex flex-wrap my-14 w-full justify-center items-center md:gap-14 gap-2'>
        <div className='md:w-[20%] w-[48%] flex flex-col md:justify-end justify-center items-center text-center md:h-[250px] h-[150px]'>
            <h1 className='md:text-xl my-2 head'>Sustainable Materials</h1>
            <p>Utilizing responsibly sourced, renewable, and low-impact materials to promote environmental stewardship.</p>
        </div>

        <div className='md:w-[20%] w-[48%] flex flex-col md:justify-start justify-center items-center text-center md:h-[250px] h-[150px]'>
            <h1 className='md:text-xl my-2 head'>Smart Technology Integration</h1>
            <p>Incorporating advanced smart home systems for convenience, efficiency, and modern living.</p>
        </div>

        <div className='md:w-[20%] w-[60%] my-5 flex flex-col md:justify-end justify-center items-center text-center md:h-[250px] h-[150px]'>
            <h1 className='md:text-xl my-2 head'>Energy Efficiency</h1>
            <p>Maximizing natural light and ventilation to reduce energy consumption and create healthier spaces.</p>
        </div>
      </div>
    </div>
  )
}

export default Future

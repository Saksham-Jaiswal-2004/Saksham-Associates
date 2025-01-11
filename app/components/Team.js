import React from 'react'

const Team = () => {
  return (
    <div className='h-fit md:my-32 my-24 flex flex-col justify-center items-center' id='founders'>
      <div className='w-full flex justify-start'>
        <h1 className='md:text-5xl text-4xl my-14 head'>The Visionary Minds Behind Our Designs</h1>
      </div>

      <div className='flex flex-wrap h-fit my-6 md:p-4 p-2 justify-center items-center'>
        <div className='md:w-1/2 w-[80%] flex justify-center items-center my-4'>
          <img src="https://plus.unsplash.com/premium_photo-1682430722549-3349282c0a73?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Sony Jaiswal" className='w-[350px] h-auto rounded-xl'/>
        </div>

        <div className='md:w-1/2 w-full md:px-8 px-3'>
          <h1 className='md:text-3xl text-2xl head my-2'>Mr. Sony Jaiswal</h1>
          <p className='italic my-1'>The Backbone of Operations</p>
          <p className='w-[85%]'>Sony Jaiswal ensures that every project runs like clockwork. From managing logistics to overseeing technical aspects and on-ground execution, Sony’s expertise ensures a smooth and flawless experience for our clients. His dedication to operational excellence is the foundation upon which our designs come to life.</p>
        </div>
      </div>

      <div className='flex flex-wrap h-fit my-6 md:p-4 p-2 md:flex-row-reverse flex-row justify-center items-center'>
        <div className='md:w-1/2 w-[80%] flex justify-center items-center my-4'>
          <img src="https://plus.unsplash.com/premium_photo-1664477129473-35c28d5446f2?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Madhu Jaiswal" className='w-[350px] h-auto rounded-xl'/>
        </div>

        <div className='md:w-1/2 w-full md:px-8 px-2'>
          <h1 className='md:text-3xl text-2xl head my-2'>Mrs. Madhu Jaiswal</h1>
          <p className='italic my-1'>The Creative Genius</p>
          <p className='w-[85%]'>Madhu Jaiswal is the design powerhouse behind our stunning interiors. With a keen eye for detail and a talent for creating captivating 3D visualizations, she turns ideas into breathtaking realities. Her passion for blending functionality with artistry has shaped the signature style that defines Saksham Associates.</p>
        </div>
      </div>
    </div>
  )
}

export default Team

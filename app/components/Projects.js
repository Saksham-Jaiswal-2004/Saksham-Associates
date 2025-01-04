import React from 'react'
import Link from 'next/link'

const Projects = () => {
  return (
    <div className='h-fit md:my-32 my-24 flex flex-col justify-center items-center' id='projects'>
      <div className='w-full flex justify-start'>
        <h1 className='text-5xl my-14 head'>Showcasing Versatility and Elegance</h1>
      </div>

      {/* Cards */}
      {/* Section 1 */}
      <div className='w-full h-fit flex flex-col my-10'>
        <div className='w-full flex justify-end'>
          <h1 className='text-2xl my-6 mx-3 head'>Modern Minimalist Homes</h1>
        </div>

        <div className='w-full flex flex-wrap justify-center items-center md:gap-5 gap-2 my-2'>
          <div className='md:w-[22%] w-[48%] card3'>
            <div>
              <img src="/images/service2.jpeg" alt="Project Image" className='w-[100%] image'/>
            </div>
            {/* <h1>Project Title</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, eius!</p> */}
          </div>

          <div className='md:w-[22%] w-[48%] card3'>
            <div>
              <img src="/images/service2.jpeg" alt="Project Image" className='image'/>
            </div>
            <h1>Project Title</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, eius!</p>
          </div>

          <div className='md:w-[22%] w-[48%] card3'>
            <div>
              <img src="/images/service2.jpeg" alt="Project Image" className='image'/>
            </div>
            <h1>Project Title</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, eius!</p>
          </div>

          <div className='md:w-[22%] w-[48%] card3'>
            <div>
              <img src="/images/service2.jpeg" alt="Project Image" className='image'/>
            </div>
            <h1>Project Title</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, eius!</p>
          </div>
        </div>

        <div className='w-[95%] flex justify-end my-2 mx-1'>
          <Link href="/Portfolio#projects" className='bg-[#00000080] head3 px-4 py-1 rounded-xl hover:bg-[#000000b2] text-sm'>View More</Link>
        </div>
      </div>

      {/* Section 2 */}
      <div className='w-full h-fit flex flex-col'>
        <div className='w-full flex justify-end'>
          <h1 className='text-2xl my-6 mx-3 head'>Smart Workspaces</h1>
        </div>

        <div className='w-full flex flex-wrap justify-center items-center md:gap-5 gap-2 my-2'>
          <div className='md:w-[22%] w-[48%] card3'>
            <div>
              <img src="" alt="Project Image" className='image'/>
            </div>
            <h1>Project Title</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, eius!</p>
          </div>

          <div className='md:w-[22%] w-[48%] card3'>
            <div>
              <img src="" alt="Project Image" className='image'/>
            </div>
            <h1>Project Title</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, eius!</p>
          </div>

          <div className='md:w-[22%] w-[48%] card3'>
            <div>
              <img src="" alt="Project Image" className='image'/>
            </div>
            <h1>Project Title</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, eius!</p>
          </div>

          <div className='md:w-[22%] w-[48%] card3'>
            <div>
              <img src="" alt="Project Image" className='image'/>
            </div>
            <h1>Project Title</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, eius!</p>
          </div>
        </div>

        <div className='w-[95%] flex justify-end my-2 mx-1'>
          <Link href="/Portfolio#projects" className='bg-[#00000080] head3 px-4 py-1 rounded-xl hover:bg-[#000000b2] text-sm'>View More</Link>
        </div>
      </div>
      
      {/* Section 3 */}
      <div className='w-full h-fit flex flex-col'>
        <div className='w-full flex justify-end'>
          <h1 className='text-2xl my-6 mx-3 head'>Stylish Hotels</h1>
        </div>

        <div className='w-full flex flex-wrap justify-center items-center md:gap-5 gap-2 my-2'>
          <div className='md:w-[22%] w-[48%] card3'>
            <div>
              <img src="" alt="Project Image" className='image'/>
            </div>
            <h1>Project Title</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, eius!</p>
          </div>

          <div className='md:w-[22%] w-[48%] card3'>
            <div>
              <img src="" alt="Project Image" className='image'/>
            </div>
            <h1>Project Title</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, eius!</p>
          </div>

          <div className='md:w-[22%] w-[48%] card3'>
            <div>
              <img src="" alt="Project Image" className='image'/>
            </div>
            <h1>Project Title</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, eius!</p>
          </div>

          <div className='md:w-[22%] w-[48%] card3'>
            <div>
              <img src="" alt="Project Image" className='image'/>
            </div>
            <h1>Project Title</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, eius!</p>
          </div>
        </div>

        <div className='w-[95%] flex justify-end my-2 mx-1'>
          <Link href="/Portfolio#projects" className='bg-[#00000080] head3 px-4 py-1 rounded-xl hover:bg-[#000000b2] text-sm'>View More</Link>
        </div>
      </div>
      
      {/* Section 4 */}
      <div className='w-full h-fit flex flex-col'>
        <div className='w-full flex justify-end'>
          <h1 className='text-2xl my-6 mx-3 head'>Industrial Spaces</h1>
        </div>

        <div className='w-full flex flex-wrap justify-center items-center md:gap-5 gap-2 my-2'>
          <div className='md:w-[22%] w-[48%] card3'>
            <div>
              <img src="" alt="Project Image" className='image'/>
            </div>
            <h1>Project Title</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, eius!</p>
          </div>

          <div className='md:w-[22%] w-[48%] card3'>
            <div>
              <img src="" alt="Project Image" className='image'/>
            </div>
            <h1>Project Title</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, eius!</p>
          </div>

          <div className='md:w-[22%] w-[48%] card3'>
            <div>
              <img src="" alt="Project Image" className='image'/>
            </div>
            <h1>Project Title</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, eius!</p>
          </div>

          <div className='md:w-[22%] w-[48%] card3'>
            <div>
              <img src="" alt="Project Image" className='image'/>
            </div>
            <h1>Project Title</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, eius!</p>
          </div>
        </div>

        <div className='w-[95%] flex justify-end my-2 mx-1'>
          <Link href="/Portfolio#projects" className='bg-[#00000080] head3 px-4 py-1 rounded-xl hover:bg-[#000000b2] text-sm'>View More</Link>
        </div>
      </div>

      {/* Section 5 */}
      <div className='w-full h-fit flex flex-col'>
        <div className='w-full flex justify-end'>
          <h1 className='text-2xl my-6 mx-3 head'>Cozy Cafés & Restaurants</h1>
        </div>

        <div className='w-full flex flex-wrap justify-center items-center md:gap-5 gap-2 my-2'>
          <div className='md:w-[22%] w-[48%] card3'>
            <div>
              <img src="" alt="Project Image" className='image'/>
            </div>
            <h1>Project Title</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, eius!</p>
          </div>

          <div className='md:w-[22%] w-[48%] card3'>
            <div>
              <img src="" alt="Project Image" className='image'/>
            </div>
            <h1>Project Title</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, eius!</p>
          </div>

          <div className='md:w-[22%] w-[48%] card3'>
            <div>
              <img src="" alt="Project Image" className='image'/>
            </div>
            <h1>Project Title</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, eius!</p>
          </div>

          <div className='md:w-[22%] w-[48%] card3'>
            <div>
              <img src="" alt="Project Image" className='image'/>
            </div>
            <h1>Project Title</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, eius!</p>
          </div>
        </div>

        <div className='w-[95%] flex justify-end my-2 mx-1'>
          <Link href="/Portfolio#projects" className='bg-[#00000080] head3 px-4 py-1 rounded-xl hover:bg-[#000000b2] text-sm'>View More</Link>
        </div>
      </div>
    </div>
  )
}

export default Projects

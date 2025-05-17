"use client"
import React from 'react'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'
import Link from 'next/link'
import Image from 'next/image'
import Seo from '../components/SEO';
import useFetchProjectsByCategory from '../hooks/fetchProjects'

const Hospitality = () => {

  const { projects: hospitalityProjects } = useFetchProjectsByCategory("Hospitality");

  return (
    <>
      <Seo
        title="Hospitality Interior Design | Saksham Associates"
        description="See our hospitality interior design projects for hotels and resorts in Kolkata. Saksham Associates creates inviting, luxurious spaces."
        url="https://sakshamassociates.in/Hospitality"
        image="/images/SALOGO.svg"
        keywords="hospitality interior design, hotel design, resort design, Saksham Associates, Kolkata"
      />
      <div className='h-fit'>
        <div className='h-screen flex justify-start items-end bg2'>
          <div className='absolute h-full md:w-[55%] w-[100%] bg-[#0000009e]'></div>
          <h1 className='md:text-6xl text-4xl mx-6 my-28 z-[2] head3'>Hotels</h1>
        </div>

        <div className='w-full flex flex-wrap justify-center items-center md:gap-4 gap-2 my-10'>
          {Array.isArray(hospitalityProjects) && hospitalityProjects.map((project) => (
            <div key={project.id} className='w-[92%] card3 p-8'>
              <Link href={`Portfolio/${project.id}`} className='flex flex-row gap-6 justify-center items-center'>
                <div className='md:h-[180px] h-[140px] w-[18%] overflow-hidden rounded-xl bg-[#333333]'>
                  <Image
                    src={project.image}
                    alt={`Project Image - ${project.title}`}
                    aria-label={`Project Image - ${project.title}`}
                    width={200}
                    height={180}
                    className='w-[100%] md:h-[300px] h-[130px] object-cover'
                    unoptimized
                  />
                </div>

                <div className="content flex flex-col w-[80%]">
                  <h1>{project.title}</h1>
                  <p>{project.description.length>250 ? `${project.description.substring(0, 250)}...` : project.description}</p>

                  <div className='flex gap-2'>
                    <p>{project.location}</p>
                    <p>|</p>
                    <p>{new Date(`${project.time}-01`).toLocaleString("default", { month: "short", year: "numeric" })}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <Testimonials />
        <CTA />
      </div>
    </>
  )
}

export default Hospitality

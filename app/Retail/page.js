import React from 'react'
import projects from "../constants/projects.json";
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'
import Link from 'next/link'
import Seo from '../components/SEO';

const page = () => {
    const filteredProjects = projects.filter((project) =>
        project.id.includes("retail")
    );
      
    return (
      <>
        <Seo
          title="Retail Store Interior Design | Saksham Associates"
          description="Browse our retail store interior design projects in Kolkata. Saksham Associates creates engaging, customer-focused retail environments."
          url="https://sakshamassociates.in/Retail"
          image="/images/SALOGO.svg"
          keywords="retail interior design, store design, Saksham Associates, Kolkata"
        />
        <div className='h-fit'>
          <div className='h-screen flex justify-start items-end bg2'>
            <div className='absolute h-full md:w-[55%] w-[100%] bg-[#0000009e]'></div>
            <h1 className='md:text-6xl text-4xl mx-6 my-28 z-[2] head3'>Retail Stores</h1>
          </div>
    
          <div className='w-full flex flex-wrap justify-center items-center md:gap-4 gap-2 my-10'>
            {filteredProjects.map((project, index) => (
              <div key={index} className='md:w-[45%] w-96% card3'>
                <Link href={`Portfolio/${project.id}`}>
                  <h1>{project.title}</h1>
                  <p>{project.description.substring(0,150)}...</p>
                  <ul className='flex flex-wrap gap-2'>
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  <p>{project.date}</p>
                </Link>
              </div>
            ))}
          </div>
    
          <Testimonials/>
          <CTA/>
        </div>
      </>
    )
}

export default page

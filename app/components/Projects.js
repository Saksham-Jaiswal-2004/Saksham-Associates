"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import useFetchProjectsByCategory from '../hooks/fetchProjects'
import Carousel from "@/components/ui/carousel";

const Projects = () => {

  const { projects: residentialProjects } = useFetchProjectsByCategory("Residential");
  const { projects: commercialProjects } = useFetchProjectsByCategory("Commercial");
  const { projects: hospitalityProjects } = useFetchProjectsByCategory("Hospitality");
  const { projects: retailProjects } = useFetchProjectsByCategory("Retail Stores");
  const { projects: factoryProjects } = useFetchProjectsByCategory("Factories");
  const { projects: restaurantProjects } = useFetchProjectsByCategory("Restraunts and Cafes");

  const homeData = [
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: "/home/home 1.jpeg",
    },
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: "/home/home 2.jpeg",
    },
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: "/home/home 3.jpeg",
    },
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: "/home/home 4.jpeg",
    },
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: "/home/home 5.jpeg",
    },
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: "/home/home 6.jpeg",
    },
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: "/home/home 7.jpeg",
    },
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: "/home/home 8.jpeg",
    },
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: "/home/home 9.jpeg",
    },
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: "/home/home 10.jpeg",
    },
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: "/home/home 11.jpeg",
    },
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: "/home/home 12.jpeg",
    },
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: "/home/home 13.jpeg",
    },
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: "/home/home 14.jpeg",
    },
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: "/home/home 15.jpeg",
    },
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: "/home/home 16.jpeg",
    },
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: "/home/home 17.jpeg",
    },
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: "/home/home 18.jpeg",
    },
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: "/home/home 19.jpeg",
    },
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: "/home/home 20.jpeg",
    },
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: "/home/home 21.jpeg",
    },
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: "/home/home 22.jpeg",
    },
  ]

  const hotelData = [
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: "/hotel/Hotel 1.jpeg",
    },
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: "/hotel/Hotel 2.jpeg",
    },
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: "/hotel/Hotel 3.jpeg",
    },
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: "/hotel/Hotel 4.jpeg",
    },
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: "/hotel/Hotel 5.jpeg",
    },
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: "/hotel/Hotel 6.jpeg",
    },
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: "/hotel/Hotel 7.jpeg",
    },
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: "/hotel/Hotel 8.jpeg",
    },
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: "/hotel/Hotel 9.jpeg",
    },
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: "/hotel/Hotel 10.jpeg",
    },
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: "/hotel/Hotel 11.jpeg",
    },
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: "/hotel/Hotel 12.jpeg",
    },
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: "/hotel/Hotel 13.jpeg",
    },
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: "/hotel/Hotel 14.jpeg",
    },
  ];

  const cafeData = [
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: "/cafe/cafe 1.jpeg",
    },
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: "/cafe/cafe 2.jpeg",
    },
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: "/cafe/cafe 3.jpeg",
    },
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: "/cafe/cafe 4.jpeg",
    },
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: "/cafe/cafe 5.jpeg",
    },
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: "/cafe/cafe 6.jpeg",
    },
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: "/cafe/cafe 7.jpeg",
    },
    // {
    //   title: "Mystic Mountains",
    //   button: "Explore Component",
    //   src: "/cafe/cafe 8.jpeg",
    // },
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: "/cafe/cafe 9.jpeg",
    },
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: "/cafe/cafe 10.jpeg",
    },
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: "/cafe/cafe 11.jpeg",
    },
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: "/cafe/cafe 12.jpeg",
    },
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: "/cafe/cafe 13.jpeg",
    },
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: "/cafe/cafe 14.jpeg",
    },
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: "/cafe/cafe 15.jpeg",
    },
  ]


  return (
    <div className='h-fit md:my-28 my-24 flex flex-col justify-center items-center' id='projects'>
      <div className='w-full flex justify-start'>
        <h1 className='text-5xl my-14 head'>Showcasing Versatility and Elegance</h1>
      </div>

      {/* Cards */}
      {/* Section 1 */}
      <div className='w-full h-fit flex flex-col my-10'>
        <div className='w-full flex justify-end'>
          <h1 className='text-3xl my-6 mx-3 head'>Modern Minimalist Homes</h1>
        </div>

        <div className="relative overflow-hidden w-full h-full py-20">
          <Carousel slides={homeData} />
        </div>

        {/* <div className='w-full flex flex-wrap justify-center items-center md:gap-5 gap-2 my-2'>
          {Array.isArray(residentialProjects) && residentialProjects.slice(0,4).map((project) => (
            <div key={project.id} className='md:w-[23%] w-[48%] card3 pb-2'>
              <Link href={`Portfolio/${project.id}`}>
                <div className='md:h-[320px] h-[140px] overflow-hidden'>
                  <Image
                    src={project.image}
                    alt={`Project Image - ${project.title}`}
                    aria-label={`Project Image - ${project.title}`}
                    width={400}
                    height={300}
                    className='w-[100%] md:h-[300px] h-[130px] object-cover'
                    unoptimized
                  />
                </div>

                <h1>{project.title}</h1>
                <div className='flex px-1'>
                  <p>{project.location} |</p>
                  <p>{new Date(`${project.time}-01`).toLocaleString("default", { month: "short", year: "numeric" })}</p>
                </div>
              </Link>
            </div>
          ))}
        </div> */}

        {/* <div className='w-[95%] flex justify-end my-2 mx-1'>
          <Link href="/Residential" className='bg-[#00000080] head3 px-4 py-1 rounded-xl hover:bg-[#000000b2] text-sm'>View More</Link>
        </div> */}
      </div>

      {/* Section 2 */}
      {/* <div className='w-full h-fit flex flex-col'>
        <div className='w-full flex justify-end'>
          <h1 className='text-2xl my-6 mx-3 head'>Smart Workspaces</h1>
        </div>

        <div className='w-full flex flex-wrap justify-center items-center md:gap-5 gap-2 my-2'>
          {Array.isArray(commercialProjects) && commercialProjects.slice(0,4).map((project) => (
            <div key={project.id} className='md:w-[23%] w-[48%] card3 pb-2'>
              <Link href={`Portfolio/${project.id}`}>
                <div className='md:h-[320px] h-[140px] overflow-hidden'>
                  <Image
                    src={project.image}
                    alt={`Project Image - ${project.title}`}
                    aria-label={`Project Image - ${project.title}`}
                    width={400}
                    height={300}
                    className='w-[100%] md:h-[300px] h-[130px] object-cover'
                    unoptimized
                  />
                </div>

                <h1>{project.title}</h1>
                <div className='flex px-1'>
                  <p>{project.location} |</p>
                  <p>{new Date(`${project.time}-01`).toLocaleString("default", { month: "short", year: "numeric" })}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className='w-[95%] flex justify-end my-2 mx-1'>
          <Link href="/Commercial" className='bg-[#00000080] head3 px-4 py-1 rounded-xl hover:bg-[#000000b2] text-sm'>View More</Link>
        </div>
      </div> */}

      {/* Section 3 */}
      <div className='w-full h-fit flex flex-col'>
        <div className='w-full flex justify-end'>
          <h1 className='text-3xl my-6 mx-3 head'>Stylish Hotels</h1>
        </div>

        <div className="relative overflow-hidden w-full h-full py-20">
          <Carousel slides={hotelData} />
        </div>

        {/* <div className='w-full flex flex-wrap justify-center items-center md:gap-5 gap-2 my-2'>
          {Array.isArray(hospitalityProjects) && hospitalityProjects.slice(0,4).map((project) => (
            <div key={project.id} className='md:w-[23%] w-[48%] card3 pb-2'>
              <Link href={`Portfolio/${project.id}`}>
                <div className='md:h-[320px] h-[140px] overflow-hidden'>
                  <Image
                    src={project.image}
                    alt={`Project Image - ${project.title}`}
                    aria-label={`Project Image - ${project.title}`}
                    width={400}
                    height={300}
                    className='w-[100%] md:h-[300px] h-[130px] object-cover'
                    unoptimized
                  />
                </div>

                <h1>{project.title}</h1>
                <div className='flex px-1'>
                  <p>{project.location} |</p>
                  <p>{new Date(`${project.time}-01`).toLocaleString("default", { month: "short", year: "numeric" })}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className='w-[95%] flex justify-end my-2 mx-1'>
          <Link href="/Hospitality" className='bg-[#00000080] head3 px-4 py-1 rounded-xl hover:bg-[#000000b2] text-sm'>View More</Link>
        </div> */}
      </div>

      {/* Section 4 */}
      {/* <div className='w-full h-fit flex flex-col'>
        <div className='w-full flex justify-end'>
          <h1 className='text-2xl my-6 mx-3 head'>Industrial Spaces</h1>
        </div>

        <div className='w-full flex flex-wrap justify-center items-center md:gap-5 gap-2 my-2'>
          {Array.isArray(retailProjects) && retailProjects.slice(0,4).map((project) => (
            <div key={project.id} className='md:w-[23%] w-[48%] card3 pb-2'>
              <Link href={`Portfolio/${project.id}`}>
                <div className='md:h-[320px] h-[140px] overflow-hidden'>
                  <Image
                    src={project.image}
                    alt={`Project Image - ${project.title}`}
                    aria-label={`Project Image - ${project.title}`}
                    width={400}
                    height={300}
                    className='w-[100%] md:h-[300px] h-[130px] object-cover'
                    unoptimized
                  />
                </div>

                <h1>{project.title}</h1>
                <div className='flex px-1'>
                  <p>{project.location} |</p>
                  <p>{new Date(`${project.time}-01`).toLocaleString("default", { month: "short", year: "numeric" })}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className='w-[95%] flex justify-end my-2 mx-1'>
          <Link href="/Retail" className='bg-[#00000080] head3 px-4 py-1 rounded-xl hover:bg-[#000000b2] text-sm'>View More</Link>
        </div>
      </div> */}

      {/* Section 5 */}
      {/* <div className='w-full h-fit flex flex-col'>
        <div className='w-full flex justify-end'>
          <h1 className='text-2xl my-6 mx-3 head'>Factories and Industrial Spaces</h1>
        </div>

        <div className='w-full flex flex-wrap justify-center items-center md:gap-5 gap-2 my-2'>
          {Array.isArray(factoryProjects) && factoryProjects.slice(0,4).map((project) => (
            <div key={project.id} className='md:w-[23%] w-[48%] card3 pb-2'>
              <Link href={`Portfolio/${project.id}`}>
                <div className='md:h-[320px] h-[140px] overflow-hidden'>
                  <Image
                    src={project.image}
                    alt={`Project Image - ${project.title}`}
                    aria-label={`Project Image - ${project.title}`}
                    width={400}
                    height={300}
                    className='w-[100%] md:h-[300px] h-[130px] object-cover'
                    unoptimized
                  />
                </div>

                <h1>{project.title}</h1>
                <div className='flex px-1'>
                  <p>{project.location} |</p>
                  <p>{new Date(`${project.time}-01`).toLocaleString("default", { month: "short", year: "numeric" })}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className='w-[95%] flex justify-end my-2 mx-1'>
          <Link href="/Factories" className='bg-[#00000080] head3 px-4 py-1 rounded-xl hover:bg-[#000000b2] text-sm'>View More</Link>
        </div>
      </div> */}

      {/* Section 6 */}
      <div className='w-full h-fit flex flex-col'>
        <div className='w-full flex justify-end'>
          <h1 className='text-3xl my-6 mx-3 head'>Cozy Cafés & Restaurants</h1>
        </div>

        <div className="relative overflow-hidden w-full h-full py-20">
          <Carousel slides={cafeData} />
        </div>

        {/* <div className='w-full flex flex-wrap justify-center items-center md:gap-5 gap-2 my-2'>
          {Array.isArray(restaurantProjects) && restaurantProjects.slice(0,4).map((project) => (
            <div key={project.id} className='md:w-[23%] w-[48%] card3 pb-2'>
              <Link href={`Portfolio/${project.id}`}>
                <div className='md:h-[320px] h-[140px] overflow-hidden'>
                  <Image
                    src={project.image}
                    alt={`Project Image - ${project.title}`}
                    aria-label={`Project Image - ${project.title}`}
                    width={400}
                    height={300}
                    className='w-[100%] md:h-[300px] h-[130px] object-cover'
                    unoptimized
                  />
                </div>

                <h1>{project.title}</h1>
                <div className='flex px-1'>
                  <p>{project.location} |</p>
                  <p>{new Date(`${project.time}-01`).toLocaleString("default", { month: "short", year: "numeric" })}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className='w-[95%] flex justify-end my-2 mx-1'>
          <Link href="/Restaurants" className='bg-[#00000080] head3 px-4 py-1 rounded-xl hover:bg-[#000000b2] text-sm'>View More</Link>
        </div> */}
      </div>
    </div>
  )
}

export default Projects

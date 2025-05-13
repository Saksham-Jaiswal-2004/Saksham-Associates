import React from 'react'
import Link from 'next/link'
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { AiOutlinePinterest } from "react-icons/ai";
import { FaHouzz } from "react-icons/fa";
import { PiLinktreeLogoBold } from "react-icons/pi";
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='h-fit bg3 flex flex-col justify-center items-center' id='Footer'>
      <div className='flex flex-wrap justify-center items-center w-full p-2'>
        <div className='flex flex-col md:w-1/3 w-[100%] my-5 justify-center items-center'>
          <div className='flex justify-center items-center gap-2 flex-wrap'>
            <Image
              src="/images/SALogoGreen.png"
              alt="Saksham Associates Logo"
              aria-label="Saksham Associates Logo"
              width={50}
              height={50}
              className='md:w-[50px] w-[40px] h-auto'
            />
            <h1 className='md:text-4xl text-2xl my-5 signature'>Saksham Associates</h1>
          </div>

          <div className='flex gap-5 justify-start items-center md:text-4xl text-3xl mb-5'>
            <a href="https://wa.me/919038415889" target="_blank" rel="noopener noreferrer"><FaWhatsapp className='social rounded-full'/></a>
            <a href="https://www.instagram.com/sakshamassociates/" target="_blank" rel="noopener noreferrer"><FaInstagram className='social rounded-full'/></a>
            <a href="https://" target="_blank" rel="noopener noreferrer"><CiLinkedin className='social rounded-full'/></a>
            <a href="https://in.pinterest.com/saksham_associates/" target="_blank" rel="noopener noreferrer"><AiOutlinePinterest className='social rounded-full'/></a>
            <a href="https://www.houzz.com/pro/sakshamassociates" target="_blank" rel="noopener noreferrer"><FaHouzz className='social rounded-full border hover:border-[#D88E6C]'/></a>
          </div>

          <div className='flex gap-[0.2rem] justify-start items-center md:text-xl base social'>
            <a href="http://linktr.ee/sakshamassociates" target="_blank" rel="noopener noreferrer" className='flex gap-[0.2rem] justify-start items-center border px-2 py-1 rounded-xl hover:border-[#D88E6C]'> 
              <PiLinktreeLogoBold/>
              <span>Link Tree</span>
            </a>
          </div>
        </div>

        <div className='md:w-2/3 w-[100%] my-4 flex justify-center md:gap-10 gap-3 link md:text-base text-sm'>
          <ul>
            <Link href="/"><li className='font-bold'>Home</li></Link>
            <Link href="/#services"><li>Services</li></Link>
            <Link href="/#features"><li>Features</li></Link>
            <Link href="/#benefits"><li>Benefits</li></Link>
          </ul>

          <ul>
            <Link href="/About"><li className='font-bold'>About</li></Link>
            <Link href="/About#founders"><li>Founders</li></Link>
            <Link href="/About#stats"><li>Stats</li></Link>
            <Link href="/Testimonials"><li>Testimonials</li></Link>
          </ul>

          <ul>
            <Link href="/Portfolio"><li className='font-bold'>Projects</li></Link>
            <Link href="/Residential"><li>Residential</li></Link>
            <Link href="/Commercial"><li>Commercial</li></Link>
            <Link href="/Hospitality"><li>Hospitality</li></Link>
            <Link href="/Portfolio"><li>Retail Spaces</li></Link>
            <Link href="/Factories"><li>Factories</li></Link>
          </ul>

          <ul>
            <Link href="/Contact"><li className='font-bold'>Contact Us</li></Link>
            <Link href="/Portfolio#hiw"><li>How it Works</li></Link>
            <Link href="/Portfolio#future"><li>Futuristic Designs</li></Link>
          </ul>
        </div>
      </div>

      <div>
        <p className='md:text-lg text-base'>&copy; Saksham Associates 2025 | All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer

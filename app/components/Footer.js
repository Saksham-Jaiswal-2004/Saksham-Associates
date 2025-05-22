"use client"
import React from 'react'
import Link from 'next/link'
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { AiOutlinePinterest } from "react-icons/ai";
import { FaHouzz } from "react-icons/fa";
import { PiLinktreeLogoBold } from "react-icons/pi";
import Image from 'next/image'
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const Footer = () => {

  const pathname = usePathname();
  const isAuthPage = pathname === '/login' || pathname === '/signup';

  useEffect(() => {
    const foot = document.getElementById('Footer')

    if (isAuthPage) {
      foot.classList.add('hide');
    }
  }, []);

  return (
    <div className='h-fit bg3 flex flex-col justify-center items-center' id='Footer'>
      <div className='flex flex-wrap justify-center items-center w-full p-2'>
        <div className='flex flex-col md:w-1/3 w-[100%] my-5 justify-center items-center'>
          <div className='flex justify-center items-center gap-2 flex-wrap'>
            <Image
              src="/images/SALogoGreen.png"
              alt="Saksham Associates Logo"
              width={50}
              height={50}
              className='md:w-[50px] w-[40px] h-auto'
            />
            <h1 className='md:text-4xl text-2xl my-5 signature'>Saksham Associates</h1>
          </div>

          <div className='flex gap-5 justify-start items-center md:text-4xl text-3xl mb-5'>
            <a href="https://wa.me/919038415889" aria-label='WhatsApp' target="_blank" rel="noopener noreferrer"><FaWhatsapp className='social rounded-full' /></a>
            <a href="https://www.instagram.com/sakshamassociates/" aria-label='Instagram' target="_blank" rel="noopener noreferrer"><FaInstagram className='social rounded-full' /></a>
            <a href="https://www.linkedin.com/company/sakshamassociates/" aria-label='LinkedIn' target="_blank" rel="noopener noreferrer"><CiLinkedin className='social rounded-full' /></a>
            <a href="https://in.pinterest.com/saksham_associates/" aria-label='Pinterest' target="_blank" rel="noopener noreferrer"><AiOutlinePinterest className='social rounded-full' /></a>
            <a href="https://www.houzz.com/pro/sakshamassociates" aria-label='Houzz' target="_blank" rel="noopener noreferrer"><FaHouzz className='social rounded-full border hover:border-[#D88E6C]' /></a>
          </div>

          <div className='flex gap-[0.2rem] justify-start items-center md:text-xl base social'>
            <a href="http://linktr.ee/sakshamassociates" target="_blank" rel="noopener noreferrer" className='flex gap-[0.2rem] justify-start items-center border px-2 py-1 rounded-xl hover:border-[#D88E6C]'>
              <PiLinktreeLogoBold />
              <span>Link Tree</span>
            </a>
          </div>
        </div>

        <div className='md:w-2/3 w-[100%] my-4 flex justify-center md:gap-10 gap-3 link md:text-base text-sm'>
          <ul>
            <li className='font-bold'><Link href="/">Home</Link></li>
            <li><Link href="/#services">Services</Link></li>
            <li><Link href="/#features">Features</Link></li>
            <li><Link href="/#benefits">Benefits</Link></li>
          </ul>

          <ul>
            <li className='font-bold'><Link href="/About">About</Link></li>
            <li><Link href="/About#founders">Founders</Link></li>
            <li><Link href="/About#stats">Stats</Link></li>
            <li><Link href="/Testimonials">Testimonials</Link></li>
          </ul>

          <ul>
            <li className='font-bold'><Link href="/Portfolio">Projects</Link></li>
            <li><Link href="/Residential">Residential</Link></li>
            <li><Link href="/Commercial">Commercial</Link></li>
            <li><Link href="/Hospitality">Hospitality</Link></li>
            <li><Link href="/Portfolio">Retail Spaces</Link></li>
            <li><Link href="/Factories">Factories</Link></li>
          </ul>

          <ul>
            <li className='font-bold'><Link href="/Contact">Contact Us</Link></li>
            <li><Link href="/Portfolio#hiw">How it Works</Link></li>
            <li><Link href="/Portfolio#future">Futuristic Designs</Link></li>
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

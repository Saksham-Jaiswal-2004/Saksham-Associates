import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { AiOutlinePinterest } from "react-icons/ai";
import { FaHouzz } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='h-fit bg3 flex flex-col justify-center items-center'>
      <div className='flex flex-wrap w-full p-2'>
        <div className='flex flex-col md:w-1/3 w-[90%] my-5 justify-center items-center'>
          <h1 className='md:text-4xl text-2xl my-5 signature'>Saksham Associates</h1>

          <div className='flex gap-5 justify-start items-center md:text-4xl text-3xl'>
            <a href="https://wa.me/919038415889" target="_blank" rel="noopener noreferrer"><FaWhatsapp className='social rounded-full'/></a>
            <a href="https://www.instagram.com/sakshamassociates/" target="_blank" rel="noopener noreferrer"><FaInstagram className='social rounded-full'/></a>
            <a href="https://" target="_blank" rel="noopener noreferrer"><CiLinkedin className='social rounded-full'/></a>
            <a href="https://in.pinterest.com/saksham_associates/" target="_blank" rel="noopener noreferrer"><AiOutlinePinterest className='social rounded-full'/></a>
            <a href="https://www.houzz.com/pro/sakshamassociates" target="_blank" rel="noopener noreferrer"><FaHouzz className='social rounded-full border'/></a>
          </div>
        </div>

        <div className='md:w-2/3 w-[90%] my-4 flex justify-center md:gap-10 gap-2 link'>
          <ul>
            <li>Home</li>
          </ul>

          <ul>
            <li>About</li>
          </ul>

          <ul>
            <li>Projects</li>
          </ul>

          <ul>
            <li>Contact Us</li>
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

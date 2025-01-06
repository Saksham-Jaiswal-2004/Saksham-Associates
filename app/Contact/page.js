"use client"
import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import Link from 'next/link'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Features from '../components/Features';

const page = () => {

  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <div className='h-fit' id='contact'>
      {/* Title */}
      <div className='h-screen flex justify-start items-end bg2'>
        <div className='absolute h-full md:w-[55%] w-[100%] bg-[#0000009e] z-[1]'></div>
        <h1 className='md:text-6xl text-4xl mx-6 my-28 z-[2] head3'>We’d Love to Hear From You!</h1>
      </div>

      {/* Text */}
      <div className='flex flex-wrap md:flex-row flex-col-reverse justify-center md:items-start items-center my-24'>
        <div className=' h-full md:w-1/2 w-[90%] md:px-10 md:py-4 p-2'>
          <h1 className='text-4xl my-10 head'>Get in Touch and Let’s Get Started</h1>
          <p className='md:text-lg text-base'>We’re passionate about transforming ideas into stunning, functional spaces. Whether you’re looking to revamp a single room or reimagine an entire property, we’re here to help. Let’s start the journey to creating your perfect space—together.</p>
          <p className='my-2 md:text-lg text-base'>Ready to transform your space? <span className='text-[#c08b00]'>Call us today to schedule a personalized consultation</span> and let’s bring your vision to life!</p>
          <p className='my-2 md:text-lg text-base'>Your perfect space is just a conversation away. Whether you’re envisioning a cozy retreat, a chic office, or a luxurious home, we’re here to bring it to life with creativity, precision, and passion.</p>

          <div className='flex justify-start items-center mt-4 md:text-lg text-base'>
            <FaPhoneAlt /> - +91-9038415889/ +91-9831793459
          </div>

          <div className='flex justify-start items-center mb-4 md:text-lg text-base'>
            <MdEmail /> - sakshamassociates.jaiswal@gmail.com
          </div>

          <div className="md:h-[400px] h-[250px] w-[100%]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d460.39082571626733!2d88.40752596267707!3d22.611746926839615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1735725848788!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Contact Form */}
        <div className='md:w-1/2 w-[95%] flex flex-col justify-center items-center'>
          <form action="" className='flex flex-col justify-center items-center md:w-4/5 w-full bg5 md:mx-10 mx-1 my-2 rounded-xl md:p-8 p-2'>
            <div>
              <h1 className='text-3xl my-4'>Let's Get Connected</h1>
            </div>

            <div className='flex flex-col justify-start md:w-[65%] w-[80%]'>

              <div className='my-5 flex flex-col w-full'>
                <label htmlFor="name" className='text-lg py-1 head3'>Name</label>
                <input name='name' type="text" placeholder='Enter your name' className='focus:outline-none focus:border-b' required/>
              </div>

              <div className='my-5 flex flex-col w-full'>
                <label htmlFor="phone" className='text-lg py-1 head3'>Phone</label>
                <PhoneInput name="phone" defaultCountry="IN" value={phoneNumber} onChange={setPhoneNumber} international countrySelectProps={{ unicodeflagclassname: 'emoji-flag' }} className='focus:outline-none focus:border-b'/>
              </div>

              <div className='my-5 flex flex-col w-full'>
                <label htmlFor="email" className='text-lg py-1 head3'>Email</label>
                <input type="email" name="email" id="" placeholder='Enter your email-id' className='focus:outline-none focus:border-b' required/>
              </div>

              <div className='my-5 flex flex-col w-full'>
                <label htmlFor="query" className='text-lg py-1 head3'>Query</label>
                <textarea name="query" id="" placeholder='Enter your queries...' className='focus:outline-none focus:border-b'></textarea>
              </div>

              <div className='flex flex-wrap w-full justify-end gap-4'>
                <button className='button3 px-4 py-1 rounded-xl md:text-lg text-base'>Submit</button>
                <button className='button3 px-4 py-1 rounded-xl md:text-lg text-base'>Reset</button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <Features/>
    </div>
  )
}

export default page

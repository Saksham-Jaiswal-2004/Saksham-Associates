"use client"
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Link from 'next/link'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    const navbar = document.getElementById('navbar');
    
    window.onscroll = () => {
      if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };
  }, []);

  return (
    <div>
      <nav className='flex justify-between items-center py-2 px-4 fixed top-0 w-full z-50' id='navbar'>
        <div>
            <h1 className='md:text-3xl tect-lg signature m-1'><Link href="/">Saksham Associates</Link></h1>
        </div>

        <div className='flex gap-8 items-center'>
          <ul className='flex gap-4'>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/Portfolio">Projects</Link></li>
              <li><Link href="/About">About</Link></li>
              <li><Link href="/Contact">Contact</Link></li>
          </ul>
  
          <div className='flex gap-4'>
              <Link href="/" className='navButton px-3 py-1 rounded-xl'>Get Free Quote</Link>
              <Link href="/" className='navButton px-3 py-1 rounded-xl'>Book Consultation</Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar

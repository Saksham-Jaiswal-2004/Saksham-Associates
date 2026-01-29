"use client"
import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const Navbar = () => {

  const divRef = useRef(null);
  const [divWidth, setDivWidth] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isAuthPage = pathname === '/login' || pathname === '/signup';

  const updateSizes = () => {
    if (divRef.current) {
      setDivWidth(divRef.current.offsetWidth);
    }
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    updateSizes();

    window.addEventListener("resize", updateSizes);

    return () => {
      window.removeEventListener("resize", updateSizes);
    };
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const navbar = document.getElementById('navbar');
    const collapsibleNavbar = document.getElementById('collapse')
    const hello_button = document.getElementById('helloBtn');
    const nav_button = document.getElementById('navBtn');

    if (isAuthPage) {
      navbar.classList.add('hide');
      collapsibleNavbar.classList.add('hide');
    }
    if (!isAuthPage) {
      navbar.classList.remove('hide');
      collapsibleNavbar.classList.remove('hide');
    }

    window.onscroll = () => {
      if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
        hello_button.classList.remove('helloScrolled');
        nav_button.classList.remove('navScrolled');
      } else {
        navbar.classList.remove('scrolled');
        hello_button.classList.add('helloScrolled');
        nav_button.classList.add('navScrolled');
      }
    };
  }, []);

  return (
    <div>
      <nav className='flex justify-between items-center py-2 px-4 fixed top-0 left-0 w-screen z-[101]' id='navbar'>
        <div>
          <h1 className='md:text-xl text-lg signature m-1'><Link href="/">Saksham Associates</Link></h1>
        </div>

        <div className='flex md:gap-10 gap-4 items-center justify-center z-[103]'>
          {/* <div className='flex gap-4'>
            <Link href="/auth/signup" onClick={closeMenu} className='font-light text-lg md:block hidden hover:text-[#d88e6c]'>Sign Up</Link>
            <Link href="/auth/login" onClick={closeMenu} className='font-light text-lg md:block hidden hover:text-[#d88e6c]'>Login</Link>
          </div> */}

          <Link href="#Footer" id='helloBtn' className='md:text-lg text-xs social border rounded-[0.5rem] md:px-3 px-2 py-1 hover:border-[#D88E6C]'>Say Hello</Link>
          <button id='navBtn' className="md:text-3xl text-2xl focus:outline-none" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">{isOpen ? "✖" : "☰"}</button>
        </div>
      </nav>

      {/* <div ref={divRef} className={`fixed top-0 left-0 w-fit h-full backdrop-blur-md text-white flex flex-col items-center justify-center space-y-8 text-2xl transition-transform duration-300 z-40 ${isOpen ? `translate-x-[-${screenWidth - divWidth}px]` : "translate-x-[100vw]"}`}> */}
      <div ref={divRef} id='collapse' className={`fixed py-4 px-8 z-[102] top-0 left-0 w-fit h-full backdrop-blur-md bg-[#33333380] text-white flex flex-col items-center justify-start space-y-8 text-2xl transition-transform duration-300 z-40"}`} style={{ transform: isOpen ? `translateX(${screenWidth - divWidth - 0}px)` : `translateX(${screenWidth}px)`, }}>
        <button className="absolute top-4 right-4 text-3xl focus:outline-none text-[#e4ddcf]" onClick={() => setIsOpen(false)} aria-label="Close Menu">✖</button>

        <ul className='flex flex-col justify-center mt-14 text-lg items-start gap-4'>
          <li><Link href="/" onClick={closeMenu}>Home</Link></li>
          {/* <li><Link href="/Portfolio" onClick={closeMenu}>Projects</Link></li> */}
          <li><Link href="/About" onClick={closeMenu}>About</Link></li>
          <li><Link href="/Contact" onClick={closeMenu}>Contact</Link></li>
          {/* <li><Link href="/auth/login" onClick={closeMenu}>Login/SignUp</Link></li> */}
        </ul>
        <div className='flex flex-col justify-center items-center gap-4'>
          <Link href="#cta" className='navButton px-2 py-1 text-base rounded-xl' onClick={closeMenu}>Get Free Quote</Link>
          <Link href="/Contact" className='navButton px-2 py-1 text-base rounded-xl' onClick={closeMenu}>Book Consultation</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar

// "use client"
// import React from 'react'
// import { useState } from 'react';
// import { useEffect } from 'react';
// import Link from 'next/link'

// const Navbar = () => {

//   const [isOpen, setIsOpen] = useState(false);

//   const closeMenu = () => {
//     setIsOpen(false);
//   };
//   useEffect(() => {
//     const navbar = document.getElementById('navbar');
    
//     window.onscroll = () => {
//       if (window.scrollY > 100) {
//         navbar.classList.add('scrolled');
//       } else {
//         navbar.classList.remove('scrolled');
//       }
//     };
//   }, []);

//   return (
//     <div>
//       <nav className='flex justify-between items-center py-2 px-4 fixed top-0 w-full z-50' id='navbar'>
//         <div>
//             <h1 className='md:text-3xl tect-lg signature m-1'><Link href="/">Saksham Associates</Link></h1>
//         </div>

//         <div className='flex gap-8 items-center'>
//           <ul className='flex gap-4'>
//               <li><Link href="/">Home</Link></li>
//               <li><Link href="/Portfolio">Projects</Link></li>
//               <li><Link href="/About">About</Link></li>
//               <li><Link href="/Contact">Contact</Link></li>
//           </ul>
  
//           <div className='flex gap-4'>
//               <Link href="#cta" className='navButton px-3 py-1 rounded-xl'>Get Free Quote</Link>
//               <Link href="/Contact" className='navButton px-3 py-1 rounded-xl'>Book Consultation</Link>
//           </div>
//         </div>
//       </nav>
//     </div>
//   )
// }

// export default Navbar


"use client"
import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import Link from 'next/link'

const Navbar = () => {

  const divRef = useRef(null);
  const [divWidth, setDivWidth] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const updateSizes = () => {
    if (divRef.current) {
      setDivWidth(divRef.current.offsetWidth); // Update the div's width
    }
    setScreenWidth(window.innerWidth); // Update the screen's width
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
      <nav className='flex justify-between items-center py-2 px-4 fixed top-0 w-full z-[101]' id='navbar'>
        <div>
            <h1 className='md:text-3xl tect-lg signature m-1'><Link href="/">Saksham Associates</Link></h1>
        </div>

        <div className='flex md:gap-8 gap-3 items-center justify-center'>
          <Link href="#Footer" className='md:text-xl text-xs social border rounded-2xl md:px-3 px-2 py-1 hover:border-[#D88E6C]'>Say Hello</Link>
          <button className="md:text-3xl text-2xl focus:outline-none"onClick={() => setIsOpen(!isOpen)}aria-label="Toggle Menu">{isOpen ? "✖" : "☰"}</button>
        </div>
      </nav>

      {/* <div ref={divRef} className={`fixed top-0 left-0 w-fit h-full backdrop-blur-md text-white flex flex-col items-center justify-center space-y-8 text-2xl transition-transform duration-300 z-40 ${isOpen ? `translate-x-[-${screenWidth - divWidth}px]` : "translate-x-[100vw]"}`}> */}
      <div ref={divRef} className={`fixed py-4 px-8 z-[100] top-0 left-0 w-fit h-full backdrop-blur-md text-white flex flex-col items-center justify-start space-y-8 text-2xl transition-transform duration-300 z-40"}`}  style={{transform: isOpen ? `translateX(${screenWidth - divWidth - 4}px)` : `translateX(${screenWidth}px)`,}}>
        {/* <button className="absolute top-4 right-4 text-3xl focus:outline-none"onClick={() => setIsOpen(false)}aria-label="Close Menu">✖</button> */}

        <ul className='flex flex-col justify-center mt-14 text-lg items-start gap-4'>
          <li><Link href="/" onClick={closeMenu}>Home</Link></li>
          <li><Link href="/Portfolio" onClick={closeMenu}>Projects</Link></li>
          <li><Link href="/About" onClick={closeMenu}>About</Link></li>
          <li><Link href="/Contact" onClick={closeMenu}>Contact</Link></li>
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

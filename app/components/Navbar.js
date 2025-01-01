import React from 'react'
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav className='flex justify-between items-center py-2 px-4 fixed top-0 w-full z-50 scrolled'>
        <div>
            <h1 className='md:text-xl tect-lg font-bold'><Link href="/">Saksham Associates</Link></h1>
        </div>

        <div className='flex gap-8'>
          <ul className='flex gap-4'>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/About">About</Link></li>
              <li><Link href="/Portfolio">Projects</Link></li>
              <li><Link href="/Contact">Contact</Link></li>
          </ul>
  
          <div className='flex gap-6'>
              <Link href="/">Get Free Quote</Link>
              <Link href="/">Book Consultation</Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar

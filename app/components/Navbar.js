"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FaWhatsapp, FaHouzz } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { AiOutlinePinterest } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === '/';
  const isAuthPage = pathname === '/login' || pathname === '/signup' || pathname.startsWith('/auth/');

  useEffect(() => {
    if (isAuthPage) return;

    const handleScroll = () => {
      if (window.scrollY > 2000) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    if (!isHomePage) {
      setIsScrolled(true);
      return;
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHomePage, isAuthPage]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (isAuthPage) return null;

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Backdrop overlay for drawer */}
      <div
        className={`fixed inset-0 bg-[#1C1917]/60 backdrop-blur-sm z-[101] transition-opacity duration-500 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        onClick={closeMenu}
      />

      {/* Main Navbar */}
      <nav
        className={`flex justify-between items-center fixed top-0 left-0 w-full z-[100] transition-all duration-500 ease-in-out px-6 md:px-12 py-4 ${isScrolled
          ? 'bg-[#FAF9F6]/90 backdrop-blur-md border-b border-[#495A54]/10 shadow-sm text-[#1C1917]'
          : 'bg-transparent text-white'
          }`}
      >
        {/* Brand Logo Signature */}
        <Link href="/" className="flex items-center gap-3 group" onClick={closeMenu}>
          <div className="relative w-8 h-8 md:w-9 md:h-9 overflow-hidden rounded-full border border-luxury-gold/30 group-hover:scale-105 transition-transform duration-300">
            <Image
              src="/images/SALOGO.svg"
              alt="Saksham Associates Logo"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif tracking-widest text-sm md:text-base font-semibold leading-tight">
              SAKSHAM
            </span>
            <span className="font-sans tracking-[0.45em] text-[8px] md:text-[10px] text-[#C08B00] uppercase font-bold leading-tight">
              ASSOCIATES
            </span>
          </div>
        </Link>

        {/* Action Button & Menu Trigger */}
        <div className="flex items-center gap-6 z-[103]">
          {/* Say Hello Button */}
          <Link
            href="#Footer"
            className={`hidden sm:inline-block text-[10px] md:text-xs tracking-widest uppercase border px-4 py-2 transition-all duration-300 font-sans ${isScrolled
              ? 'border-[#1C1917]/20 text-[#1C1917] hover:border-[#C08B00] hover:text-[#C08B00]'
              : 'border-white/20 text-white hover:border-[#C08B00] hover:text-[#C08B00]'
              }`}
          >
            Say Hello
          </Link>

          {/* Animated Hamburger Trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <span className={`block w-6 h-[1.5px] transition-all duration-350 ease-out ${isOpen
              ? 'rotate-45 translate-y-[7.5px] bg-[#FAF9F6]'
              : isScrolled ? 'bg-[#1C1917]' : 'bg-[#FAF9F6]'
              }`} />
            <span className={`block w-6 h-[1.5px] transition-all duration-350 ease-out ${isOpen
              ? 'opacity-0 bg-[#FAF9F6]'
              : isScrolled ? 'bg-[#1C1917]' : 'bg-[#FAF9F6]'
              }`} />
            <span className={`block w-6 h-[1.5px] transition-all duration-350 ease-out ${isOpen
              ? '-rotate-45 -translate-y-[7.5px] bg-[#FAF9F6]'
              : isScrolled ? 'bg-[#1C1917]' : 'bg-[#FAF9F6]'
              }`} />
          </button>
        </div>
      </nav>

      {/* Overhauled Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm md:max-w-md bg-[#00494d] text-[#FAF9F6] z-[102] shadow-2xl transition-transform duration-500 ease-in-out flex flex-col justify-between p-8 md:p-12 ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        {/* Top Header of Menu */}
        <div className="flex justify-between items-center pb-6 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Image
              src="/images/SALOGO.svg"
              alt="Saksham Associates Logo"
              width={28}
              height={28}
              className="h-7 w-auto filter brightness-0 invert"
            />
            <span className="font-serif tracking-widest text-base font-semibold">SAKSHAM</span>
          </div>
          <button
            className="text-stone-450 hover:text-[#C08B00] text-2xl focus:outline-none transition-colors duration-300"
            onClick={closeMenu}
            aria-label="Close Menu"
          >
            ✖
          </button>
        </div>

        {/* Large Navigation Links */}
        <div className="my-auto py-8">
          <span className="editorial-subtitle text-[#D88E6C] text-[10px] tracking-[0.3em] uppercase block mb-6">Navigation Menu</span>
          <ul className="flex flex-col gap-6 font-serif">
            {[
              { label: 'Home', href: '/' },
              { label: 'Projects', href: '/Portfolio' },
              { label: 'About', href: '/About' },
              { label: 'Testimonials', href: '/Testimonials' },
              { label: 'Contact', href: '/Contact' }
            ].map((link, idx) => (
              <li key={link.href} className="overflow-hidden group">
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className="flex items-center gap-4 text-2xl md:text-3xl font-light hover:text-[#C08B00] transition-all duration-300 hover:translate-x-2"
                >
                  <span className="text-xs font-sans tracking-widest text-[#D88E6C] opacity-60">0{idx + 1}</span>
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Drawer Footer and Contact Info */}
        <div className="pt-6 border-t border-white/10 flex flex-col gap-6">
          <div className="flex flex-col gap-1.5">
            <span className="text-[#D88E6C] text-[9px] tracking-widest font-sans uppercase">Contact Details</span>
            <a href="tel:+919038415889" className="text-xs font-sans text-stone-300 hover:text-white transition-colors">+91 90384 15889</a>
            <a href="mailto:info@sakshamassociates.in" className="text-xs font-sans text-stone-300 hover:text-white transition-colors">info@sakshamassociates.in</a>
          </div>

          {/* Social icons row */}
          <div className="flex gap-4 text-xl text-stone-300">
            <a href="https://wa.me/919038415889" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer" className="hover:text-[#C08B00] transition-colors"><FaWhatsapp /></a>
            <a href="https://www.instagram.com/sakshamassociates/" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="hover:text-[#C08B00] transition-colors"><FaInstagram /></a>
            <a href="https://www.linkedin.com/company/sakshamassociates/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="hover:text-[#C08B00] transition-colors"><CiLinkedin /></a>
            <a href="https://in.pinterest.com/saksham_associates/" aria-label="Pinterest" target="_blank" rel="noopener noreferrer" className="hover:text-[#C08B00] transition-colors"><AiOutlinePinterest /></a>
            <a href="https://www.houzz.com/pro/sakshamassociates" aria-label="Houzz" target="_blank" rel="noopener noreferrer" className="hover:text-[#C08B00] transition-colors"><FaHouzz /></a>
          </div>

          {/* Action CTAs */}
          <div className="grid grid-cols-2 gap-3 mt-2">
            <Link
              href="/#cta"
              onClick={closeMenu}
              className="text-center bg-[#C08B00] text-white hover:bg-[#d19b15] py-2 px-3 text-[10px] tracking-wider uppercase font-semibold font-sans transition-all duration-300"
            >
              Free Quote
            </Link>
            <Link
              href="/Contact"
              onClick={closeMenu}
              className="text-center bg-transparent border border-white/20 text-[#FAF9F6] hover:border-[#C08B00] hover:text-[#C08B00] py-2 px-3 text-[10px] tracking-wider uppercase font-semibold font-sans transition-all duration-300"
            >
              Consultation
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

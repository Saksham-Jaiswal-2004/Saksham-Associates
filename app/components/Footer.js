"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FaWhatsapp, FaHouzz } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { AiOutlinePinterest } from "react-icons/ai";
import { PiLinktreeLogoBold } from "react-icons/pi";

const Footer = () => {
  const pathname = usePathname();
  const isAuthPage = pathname === '/login' || pathname === '/signup' || pathname.startsWith('/auth/');

  if (isAuthPage) return null;

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1C1917] text-[#FAF9F6] border-t border-stone-900 pt-20 pb-8 px-6 md:px-12 relative overflow-hidden" id="Footer">

      {/* Decorative subtle background visual pattern */}
      <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#FAF9F6]/5 filter blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 items-start relative z-10">

        {/* Column 1: Brand Info (Spans 4 cols on desktop) */}
        <div className="lg:col-span-4 flex flex-col gap-6">

          {/* Logo brand signature */}
          <Link href="/" className="flex items-center gap-3 w-fit group">
            <div className="relative w-10 h-10 overflow-hidden rounded-full border border-luxury-gold/30 group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/SALOGO.svg"
                alt="Saksham Associates Logo"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif tracking-widest text-lg font-semibold text-[#FAF9F6] leading-tight">
                SAKSHAM
              </span>
              <span className="font-sans tracking-[0.375em] text-[12px] text-[#C08B00] uppercase font-bold leading-tight">
                ASSOCIATES
              </span>
            </div>
          </Link>

          <p className="font-serif italic text-stone-400 text-sm leading-relaxed max-w-sm mt-1">
            &quot;Crafting narratives through space and light.&quot;
          </p>

          <div className="flex flex-col gap-2.5 text-xs text-stone-400 mt-2 font-sans">
            <span className="text-[#C08B00] text-[9px] tracking-widest uppercase font-semibold">Registered Address</span>
            <p className="text-stone-400 leading-relaxed max-w-xs">
              Kolkata, West Bengal, India
            </p>
            <div className="flex flex-col gap-1 mt-2">
              <span className="text-[#C08B00] text-[9px] tracking-widest uppercase font-semibold">General Inquiries</span>
              <a href="mailto:info@sakshamassociates.in" className="text-stone-450 hover:text-[#C08B00] transition-colors duration-300">info@sakshamassociates.in</a>
              <a href="tel:+919038415889" className="text-stone-450 hover:text-[#C08B00] transition-colors duration-300">+91 90384 15889</a>
            </div>
          </div>
        </div>

        {/* Column 2: Navigation Links (Spans 2 cols on desktop) */}
        <div className="lg:col-span-2 flex flex-col gap-4 font-sans">
          <span className="text-[#C08B00] text-[10px] tracking-[0.25em] uppercase font-semibold">Studio</span>
          <ul className="flex flex-col gap-2.5 text-sm text-stone-400">
            <li><Link href="/" className="hover:text-[#D88E6C] hover:translate-x-1 inline-block transition-all duration-300 font-sans">Home</Link></li>
            <li><Link href="/About" className="hover:text-[#D88E6C] hover:translate-x-1 inline-block transition-all duration-300 font-sans">About Us</Link></li>
            <li><Link href="/About#founders" className="hover:text-[#D88E6C] hover:translate-x-1 inline-block transition-all duration-300 font-sans">Leadership</Link></li>
            <li><Link href="/Testimonials" className="hover:text-[#D88E6C] hover:translate-x-1 inline-block transition-all duration-300 font-sans">Testimonials</Link></li>
            <li><Link href="/Contact" className="hover:text-[#D88E6C] hover:translate-x-1 inline-block transition-all duration-300 font-sans">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: Design Typologies (Spans 3 cols on desktop) */}
        <div className="lg:col-span-3 flex flex-col gap-4 font-sans">
          <span className="text-[#C08B00] text-[10px] tracking-[0.25em] uppercase font-semibold">Typologies</span>
          <ul className="flex flex-col gap-2.5 text-sm text-stone-400">
            <li><Link href="/Residential" className="hover:text-[#D88E6C] hover:translate-x-1 inline-block transition-all duration-300 font-sans">Private Sanctuaries (Residential)</Link></li>
            <li><Link href="/Commercial" className="hover:text-[#D88E6C] hover:translate-x-1 inline-block transition-all duration-300 font-sans">Creative Workspace (Commercial)</Link></li>
            <li><Link href="/Hospitality" className="hover:text-[#D88E6C] hover:translate-x-1 inline-block transition-all duration-300 font-sans">Leisure Architectures (Hospitality)</Link></li>
            <li><Link href="/Restaurants" className="hover:text-[#D88E6C] hover:translate-x-1 inline-block transition-all duration-300 font-sans">Culinary Stories (Restaurants & Cafes)</Link></li>
            <li><Link href="/Retail" className="hover:text-[#D88E6C] hover:translate-x-1 inline-block transition-all duration-300 font-sans">Boutique Galleries (Retail)</Link></li>
            <li><Link href="/Factories" className="hover:text-[#D88E6C] hover:translate-x-1 inline-block transition-all duration-300 font-sans">Smart Factories (Industrial)</Link></li>
          </ul>
        </div>

        {/* Column 4: CTA & Connect (Spans 3 cols on desktop) */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          <div className="flex flex-col gap-3 font-sans">
            <span className="text-[#C08B00] text-[10px] tracking-[0.25em] uppercase font-semibold">Begin Project</span>
            <Link
              href="/Contact"
              className="luxury-btn luxury-btn-dark py-3 px-4 text-center text-xs tracking-widest uppercase block transition-all duration-300 rounded-none w-full"
            >
              <span>Book Spatial Audit</span>
            </Link>
          </div>

          <div className="flex flex-col gap-3 font-sans">
            <span className="text-[#C08B00] text-[10px] tracking-[0.25em] uppercase font-semibold">Social Archive</span>

            {/* Social Icons row */}
            <div className="flex flex-wrap gap-3 text-lg mt-1">
              <a href="https://wa.me/919038415889" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-stone-800 hover:border-[#D88E6C] hover:text-[#D88E6C] flex items-center justify-center transition-all duration-300"><FaWhatsapp /></a>
              <a href="https://www.instagram.com/sakshamassociates/" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-stone-800 hover:border-[#D88E6C] hover:text-[#D88E6C] flex items-center justify-center transition-all duration-300"><FaInstagram /></a>
              <a href="https://www.linkedin.com/company/sakshamassociates/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-stone-800 hover:border-[#D88E6C] hover:text-[#D88E6C] flex items-center justify-center transition-all duration-300"><CiLinkedin /></a>
              <a href="https://in.pinterest.com/saksham_associates/" aria-label="Pinterest" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-stone-800 hover:border-[#D88E6C] hover:text-[#D88E6C] flex items-center justify-center transition-all duration-300"><AiOutlinePinterest /></a>
              <a href="https://www.houzz.com/pro/sakshamassociates" aria-label="Houzz" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-stone-800 hover:border-[#D88E6C] hover:text-[#D88E6C] flex items-center justify-center transition-all duration-300"><FaHouzz /></a>
            </div>

            {/* LinkTree Button */}
            <a
              href="http://linktr.ee/sakshamassociates"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-xs border border-stone-800 hover:border-[#D88E6C] text-stone-300 hover:text-[#D88E6C] py-2 px-3 transition-all duration-300 font-sans mt-1 w-full"
            >
              <PiLinktreeLogoBold />
              <span className="tracking-widest uppercase text-[10px]">Link Tree</span>
            </a>
          </div>
        </div>

      </div>

      {/* Copyright area with top line */}
      <div className="max-w-7xl mx-auto border-t border-stone-800/60 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10 font-sans">
        <p className="text-[11px] text-stone-500 tracking-wide">
          &copy; {currentYear} Saksham Associates. All Rights Reserved. Custom Craftsmanship from Kolkata.
        </p>

        {/* Back to top smooth scroll button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-stone-500 hover:text-[#C08B00] text-[10px] tracking-[0.2em] uppercase transition-colors duration-300 flex items-center gap-2 focus:outline-none"
        >
          <span>Back to top</span>
          <span className="text-xs">↑</span>
        </button>
      </div>

    </footer>
  );
};

export default Footer;

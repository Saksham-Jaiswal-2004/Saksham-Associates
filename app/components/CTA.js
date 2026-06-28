import React from 'react';
import Link from 'next/link';

const CTA = () => {
  return (
    <div className="max-w-6xl mx-auto my-0 md:my-28 px-4 md:px-6 relative z-10" id="cta">
      <div className="relative overflow-hidden rounded-2xl bg-[#00494d] border border-white/10 px-8 py-16 md:py-20 text-center flex flex-col items-center justify-center shadow-2xl">

        {/* Subtle background decorative radial gradient blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#D88E6C]/10 filter blur-[80px] pointer-events-none" />

        {/* Category subtitle */}
        <span className="editorial-subtitle text-[#D88E6C] text-[10px] md:text-xs tracking-[0.3em] uppercase block mb-4 relative z-10">
          Inquiries & Commissions
        </span>

        {/* Main Title */}
        <h2 className="editorial-title text-3xl md:text-5xl lg:text-6xl text-white leading-tight font-light max-w-3xl mb-6 relative z-10">
          Let&apos;s build your <br />
          <span className="editorial-serif-italic text-stone-200">dream space.</span>
        </h2>

        {/* Description */}
        <p className="text-stone-300 text-sm md:text-base leading-relaxed font-sans max-w-xl mb-8 relative z-10">
          Collaborate with Mrs. Madhu Jaiswal and our principal designers to map out, define, and elevate your address in Kolkata. Let us craft physical harmony tailored to your daily life.
        </p>

        {/* Custom Luxury CTA Button */}
        <div className="relative z-10 font-sans">
          <Link href="/Contact" className="luxury-btn luxury-btn-dark py-4 px-8 text-xs tracking-widest uppercase inline-block rounded-none font-semibold transition-all duration-300">
            Book Spatial Audit
          </Link>
        </div>

      </div>
    </div>
  );
};

export default CTA;

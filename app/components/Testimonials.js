"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const testimonialList = [
  {
    quote: "Fantastic job done by Mrs. Madhu Jaiswal. I am too much happy with the new interiors. It's more than I expected. Carry on SAKSHAM ASSOCIATES.",
    name: "Saurav Banthia",
    designation: "Business Owner",
    src: "/images/service1.jpg"
  },
  {
    quote: "Marvelous job done by Mrs. Madhu Jaiswal and the entire team. The complete house interiors have been done very gracefully. Which is liked by each and everyone who's coming to my house.",
    name: "Sheetal Dassani",
    designation: "Model & Public Figure",
    src: "/images/service2.jpeg"
  },
  {
    quote: "Madhu ji has a curious mind which helps find custom solutions for challenging engagements. She has good command over her subject and business along with great energy and perseverance towards perfection.",
    name: "Jemin Doshi",
    designation: "Founder, Napcloud Sofas",
    src: "/images/service3.webp"
  },
  {
    quote: "I'm very satisfied with her services, as well as the format and discipline of work and execution. I found her extremely professional, and her nature is very warm that adds to her aura.",
    name: "Megha Sarayan",
    designation: "Owner, Modge (Land of Cakes)",
    src: "/images/service4.webp"
  },
  {
    quote: "She is a consummate professional and responsive. Me and my wife completely trust her judgement and have come to greatly appreciate her unique ability to make living spaces both functional and aesthetically pleasing.",
    name: "Sushil Kumar Modi",
    designation: "Hansal Holidays",
    src: "/images/service5.webp"
  },
  {
    quote: "The time taken to complete the project was less than the time taken by the client to explain her requirements. Commendable and appreciated work done in no time. Trustworthy and timely.",
    name: "Keshav Binani",
    designation: "Owner, Grand Events",
    src: "/images/service6.jpeg"
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] } }
};

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive(i => (i + 1) % testimonialList.length), 4800);
    return () => clearInterval(t);
  }, []);

  const item = testimonialList[active];

  return (
    <div className="py-28 md:py-40 px-6 md:px-12 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6"
        >
          <div className="flex flex-col gap-4">
            <span className="editorial-subtitle">CLIENT TRUST</span>
            <h2 className="editorial-title text-4xl md:text-5xl text-[#00494d]">
              Stories of<br />
              <span className="editorial-serif-italic font-normal">Inspired Spaces.</span>
            </h2>
          </div>
          <Link href="/Testimonials" className="luxury-btn self-start md:self-auto">
            <span>All Testimonials</span>
          </Link>
        </motion.div>

        {/* Main layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* Left: Large feature quote */}
          <div className="lg:col-span-7">
            <div className="min-h-[280px] relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }}
                  className="flex flex-col gap-6"
                >
                  {/* Large quote mark */}
                  <div className="text-[#C08B00] text-8xl font-serif leading-none select-none -mb-4">"</div>

                  {/* Quote */}
                  <blockquote className="editorial-serif-italic text-xl md:text-2xl text-stone-700 font-light leading-relaxed">
                    {item.quote}
                  </blockquote>

                  {/* Gold rule */}
                  <div className="w-12 h-[1px] bg-[#C08B00]" />

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden bg-stone-100 flex-shrink-0 shadow-sm ring-2 ring-[#C08B00]/30">
                      <Image
                        src={item.src}
                        alt={item.name}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="editorial-title text-lg text-[#00494d] font-light">{item.name}</span>
                      <span className="text-stone-400 text-xs font-sans tracking-wide">{item.designation}</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Progress indicators */}
            <div className="flex gap-2 mt-10">
              {testimonialList.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-[2px] rounded-full transition-all duration-500 focus:outline-none ${i === active ? 'w-10 bg-[#C08B00]' : 'w-3 bg-stone-300 hover:bg-stone-400'
                    }`}
                  aria-label={`View testimonial from ${testimonialList[i].name}`}
                />
              ))}
            </div>
          </div>

          {/* Right: Thumbnail list */}
          <div className="lg:col-span-5 flex flex-col gap-0 border-l border-luxury-muted pl-8">
            {testimonialList.map((t, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`flex items-center gap-4 py-5 border-b border-luxury-muted text-left group transition-all duration-300 focus:outline-none ${active === i ? '' : 'opacity-40 hover:opacity-70'
                  }`}
              >
                {/* Active marker */}
                <div
                  className={`w-[2px] self-stretch rounded-full flex-shrink-0 transition-all duration-300 ${active === i ? 'bg-[#C08B00]' : 'bg-transparent'
                    }`}
                />

                {/* Avatar */}
                <div className={`relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0 transition-all duration-300 ${active === i ? 'ring-2 ring-[#C08B00]/40' : ''
                  }`}>
                  <Image
                    src={t.src}
                    alt={t.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>

                {/* Name & role */}
                <div className="flex flex-col gap-0.5">
                  <span className={`editorial-title text-sm font-light transition-colors duration-300 ${active === i ? 'text-[#00494d]' : 'text-stone-500'
                    }`}>{t.name}</span>
                  <span className="text-stone-400 text-[10px] font-sans tracking-wide">{t.designation}</span>
                </div>

                {/* Active dot */}
                {active === i && (
                  <motion.div
                    layoutId="activeDot"
                    className="ml-auto w-1.5 h-1.5 rounded-full bg-[#C08B00] flex-shrink-0"
                  />
                )}
              </button>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
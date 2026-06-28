"use client"
import React from 'react'
import Seo from '../components/SEO'
import { motion } from 'framer-motion'
import Projects from '../components/Projects'
import Process from '../components/Process'
import Future from '../components/Future'
import Testimonials from '../components/Testimonials'
import ContactFull from '../components/ContactFull'
import Image from 'next/image'
import Link from 'next/link'

export default function PortfolioPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }
    }
  };

  return (
    <>
      <Seo
        title="Portfolio | Saksham Associates - Interior Design Projects"
        description="Explore our portfolio of residential, commercial, hospitality, and retail interior design projects in Kolkata. See how Saksham Associates transforms spaces."
        url="https://sakshamassociates.in/Portfolio"
        image="/images/SALOGO.svg"
        keywords="portfolio, interior design projects, Kolkata, Saksham Associates, residential, commercial, hospitality, retail"
      />

      <div className="bg-[#FAF9F6] text-[#1C1917] overflow-x-clip min-h-screen pt-32 pb-20">
        
        {/* Editorial Header */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto mb-20">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="flex flex-col gap-4"
          >
            <span className="editorial-subtitle">THE ARCHIVE</span>
            <h1 className="editorial-title text-5xl md:text-7xl text-[#00494d] leading-none tracking-wide">
              Spaces That Speak <br />
              <span className="editorial-serif-italic font-normal">Your Unique Style.</span>
            </h1>
            <div className="w-24 h-[1px] bg-[#C08B00] mt-4" />
          </motion.div>
        </section>

        {/* Narrative and Hero collage */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center mb-28">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative aspect-[16/10] overflow-hidden rounded-lg shadow-xl"
          >
            <Image
              src="https://miro.medium.com/v2/resize:fit:1024/1*atLWcBROZkzkfn8QYhw2ow.png"
              alt="Saksham Associates design layout blueprint"
              fill
              className="object-cover hover:scale-105 transition-transform duration-[1.5s] filter contrast-105 brightness-95"
              unoptimized
            />
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <h2 className="editorial-title text-3xl text-[#00494d] font-light leading-snug">
              Designs Tailored <br />
              <span className="editorial-serif-italic font-normal">to Perfection.</span>
            </h2>
            <p className="text-stone-600 text-sm md:text-base leading-relaxed font-sans">
              Every space has a signature. At <span className="text-[#C08B00] font-semibold">Saksham Associates</span>, we blend classic architectural restraint with modern functionality, delivering residences and commercial headquarters that stand as physical reflections of your lifestyle.
            </p>
            <div className="flex flex-col gap-2 text-stone-700 text-sm font-sans mt-2 border-l border-luxury-gold pl-4 py-1">
              <p>• 100+ Premium turnkey handovers across Kolkata.</p>
              <p>• Bespoke joinery, custom daylight projection models.</p>
              <p>• Residential, commercial, and boutique hospitality typologies.</p>
            </div>
            <div className="mt-4 flex gap-4">
              <Link href="#contact" className="luxury-btn">
                Request Quote
              </Link>
            </div>
          </motion.div>

        </section>

        {/* Dynamic Project Carousel Blocks */}
        <section className="bg-[#FAF9F6] border-t border-luxury-muted">
          <Projects />
        </section>

        {/* Process Roadmap */}
        <section className="bg-[#FAF9F6] border-t border-luxury-muted">
          <Process />
        </section>

        {/* Future Vision */}
        <section className="border-t border-luxury-muted">
          <Future />
        </section>

        {/* Client Trust */}
        <section className="bg-[#FAF9F6] border-t border-luxury-muted">
          <Testimonials />
        </section>

        {/* Consultation form */}
        <section className="py-24 bg-[#00494d] text-white" id="contact">
          <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
            <div className="lg:col-span-5 flex flex-col gap-6">
              <span className="text-stone-300 text-xs font-sans tracking-[0.3em] uppercase">BOOK AN INVITATION</span>
              <h2 className="editorial-title text-4xl md:text-5xl text-white leading-tight font-light">
                Let&apos;s build your <br />
                <span className="editorial-serif-italic text-stone-200">dream space.</span>
              </h2>
              <div className="w-16 h-[1px] bg-[#D88E6C] my-2" />
              <p className="text-stone-300 text-sm leading-relaxed font-sans max-w-sm">
                Discuss your next project address in Kolkata with <span className="text-[#C08B00] font-semibold">Saksham Associates</span>. Let us curate your spatial experience.
              </p>
            </div>
            <div className="lg:col-span-7 bg-[#495A54]/20 p-6 md:p-10 rounded-2xl border border-[#495A54]/50 shadow-2xl backdrop-blur-sm">
              <ContactFull />
            </div>
          </div>
        </section>

      </div>
    </>
  )
}

"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Seo from '../components/SEO'
import { motion } from 'framer-motion'
import Testimonials from '../components/Testimonials'
import ContactFull from '../components/ContactFull'

export default function AboutPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <>
      <Seo
        title="About Saksham Associates | Kolkata's Leading Interior Designers"
        description="Discover the story, vision, and team behind Saksham Associates. Learn how we craft timeless, innovative interiors for homes and businesses in Kolkata."
        url="https://sakshamassociates.in/About"
        image="/images/SALOGO.svg"
        keywords="about Saksham Associates, interior design team, Kolkata, company story, founders"
      />

      <div className="bg-[#FAF9F6] text-[#1C1917] overflow-x-clip min-h-screen pt-32 pb-20">
        
        {/* Editorial Header Banner */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto mb-20 md:mb-28">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="flex flex-col gap-4"
          >
            <span className="editorial-subtitle">THE CHRONICLE</span>
            <h1 className="editorial-title text-5xl md:text-7xl text-[#00494d] leading-none tracking-wide">
              The Architects of <br />
              <span className="editorial-serif-italic font-normal">Ambience & Space.</span>
            </h1>
            <div className="w-24 h-[1px] bg-[#C08B00] mt-4" />
          </motion.div>
        </section>

        {/* Brand narrative and main image */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center mb-28 md:mb-40">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <h2 className="editorial-title text-3xl md:text-4xl text-[#00494d] font-light leading-snug">
              Every room tells a story. <br />
              <span className="editorial-serif-italic font-normal">We choreograph the words.</span>
            </h2>
            <p className="text-stone-600 text-sm md:text-base leading-relaxed font-sans">
              Founded in 2013, <span className="text-[#C08B00] font-semibold">Saksham Associates</span> began with a single design vision: to eliminate layout complexity and craft spatial poetry. Based in Kolkata, our studio has evolved into a premier interior architecture brand.
            </p>
            <p className="text-stone-600 text-sm md:text-base leading-relaxed font-sans">
              Our principal team blends structural discipline with soft organic textures. We prioritize local craftsmanship, sustainable sourcing, and detailed daylight studies to compose spaces that age gracefully and elevate daily life.
            </p>
            <div className="mt-4">
              <Link href="#contact" className="luxury-btn">
                Book A Private Consultation
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative aspect-[16/10] overflow-hidden rounded-lg shadow-xl"
          >
            <Image
              src="https://i.pinimg.com/736x/74/99/9e/74999e6a2dfefa2a882f2e2289a0fa99.jpg"
              alt="About Saksham Associates studio space"
              fill
              className="object-cover hover:scale-105 transition-transform duration-[1.5s] filter contrast-105 brightness-95"
              unoptimized
            />
          </motion.div>
        </section>

        {/* Milestone Statistics Block */}
        <section className="py-24 px-6 md:px-12 bg-[#1C1917] text-[#FAF9F6] mb-28 md:mb-40">
          <div className="max-w-7xl mx-auto">
            
            <div className="mb-16 flex flex-col gap-4">
              <span className="editorial-subtitle text-[#D88E6C]">RECORDED MILESTONES</span>
              <h2 className="editorial-title text-3xl md:text-4xl text-stone-100 font-light">
                Crafted with Passion, <br />
                <span className="editorial-serif-italic font-normal">Delivered with Excellence.</span>
              </h2>
            </div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-5 gap-8 border-t border-stone-800 pt-12"
            >
              <motion.div variants={fadeInUp} className="flex flex-col gap-2">
                <span className="editorial-title text-4xl md:text-5xl text-[#C08B00] font-light">100+</span>
                <span className="text-[10px] md:text-xs text-stone-400 tracking-widest uppercase font-sans">Completed Projects</span>
              </motion.div>
              <motion.div variants={fadeInUp} className="flex flex-col gap-2">
                <span className="editorial-title text-4xl md:text-5xl text-[#C08B00] font-light">200+</span>
                <span className="text-[10px] md:text-xs text-stone-400 tracking-widest uppercase font-sans">Happy Clients</span>
              </motion.div>
              <motion.div variants={fadeInUp} className="flex flex-col gap-2">
                <span className="editorial-title text-4xl md:text-5xl text-[#C08B00] font-light">5+</span>
                <span className="text-[10px] md:text-xs text-stone-400 tracking-widest uppercase font-sans">Design Recognitions</span>
              </motion.div>
              <motion.div variants={fadeInUp} className="flex flex-col gap-2">
                <span className="editorial-title text-4xl md:text-5xl text-[#C08B00] font-light">10+</span>
                <span className="text-[10px] md:text-xs text-stone-400 tracking-widest uppercase font-sans">Years Experience</span>
              </motion.div>
              <motion.div variants={fadeInUp} className="flex flex-col gap-2">
                <span className="editorial-title text-4xl md:text-5xl text-[#C08B00] font-light">1L+ SqFt</span>
                <span className="text-[10px] md:text-xs text-stone-400 tracking-widest uppercase font-sans">Acreage Designed</span>
              </motion.div>
            </motion.div>

            <div className="mt-20 border-t border-stone-800/60 pt-12 text-center max-w-3xl mx-auto">
              <p className="editorial-serif-italic text-lg md:text-xl text-stone-300 font-light leading-relaxed">
                &quot;Every milestone achieved by <span className="text-[#C08B00] font-sans not-italic font-semibold">Saksham Associates</span> represents an unyielding devotion to structural honesty, local materials, and customer satisfaction.&quot;
              </p>
            </div>

          </div>
        </section>

        {/* Founders Profiles */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto mb-28 md:mb-40">
          <div className="mb-20 flex flex-col gap-4">
            <span className="editorial-subtitle">THE LEADERSHIP</span>
            <h2 className="editorial-title text-3xl md:text-4xl text-[#00494d]">
              The Partners
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Mr. Sony Jaiswal */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              className="flex flex-col gap-6 p-8 rounded-xl border border-luxury-muted bg-stone-50/50 shadow-sm"
            >
              <span className="editorial-subtitle text-stone-500">BACKBONE OF OPERATIONS</span>
              <h3 className="editorial-title text-3xl text-[#00494d] font-light">
                Mr. Sony Jaiswal
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed font-sans">
                Sony oversees technical design verification, budget planning, site logistics, and joinery dry-fits. His absolute operational execution allows our artistic spaces to translate from blueprints into build realities on time and within budget.
              </p>
              <div className="w-10 h-[1px] bg-stone-300 mt-2" />
            </motion.div>

            {/* Mrs. Madhu Jaiswal */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              className="flex flex-col gap-6 p-8 rounded-xl border border-luxury-muted bg-stone-50/50 shadow-sm"
            >
              <span className="editorial-subtitle text-stone-500">CREATIVE DIRECTOR</span>
              <h3 className="editorial-title text-3xl text-[#00494d] font-light">
                Mrs. Madhu Jaiswal
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed font-sans">
                Madhu is the artistic soul behind the studio. She leads the conceptualization team, drafts photorealistic 3D visual environments, and coordinates tactile fabric, stone, and finish selections, establishing our signature quiet luxury palette.
              </p>
              <div className="w-10 h-[1px] bg-stone-300 mt-2" />
            </motion.div>

          </div>
        </section>

        {/* Testimonials */}
        <section className="border-t border-luxury-muted">
          <Testimonials />
        </section>

        {/* Consultation CTA & Form */}
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
                Connect with <span className="text-[#C08B00] font-semibold">Saksham Associates</span> to map out your private residential design or commercial workspace upgrade in Kolkata.
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

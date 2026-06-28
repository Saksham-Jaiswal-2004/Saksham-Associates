"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const steps = [
  {
    number: "01",
    title: "Consultation",
    subtitle: "Listening & Alignment",
    description: "We begin by listening — understanding your lifestyle rhythms, aspirations, and spatial constraints. Through in-depth dialogue and site evaluation, we establish a clear creative brief.",
    image: "/images/hiw1.svg",
    tag: "DISCOVERY",
  },
  {
    number: "02",
    title: "Design Concept",
    subtitle: "Vision & Visualization",
    description: "We translate your brief into rich 3D projections, daylight studies, and curated material palettes. You see your future space before a single nail is placed.",
    image: "/images/hiw2.svg",
    tag: "CONCEPTION",
  },
  {
    number: "03",
    title: "Execution",
    subtitle: "Craft & Precision",
    description: "Our dedicated site supervisors coordinate bespoke joinery, material sourcing from elite craftsmen, and installation with military precision. Zero-stress project management.",
    image: "/images/hiw3.svg",
    tag: "CRAFTSMANSHIP",
  },
  {
    number: "04",
    title: "Move-in Ready",
    subtitle: "Artful Handover",
    description: "We deliver a complete turnkey experience. Every detail — from the final paint coat to the last piece of curated furniture — is set and waiting for you to inhabit.",
    image: "/images/hiw4.svg",
    tag: "HANDOVER",
  },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] } }
}

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
}

export default function Process() {
  return (
    <div className="py-28 md:py-40 px-6 md:px-12" id="hiw">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            <span className="editorial-subtitle">OUR PROCESS</span>
            <h2 className="editorial-title text-4xl md:text-5xl text-[#00494d]">
              How We Bring Your<br />
              <span className="editorial-serif-italic font-normal">Vision to Life.</span>
            </h2>
            <div className="w-16 h-[1px] bg-[#C08B00] mt-2" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="lg:col-span-7 flex items-end"
          >
            <p className="text-stone-600 text-sm md:text-base leading-relaxed font-sans max-w-lg">
              A rigorous, stage-by-stage methodology designed to manage creativity with clarity. Our four-phase design journey ensures your ideas are seamlessly translated into reality — on time, within budget, and beyond expectation.
            </p>
          </motion.div>
        </div>

        {/* Steps Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-0"
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              variants={fadeInUp}
              className="group relative flex flex-col gap-6 md:border-r border-luxury-muted last:border-r-0 md:px-8 first:pl-0 last:pr-0"
            >
              {/* Step number + tag */}
              <div className="flex items-center justify-between">
                <span className="editorial-title text-5xl text-[#C08B00] font-light leading-none">
                  {step.number}
                </span>
                <span className="text-[10px] text-stone-400 tracking-[0.2em] uppercase font-sans border border-stone-200 px-2 py-1 rounded-sm">
                  {step.tag}
                </span>
              </div>

              {/* SVG illustration */}
              <div className="relative h-[140px] w-full overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 rounded-lg bg-stone-50 group-hover:bg-stone-100 transition-colors duration-500" />
                <Image
                  src={step.image}
                  alt={step.title}
                  width={200}
                  height={130}
                  className="relative z-10 w-auto h-[120px] object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2">
                <span className="text-[10px] text-[#C08B00] tracking-[0.15em] uppercase font-sans">
                  {step.subtitle}
                </span>
                <h3 className="editorial-title text-xl text-[#00494d] font-light">
                  {step.title}
                </h3>
                <div className="w-8 h-[1px] bg-stone-300 my-1" />
                <p className="text-stone-500 text-sm leading-relaxed font-sans">
                  {step.description}
                </p>
              </div>

              {/* Connector arrow (hidden on last) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-[28px] translate-x-1/2 z-10">
                  <div className="text-stone-300 text-xs">→</div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom accent bar */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1.0] }}
          className="mt-20 h-[1px] bg-gradient-to-r from-[#C08B00] via-stone-200 to-transparent origin-left"
        />

      </div>
    </div>
  )
}
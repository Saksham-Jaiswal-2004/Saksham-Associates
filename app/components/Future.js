"use client"
import React from 'react'
import { motion } from 'framer-motion'

const principles = [
  {
    number: "01",
    tag: "MATERIALS",
    title: "Sustainable Materials",
    tagline: "Sourced with conscience. Placed with intention.",
    description: "We exclusively specify responsibly sourced, renewable, and low-impact materials — from Forest Stewardship Council certified timbers to reclaimed stone — promoting environmental stewardship without compromise to aesthetic quality.",
    accent: "#C08B00",
  },
  {
    number: "02",
    tag: "TECHNOLOGY",
    title: "Smart Integration",
    tagline: "Invisible technology. Intelligent living.",
    description: "Advanced home automation, integrated energy monitoring, and smart climate control are seamlessly woven into our spatial designs. Technology becomes an invisible layer of convenience and efficiency.",
    accent: "#00494d",
  },
  {
    number: "03",
    tag: "EFFICIENCY",
    title: "Energy Efficiency",
    tagline: "Designed to breathe. Built to last.",
    description: "We optimize every project for natural light and cross-ventilation, minimizing artificial energy consumption. Our daylight simulation studies ensure each space is alive with natural luminosity throughout the day.",
    accent: "#D88E6C",
  },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] } }
}

export default function Future() {
  return (
    <div className="py-28 md:py-40 bg-[#1C1917] text-[#FAF9F6]" id="future">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            <span className="editorial-subtitle text-[#D88E6C]">DESIGN ETHOS</span>
            <h2 className="editorial-title text-4xl md:text-5xl text-stone-100">
              Designing for<br />
              <span className="editorial-serif-italic font-normal">Tomorrow.</span>
            </h2>
            <div className="w-16 h-[1px] bg-[#D88E6C] mt-2" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="lg:col-span-7 flex items-end"
          >
            <p className="text-stone-400 text-sm md:text-base leading-relaxed font-sans max-w-lg">
              At Saksham Associates, beauty is never achieved at the expense of the planet. Our three founding design principles ensure each commission is a responsible, forward-thinking act of architecture.
            </p>
          </motion.div>
        </div>

        {/* Principle Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
          {principles.map((p, i) => (
            <motion.div
              key={p.number}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{ ...fadeInUp, visible: { ...fadeInUp.visible, transition: { ...fadeInUp.visible.transition, delay: i * 0.15 } } }}
              className="group relative flex flex-col gap-6 border-t border-stone-800 pt-8 md:border-t-0 md:border-l md:border-stone-800 md:pl-10 first:border-l-0 first:pl-0 md:pr-10 last:pr-0"
            >
              {/* Number */}
              <div className="flex items-center justify-between">
                <span
                  className="editorial-title text-5xl font-light leading-none"
                  style={{ color: p.accent }}
                >
                  {p.number}
                </span>
                <span className="text-[10px] text-stone-600 tracking-[0.2em] uppercase font-sans border border-stone-800 px-2 py-1 rounded-sm">
                  {p.tag}
                </span>
              </div>

              {/* Icon placeholder — decorative line */}
              <div
                className="w-12 h-[2px] transition-all duration-500 group-hover:w-20"
                style={{ backgroundColor: p.accent }}
              />

              {/* Title */}
              <div className="flex flex-col gap-2">
                <h3 className="editorial-title text-2xl text-stone-100 font-light">
                  {p.title}
                </h3>
                <p
                  className="font-serif italic text-sm leading-relaxed"
                  style={{ color: p.accent }}
                >
                  &quot;{p.tagline}&quot;
                </p>
              </div>

              {/* Description */}
              <p className="text-stone-400 text-sm leading-relaxed font-sans">
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom quote */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="mt-24 border-t border-stone-800 pt-12 text-center max-w-2xl mx-auto"
        >
          <p className="editorial-serif-italic text-lg text-stone-400 font-light leading-relaxed">
            &quot;A space built today must serve with beauty and responsibility for generations to come.&quot;
          </p>
          <span className="editorial-subtitle text-stone-600 mt-4 block">— SAKSHAM ASSOCIATES DESIGN MANIFESTO</span>
        </motion.div>

      </div>
    </div>
  )
}

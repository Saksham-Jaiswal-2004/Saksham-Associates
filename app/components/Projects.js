"use client"
import React, { useState, useRef, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const galleryCategories = [
  {
    id: "homes",
    label: "RESIDENTIAL",
    title: "Modern Minimalist Homes",
    description: "Curated residences where functional living meets organic materiality.",
    images: [
      { src: "/home/home 1.jpeg", caption: "01" },
      { src: "/home/home 2.jpeg", caption: "02" },
      { src: "/home/home 3.jpeg", caption: "03" },
      { src: "/home/home 4.jpeg", caption: "04" },
      { src: "/home/home 5.jpeg", caption: "05" },
      { src: "/home/home 6.jpeg", caption: "06" },
      { src: "/home/home 7.jpeg", caption: "07" },
      { src: "/home/home 8.jpeg", caption: "08" },
      { src: "/home/home 9.jpeg", caption: "09" },
      { src: "/home/home 10.jpeg", caption: "10" },
      { src: "/home/home 11.jpeg", caption: "11" },
      { src: "/home/home 12.jpeg", caption: "12" },
    ]
  },
  {
    id: "hotels",
    label: "HOSPITALITY",
    title: "Stylish Hotels",
    description: "Atmospheric hotel interiors crafted for immersive sensory journeys.",
    images: [
      { src: "/hotel/Hotel 1.jpeg", caption: "01" },
      { src: "/hotel/Hotel 2.jpeg", caption: "02" },
      { src: "/hotel/Hotel 3.jpeg", caption: "03" },
      { src: "/hotel/Hotel 4.jpeg", caption: "04" },
      { src: "/hotel/Hotel 5.jpeg", caption: "05" },
      { src: "/hotel/Hotel 6.jpeg", caption: "06" },
      { src: "/hotel/Hotel 7.jpeg", caption: "07" },
      { src: "/hotel/Hotel 8.jpeg", caption: "08" },
    ]
  },
  {
    id: "cafes",
    label: "CULINARY",
    title: "Cozy Cafés & Restaurants",
    description: "Dining environments that fuse intimate lighting with acoustic storytelling.",
    images: [
      { src: "/cafe/cafe 1.jpeg", caption: "01" },
      { src: "/cafe/cafe 2.jpeg", caption: "02" },
      { src: "/cafe/cafe 3.jpeg", caption: "03" },
      { src: "/cafe/cafe 4.jpeg", caption: "04" },
      { src: "/cafe/cafe 5.jpeg", caption: "05" },
      { src: "/cafe/cafe 6.jpeg", caption: "06" },
      { src: "/cafe/cafe 7.jpeg", caption: "07" },
      { src: "/cafe/cafe 9.jpeg", caption: "08" },
    ]
  }
]

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] } }
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const dragStartX = useRef(0)
  const dragStartIndex = useRef(0)
  const trackRef = useRef(null)
  const category = galleryCategories[activeCategory]
  const images = category.images

  // Reset active index when category changes
  useEffect(() => {
    setActiveIndex(0)
  }, [activeCategory])

  const handlePrev = useCallback(() => {
    setActiveIndex(i => (i - 1 + images.length) % images.length)
  }, [images.length])

  const handleNext = useCallback(() => {
    setActiveIndex(i => (i + 1) % images.length)
  }, [images.length])

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') handlePrev()
      if (e.key === 'ArrowRight') handleNext()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [handlePrev, handleNext])

  // Drag/swipe
  const handleDragStart = (e) => {
    setIsDragging(false)
    dragStartX.current = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX
    dragStartIndex.current = activeIndex
  }

  const handleDragEnd = (e) => {
    const endX = e.type === 'touchend' ? e.changedTouches[0].clientX : e.clientX
    const diff = dragStartX.current - endX
    if (Math.abs(diff) > 50) {
      diff > 0 ? handleNext() : handlePrev()
    }
  }

  return (
    <div className="py-28 md:py-40 px-6 md:px-12" id="projects">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div className="flex flex-col gap-4">
            <span className="editorial-subtitle">VISUAL ARCHIVE</span>
            <h2 className="editorial-title text-4xl md:text-5xl text-[#00494d]">
              Showcasing Versatility<br />
              <span className="editorial-serif-italic font-normal">and Elegance.</span>
            </h2>
          </div>
          <p className="text-stone-500 text-sm font-sans max-w-xs leading-relaxed">
            A curated selection across our major typologies — each space a dialogue between form and purpose.
          </p>
        </motion.div>

        {/* Category Navigation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="flex flex-wrap gap-0 mb-12 border-b border-luxury-muted"
        >
          {galleryCategories.map((cat, i) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(i)}
              className={`relative py-3 px-6 text-xs font-sans tracking-[0.2em] uppercase transition-all duration-300 focus:outline-none ${activeCategory === i
                  ? 'text-[#00494d]'
                  : 'text-stone-400 hover:text-stone-600'
                }`}
            >
              {cat.label}
              {activeCategory === i && (
                <motion.div
                  layoutId="categoryUnderline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C08B00]"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Main Gallery Layout */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start"
          >
            {/* Left: Feature image with counter */}
            <div className="lg:col-span-8 flex flex-col gap-4">
              <div
                className="relative aspect-[16/10] overflow-hidden rounded-lg bg-stone-100 cursor-grab active:cursor-grabbing select-none"
                ref={trackRef}
                onMouseDown={handleDragStart}
                onMouseUp={handleDragEnd}
                onTouchStart={handleDragStart}
                onTouchEnd={handleDragEnd}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }}
                    className="absolute inset-0"
                  >
                    <img
                      src={images[activeIndex].src}
                      alt={`${category.title} image ${activeIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
                  <button
                    onClick={handlePrev}
                    className="pointer-events-auto w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/25 transition-all duration-300 focus:outline-none"
                    aria-label="Previous image"
                  >
                    ←
                  </button>
                  <button
                    onClick={handleNext}
                    className="pointer-events-auto w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/25 transition-all duration-300 focus:outline-none"
                    aria-label="Next image"
                  >
                    →
                  </button>
                </div>

                {/* Counter badge */}
                <div className="absolute bottom-4 right-4 text-white/70 text-xs font-sans tracking-widest">
                  {String(activeIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
                </div>
              </div>

              {/* Thumbnail strip */}
              <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`flex-shrink-0 relative w-16 h-12 overflow-hidden rounded transition-all duration-300 focus:outline-none ${i === activeIndex
                        ? 'ring-2 ring-[#C08B00] ring-offset-1 ring-offset-[#FAF9F6]'
                        : 'opacity-50 hover:opacity-80'
                      }`}
                    aria-label={`View image ${i + 1}`}
                  >
                    <img
                      src={img.src}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Category info */}
            <div className="lg:col-span-4 flex flex-col gap-6 lg:pt-4">
              <div>
                <span className="editorial-subtitle">{category.label}</span>
                <h3 className="editorial-title text-2xl md:text-3xl text-[#00494d] mt-2 font-light">
                  {category.title}
                </h3>
                <div className="w-10 h-[1px] bg-[#C08B00] my-4" />
                <p className="text-stone-600 text-sm leading-relaxed font-sans">
                  {category.description}
                </p>
              </div>

              {/* Progress dots */}
              <div className="flex flex-wrap gap-1.5 mt-2">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`transition-all duration-300 focus:outline-none rounded-full ${i === activeIndex
                        ? 'w-6 h-1.5 bg-[#C08B00]'
                        : 'w-1.5 h-1.5 bg-stone-300 hover:bg-stone-400'
                      }`}
                    aria-label={`Go to image ${i + 1}`}
                  />
                ))}
              </div>

              {/* Category switcher */}
              <div className="mt-4 flex flex-col gap-2 border-t border-luxury-muted pt-6">
                <span className="text-xs text-stone-400 tracking-widest uppercase font-sans mb-2">Other Collections</span>
                {galleryCategories.map((cat, i) => (
                  i !== activeCategory && (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(i)}
                      className="flex items-center gap-3 text-left group focus:outline-none"
                    >
                      <span className="w-5 h-[1px] bg-stone-300 group-hover:bg-[#C08B00] transition-colors" />
                      <span className="text-stone-500 text-xs tracking-widest uppercase font-sans group-hover:text-[#00494d] transition-colors">
                        {cat.label}
                      </span>
                    </button>
                  )
                ))}
              </div>

              <Link
                href="/Portfolio"
                className="luxury-btn mt-4 self-start"
              >
                <span>Full Portfolio</span>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </div>
  )
}

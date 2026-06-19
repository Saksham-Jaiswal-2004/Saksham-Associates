"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import ScrollCanvasSequence from "./components/ScrollCanvasSequence";
import Seo from "./components/SEO";
import { AnimatedTestimonials } from "./components/ui/animated-testimonials";
import ContactFull from "./components/ContactFull";

// Testimonials data
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
    quote: "Recently, I shifted my Chinar Park kitchen, and I availed myself of her services. I'm very satisfied with her services, as well as the format and discipline of work and execution.",
    name: "Megha Sarayan",
    designation: "Owner, Land of Cakes",
    src: "/images/service4.webp"
  },
  {
    quote: "She is a consummate professional and responsive. Me and my wife completely trust her judgement and have come to greatly appreciate her unique ability to make living spaces both functional and aesthetically pleasing.",
    name: "Sushil Kumar Modi",
    designation: "Hansal Holidays",
    src: "/images/service5.webp"
  },
  {
    quote: "I had given her a connect which was not for a very large ticket, but the project was completed exceptionally fast and we received commendable compliments from the client. Trustworthy and timely.",
    name: "Keshav Binani",
    designation: "Owner, Grand Events",
    src: "/images/service6.jpeg"
  }
];

// Material palette options for interactive section
const MATERIALS = [
  {
    id: "travertine",
    name: "Roman Travertine",
    type: "Stone Curation",
    desc: "Earthy, textured, and timeless. Pitted Roman travertine that catches low afternoon shadows and diffuses midday glare. Sourced from Italian quarries, its natural pores invite tactile exploration.",
    tagline: "Honest materiality, shaped by geological ages.",
    image: "/images/service1.jpg"
  },
  {
    id: "brass",
    name: "Brushed Brass",
    type: "Metallic Accents",
    desc: "A whisper of warm reflection. Unlacquered brushed brass that ages gracefully over time, developing a rich organic patina. It serves as an architectural punctuation mark in custom cabinetry.",
    tagline: "Living finishes that document the passage of time.",
    image: "/images/service7.jpeg"
  },
  {
    id: "oak",
    name: "Smoked Oak",
    type: "Timber joinery",
    desc: "Deep, grounding warmth. Smoked oak panels with accentuated grains, establishing a connection to natural forest elements. Double-fumed for charcoal undertones and structural stability.",
    tagline: "Deep, silent tones that anchoring modern volumes.",
    image: "/images/service3.webp"
  },
  {
    id: "linen",
    name: "Bouclé & Raw Linen",
    type: "Textile Layers",
    desc: "Soft, tactile rest. High-texture raw Belgian linen paired with soft bouclé wool. These textiles absorb ambient sound, soften sharp modernist edges, and filter natural daylight.",
    tagline: "A sensory layer that speaks of comfort and quiet luxury.",
    image: "/images/service4.webp"
  }
];

export default function Home() {
  const [activeMaterial, setActiveMaterial] = useState(MATERIALS[0]);

  // Framer Motion Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
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
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <>
      <Seo
        title="Saksham Associates | Luxury Interior Designers in Kolkata"
        description="Experience luxury scrollytelling and premium interior design by Saksham Associates. Elevating residential, commercial, and hospitality spaces in Kolkata."
        url="https://sakshamassociates.in/"
        image="/images/SALOGO.svg"
        keywords="interior design, Kolkata, residential, commercial, luxury, sustainable, Saksham Associates, best interior designers, home design, office design"
      />

      <div className="bg-[#FAF9F6] text-[#1C1917] overflow-x-clip min-h-screen">

        {/* SECTION 1: Pinned Cinematic Hero */}
        <section className="relative w-full">
          <ScrollCanvasSequence />
        </section>

        {/* SECTION 2: Elegant Studio Introduction */}
        <section className="relative py-28 md:py-40 px-6 md:px-12 bg-[#FAF9F6] border-b border-luxury-muted">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">

            {/* Left Column: Core statement */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              className="lg:col-span-5 flex flex-col gap-6"
            >
              <span className="editorial-subtitle">THE STUDIO</span>
              <h2 className="editorial-title text-4xl md:text-5xl lg:text-6xl text-[#00494d] leading-tight">
                Crafting narratives through <br />
                <span className="editorial-serif-italic font-normal">space and light.</span>
              </h2>
              <div className="w-16 h-[1px] bg-[#C08B00] mt-2" />
            </motion.div>

            {/* Right Column: Narrative text */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              className="lg:col-span-7 flex flex-col gap-6 text-stone-700 text-base md:text-lg leading-relaxed font-sans"
            >
              <p>
                At <strong className="text-[#00494d]">Saksham Associates</strong>, we do not merely arrange furniture; we curate bespoke living architectures. Based in Kolkata, our studio specializes in translating the unique rhythm of your daily life into physical space, balancing uncompromising style with functional serenity.
              </p>
              <p>
                From private luxury residences in Ballygunge to forward-thinking corporate offices in New Town, we approach each project as a unique brand film. We blend raw organic materiality with clean, modern lines, creating timeless spaces that grow richer with the passing of each day.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="#contact" className="luxury-btn">
                  Begin A Project
                </Link>
                <Link href="/Portfolio" className="luxury-btn border-luxury-gold text-[#C08B00] hover:text-white">
                  Browse Works
                </Link>
              </div>
            </motion.div>

          </div>
        </section>

        {/* SECTION 3: Services Narrative (Asymmetrical Grid) */}
        <section className="py-28 md:py-40 px-6 md:px-12 bg-[#FAF9F6]" id="services">
          <div className="max-w-7xl mx-auto">

            <div className="mb-20 flex flex-col gap-4">
              <span className="editorial-subtitle">DESIGN SERVICES</span>
              <h2 className="editorial-title text-4xl md:text-5xl text-[#00494d]">
                Bespoke Typologies
              </h2>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
            >
              {/* Service 1: Residential */}
              <motion.div variants={fadeInUp} className="group flex flex-col gap-6 border-b border-luxury-muted pb-8">
                <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-stone-100">
                  <Image
                    src="/images/service1.jpg"
                    alt="Luxury residential design"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-xs text-stone-500 tracking-wider">01 / RESIDENTIAL</span>
                    <h3 className="editorial-title text-2xl mt-1 text-[#00494d]">Private Sanctuaries</h3>
                  </div>
                  <Link href="/Residential" className="text-stone-400 group-hover:text-[#C08B00] transition-colors mt-2">
                    →
                  </Link>
                </div>
                <p className="text-sm text-stone-600 leading-relaxed font-sans">
                  Custom penthouse suites, heritage townhouses, and luxury villas optimized for daylight, comfort, and sustainable modern living.
                </p>
              </motion.div>

              {/* Service 2: Commercial */}
              <motion.div variants={fadeInUp} className="group flex flex-col gap-6 border-b border-luxury-muted pb-8 lg:translate-y-8">
                <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-stone-100">
                  <Image
                    src="/images/service2.jpeg"
                    alt="Corporate commercial workspace"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-xs text-stone-500 tracking-wider">02 / CORPORATE</span>
                    <h3 className="editorial-title text-2xl mt-1 text-[#00494d]">Creative Workspace</h3>
                  </div>
                  <Link href="/Commercial" className="text-stone-400 group-hover:text-[#C08B00] transition-colors mt-2">
                    →
                  </Link>
                </div>
                <p className="text-sm text-stone-600 leading-relaxed font-sans">
                  Innovative offices designed to foster collaborative energy, improve employee well-being, and express core corporate brand identities.
                </p>
              </motion.div>

              {/* Service 3: Hospitality */}
              <motion.div variants={fadeInUp} className="group flex flex-col gap-6 border-b border-luxury-muted pb-8 lg:translate-y-16">
                <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-stone-100">
                  <Image
                    src="/images/service3.webp"
                    alt="High-end hospitality lounge"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-xs text-stone-500 tracking-wider">03 / HOSPITALITY</span>
                    <h3 className="editorial-title text-2xl mt-1 text-[#00494d]">Leisure Architectures</h3>
                  </div>
                  <Link href="/Hospitality" className="text-stone-400 group-hover:text-[#C08B00] transition-colors mt-2">
                    →
                  </Link>
                </div>
                <p className="text-sm text-stone-600 leading-relaxed font-sans">
                  Bespoke hotel lobbies, relaxation spas, and executive suites curated to deliver immersive sensory guest journeys.
                </p>
              </motion.div>

              {/* Service 4: Restaurants & Cafes */}
              <motion.div variants={fadeInUp} className="group flex flex-col gap-6 border-b border-luxury-muted pb-8 lg:mt-8">
                <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-stone-100">
                  <Image
                    src="/images/service4.webp"
                    alt="Bespoke restaurant interior"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-xs text-stone-500 tracking-wider">04 / CULINARY</span>
                    <h3 className="editorial-title text-2xl mt-1 text-[#00494d]">Restaurants & Cafes</h3>
                  </div>
                  <Link href="/Restaurants" className="text-stone-400 group-hover:text-[#C08B00] transition-colors mt-2">
                    →
                  </Link>
                </div>
                <p className="text-sm text-stone-600 leading-relaxed font-sans">
                  Atmospheric dining venues that fuse acoustic design, intimate lighting, and operational flow for unforgettable culinary storytelling.
                </p>
              </motion.div>

              {/* Service 5: Retail */}
              <motion.div variants={fadeInUp} className="group flex flex-col gap-6 border-b border-luxury-muted pb-8 lg:translate-y-8 lg:mt-8">
                <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-stone-100">
                  <Image
                    src="/images/service5.webp"
                    alt="Premium retail boutique"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-xs text-stone-500 tracking-wider">05 / RETAIL</span>
                    <h3 className="editorial-title text-2xl mt-1 text-[#00494d]">Boutique Galleries</h3>
                  </div>
                  <Link href="/Retail" className="text-stone-400 group-hover:text-[#C08B00] transition-colors mt-2">
                    →
                  </Link>
                </div>
                <p className="text-sm text-stone-600 leading-relaxed font-sans">
                  Luxury brand flagship stores, high-end galleries, and visual retail concepts designed for elevated customer interaction.
                </p>
              </motion.div>

              {/* Service 6: Factories */}
              <motion.div variants={fadeInUp} className="group flex flex-col gap-6 border-b border-luxury-muted pb-8 lg:translate-y-16 lg:mt-8">
                <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-stone-100">
                  <Image
                    src="/images/service6.jpeg"
                    alt="Industrial manufacturing facility"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-xs text-stone-500 tracking-wider">06 / INDUSTRIAL</span>
                    <h3 className="editorial-title text-2xl mt-1 text-[#00494d]">Smart Factories</h3>
                  </div>
                  <Link href="/Factories" className="text-stone-400 group-hover:text-[#C08B00] transition-colors mt-2">
                    →
                  </Link>
                </div>
                <p className="text-sm text-stone-600 leading-relaxed font-sans">
                  Optimized industrial layouts and administrative facilities blending ergonomic safety, structural density, and design clarity.
                </p>
              </motion.div>
            </motion.div>

          </div>
        </section>

        {/* SECTION 4: Featured Philosophy/Process Section */}
        <section className="py-28 md:py-40 px-6 md:px-12 bg-[#FAF9F6] border-t border-luxury-muted">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

            {/* Left Stick Column */}
            <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit flex flex-col gap-4">
              <span className="editorial-subtitle">OUR PROCESS</span>
              <h2 className="editorial-title text-4xl md:text-5xl text-[#00494d]">
                The Method <br />Behind The Magic
              </h2>
              <p className="text-sm text-stone-600 font-sans leading-relaxed max-w-sm mt-4">
                A rigorous, stage-by-stage architecture designed to manage creativity with military precision and deliver zero-stress handovers.
              </p>
            </div>

            {/* Right Flow Column */}
            <div className="lg:col-span-8 flex flex-col gap-12 md:gap-16">

              {/* Step 1 */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeInUp}
                className="flex flex-col md:flex-row gap-6 md:gap-12 border-t border-luxury-muted pt-8"
              >
                <span className="editorial-title text-4xl text-[#C08B00] font-light leading-none min-w-[60px]">01</span>
                <div className="flex flex-col gap-3">
                  <h3 className="editorial-title text-2xl text-[#00494d]">Curation & Spatial Strategy</h3>
                  <p className="text-stone-600 text-sm leading-relaxed font-sans">
                    We listen to your rhythm of life. Gathering raw physical swatches, determining spatial flows, identifying lighting patterns, and defining a clear spatial strategy that respects your functional needs and budget.
                  </p>
                </div>
              </motion.div>

              {/* Step 2 */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeInUp}
                className="flex flex-col md:flex-row gap-6 md:gap-12 border-t border-luxury-muted pt-8"
              >
                <span className="editorial-title text-4xl text-[#C08B00] font-light leading-none min-w-[60px]">02</span>
                <div className="flex flex-col gap-3">
                  <h3 className="editorial-title text-2xl text-[#00494d]">3D Projections & Daylight Simulation</h3>
                  <p className="text-stone-600 text-sm leading-relaxed font-sans">
                    Using advanced 3D visual engines, we compile high-fidelity renderings and execute daylight studies to project how your spaces feel from the bright midday sun to the dim evening shadows.
                  </p>
                </div>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeInUp}
                className="flex flex-col md:flex-row gap-6 md:gap-12 border-t border-luxury-muted pt-8"
              >
                <span className="editorial-title text-4xl text-[#C08B00] font-light leading-none min-w-[60px]">03</span>
                <div className="flex flex-col gap-3">
                  <h3 className="editorial-title text-2xl text-[#00494d]">Bespoke Joinery & Material Sourcing</h3>
                  <p className="text-stone-600 text-sm leading-relaxed font-sans">
                    We work with elite local carpenters and quarry houses to source unlacquered metals, Roman stones, and custom woodwork. Every joint and detail is bespoke-crafted for structural immortality.
                  </p>
                </div>
              </motion.div>

              {/* Step 4 */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeInUp}
                className="flex flex-col md:flex-row gap-6 md:gap-12 border-t border-luxury-muted pt-8"
              >
                <span className="editorial-title text-4xl text-[#C08B00] font-light leading-none min-w-[60px]">04</span>
                <div className="flex flex-col gap-3">
                  <h3 className="editorial-title text-2xl text-[#00494d]">Turnkey Execution & Artful Handover</h3>
                  <p className="text-stone-600 text-sm leading-relaxed font-sans">
                    Our dedicated site supervisors oversee dry-run fits, electrical alignments, and final paint coatings. We deliver a complete turnkey experience, presenting a finished architectural artwork.
                  </p>
                </div>
              </motion.div>

            </div>

          </div>
        </section>

        {/* SECTION 5: Portfolio-Style Visual Rhythm */}
        <section className="py-28 md:py-40 bg-[#FAF9F6] border-t border-luxury-muted">
          <div className="max-w-7xl mx-auto px-6 md:px-12">

            <div className="mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
              <div className="flex flex-col gap-4">
                <span className="editorial-subtitle">VISUAL GALLERY</span>
                <h2 className="editorial-title text-4xl md:text-5xl text-[#00494d]">
                  Atmospheric Realizations
                </h2>
              </div>
              <Link href="/Portfolio" className="luxury-btn">
                View Entire Portfolio
              </Link>
            </div>

            {/* Alternating Museum Layout */}
            <div className="flex flex-col gap-24 md:gap-40">

              {/* Project 1: Asymmetrical Left-Dominant */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="lg:col-span-7 relative aspect-[16/10] overflow-hidden rounded-lg shadow-xl"
                >
                  <Image
                    src="/images/service1.jpg"
                    alt="Editorial living room"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-[1.5s]"
                  />
                </motion.div>
                <div className="lg:col-span-5 flex flex-col gap-4 lg:pl-12">
                  <span className="text-stone-500 text-xs tracking-widest font-sans uppercase">01 / LIVING ARCHITECTURE</span>
                  <h3 className="editorial-title text-3xl text-[#00494d]">The Ballygunge Residence</h3>
                  <p className="text-stone-600 text-sm leading-relaxed font-sans">
                    A dialogue between modern minimalism and vintage warm light. We utilized travertine elements, high-texture bouclé fabrics, and bespoke brass framing to capture the sun’s daily rotation.
                  </p>
                  <div className="w-10 h-[1px] bg-stone-300 my-2" />
                </div>
              </div>

              {/* Project 2: Asymmetrical Right-Dominant */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center flex-col-reverse lg:flex-row-reverse">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="lg:col-span-7 lg:order-2 relative aspect-[16/10] overflow-hidden rounded-lg shadow-xl"
                >
                  <Image
                    src="/images/service2.jpeg"
                    alt="Editorial commercial layout"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-[1.5s]"
                  />
                </motion.div>
                <div className="lg:col-span-5 lg:order-1 flex flex-col gap-4 lg:pr-12">
                  <span className="text-stone-500 text-xs tracking-widest font-sans uppercase">02 / WORKSPACE SYNERGY</span>
                  <h3 className="editorial-title text-3xl text-[#00494d]">New Town HQ Office</h3>
                  <p className="text-stone-600 text-sm leading-relaxed font-sans">
                    An open, acoustic workspace for a global tech venture. We integrated organic plant installations, sound-dampening wool panels, and custom-made ash oak desks to foster focus and calm.
                  </p>
                  <div className="w-10 h-[1px] bg-stone-300 my-2" />
                </div>
              </div>

              {/* Project 3: Wide Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="lg:col-span-8 relative aspect-[16/9] overflow-hidden rounded-lg shadow-xl"
                >
                  <Image
                    src="/images/service3.webp"
                    alt="Luxury hotel lounge"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-[1.5s]"
                  />
                </motion.div>
                <div className="lg:col-span-4 flex flex-col gap-4 lg:pl-8">
                  <span className="text-stone-500 text-xs tracking-widest font-sans uppercase">03 / COUTURE HOSPITALITY</span>
                  <h3 className="editorial-title text-3xl text-[#00494d]">The Salt Lake Lounge</h3>
                  <p className="text-stone-600 text-sm leading-relaxed font-sans">
                    A boutique retreat designed for ultimate sanctuary. Features dark charcoal plastering, warm under-glow brass lighting, and curated mid-century modern seating arrangements.
                  </p>
                  <div className="w-10 h-[1px] bg-stone-300 my-2" />
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* SECTION 6: Tactile Materials-Inspired Section */}
        <section className="py-28 md:py-40 bg-[#1C1917] text-[#FAF9F6]">
          <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">

            {/* Left Column: Material Selector List */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <span className="editorial-subtitle text-[#D88E6C]">TACTILE ARCHIVE</span>
                <h2 className="editorial-title text-4xl md:text-5xl text-stone-100">
                  The Material <br />Signature
                </h2>
              </div>

              <div className="flex flex-col gap-4 mt-4">
                {MATERIALS.map((mat) => (
                  <button
                    key={mat.id}
                    onClick={() => setActiveMaterial(mat)}
                    className="flex justify-between items-center py-4 border-b border-stone-800 text-left group transition-all duration-300 focus:outline-none"
                  >
                    <span
                      className={`text-xl md:text-2xl font-serif tracking-wide transition-all ${activeMaterial.id === mat.id ? "text-[#D88E6C] translate-x-2" : "text-stone-400 group-hover:text-stone-200"
                        }`}
                    >
                      {mat.name}
                    </span>
                    <span
                      className={`text-xs uppercase tracking-widest transition-all ${activeMaterial.id === mat.id ? "text-stone-300" : "text-stone-600"
                        }`}
                    >
                      {mat.type}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column: Display Active Material */}
            <div className="lg:col-span-7 flex flex-col md:flex-row gap-8 items-center bg-[#252220] p-8 md:p-12 rounded-xl border border-stone-800">

              {/* Swatch image */}
              <div className="relative w-full md:w-1/2 aspect-square rounded-lg overflow-hidden bg-stone-900 shadow-md">
                <Image
                  src={activeMaterial.image}
                  alt={activeMaterial.name}
                  fill
                  className="object-cover filter grayscale contrast-125 brightness-90 hover:grayscale-0 transition-all duration-[1s]"
                />
              </div>

              {/* Detail content */}
              <div className="w-full md:w-1/2 flex flex-col gap-4">
                <span className="text-[#D88E6C] text-xs font-sans tracking-widest uppercase">
                  {activeMaterial.type}
                </span>
                <h3 className="editorial-title text-3xl text-stone-100 font-light leading-none">
                  {activeMaterial.name}
                </h3>
                <p className="text-stone-300 font-serif italic text-sm leading-relaxed mt-1">
                  &quot;{activeMaterial.tagline}&quot;
                </p>
                <p className="text-stone-400 text-sm leading-relaxed font-sans mt-2">
                  {activeMaterial.desc}
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* SECTION 7: Testimonial/Client Trust Area */}
        <section className="py-28 bg-[#FAF9F6] border-b border-luxury-muted">
          <div className="max-w-7xl mx-auto px-6 md:px-12">

            <div className="mb-12 flex flex-col items-center gap-4 text-center">
              <span className="editorial-subtitle">CLIENT TRUST</span>
              <h2 className="editorial-title text-4xl md:text-5xl text-[#00494d]">
                Stories of Inspired Spaces
              </h2>
              <div className="w-16 h-[1px] bg-[#C08B00]" />
            </div>

            {/* Animated Testimonial deck */}
            <div className="w-full">
              <AnimatedTestimonials testimonials={testimonialList} />
            </div>

          </div>
        </section>

        {/* SECTION 8: Consultation CTA & Form */}
        <section className="py-28 md:py-40 bg-[#00494d] text-white" id="cta">
          <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">

            {/* Left Column Text */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <span className="text-stone-300 text-xs font-sans tracking-[0.3em] uppercase">BOOK AN INVITATION</span>
              <h2 className="editorial-title text-4xl md:text-6xl text-white leading-tight font-light">
                Let&apos;s build your <br />
                <span className="editorial-serif-italic text-stone-200">dream space.</span>
              </h2>
              <div className="w-16 h-[1px] bg-[#D88E6C] my-2" />
              <p className="text-stone-300 text-sm md:text-base leading-relaxed font-sans max-w-sm">
                Arrange a private spatial audit with Mrs. Madhu Jaiswal and our principal architectural designers. Let us discuss how to refine, define, and elevate your address.
              </p>
            </div>

            {/* Right Column Form Wrapper */}
            <div className="lg:col-span-7 bg-[#495A54]/20 p-6 md:p-10 rounded-2xl border border-[#495A54]/50 shadow-2xl backdrop-blur-sm">
              <ContactFull />
            </div>

          </div>
        </section>

      </div>
    </>
  );
}

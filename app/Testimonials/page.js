"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Seo from '../components/SEO';
import { getTestimonials } from '../../lib/getTestimonials';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import ContactFull from '../components/ContactFull';

// Static curated testimonials shown as featured
const FEATURED = [
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
    quote: "The time taken to complete the project was less than the time taken by client to explain her requirements. Very much commendable and appreciated work done in no time.",
    name: "Keshav Binani",
    designation: "Owner, Grand Events",
    src: "/images/service6.jpeg"
  }
];

const STATS = [
  { value: "100+", label: "Completed Projects" },
  { value: "200+", label: "Happy Clients" },
  { value: "5+", label: "Design Recognitions" },
  { value: "10+", label: "Years Experience" },
  { value: "1L+ SqFt", label: "Acreage Designed" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

// Star rating renderer
function StarRating({ rating }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  return (
    <span className="text-[#C08B00] text-sm tracking-wide">
      {'★'.repeat(full)}{half ? '½' : ''}{'☆'.repeat(empty)}
    </span>
  );
}

// Individual Firestore testimonial card
function TestimonialCard({ item, index }) {
  const fullStars = Math.floor(item.rating);
  const hasHalf = item.rating % 1 >= 0.5;
  const empty = 5 - fullStars - (hasHalf ? 1 : 0);

  return (
    <motion.div
      variants={fadeInUp}
      className="group flex flex-col gap-5 border border-luxury-muted rounded-lg p-8 bg-white/60 hover:bg-white/90 hover:shadow-md transition-all duration-500"
    >
      {/* Quote mark */}
      <div className="text-[#C08B00] text-4xl font-serif leading-none select-none">"</div>

      {/* Quote */}
      <p className="text-stone-600 text-sm leading-relaxed font-sans flex-1 italic">
        {item.testimonial
          ? item.testimonial.slice(0, 220) + (item.testimonial.length > 220 ? '…' : '')
          : 'No testimonial provided.'}
      </p>

      {/* Read more */}
      <Link
        href={`/Testimonials/${item.id}`}
        className="text-[#00494d] text-xs font-sans tracking-widest uppercase hover:text-[#C08B00] transition-colors"
      >
        Read Full →
      </Link>

      {/* Divider */}
      <div className="w-full h-[1px] bg-luxury-muted" />

      {/* Author */}
      <div className="flex items-center gap-3">
        {item.imageUrl && (
          <div className="w-10 h-10 rounded-full overflow-hidden bg-stone-100 flex-shrink-0">
            <Image
              src={item.imageUrl}
              alt={item.name}
              width={40}
              height={40}
              className="w-full h-full object-cover"
              unoptimized
            />
          </div>
        )}
        <div className="flex flex-col gap-0.5">
          <span className="editorial-title text-base text-[#00494d] font-light">{item.name || 'Our Client'}</span>
          {item.role && <span className="text-stone-400 text-xs font-sans">{item.role}</span>}
        </div>
        <div className="ml-auto flex flex-col items-end gap-0.5">
          <StarRating rating={item.rating} />
          <span className="text-stone-400 text-[10px] font-sans">{item.rating}/5</span>
        </div>
      </div>
    </motion.div>
  );
}

// Featured quote block (left-side large)
function FeaturedQuote({ item, isActive }) {
  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.div
          key={item.name}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-6"
        >
          <div className="text-[#C08B00] text-7xl font-serif leading-none select-none">"</div>
          <blockquote className="editorial-serif-italic text-xl md:text-2xl text-stone-700 leading-relaxed font-light">
            {item.quote}
          </blockquote>
          <div className="flex items-center gap-4 mt-2">
            <div className="relative w-14 h-14 rounded-full overflow-hidden bg-stone-100 flex-shrink-0 shadow-md">
              <Image
                src={item.src}
                alt={item.name}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div>
              <div className="editorial-title text-lg text-[#00494d] font-light">{item.name}</div>
              <div className="text-stone-400 text-xs font-sans tracking-wide">{item.designation}</div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetch() {
      try {
        const data = await getTestimonials();
        if (Array.isArray(data)) {
          const sorted = data
            .filter(t => t.rating !== undefined)
            .sort((a, b) => b.rating - a.rating);
          setTestimonials(sorted);
        }
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    fetch();
  }, []);

  // Auto-rotate featured quotes
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex(i => (i + 1) % FEATURED.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Seo
        title="Client Testimonials | Saksham Associates"
        description="Read real client testimonials and reviews for Saksham Associates. Discover how we deliver inspiring interior design solutions in Kolkata."
        url="https://sakshamassociates.in/Testimonials"
        image="/images/SALOGO.svg"
        keywords="testimonials, client reviews, Saksham Associates, interior design feedback, Kolkata"
      />

      <div className="bg-[#FAF9F6] text-[#1C1917] overflow-x-clip min-h-screen pt-32 pb-20">

        {/* ── HERO HEADER ── */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto mb-20 md:mb-28">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="flex flex-col gap-4"
          >
            <span className="editorial-subtitle">CLIENT TRUST</span>
            <h1 className="editorial-title text-5xl md:text-7xl text-[#00494d] leading-none">
              Dreams Designed,<br />
              <span className="editorial-serif-italic font-normal">Stories Shared.</span>
            </h1>
            <div className="w-24 h-[1px] bg-[#C08B00] mt-4" />
          </motion.div>
        </section>

        {/* ── FEATURED QUOTE ROTATOR ── */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto mb-28 md:mb-40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

            {/* Left: Large rotating quote */}
            <div className="lg:col-span-7 min-h-[260px]">
              <FeaturedQuote item={FEATURED[activeIndex]} isActive={true} />
            </div>

            {/* Right: Navigation list */}
            <div className="lg:col-span-5 flex flex-col gap-0 border-l border-luxury-muted pl-8">
              {FEATURED.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`flex items-center gap-4 py-5 border-b border-luxury-muted text-left group transition-all duration-300 focus:outline-none ${activeIndex === i ? '' : 'opacity-50 hover:opacity-80'
                    }`}
                >
                  <div
                    className={`w-[3px] self-stretch rounded-full flex-shrink-0 transition-colors duration-300 ${activeIndex === i ? 'bg-[#C08B00]' : 'bg-transparent'
                      }`}
                  />
                  <div className="flex flex-col gap-0.5">
                    <span className="editorial-title text-base text-[#00494d] font-light">{item.name}</span>
                    <span className="text-stone-400 text-xs font-sans">{item.designation}</span>
                  </div>
                  {activeIndex === i && (
                    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-[#C08B00] flex-shrink-0" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-10 flex gap-2">
            {FEATURED.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-[2px] transition-all duration-500 focus:outline-none ${i === activeIndex ? 'w-10 bg-[#C08B00]' : 'w-4 bg-stone-300 hover:bg-stone-400'
                  }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </section>

        {/* ── MILESTONES STRIP ── */}
        <section className="py-20 bg-[#1C1917] text-[#FAF9F6] mb-28 md:mb-40">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-stone-800"
            >
              {STATS.map((s, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="flex flex-col gap-2 md:px-8 first:pl-0 last:pr-0 py-6 md:py-0"
                >
                  <span className="editorial-title text-4xl md:text-5xl text-[#C08B00] font-light">{s.value}</span>
                  <span className="text-[10px] text-stone-400 tracking-widest uppercase font-sans">{s.label}</span>
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-16 border-t border-stone-800 pt-10 text-center max-w-2xl mx-auto">
              <p className="editorial-serif-italic text-lg text-stone-400 font-light leading-relaxed">
                &quot;Every milestone is a reflection of our dedication to creating spaces that inspire and exceed expectations.&quot;
              </p>
            </div>
          </div>
        </section>

        {/* ── ALL TESTIMONIALS (from Firebase) ── */}
        {/* <section className="px-6 md:px-12 max-w-7xl mx-auto mb-28 md:mb-40">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="mb-14 flex flex-col gap-4"
          >
            <span className="editorial-subtitle">ALL REVIEWS</span>
            <h2 className="editorial-title text-4xl md:text-5xl text-[#00494d]">
              Words That<br />
              <span className="editorial-serif-italic font-normal">Inspire Us.</span>
            </h2>
            <div className="w-16 h-[1px] bg-[#C08B00] mt-2" />
          </motion.div>

          {loading ? (
            <div className="flex items-center justify-center py-24">
              <div className="flex gap-2">
                {[0, 1, 2].map(i => (
                  <div
                    key={i}
                    className="w-2 h-2 rounded-full bg-[#C08B00] animate-bounce"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  />
                ))}
              </div>
            </div>
          ) : testimonials.length === 0 ? (
            <div className="text-center py-24 text-stone-400 font-sans text-sm">
              No client reviews found yet.
            </div>
          ) : (
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={stagger}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {testimonials.map((item, i) => (
                <TestimonialCard key={item.id || i} item={item} index={i} />
              ))}
            </motion.div>
          )}
        </section> */}

        {/* ── CTA ── */}
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
                Join our growing family of satisfied clients across Kolkata. Arrange a private spatial consultation with Mrs. Madhu Jaiswal today.
              </p>
            </div>
            <div className="lg:col-span-7 bg-[#495A54]/20 p-6 md:p-10 rounded-2xl border border-[#495A54]/50 shadow-2xl backdrop-blur-sm">
              <ContactFull />
            </div>
          </div>
        </section>

      </div>
    </>
  );
}

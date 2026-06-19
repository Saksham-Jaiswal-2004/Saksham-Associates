"use client"
import React from 'react';
import Seo from '../components/SEO';
import { motion } from 'framer-motion';
import ContactFull from '../components/ContactFull';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function ContactPage() {
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
        title="Contact Saksham Associates | Book Your Consultation"
        description="Get in touch with Saksham Associates for personalized interior design solutions in Kolkata. Book a consultation or request a free quote today."
        url="https://sakshamassociates.in/Contact"
        image="/images/SALOGO.svg"
        keywords="contact, Saksham Associates, interior design consultation, Kolkata, book appointment"
      />

      <div className="bg-[#FAF9F6] text-[#1C1917] overflow-x-clip min-h-screen pt-32 pb-20">
        
        {/* Editorial Header */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto mb-16">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="flex flex-col gap-4"
          >
            <span className="editorial-subtitle">THE DIALOGUE</span>
            <h1 className="editorial-title text-5xl md:text-7xl text-[#00494d] leading-none tracking-wide">
              Begin Your <br />
              <span className="editorial-serif-italic font-normal">Spatial Journey.</span>
            </h1>
            <div className="w-24 h-[1px] bg-[#C08B00] mt-4" />
          </motion.div>
        </section>

        {/* Contact Grid Section */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Left Column: Direct info and map */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="lg:col-span-5 flex flex-col gap-8 text-stone-700 text-sm md:text-base font-sans"
          >
            <p className="leading-relaxed">
              Experience the <span className="text-[#C08B00] font-semibold">Saksham Associates</span> difference. Connect with our Principal Operations and Design directors to schedule a private space audit and begin conceptualizing your address.
            </p>
            
            <div className="flex flex-col gap-4 border-t border-b border-luxury-muted py-6">
              <div className="flex items-center gap-3 text-stone-800">
                <FaPhoneAlt className="text-[#C08B00]" />
                <span className="font-semibold">+91-90384 15889 / +91-98317 93459</span>
              </div>
              <div className="flex items-center gap-3 text-stone-800">
                <MdEmail className="text-[#C08B00]" />
                <a href="mailto:admin@sakshamassociates.in" className="hover:text-[#C08B00] transition-colors">
                  admin@sakshamassociates.in
                </a>
              </div>
            </div>

            {/* Office Hours */}
            <div className="flex flex-col gap-2">
              <span className="text-xs font-sans tracking-widest uppercase text-stone-400">STUDIO HOURS</span>
              <p className="text-sm font-medium text-stone-800">Monday — Saturday: 10:00 AM to 7:00 PM</p>
              <p className="text-xs text-stone-500">By private appointment only.</p>
            </div>

            {/* Google Maps embed */}
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-md border border-luxury-muted">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.123537323811!2d88.40561997475828!3d22.611861531531254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275734d5646c5%3A0x97e04385c0935033!2sSaksham%20Associates!5e0!3m2!1sen!2sin!4v1738569730935!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title="Saksham Associates Kolkata office location map"
              />
            </div>
          </motion.div>

          {/* Right Column: Custom form container */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="lg:col-span-7 bg-[#00494d] p-6 md:p-10 rounded-2xl border border-[#495A54]/30 shadow-2xl"
          >
            <ContactFull />
          </motion.div>

        </section>

      </div>
    </>
  );
}

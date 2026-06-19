"use client"
import React from 'react'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'
import Link from 'next/link'
import Image from 'next/image'
import Seo from '../components/SEO'
import { motion } from 'framer-motion'
import useFetchProjectsByCategory from '../hooks/fetchProjects'

export default function ResidentialPage() {
  const { projects: residentialProjects } = useFetchProjectsByCategory("Residential");

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
        title="Residential Interior Design | Saksham Associates"
        description="Discover our residential interior design projects in Kolkata. Saksham Associates creates beautiful, functional homes tailored to your lifestyle."
        url="https://sakshamassociates.in/Residential"
        image="/images/SALOGO.svg"
        keywords="residential interior design, home design, Saksham Associates, Kolkata"
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
            <Link href="/Portfolio" className="text-xs uppercase tracking-widest text-stone-400 hover:text-[#C08B00] transition-colors mb-2">
              ← Back to Archive
            </Link>
            <span className="editorial-subtitle">SPATIAL TYPOLOGY</span>
            <h1 className="editorial-title text-5xl md:text-7xl text-[#00494d] leading-none tracking-wide">
              Residential <br />
              <span className="editorial-serif-italic font-normal">Sanctuaries.</span>
            </h1>
            <div className="w-24 h-[1px] bg-[#C08B00] mt-4" />
          </motion.div>
        </section>

        {/* Project List */}
        <section className="px-6 md:px-12 max-w-7xl mx-auto mb-28">
          {Array.isArray(residentialProjects) && residentialProjects.length > 0 ? (
            <div className="flex flex-col gap-12">
              {residentialProjects.map((project, index) => {
                const formattedDate = new Date(`${project.time}-01`).toLocaleString("default", { 
                  month: "short", 
                  year: "numeric" 
                });
                return (
                  <motion.div 
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="group border-b border-luxury-muted pb-12 flex flex-col md:flex-row gap-8 items-center"
                  >
                    <span className="editorial-title text-4xl text-[#C08B00] font-light leading-none min-w-[60px] self-start md:self-center">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    
                    {/* Project Image Box */}
                    <div className="relative aspect-[16/10] md:aspect-[4/3] w-full md:w-1/4 rounded-lg overflow-hidden bg-stone-100 shadow-md">
                      <Image
                        src={project.image}
                        alt={`Residential case - ${project.title}`}
                        fill
                        className="object-cover filter grayscale group-hover:grayscale-0 transition-all duration-[1s]"
                        unoptimized
                      />
                    </div>

                    {/* Project text details */}
                    <div className="flex flex-col gap-3 flex-1">
                      <span className="text-stone-400 text-xs tracking-widest font-sans uppercase">
                        {project.location} &nbsp;|&nbsp; {formattedDate}
                      </span>
                      <h3 className="editorial-title text-3xl text-[#00494d] font-light leading-none group-hover:text-[#C08B00] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-stone-600 text-sm leading-relaxed font-sans max-w-2xl mt-1">
                        {project.description.length > 250 ? `${project.description.substring(0, 250)}...` : project.description}
                      </p>
                      <div className="mt-2">
                        <Link href={`/Portfolio/${project.id}`} className="text-xs uppercase tracking-widest text-[#00494d] hover:text-[#C08B00] font-semibold transition-colors">
                          View Project Details →
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20 border border-dashed border-luxury-muted rounded-xl bg-stone-50/50">
              <h2 className="text-xl font-serif text-[#00494d] mb-2">No Projects Configured</h2>
              <p className="text-stone-500 text-sm font-sans max-w-sm mx-auto leading-relaxed">
                We are currently building this online archive. Connect with <span className="text-[#C08B00] font-semibold">Saksham Associates</span> to see offline print case catalogs.
              </p>
            </div>
          )}
        </section>

        {/* Testimonials & CTA */}
        <section className="border-t border-luxury-muted">
          <Testimonials />
        </section>
        <section className="border-t border-luxury-muted">
          <CTA />
        </section>

      </div>
    </>
  )
}

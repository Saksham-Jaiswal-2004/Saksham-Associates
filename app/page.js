"use client"
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Benefits from "./components/Benefits";
import CTA from "./components/CTA";
import ContactFull from "./components/ContactFull";
import Services from "./components/Services";
import Link from 'next/link'
import Seo from "./components/SEO";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Seo
        title="Saksham Associates | Best Interior Designers in Kolkata"
        description="Transform your home, office, or commercial space with Saksham Associates. Personalized, innovative, and sustainable interior design solutions in Kolkata."
        url="https://sakshamassociates.in/"
        image="/images/SALOGO.svg"
        keywords="interior design, Kolkata, residential, commercial, luxury, sustainable, Saksham Associates, best interior designers, home design, office design"
      />
      <div className="h-fit">
        <div className="h-screen flex justify-center items-center bg1 text-[#fff] w-full">
          <h1 className="md:text-7xl text-[2.2rem]">Saksham Associates</h1>
        </div>

        <div className="h-fit mb-24 flex flex-wrap items-center">
          <div className="md:w-1/2 w-full p-10 flex flex-col gap-4">
            <h1 className="text-4xl my-6 head">Your Space, Our Expertise</h1>

            <p className="text-base">At <strong>Saksham Associates</strong>, a leading name among interior designers in Kolkata, we specialize in crafting inspiring spaces that seamlessly blend style, functionality, and innovation. Whether it’s home interior design or office interior design in Kolkata, our team delivers bespoke solutions tailored to your unique lifestyle and business needs.</p>
            <p className="text-base">We bring your vision to life with modern interior design, luxury home interiors, and space-optimizing solutions designed to elevate your environment. From residential interior designers to commercial interior projects, our expert team ensures each detail reflects your personal taste while enhancing everyday living.</p>
            <p className="text-base">Looking for budget-friendly home makeovers, modular kitchen design, or bedroom and living room design in Kolkata? Trust Saksham Associates — your trusted partner in creating spaces that truly inspire.</p>
            <ul className="ml-8 flex flex-col gap-1">
              <li>• Top Interior Designers in Kolkata</li>
              <li>• Custom Home & Office Interior Solutions</li>
              <li>• Serving Salt Lake, New Town, Alipore, Ballygunge & More</li>
              <li>• Eco-Friendly, Vastu-Compliant, and Smart Home Designs</li>
            </ul>
            <p className="text-base">Let’s transform your space into a masterpiece — one that speaks of elegance, comfort, and your individuality.</p>

            <div className="my-6 w-full flex flex-wrap justify-start items-start gap-4">
              <Link  href="#cta" className="button2 px-3 py-2 rounded-xl text-base">Bring Your Vision to Life Now</Link>
              <Link href="/Portfolio" className="button3 px-3 py-2 rounded-xl text-base">Explore Our Interior Design Projects</Link>
            </div>
          </div>

          <div className="md:w-1/2 w-full h-fit">
            <Image
              src="https://i.pinimg.com/736x/ad/e6/62/ade662a46b59ee144b067ce01f40db51.jpg"
              alt="Home Image"
              className="w-full h-auto object-cover"
              width={800}
              height={500}
              unoptimized
            />
          </div>
        </div>

        <Services/>
        <Features/>
        <Gallery/>
        <Benefits/>
        <Testimonials/>
        <CTA/>
        <ContactFull/>
      </div>
    </>
  );
}

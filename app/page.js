"use client"
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Benefits from "./components/Benefits";
import CTA from "./components/CTA";
import ContactFull from "./components/ContactFull";
import Services from "./components/Services";
import Link from 'next/link'

export default function Home() {
  return (
    <div className="h-fit">
      <div className="h-screen flex justify-center items-center bg1 text-[#fff] w-full">
        <h1 className="md:text-7xl text-[2.4rem]">Saksham Associates</h1>
      </div>

      <div className="h-fit mb-24 flex flex-wrap items-center">
        <div className="md:w-1/2 w-full p-10">
          <h1 className="text-4xl my-6 head">Your Space, Our Expertise</h1>
          <p className="text-lg">At Saksham Associates, we create spaces that inspire and elevate. From homes to offices, our expert designers blend style, functionality, and innovation to bring your vision to life. Let us transform your environment into a place that reflects your unique essence and enhances your everyday living.</p>
          <div className="my-6 w-full flex flex-wrap justify-start items-start gap-4">
            <Link  href="#cta" className="button2 px-3 py-2 rounded-xl text-base">Bring Your Vision to Life Now</Link>
            <Link whileInView={{opacity:1 , scale:100}} initial={{opacity:0, scale:50}} transition={{duration:0.5, delay:0.2}} href="/Portfolio" className="button3 px-3 py-2 rounded-xl text-base">See Our Projects</Link>
          </div>
        </div>

        <div className="md:w-1/2 w-full h-fit">
          <img src="https://i.pinimg.com/736x/ad/e6/62/ade662a46b59ee144b067ce01f40db51.jpg" alt="Home Image" className="w-full h-auto object-cover"/>
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
  );
}

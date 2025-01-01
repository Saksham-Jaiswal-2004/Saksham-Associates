import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Benefits from "./components/Benefits";
import CTA from "./components/CTA";
import ContactFull from "./components/ContactFull";

export default function Home() {
  return (
    <div className="h-fit">
      <div className="h-screen pt-32 bg1">
        Saksham Associates
      </div>

      <Features/>
      <Gallery/>
      <Benefits/>
      <Testimonials/>
      <CTA/>
      <ContactFull/>
    </div>
  );
}

import CTA from "@/app/components/CTA";
import { getProjectById } from "@/app/hooks/getProjectByID";
import Image from "next/image";
import Link from "next/link";

export default async function ProjectPage({ params }) {
  const id = params.id;
  const project = await getProjectById(id);

  if (!project) {
    return (
      <div className="h-[70vh] flex flex-col justify-center items-center bg-[#FAF9F6] text-[#1C1917] pt-24 font-sans">
        <h1 className="text-2xl font-serif mb-4">Project Not Found</h1>
        <Link href="/Portfolio" className="luxury-btn">Return to Portfolio</Link>
      </div>
    );
  }

  // Format date helper
  const formattedDate = new Date(`${project.time}-01`).toLocaleString("default", { 
    month: "long", 
    year: "numeric" 
  });

  return (
    <div className="bg-[#FAF9F6] text-[#1C1917] min-h-screen pt-32 pb-20 font-sans">
      
      {/* Editorial Header */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-16">
        <div className="flex flex-col gap-4">
          <Link href="/Portfolio" className="text-xs uppercase tracking-widest text-stone-400 hover:text-[#C08B00] transition-colors mb-2">
            ← Back to Archive
          </Link>
          <span className="editorial-subtitle">PROJECT CASE STUDY</span>
          <h1 className="editorial-title text-4xl md:text-6xl text-[#00494d] leading-none tracking-wide">
            {project.title}
          </h1>
          <div className="w-24 h-[1px] bg-[#C08B00] mt-2" />
        </div>
      </section>

      {/* Main Grid: Details, metadata table and project image */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start mb-24">
        
        {/* Left Column: Image and details */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden shadow-xl bg-stone-100">
            <Image
              src={project.image || "/images/service1.jpg"}
              alt={`Saksham Associates Project - ${project.title}`}
              fill
              className="object-cover hover:scale-102 transition-transform duration-[1.2s]"
              unoptimized
            />
          </div>

          <div className="flex flex-col gap-4 mt-4">
            <h2 className="text-xs uppercase tracking-[0.35em] text-stone-400 font-semibold">
              The Spatial Concept
            </h2>
            <p className="text-lg md:text-xl text-[#00494d] font-serif leading-relaxed italic border-l-2 border-[#C08B00] pl-6 py-2">
              &quot;{project.description}&quot;
            </p>
          </div>
        </div>

        {/* Right Column: Project details table and highlights */}
        <div className="lg:col-span-4 flex flex-col gap-8 lg:sticky lg:top-32 h-fit bg-stone-50 p-8 rounded-xl border border-luxury-muted">
          
          <div className="flex flex-col gap-4">
            <span className="text-[10px] tracking-widest uppercase text-stone-400">DESIGN FIRM</span>
            <span className="text-md font-serif text-[#00494d] uppercase tracking-[0.1em] font-light">
              Saksham <span className="text-[#C08B00] italic font-normal">Associates</span>
            </span>
          </div>

          {/* Project Details Table */}
          <div className="flex flex-col gap-4 border-t border-b border-luxury-muted py-6">
            <div className="flex justify-between items-center text-sm py-1">
              <span className="text-stone-400 uppercase tracking-wider text-xs">Location</span>
              <span className="font-semibold text-stone-800">{project.location}</span>
            </div>
            <div className="flex justify-between items-center text-sm py-1">
              <span className="text-stone-400 uppercase tracking-wider text-xs">Date</span>
              <span className="font-semibold text-stone-800">{formattedDate}</span>
            </div>
            <div className="flex justify-between items-center text-sm py-1">
              <span className="text-stone-400 uppercase tracking-wider text-xs">Category</span>
              <span className="font-semibold text-[#C08B00]">{project.category || "Luxury Interior"}</span>
            </div>
          </div>

          <div className="flex flex-col gap-4 text-xs text-stone-500 leading-relaxed">
            <p>
              This case study documents a custom spatial plan finalized by our principal design board. Built with unlacquered materials, daylight orientation, and modular functional cabinetry.
            </p>
            <p className="mt-2">
              For pricing estimates on similar spatial transformations, request a call back from <span className="text-[#C08B00] font-semibold">Saksham Associates</span>.
            </p>
          </div>

        </div>

      </section>

      {/* CTA section */}
      <section className="border-t border-luxury-muted">
        <CTA />
      </section>

    </div>
  );
}

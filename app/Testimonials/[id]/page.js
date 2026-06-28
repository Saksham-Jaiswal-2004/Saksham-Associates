import Seo from "../../components/SEO";
import { getTestimonials } from "../../../lib/getTestimonials";
import Image from "next/image";
import Link from "next/link";

export default async function TestimonialPage({ params }) {
  const { id } = await params;

  const testimonials = await getTestimonials();
  const testimonial = testimonials.find((item) => item.id === id);

  if (!testimonial) {
    return (
      <div className="bg-[#FAF9F6] min-h-screen flex flex-col items-center justify-center gap-6 pt-32">
        <span className="editorial-subtitle">404</span>
        <h1 className="editorial-title text-4xl text-[#00494d]">Testimonial not found.</h1>
        <Link href="/Testimonials" className="luxury-btn mt-4">
          <span>Back to Testimonials</span>
        </Link>
      </div>
    );
  }

  const formattedDate = (() => {
    try {
      return testimonial.createdAt?.toDate
        ? testimonial.createdAt.toDate().toLocaleDateString("en-IN", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })
        : null;
    } catch {
      return null;
    }
  })();

  const fullStars = Math.floor(testimonial.rating);
  const hasHalf = testimonial.rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  return (
    <>
      <Seo
        title={`Testimonial by ${testimonial.name} | Saksham Associates`}
        description={testimonial.testimonial}
        url={`https://sakshamassociates.in/Testimonials/${id}`}
        image={testimonial.imageUrl || "/images/SALOGO.svg"}
        keywords="testimonial, client review, Saksham Associates, interior design, Kolkata"
      />

      <div className="bg-[#FAF9F6] text-[#1C1917] min-h-screen pt-32 pb-20 overflow-x-clip">

        {/* ── Back nav ── */}
        <div className="px-6 md:px-12 max-w-4xl mx-auto mb-12">
          <Link
            href="/Testimonials"
            className="text-stone-400 text-xs font-sans tracking-widest uppercase hover:text-[#C08B00] transition-colors"
          >
            ← All Testimonials
          </Link>
        </div>

        {/* ── Main card ── */}
        <section className="px-6 md:px-12 max-w-4xl mx-auto">
          <div className="bg-white/70 rounded-2xl border border-luxury-muted shadow-sm p-10 md:p-16 flex flex-col gap-10">

            {/* Quote mark */}
            <div className="text-[#C08B00] text-8xl font-serif leading-none select-none -mb-6">"</div>

            {/* Full testimonial */}
            <blockquote className="editorial-serif-italic text-xl md:text-2xl text-stone-700 font-light leading-relaxed">
              {testimonial.testimonial}
            </blockquote>

            {/* Gold rule */}
            <div className="w-16 h-[1px] bg-[#C08B00]" />

            {/* Author block */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              {testimonial.imageUrl && (
                <div className="relative w-20 h-20 rounded-full overflow-hidden bg-stone-100 flex-shrink-0 shadow-md ring-2 ring-[#C08B00]/30">
                  <Image
                    src={testimonial.imageUrl}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              )}

              <div className="flex flex-col gap-1">
                <h1 className="editorial-title text-2xl text-[#00494d] font-light">{testimonial.name}</h1>
                {testimonial.role && (
                  <p className="text-stone-400 text-sm font-sans">{testimonial.role}</p>
                )}

                {/* Star rating */}
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[#C08B00] text-base tracking-wide">
                    {"★".repeat(fullStars)}
                    {hasHalf ? "½" : ""}
                    {"☆".repeat(emptyStars)}
                  </span>
                  <span className="text-stone-400 text-xs font-sans">{testimonial.rating} / 5</span>
                </div>
              </div>

              {formattedDate && (
                <div className="sm:ml-auto text-stone-400 text-xs font-sans tracking-wide">
                  {formattedDate}
                </div>
              )}
            </div>

          </div>
        </section>

        {/* ── CTA strip ── */}
        <section className="px-6 md:px-12 max-w-4xl mx-auto mt-16">
          <div className="bg-[#00494d] rounded-xl p-10 flex flex-col md:flex-row items-center gap-8 text-white">
            <div className="flex flex-col gap-3 flex-1">
              <span className="editorial-subtitle text-[#D88E6C]">BEGIN YOUR JOURNEY</span>
              <h2 className="editorial-title text-3xl font-light leading-snug">
                Ready to create your<br />
                <span className="editorial-serif-italic font-normal">own story?</span>
              </h2>
            </div>
            <Link href="/Contact" className="luxury-btn luxury-btn-dark flex-shrink-0">
              <span>Book a Consultation</span>
            </Link>
          </div>
        </section>

      </div>
    </>
  );
}

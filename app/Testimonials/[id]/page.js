import Seo from "../../components/SEO";
import { getTestimonials } from "../../../lib/getTestimonials";
import Image from "next/image";

export default async function TestimonialPage({ params }) {
  const { id } = params;

  // Fetch testimonials from Firebase
  const testimonials = await getTestimonials();

  // Find the testimonial with matching ID
  const testimonial = testimonials.find((item) => item.id === id);

  if (!testimonial) {
    return (
      <div className="h-[50vh] flex justify-center items-center">
        <p className="text-xl text-gray-500">Testimonial not found.</p>
      </div>
    );
  }

  return (
    <>
      <Seo
        title={`Testimonial by ${testimonial.name} | Saksham Associates`}
        description={testimonial.testimonial}
        url={`https://sakshamassociates.in/Testimonials/${id}`}
        image={testimonial.image || "/images/SALOGO.svg"}
        keywords="testimonial, client review, Saksham Associates, interior design, Kolkata"
      />

      <div className="h-fit">
        <div className="testimonial h-[60vh] flex justify-start items-end">
          <div className="absolute h-full md:w-[50%] w-[100%] bg-[#0000009e]"></div>
          <h1 className="md:text-5xl text-3xl m-10 z-[2]" aria-label={`Hear it from ${testimonial.name}`}>Hear it from {testimonial.name}</h1>
        </div>

        <div className="py-2 px-8 flex flex-col justify-center items-start my-16 text-center h-fit">
          {testimonial.image && (
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              aria-label={`Photo of ${testimonial.name}`}
              width={120}
              height={120}
              className="w-[120px] h-[120px] rounded-full mb-4 object-cover"
              unoptimized
            />
          )}

          <h1 className="text-2xl font-bold">{testimonial.name}</h1>

          {testimonial.role && <p className="italic my-2">{testimonial.role}</p>}

          <p className="font-semibold">Rating: {testimonial.rating} ★</p>

          <p className="italic text-left my-4 text-lg">&quot;{testimonial.testimonial}&quot;</p>

          {testimonial.createdAt && (
            <p className="text-gray-500 mt-2">
              {testimonial.createdAt.toDate().toLocaleString("en-IN", {
                dateStyle: "medium",
                timeStyle: "short",
                timeZone: "Asia/Kolkata",
              })}
            </p>
          )}
        </div>
      </div>
    </>
  );
}

import testimonials from "../../constants/testimonials.json";

export default function TestimonialPage({ params }) {
  const { id } = params;

  const testimonial = testimonials.find((item) => String(item.id) === id);

  if (!testimonial) {
    return <p>Testimonial not found.</p>;
  }

  return (
    <div className="h-fit">
      <div className="testimonial h-[60vh] flex justify-start items-end">
        <div className='absolute h-full md:w-[50%] w-[100%] bg-[#0000009e]'></div>
        <h1 className="md:text-5xl text-3xl m-10 z-[2]">Hear it from {testimonial.author}</h1>
      </div>

      <div className="p-2 flex flex-col justify-center items-start my-16 text-center h-fit">
       <h1 className="text-2xl font-bold">{testimonial.author}</h1>
       <p className="italic my-4">"{testimonial.role}"</p>
       <p className="italic my-4">"{testimonial.rating}"</p>
       <p className="italic my-4">"{testimonial.content}"</p>
       {/* <p className="text-gray-500">{testimonial.id}</p> */}
       <p className="text-gray-500">{testimonial.date}</p>
      </div>
    </div>
  );
}

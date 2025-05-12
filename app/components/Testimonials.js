"use client";
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Link from 'next/link';
import { getTestimonials } from "../../lib/getTestimonials";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const data = await getTestimonials();
        if (Array.isArray(data)) {
          const sorted = data
            .filter(t => t.rating !== undefined)
            .sort((a, b) => b.rating - a.rating)
            .slice(0, 6); // top 6 highest rated
          setTestimonials(sorted);
        }
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    }

    fetchTestimonials();
  }, []);

  return (
    <div className='h-screen my-16 flex flex-col items-center'>
      <div className='w-full flex justify-start'>
        <h1 className='md:text-6xl text-4xl my-10 head'>Stories of Inspired Spaces</h1>
      </div>

      <div className='h-3/5 w-[90%] flex flex-col justify-center items-center my-10 mx-4'>
        <Swiper
          loop={true}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper flex justify-center items-center w-[60%]"
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={testimonial.id || index} className='card2 p-4 h-fit rounded-xl bg-[#00000080] text-white'>
              <Link href={`/Testimonials/${testimonial.id}`}>
                <div className='flex flex-wrap md:justify-start items-center w-full h-2/3 md:gap-6 gap-2 mb-4'>
                  <div className='md:h-[150px] md:w-[150px] h-[100px] w-[100px] rounded-full overflow-hidden'>
                    <img
                      src={testimonial.image || "/images/SALOGO.svg"}
                      alt={testimonial.name || "Client"}
                      className="h-full w-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className='flex flex-col justify-end'>
                    <h1 className='font-bold'>{testimonial.name || "Our Client"}</h1>
                    <p className='md:text-base text-sm italic text-[#d6cece] my-1'>
                      {testimonial.role || "Client"}
                    </p>
                    <p className='md:text-base text-sm italic text-[#d6cece] my-1'>
                      {testimonial.rating}★
                    </p>
                  </div>
                </div>

                <p className='text-sm mt-4'>
                  "{testimonial.testimonial ? testimonial.testimonial.slice(0, 50) + '...' : 'No testimonial provided.'}"
                </p>

                {testimonial.createdAt && (
                  <p className="text-white mt-2 text-sm">
                    {testimonial.createdAt.toDate().toLocaleString("en-IN", {
                      dateStyle: "medium",
                    })}
                  </p>
                )}
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className='w-full flex justify-end my-4 mx-3'>
          <Link href="/Testimonials" className='bg-[#00000098] head3 px-4 py-1 rounded-xl hover:bg-[#000000b2]'>
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

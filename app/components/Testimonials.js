"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Link from "next/link";
import { getTestimonials } from "../../lib/getTestimonials";
import Image from "next/image";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [formattedDates, setFormattedDates] = useState([]);

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const data = await getTestimonials();
        if (Array.isArray(data)) {
          const sorted = data
            .filter((t) => t.rating !== undefined)
            .sort((a, b) => b.rating - a.rating)
            .slice(0, 9);

          setTestimonials(sorted);

          // Format createdAt safely
          const dates = sorted.map((t) => {
            try {
              return t.createdAt?.toDate
                ? t.createdAt.toDate().toLocaleDateString("en-IN", {
                  dateStyle: "medium",
                })
                : "";
            } catch {
              return "";
            }
          });
          setFormattedDates(dates);
        }
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    }

    fetchTestimonials();
  }, []);

  return (
    <div className="h-screen my-16 flex flex-col items-center">
      <div className="w-full flex justify-start">
        <h1 className="md:text-6xl text-4xl my-10 head">
          Stories of Inspired Spaces
        </h1>
      </div>

      <div className="md:h-3/5 h-fit w-[90%] flex flex-col justify-center items-center my-10 mx-4">
        <Swiper
          // loop={true}
          loop={testimonials.length > 3}
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
            <SwiperSlide
              key={testimonial.id || index}
              className="card2 p-4 h-fit rounded-xl bg-[#00000080] text-white"
            >
              <Link href={`/Testimonials/${testimonial.id}`} aria-label={`Read full testimonial from ${testimonial.name || "a client"}`}>
                <div className="flex flex-wrap md:justify-start items-center w-full h-fit md:gap-6 gap-2 mb-4 overflow-x-hidden">
                  <div className="md:h-[150px] md:w-[150px] h-[100px] w-[100px] rounded-full overflow-hidden">
                    <Image
                      src={testimonial.imageUrl || "/images/SALOGO.svg"}
                      alt={testimonial.name || "Client"}
                      aria-label={testimonial.name ? `Testimonial image of ${testimonial.name}` : "Testimonial image"}
                      width={150}
                      height={150}
                      className="h-full w-full object-cover hover:scale-105 transition-transform"
                      unoptimized
                    />
                  </div>
                  <div className="flex flex-col justify-end md:w-[50%] w-[57%]">
                    <h1 className="font-bold text-lg">
                      {testimonial.name || "Our Client"}
                    </h1>
                    <p className="md:text-sm text-xs italic text-[#d6cece] my-1">
                      {testimonial.role || "Client"}
                    </p>
                    <p className="md:text-sm text-xs italic text-[#d6cece] my-1">
                      {testimonial.rating} -
                      {
                        (() => {
                          const rating = Number(testimonial.rating) || 0;
                          const fullStars = Math.floor(rating);
                          const halfStar = rating % 1 >= 0.5 ? 1 : 0;
                          const emptyStars = 5 - fullStars - halfStar;
                          return (
                            <>
                              {Array(fullStars).fill("★").map((s, i) => <span key={"full" + i}>{s}</span>)}
                              {halfStar === 1 && <span key="half">½</span>}
                              {Array(emptyStars).fill("☆").map((s, i) => <span key={"empty" + i}>{s}</span>)}
                            </>
                          );
                        })()
                      }
                    </p>
                  </div>
                </div>

                <div className="flex flex-col justify-end">
                  <p className="text-sm mt-4">
                    &quot;{testimonial.testimonial
                      ? testimonial.testimonial.slice(0, 120) + "..."
                      : "No testimonial provided."}&quot;
                  </p>

                  {formattedDates[index] && (
                    <p className="text-gray-200 font-light mt-2 text-sm">
                      {formattedDates[index]}
                    </p>
                  )}
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="w-full flex justify-end my-4 mx-3">
          <Link
            href="/Testimonials"
            className="bg-[#00000098] head3 px-4 py-3 rounded-xl hover:bg-[#000000b2]"
            aria-label="View more client testimonials"
          >
            View More Testimonials
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
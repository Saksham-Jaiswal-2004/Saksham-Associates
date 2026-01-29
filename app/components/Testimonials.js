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
import { AnimatedTestimonials } from "./ui/animated-testimonials";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [formattedDates, setFormattedDates] = useState([]);

  const testimonial = [
    {
      quote: "Fantastic job done by Mrs.Madhu Jaiswal.I'am too much happy with the new interiors. It's more than I expected. Carry on SAKSHAM ASSOCIATES",
      name: "Saurav Banthia",
      designation: "Business",
      src: "/images/service1.jpg"
    },
    {
      quote: "Marvelous job done by Mrs.Madhu Jaiswal and entire team. The complete house interiorsn has been done very gracefully. Which is liked by each and everyone who's coming to my house. Infact all are coming to see and admire the house, people are appreciating and liking the interior very much. Thank you so much for your efforts.",
      name: "Sheetal Dassani",
      designation: "Model",
      src: "/images/service2.jpeg"
    },
    {
      quote: "I, Jemin Doshi, Founder of Napcloud Sofas and Mattresses representing Furniture and Mattresses category in BNI INCREDIBLEZ, am hereby pleased to write a testimonial for MRS.MADHU JAISWAL, who represents INTERIOR DESIGNER Category in BNI INCREDIBLEZ. Madhu ji has a curios mind which helps find custom solutions for challenging engagements. The ethos of giver's gain is reflected in her when she referred me to one of her clients immediately in our very first meeting. I am grateful for the opportunity and trust I did it justice. She is one of the most balanced persons I have come across. She has good command over her subject and business along with great energy and perseverance towards perfection and great delivery. She is hence an ideal ambassador for our chapter. She knows the key important deliverable of her business and I am impressed with that. She has command over her subject and has proved to get the right product subscribed as per requirement of the clients. I am looking forward to staying associated with her and her guidance. Wishing them luck and success in all her future endeavors.",
      name: "Jemin Doshi",
      designation: "Napcloud Sofa & Mattresses",
      src: "/images/service3.webp"
    },
    {
      quote: "I, Megha Sarayan, owner of Land of Cakes, am pleased to write a testimonial for MRS.MADHU JAISWAL, Saksham Associates. Recently, I shifted my Chinar Park kitchen, and I availed myself of her services. I'm very satisfied with her services, as well as the format and discipline of work and execution and payment terms. I found her extremely professional, and her nature is very warm that adds to her aura. I've recommended her to all my friends and family and I wish her all the best for all her future endeavours.",
      name: "Megha Sarayan",
      designation: "Land of Cakes, Flavour The Savour",
      src: "/images/service4.webp"
    },
    {
      quote: "I get connected with MRS.MADHU JAISWAL,owner of SAKSHAM ASSOCIATES at BNI PLATFORM as INTERIOR DESIGNER category. She is consummate professional and responsive. Me and my wife completely trust her judgement and have come to greatly appreciate her unique ability to make living spaces both highly functional and aesthetically pleasing. She is cognizant of budget constraints and thoughtful about designs plan that maximise value.",
      name: "Sushil Kumar Modi",
      designation: "HANSAL HOLIDAYS TOURS & TRAVELS",
      src: "/images/service5.webp"
    },
    {
      quote: "I, Keshav Binani, owner of Grand Events, representing Wedding Planner category in BNI INCREDIBLEZ. I am hereby pleased to write a testimonial for MRS.MADHU JAISWAL. She has a positive attitude towards business and life. I had given her a connect which was not for a very large ticket, but the time taken to complete the project was less than the time taken by client to explain her requirements. I had also received commendable compliment from the client. So this is how one grows bigger and better gaining trust and delivering in time. Very much commendable and appreciated work done in no time. Wishing her all the good luck for her future endeavours.",
      name: "Keshav Binani",
      designation: "Grand Events (Wedding Planner)",
      src: "/images/service6.jpeg"
    }
  ];

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
    <div className="min-h-screen h-fit my-16 flex flex-col items-center">
      <div className="w-full flex justify-start">
        <h1 className="md:text-6xl text-4xl my-10 head">
          Stories of Inspired Spaces
        </h1>
      </div>

      <AnimatedTestimonials testimonials={testimonial} />

      <div className="md:h-3/5 h-fit w-[90%] flex flex-col justify-center items-center my-10 mx-4">
        {/* <Swiper
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
        </Swiper> */}

        <div className="w-full flex justify-end my-4 mx-3">
          {/* <Link
            href="/Testimonials"
            className="bg-[#00000098] head3 px-4 py-3 rounded-xl hover:bg-[#000000b2]"
            aria-label="View more client testimonials"
          >
            View More Testimonials
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
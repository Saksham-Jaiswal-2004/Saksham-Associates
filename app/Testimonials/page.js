"use client"
import React, { useEffect, useState } from 'react';
import Stats from '../components/Stats';
import CTA from '../components/CTA';
import Link from 'next/link';
import { Star, StarHalf } from 'lucide-react';
import Seo from '../components/SEO';
import { getTestimonials } from '../../lib/getTestimonials';
import Image from 'next/image';

const Testimonial = ({ id, image, name, rating, testimonial, role }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="card1 hover:bg-[#5a695f] rounded-xl p-6 my-2 shadow-md md:w-[32%] w-[98%] min-h-[330px] max-h-fit">
      <Link href={`Testimonials/${id}`}>
        <div className="flex items-center mb-4">
          <Image
            src={image}
            alt={name}
            aria-label={`Photo of ${name}`}
            width={90}
            height={90}
            className='h-[90px] w-auto flex justify-center items-center rounded-full mx-8 object-cover'
            unoptimized
          />

          {rating + " - "}

          {[...Array(fullStars)].map((_, i) => (
            <Star key={`full-${i}`} className="text-yellow-400 fill-yellow-400" size={20} />
          ))}

          {hasHalfStar && (
            <StarHalf className="text-yellow-400 fill-yellow-400" size={20} />
          )}

          {[...Array(emptyStars)].map((_, i) => (
            <Star key={`empty-${i}`} className="" size={20} />
          ))}
        </div>

        <blockquote className="text-[#e4ddcf] mb-4 italic">
          &quot;{testimonial.substring(0, 220) + " ..."}&quot;
        </blockquote>

        <div className="flex flex-col">
          <cite className="text-[#fafafa] font-medium not-italic">
            {name}
          </cite>
          {role && (
            <span className="text-[#bfbfbf] text-sm">
              {role}
            </span>
          )}
        </div>
      </Link>
    </div>
  );
};

const Page = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTestimonials();
      setTestimonials(data);
    };

    fetchData();
  }, []);

  return (
    <>
      <Seo
        title="Client Testimonials | Saksham Associates"
        description="Read real client testimonials and reviews for Saksham Associates. Discover how we deliver inspiring interior design solutions in Kolkata."
        url="https://sakshamassociates.in/Testimonials"
        image="/images/SALOGO.svg"
        keywords="testimonials, client reviews, Saksham Associates, interior design feedback, Kolkata"
      />
      <div className='h-fit'>
        <div className='h-screen flex justify-start items-end bg2'>
          <div className='absolute h-full md:w-[62%] w-[100%] bg-[#0000009e]'></div>
          <h1 className='md:text-6xl text-4xl mx-6 my-28 z-[2] head3'>Dreams Designed, <br />Stories Shared</h1>
        </div>

        <div className='flex flex-col my-24 head w-full'>
          <h2 className="md:text-6xl text-4xl font-bold mb-6 my-10">Words That Inspire Us</h2>
          <div className="flex flex-wrap justify-center items-center my-10 md:gap-6 gap-1 md:p-8 p-1">
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index} {...testimonial} />
            ))}
          </div>
        </div>

        <Stats />
        <CTA />
      </div>
    </>
  );
};

export default Page;

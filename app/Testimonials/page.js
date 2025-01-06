import React from 'react'
import Stats from '../components/Stats'
import CTA from '../components/CTA'
import { Star, StarHalf } from 'lucide-react';

const Testimonial = ({ author, rating, content, role }) => {
  // Convert rating to number of full and half stars
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="card1 hover:bg-[#5a695f] rounded-xl p-6 shadow-md md:w-[32%] w-[98%]">
      <div className="flex items-center mb-4">
        {/* Render full stars */}
        {[...Array(fullStars)].map((_, i) => (
          <Star key={`full-${i}`} className="text-yellow-400 fill-yellow-400" size={20}/>
        ))}
        
        {/* Render half star if needed */}
        {hasHalfStar && (
          <StarHalf className="text-yellow-400 fill-yellow-400" size={20}/>
        )}
        
        {/* Render empty stars */}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={`empty-${i}`} className="" size={20}/>
        ))}
        
        <span className="ml-2 text-[#d8d7d7]">
          {rating.toFixed(1)}
        </span>
      </div>
      
      <blockquote className="text-[#e4ddcf] mb-4 italic">
        "{content}"
      </blockquote>
      
      <div className="flex flex-col">
        <cite className="text-[#fafafa] font-medium not-italic">
          {author}
        </cite>
        {role && (
          <span className="text-[#bfbfbf] text-sm">
            {role}
          </span>
        )}
      </div>
    </div>
  );
};


const page = () => {

  const testimonials = [
    {
      author: "Sarah Johnson",
      role: "Marketing Director",
      rating: 5,
      content: "Absolutely fantastic service! The team went above and beyond our expectations."
    },
    {
      author: "Mike Chen",
      role: "Tech Lead",
      rating: 4.5,
      content: "Great experience working with them. Very professional and responsive."
    },
    {
      author: "Sarah Johnson",
      role: "Marketing Director",
      rating: 5,
      content: "Absolutely fantastic service! The team went above and beyond our expectations."
    },
    {
      author: "Mike Chen",
      role: "Tech Lead",
      rating: 4.5,
      content: "Great experience working with them. Very professional and responsive."
    },
    {
      author: "Sarah Johnson",
      role: "Marketing Director",
      rating: 5,
      content: "Absolutely fantastic service! The team went above and beyond our expectations."
    },
    {
      author: "Mike Chen",
      role: "Tech Lead",
      rating: 4.5,
      content: "Great experience working with them. Very professional and responsive."
    },
    {
      author: "Sarah Johnson",
      role: "Marketing Director",
      rating: 5,
      content: "Absolutely fantastic service! The team went above and beyond our expectations."
    },
    {
      author: "Mike Chen",
      role: "Tech Lead",
      rating: 4.5,
      content: "Great experience working with them. Very professional and responsive."
    },
    {
      author: "Sarah Johnson",
      role: "Marketing Director",
      rating: 5,
      content: "Absolutely fantastic service! The team went above and beyond our expectations."
    },
    {
      author: "Mike Chen",
      role: "Tech Lead",
      rating: 4.5,
      content: "Great experience working with them. Very professional and responsive."
    },
    {
      author: "Sarah Johnson",
      role: "Marketing Director",
      rating: 5,
      content: "Absolutely fantastic service! The team went above and beyond our expectations."
    },
    {
      author: "Mike Chen",
      role: "Tech Lead",
      rating: 4.5,
      content: "Great experience working with them. Very professional and responsive."
    },
  ];

  return (
    <div className='h-fit'>
      <div className='h-screen flex justify-start items-end bg2'>
        <div className='absolute h-full md:w-[62%] w-[100%] bg-[#0000009e]'></div>
        <h1 className='md:text-6xl text-4xl mx-6 my-28 z-[2] head3'>Dreams Designed, Stories Shared</h1>
      </div>

      <div className='flex flex-col my-24 head w-full'>
        <h2 className="md:text-6xl text-4xl font-bold mb-6 my-10">Words That Inspire Us</h2>
        <div className="space-y-6 flex flex-wrap justify-center items-center my-10 md:gap-6 gap-1 md:p-8 p-1">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              {...testimonial}
            />
          ))}
        </div>
      </div>

      <Stats/>
      <CTA/>
    </div>
  )
}

export default page

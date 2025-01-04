"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Testimonials = () => {

  const swiperRef = useRef(null);

  return (
    <div className='h-screen my-16 flex flex-col items-center'>
      <div className='w-full flex justify-start'>
        <h1 className='md:text-6xl text-4xl my-10 head'>Stories of Inspired Spaces</h1>
      </div>

      {/* <Carousel/> */}
      <div className='h-3/5 w-[90%] flex justify-center items-center my-10 mx-4'>
        <Swiper
          // slidesPerView={3}
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
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide className='card2'>
            <img src="/images/client1.jpg" alt="Client" className="rounded-xl"/>
            <h1>Mr. ABCD EFGH</h1>
            <p className='text-sm italic text-[#d6cece] my-1'>Engineer</p>
            <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia obcaecati voluptatem accusantium dolorem repudiandae totam quae fugit, ab illum quia placeat ratione sed perferendis accusamus incidunt sunt, suscipit velit asperiores.</p>
          </SwiperSlide>
          
          <SwiperSlide className='card2'>
            <img src="/images/client1.jpg" alt="Client" className="rounded-xl"/>
            <h1>Mr. ABCD EFGH</h1>
            <p className='text-sm italic text-[#d6cece] my-1'>Engineer</p>
            <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia obcaecati voluptatem accusantium dolorem repudiandae totam quae fugit, ab illum quia placeat ratione sed perferendis accusamus incidunt sunt, suscipit velit asperiores.</p>
          </SwiperSlide>

          <SwiperSlide className='card2'>
            <img src="/images/client1.jpg" alt="Client" className="rounded-xl"/>
            <h1>Mr. ABCD EFGH</h1>
            <p className='text-sm italic text-[#d6cece] my-1'>Engineer</p>
            <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia obcaecati voluptatem accusantium dolorem repudiandae totam quae fugit, ab illum quia placeat ratione sed perferendis accusamus incidunt sunt, suscipit velit asperiores.</p>
          </SwiperSlide>

          <SwiperSlide className='card2'>
            <img src="/images/client1.jpg" alt="Client" className="rounded-xl"/>
            <h1>Mr. ABCD EFGH</h1>
            <p className='text-sm italic text-[#d6cece] my-1'>Engineer</p>
            <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia obcaecati voluptatem accusantium dolorem repudiandae totam quae fugit, ab illum quia placeat ratione sed perferendis accusamus incidunt sunt, suscipit velit asperiores.</p>
          </SwiperSlide>

          <SwiperSlide className='card2'>
            <img src="/images/client1.jpg" alt="Client" className="rounded-xl"/>
            <h1>Mr. ABCD EFGH</h1>
            <p className='text-sm italic text-[#d6cece] my-1'>Engineer</p>
            <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia obcaecati voluptatem accusantium dolorem repudiandae totam quae fugit, ab illum quia placeat ratione sed perferendis accusamus incidunt sunt, suscipit velit asperiores.</p>
          </SwiperSlide>

          <SwiperSlide className='card2'>
            <img src="/images/client1.jpg" alt="Client" className="rounded-xl"/>
            <h1>Mr. ABCD EFGH</h1>
            <p className='text-sm italic text-[#d6cece] my-1'>Engineer</p>
            <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia obcaecati voluptatem accusantium dolorem repudiandae totam quae fugit, ab illum quia placeat ratione sed perferendis accusamus incidunt sunt, suscipit velit asperiores.</p>
          </SwiperSlide>

          <SwiperSlide className='card2'>
            <img src="/images/client1.jpg" alt="Client" className="rounded-xl"/>
            <h1>Mr. ABCD EFGH</h1>
            <p className='text-sm italic text-[#d6cece] my-1'>Engineer</p>
            <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia obcaecati voluptatem accusantium dolorem repudiandae totam quae fugit, ab illum quia placeat ratione sed perferendis accusamus incidunt sunt, suscipit velit asperiores.</p>
          </SwiperSlide>

          <SwiperSlide className='card2'>
            <img src="/images/client1.jpg" alt="Client" className="rounded-xl"/>
            <h1>Mr. ABCD EFGH</h1>
            <p className='text-sm italic text-[#d6cece] my-1'>Engineer</p>
            <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia obcaecati voluptatem accusantium dolorem repudiandae totam quae fugit, ab illum quia placeat ratione sed perferendis accusamus incidunt sunt, suscipit velit asperiores.</p>
          </SwiperSlide>

          <SwiperSlide className='card2'>
            <img src="/images/client1.jpg" alt="Client" className="rounded-xl"/>
            <h1>Mr. ABCD EFGH</h1>
            <p className='text-sm italic text-[#d6cece] my-1'>Engineer</p>
            <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia obcaecati voluptatem accusantium dolorem repudiandae totam quae fugit, ab illum quia placeat ratione sed perferendis accusamus incidunt sunt, suscipit velit asperiores.</p>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Testimonials
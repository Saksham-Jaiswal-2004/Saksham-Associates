"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Link from 'next/link'

const Testimonials = () => {

  const swiperRef = useRef(null);

  return (
    <div className='h-screen my-16 flex flex-col items-center'>
      <div className='w-full flex justify-start'>
        <h1 className='md:text-6xl text-4xl my-10 head'>Stories of Inspired Spaces</h1>
      </div>

      {/* <Carousel/> */}
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
            <div className='flex flex-wrap justify-start items-center w-full h-2/3 gap-6'>
              <div className='h-[150px] w-[150px] rounded-full overflow-hidden bg-red-500'>
                <img src="/images/client1.jpg" alt="Client" className="h-full w-full object-cover hover:scale-105"/>
              </div>

              <div className='flex flex-col justify-end h'>
                <h1>Mr. ABCD EFGH 1</h1>
                <p className='text-sm italic text-[#d6cece] my-1'>Engineer</p>
              </div>
            </div>

            <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia obcaecati voluptatem accusantium dolorem repudiandae totam quae fugit, ab illum quia placeat ratione sed perferendis accusamus incidunt sunt, suscipit velit asperiores.</p>
          </SwiperSlide>

          <SwiperSlide className='card2'>
            <div className='flex flex-wrap justify-start items-center w-full h-2/3 gap-6'>
              <div className='h-[150px] w-[150px] rounded-full overflow-hidden bg-red-500'>
                <img src="/images/client1.jpg" alt="Client" className="h-full w-full object-cover hover:scale-105"/>
              </div>

              <div className='flex flex-col justify-end h'>
                <h1>Mr. ABCD EFGH 2</h1>
                <p className='text-sm italic text-[#d6cece] my-1'>Engineer</p>
              </div>
            </div>

            <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia obcaecati voluptatem accusantium dolorem repudiandae totam quae fugit, ab illum quia placeat ratione sed perferendis accusamus incidunt sunt, suscipit velit asperiores.</p>
          </SwiperSlide>

          <SwiperSlide className='card2'>
            <div className='flex flex-wrap justify-start items-center w-full h-2/3 gap-6'>
              <div className='h-[150px] w-[150px] rounded-full overflow-hidden bg-red-500'>
                <img src="/images/client1.jpg" alt="Client" className="h-full w-full object-cover hover:scale-105"/>
              </div>

              <div className='flex flex-col justify-end h'>
                <h1>Mr. ABCD EFGH 3</h1>
                <p className='text-sm italic text-[#d6cece] my-1'>Engineer</p>
              </div>
            </div>

            <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia obcaecati voluptatem accusantium dolorem repudiandae totam quae fugit, ab illum quia placeat ratione sed perferendis accusamus incidunt sunt, suscipit velit asperiores.</p>
          </SwiperSlide>

          <SwiperSlide className='card2'>
            <div className='flex flex-wrap justify-start items-center w-full h-2/3 gap-6'>
              <div className='h-[150px] w-[150px] rounded-full overflow-hidden bg-red-500'>
                <img src="/images/client1.jpg" alt="Client" className="h-full w-full object-cover hover:scale-105"/>
              </div>

              <div className='flex flex-col justify-end h'>
                <h1>Mr. ABCD EFGH 4</h1>
                <p className='text-sm italic text-[#d6cece] my-1'>Engineer</p>
              </div>
            </div>

            <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia obcaecati voluptatem accusantium dolorem repudiandae totam quae fugit, ab illum quia placeat ratione sed perferendis accusamus incidunt sunt, suscipit velit asperiores.</p>
          </SwiperSlide>

          <SwiperSlide className='card2'>
            <div className='flex flex-wrap justify-start items-center w-full h-2/3 gap-6'>
              <div className='h-[150px] w-[150px] rounded-full overflow-hidden bg-red-500'>
                <img src="/images/client1.jpg" alt="Client" className="h-full w-full object-cover hover:scale-105"/>
              </div>

              <div className='flex flex-col justify-end h'>
                <h1>Mr. ABCD EFGH 5</h1>
                <p className='text-sm italic text-[#d6cece] my-1'>Engineer</p>
              </div>
            </div>

            <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia obcaecati voluptatem accusantium dolorem repudiandae totam quae fugit, ab illum quia placeat ratione sed perferendis accusamus incidunt sunt, suscipit velit asperiores.</p>
          </SwiperSlide>

          <SwiperSlide className='card2'>
            <div className='flex flex-wrap justify-start items-center w-full h-2/3 gap-6'>
              <div className='h-[150px] w-[150px] rounded-full overflow-hidden bg-red-500'>
                <img src="/images/client1.jpg" alt="Client" className="h-full w-full object-cover hover:scale-105"/>
              </div>

              <div className='flex flex-col justify-end h'>
                <h1>Mr. ABCD EFGH 6</h1>
                <p className='text-sm italic text-[#d6cece] my-1'>Engineer</p>
              </div>
            </div>

            <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia obcaecati voluptatem accusantium dolorem repudiandae totam quae fugit, ab illum quia placeat ratione sed perferendis accusamus incidunt sunt, suscipit velit asperiores.</p>
          </SwiperSlide>

          <SwiperSlide className='card2'>
            <div className='flex flex-wrap justify-start items-center w-full h-2/3 gap-6'>
              <div className='h-[150px] w-[150px] rounded-full overflow-hidden bg-red-500'>
                <img src="/images/client1.jpg" alt="Client" className="h-full w-full object-cover hover:scale-105"/>
              </div>

              <div className='flex flex-col justify-end h'>
                <h1>Mr. ABCD EFGH 7</h1>
                <p className='text-sm italic text-[#d6cece] my-1'>Engineer</p>
              </div>
            </div>

            <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia obcaecati voluptatem accusantium dolorem repudiandae totam quae fugit, ab illum quia placeat ratione sed perferendis accusamus incidunt sunt, suscipit velit asperiores.</p>
          </SwiperSlide>

          <SwiperSlide className='card2'>
            <div className='flex flex-wrap justify-start items-center w-full h-2/3 gap-6'>
              <div className='h-[150px] w-[150px] rounded-full overflow-hidden bg-red-500'>
                <img src="/images/client1.jpg" alt="Client" className="h-full w-full object-cover hover:scale-105"/>
              </div>

              <div className='flex flex-col justify-end h'>
                <h1>Mr. ABCD EFGH 8</h1>
                <p className='text-sm italic text-[#d6cece] my-1'>Engineer</p>
              </div>
            </div>

            <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia obcaecati voluptatem accusantium dolorem repudiandae totam quae fugit, ab illum quia placeat ratione sed perferendis accusamus incidunt sunt, suscipit velit asperiores.</p>
          </SwiperSlide>

          <SwiperSlide className='card2'>
            <div className='flex flex-wrap justify-start items-center w-full h-2/3 gap-6'>
              <div className='h-[150px] w-[150px] rounded-full overflow-hidden bg-red-500'>
                <img src="/images/client1.jpg" alt="Client" className="h-full w-full object-cover hover:scale-105"/>
              </div>

              <div className='flex flex-col justify-end h'>
                <h1>Mr. ABCD EFGH 9</h1>
                <p className='text-sm italic text-[#d6cece] my-1'>Engineer</p>
              </div>
            </div>

            <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia obcaecati voluptatem accusantium dolorem repudiandae totam quae fugit, ab illum quia placeat ratione sed perferendis accusamus incidunt sunt, suscipit velit asperiores.</p>
          </SwiperSlide>
        </Swiper>

        <div className='w-full flex justify-end my-4 mx-3'>
          <Link href="/Testimonials" className='bg-[#00000098] head3 px-4 py-1 rounded-xl hover:bg-[#000000b2]'>View More</Link>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
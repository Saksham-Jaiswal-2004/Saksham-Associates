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
        <h1 className='text-6xl my-10 head'>Stories of Inspired Spaces</h1>
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
          <SwiperSlide className='card2'>Slide 1</SwiperSlide>
          <SwiperSlide className='card2'>Slide 2</SwiperSlide>
          <SwiperSlide className='card2'>Slide 3</SwiperSlide>
          <SwiperSlide className='card2'>Slide 4</SwiperSlide>
          <SwiperSlide className='card2'>Slide 5</SwiperSlide>
          <SwiperSlide className='card2'>Slide 6</SwiperSlide>
          <SwiperSlide className='card2'>Slide 7</SwiperSlide>
          <SwiperSlide className='card2'>Slide 8</SwiperSlide>
          <SwiperSlide className='card2'>Slide 9</SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Testimonials
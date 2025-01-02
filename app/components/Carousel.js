// components/Carousel.js
"use client"
import { useEffect, useState } from 'react';

const Carousel = ({ images, slidesToShow = 3, slidesToScroll = 1 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState([]);
  const [responsiveSettings, setResponsiveSettings] = useState({
    sm: { slidesToShow: 1, slidesToScroll: 1 },
    md: { slidesToShow: 2, slidesToScroll: 1 },
    lg: { slidesToShow: 3, slidesToScroll: 1 },
    xl: { slidesToShow: 4, slidesToScroll: 1 }
  });

  // Function to update slidesToShow based on screen size
  const updateSlidesPerView = () => {
    const width = window.innerWidth;
    if (width >= 1280) {
      setResponsiveSettings({ ...responsiveSettings, slidesToShow: responsiveSettings.xl.slidesToShow });
    } else if (width >= 1024) {
      setResponsiveSettings({ ...responsiveSettings, slidesToShow: responsiveSettings.lg.slidesToShow });
    } else if (width >= 768) {
      setResponsiveSettings({ ...responsiveSettings, slidesToShow: responsiveSettings.md.slidesToShow });
    } else {
      setResponsiveSettings({ ...responsiveSettings, slidesToShow: responsiveSettings.sm.slidesToShow });
    }
  };

  // Effect to update slides per view on window resize
  useEffect(() => {
    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);

    return () => window.removeEventListener('resize', updateSlidesPerView);
  }, [responsiveSettings]);

  // Auto slide change every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + slidesToScroll) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length, slidesToScroll]);

  useEffect(() => {
    setVisibleImages(images.slice(currentIndex, currentIndex + responsiveSettings.slidesToShow));
  }, [currentIndex, images, responsiveSettings]);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${(currentIndex * 100) / responsiveSettings.slidesToShow}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`w-${100 / responsiveSettings.slidesToShow}% flex-shrink-0`} // Adjust width dynamically
          >
            <img src={image} alt={`Slide ${index}`} className="w-full h-auto" />
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex justify-center p-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full mx-1 ${currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;

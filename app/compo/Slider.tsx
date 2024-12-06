"use client";

import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const Slider = () => {
  const slides = [
    {
      url: "https://eu.bape.com/cdn/shop/files/New_Project_5.png?v=1730126876&width=1600",
    },
    {
      url: "https://eu.bape.com/cdn/shop/files/2411_BAPE-X-ADIDAS_BANNER__2160x1080_9c000024-5ffb-4d89-b6d6-d4e5581ae030.jpg?v=1732528716&width=1600",
    },
    {
      url: "https://eu.bape.com/cdn/shop/files/Bape_STA_ICON_M2_banner_2160x1080_db90c01e-5e86-4ec6-bc75-0753af6b57ec.jpg?v=1732881270&width=1600",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigate to the previous slide
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // Navigate to the next slide
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="max-w-full h-[300px] sm:h-[400px] md:h-[700px] lg:h-[900px] w-full mx-auto relative group">
      {/* Slide Image */}
      <div
        style={{
          backgroundImage: `url(${slides[currentIndex].url})`,
        }}
        className="w-full h-full bg-center bg-cover rounded-xl duration-500"
      ></div>

      {/* Left Arrow */}
      <div
        onClick={prevSlide}
        className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-4 sm:left-6 lg:left-8 p-2 rounded-full bg-black/40 text-white cursor-pointer items-center justify-center"
      >
        <BsChevronCompactLeft size={30} />
      </div>

      {/* Right Arrow */}
      <div
        onClick={nextSlide}
        className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 right-4 sm:right-6 lg:right-8 p-2 rounded-full bg-black/40 text-white cursor-pointer items-center justify-center"
      >
        <BsChevronCompactRight size={30} />
      </div>

   
    </div>
  );
};

export default Slider;

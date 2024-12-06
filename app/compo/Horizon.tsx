"use client";
import React from "react";
import { data } from "@/app/mockData";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Horizon = () => {
  const sliderLeft = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft -= 500;
  };

  const sliderRight = () => {
    const slider = document.getElementById("slider");
    slider.scrollLeft += 500;
  };

  return (
    <div className="my-5 mb-5">
      <h1 className="text-center text-2xl font-bold underline mb-5">
        New Arrivals
      </h1>
      <div className="relative flex items-center">
        {/* Left Chevron */}
        <MdChevronLeft
          className="opacity-50 cursor-pointer hover:opacity-100 absolute left-0 z-10 bg-white rounded-full shadow-md"
          onClick={sliderLeft}
          size={40}
        />
        {/* Slider Container */}
        <div
          id="slider"
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {data.map((item, index) => (
            <img
              key={index}
              className="w-[300px] md:w-[400px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
              src={item.img}
              alt={`Slide ${index}`}
            />
          ))}
        </div>
        {/* Right Chevron */}
        <MdChevronRight
          className="opacity-50 cursor-pointer hover:opacity-100 absolute right-0 z-10 bg-white rounded-full shadow-md"
          onClick={sliderRight}
          size={40}
        />
      </div>
      {/* Divider */}
      <div className="border-b-2 border-black pb-2 my-5"></div>
    </div>
  );
};

export default Horizon;

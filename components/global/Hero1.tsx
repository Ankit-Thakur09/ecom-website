"use client"


import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
// import Image from 'next/image';
const slides = [
  {
    id: 1,
    title: "Exclusive Deals Await!",
    description: "Shop the latest trends with unbeatable discounts.",
    image: "https://via.placeholder.com/1200x600/FF5733/FFFFFF?text=Slide+1",
  },
  {
    id: 2,
    title: "New Arrivals Are Here",
    description: "Stay ahead of the fashion game with our newest collection.",
    image: "https://via.placeholder.com/1200x600/33B5FF/FFFFFF?text=Slide+2",
  },
  {
    id: 3,
    title: "Limited Time Offers!",
    description: "Grab your favorite items before the sale ends!",
    image: "https://via.placeholder.com/1200x600/28A745/FFFFFF?text=Slide+3",
  },
];


const Hero1 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      slideRef.current,
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 1 }
    );

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentSlide]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
<div className="relative w-full h-screen overflow-hidden">
      <div ref={slideRef} className="w-full h-full flex flex-col items-center justify-center text-white text-center p-6 transition-all">
        {/* <Image src={slides[currentSlide].image} alt="Slide" width={20} height={20} className="absolute top-0 left-0 w-full h-full object-cover" /> */}
        <div className="relative z-10 bg-black bg-opacity-50 p-6 rounded-lg">
          <h1 className="text-4xl md:text-6xl font-bold">{slides[currentSlide].title}</h1>
          <p className="mt-4 text-lg md:text-xl">{slides[currentSlide].description}</p>
          <button className="mt-6 px-6 py-3 bg-orange-500 text-white rounded-lg text-lg hover:bg-orange-600 transition">Shop Now</button>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full ${index === currentSlide ? "bg-white" : "bg-gray-500"}`}
          ></button>
        ))}
      </div>
    </div>

  )
}

export default Hero1
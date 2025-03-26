"use client"
import { slides } from '@/constants';


import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Image from 'next/image';


const Hero1 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);
  const slideLeftImg = useRef(null);
  const slideRightImgRef = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      slideRef.current,
      { opacity: 0.2, },
      { opacity: 1,ease: "power1.inOut",  duration: 3 }
    );

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Auto-slide every 5 seconds
    gsap.fromTo(
      slideLeftImg.current,
      { opacity: 0, x: -100 }, // Example animation properties
      { opacity: 1, x: 0, duration: 1 }
    );
    return () => clearInterval(interval);
  }, [currentSlide]);

  const goToSlide = (index:number) => {
    setCurrentSlide(index);
  };

  return (
<div className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden bg-amber-300">
      <div  className="w-full h-full flex  items-center justify-center  text-center transition-all relative">
   {/* <Image
  src={slides[currentSlide].image}
  alt="Slide"
  fill
  className="absolute top-0 left-0 w-full h-full object-cover"
/> */}
       
        <div className='absolute z-20' ref={slideRef} >
          <div className="relative z-10  bg-opacity-50 p-6 rounded-lg">
          <h1 className="text-xl md:text-6xl font-bold">{slides[currentSlide].title}</h1>
          <p className="mt-4 text-md md:text-xl">{slides[currentSlide].description}</p>
          <button className="mt-3 md:mt-6 px-4 md:px-6 py-2 md:py-3 bg-orange-500 text-white rounded-lg text-md md:text-lg hover:bg-orange-600 transition">Shop Now</button>
        </div>      
        </div>
        <div className='w-full h-full flex justify-between z-10'>
          {slides[currentSlide].leftImage &&(<div id='slideLeftImg' ref={slideLeftImg} className='relative h-screen w-[30vw] left-0'>
            <Image
              src={slides[currentSlide].leftImage} // Use current slide's image
              alt="Slide"
              fill
              className="object-cover"
            />
          </div>)}
      
          {slides[currentSlide].rightImage && (
             <div id='slideRightImg' ref={slideRightImgRef} className='relative h-screen w-[30vw]'>
            <Image
              src={slides[currentSlide].rightImage} // Use current slide's image
              alt="Slide"
              fill
              className="object-cover"
            />
          </div>
          )}
       
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
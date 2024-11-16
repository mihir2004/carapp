// src/components/HeroCarousel.js
import { useState, useEffect } from "react";

const HeroCarousel = () => {
  const images = [
    "https://imgd-ct.aeplcdn.com/320x200/n/cw/ec/139651/curvv-exterior-right-front-three-quarter.jpeg?isig=0&q=80",
    "https://hips.hearstapps.com/hmg-prod/images/mclarenarturaflux-2-1613486108.jpg?crop=0.677xw:0.508xh;0.0357xw,0.163xh&resize=980:*",
    "https://media.architecturaldigest.com/photos/63079fc7b4858efb76814bd2/16:9/w_4000,h_2250,c_limit/9.%20DeLorean-Alpha-5%20%5BDeLorean%5D.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Carousel Images */}
      <div
        className="absolute inset-0 flex transition-transform duration-1000"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          width: `${images.length * 100}%`,
        }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className="w-full h-screen object-cover"
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-40">
        <h1 className="text-5xl font-bold mb-4">Welcome to CarApp</h1>
        <p className="text-lg mb-6">
          Manage your car collection effortlessly with CarApp.
        </p>
        <div>
          <a
            href="/signup"
            className="bg-blue-500 px-6 py-3 rounded text-lg font-semibold hover:bg-blue-600 mr-4"
          >
            Get Started
          </a>
          <a
            href="/login"
            className="bg-gray-700 px-6 py-3 rounded text-lg font-semibold hover:bg-gray-800"
          >
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;

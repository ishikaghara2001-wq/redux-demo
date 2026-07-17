import React, { useEffect, useState } from "react";

const slides = [
  "https://images.unsplash.com/photo-1607082349566-187342175e2f",
  "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a",
  "https://images.unsplash.com/photo-1580910051074-3eb694886505",
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Next Slide
  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  // Previous Slide
  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  return (
    <div className="carousel w-full h-[600px] relative rounded-box overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out h-full w-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="carousel-item relative w-full flex-shrink-0"
          >
            <img
              src={`${slide}?auto=format&fit=crop&w=1400&q=80`}
              alt={`slide-${index}`}
              className="w-full h-[600px] object-cover"
            />
          </div>
        ))}
      </div>

      {/* Prev Button */}
      <button
        onClick={prevSlide}
        className="btn btn-circle btn-sm absolute left-5 top-1/2 -translate-y-1/2 bg-black/50 border-none text-white hover:bg-black"
      >
        ❮
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="btn btn-circle btn-sm absolute right-5 top-1/2 -translate-y-1/2 bg-black/50 border-none text-white hover:bg-black"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`btn btn-xs btn-circle ${
              current === index
                ? "btn-primary"
                : "btn-ghost bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
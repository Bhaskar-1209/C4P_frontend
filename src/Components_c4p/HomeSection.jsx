import React, { useEffect, useState } from 'react';
import bg_1 from '../assets/banner/bg_1.png';
import bg_2 from '../assets/banner/bg_2.png';
import bg_3 from '../assets/banner/bg_3.png';

const images = [
  {
    url: bg_1,
    text: 'Empower Through Change',
  },
  {
    url: bg_2,
    text: 'Inspire and Impact',
  },
  {
    url: bg_3,
    text: 'Together for a Better World',
  },
];

const HomeSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const preloadImage = new Image();
    preloadImage.src = images[currentIndex].url;
    preloadImage.onload = () => {
      setImageLoaded(true);
    };

    const timer = setTimeout(() => {
      setImageLoaded(false); // fade out before image change
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <section
      className="w-full h-200 bg-center bg-cover transition-all duration-1000 ease-in-out"
      style={{ backgroundImage: `url(${images[currentIndex].url})` }}
    >
      <div className="w-full h-full bg-black/50 flex items-center justify-start px-16">
        <h1
          className={`text-white text-4xl md:text-6xl font-bold transition-all duration-1000 transform ease-in-out
          ${imageLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
        >
          {images[currentIndex].text}
        </h1>
      </div>
    </section>
  );
};

export default HomeSection;

import React, { useState, useEffect } from 'react';

interface Slide {
  image: string;
  caption: string;
}

const slides: Slide[] = [
  {
    image: 'https://via.placeholder.com/800x400?text=Slide+1',
    caption: 'Slide 1 Caption'
  },
  {
    image: 'https://via.placeholder.com/800x400?text=Slide+2',
    caption: 'Slide 2 Caption'
  },
  {
    image: 'https://via.placeholder.com/800x400?text=Slide+3',
    caption: 'Slide 3 Caption'
  }
];

const Slider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <div className="relative overflow-hidden w-full h-96">
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className="min-w-full h-96 bg-cover bg-center flex-shrink-0"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded">
              {slide.caption}
            </div>
          </div>
        ))}
      </div>
      <button onClick={goToPreviousSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded">
        &lt;
      </button>
      <button onClick={goToNextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded">
        &gt;
      </button>
    </div>
  );
};

export default Slider;

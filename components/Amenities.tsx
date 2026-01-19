
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Amenities: React.FC = () => {
  const projectImages = [
    {
      src: './images/NA-Plots-for-Sale-in-Pune-NA-Bungalow-Plots-01-19-2026_04_42_PM.png',
      title: 'Premium NA Plots',
      description: 'Exclusive residential plots in prime Pune locations'
    },
    {
      src: './images/NA-Plots-for-Sale-in-Pune-NA-Bungalow-Plots-01-19-2026_04_46_PM.png',
      title: 'Luxury Development',
      description: 'Modern infrastructure with world-class amenities'
    },
    {
      src: './images/NA-Plots-for-Sale-in-Pune-NA-Bungalow-Plots-01-19-2026_04_46_PM (1).png',
      title: 'Future Ready Plots',
      description: 'Investment-ready plots with excellent connectivity'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projectImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projectImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projectImages.length) % projectImages.length);
  };
  return (
    <section id="amenities" className="py-20 bg-black/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4">EXPLORE OUR WORK HERE</h2>
          <h3 className="text-4xl font-extrabold mb-4 text-gold">Ongoing Projects</h3>
          <p className="text-gray-400 max-w-4xl mx-auto">Discover premium NA plots in Pune and envision your future with us. At Shadow Infratech, we are more than just builders; we create lifestyles that align with your dreams. Our expertly developed plots offer excellent amenities in prime locations, making them perfect for both residential and investment purposes. Join us in redefining modern living, one plot at a time, in the vibrant city of Pune.</p>
        </div>
        
        
        {/* Slideshow */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={projectImages[currentSlide].src}
              alt={projectImages[currentSlide].title}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <h4 className="text-3xl font-bold mb-2 text-white">{projectImages[currentSlide].title}</h4>
              <p className="text-gray-300">{projectImages[currentSlide].description}</p>
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 gap-2">
            {projectImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? 'bg-gold' : 'bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;

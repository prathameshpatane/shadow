
import React from 'react';
import { AMENITIES } from '../constants';

const Amenities: React.FC = () => {
  return (
    <section id="amenities" className="py-20 bg-black/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">Why Life Here is Taking Off!</h2>
          <p className="text-gray-400">Experience world-class facilities designed for the discerning few.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {AMENITIES.map((item, idx) => (
            <div key={idx} className="group relative rounded-xl overflow-hidden aspect-[4/5] cursor-pointer">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-purple via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h4 className="text-2xl font-bold mb-2 group-hover:text-gold transition-colors">{item.title}</h4>
                <p className="text-gray-300 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition duration-500 transform translate-y-4 group-hover:translate-y-0">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;

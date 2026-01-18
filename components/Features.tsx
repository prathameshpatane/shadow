
import React from 'react';
import { Download } from 'lucide-react';
import { INVESTMENT_FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="investment" className="py-20 px-6 max-w-7xl mx-auto space-y-20">
      <div className="text-center space-y-4">
        <h2 className="text-3xl lg:text-5xl font-bold">India's No.1 Investment Destination</h2>
        <div className="w-24 h-1 gold-gradient mx-auto"></div>
      </div>

      {INVESTMENT_FEATURES.map((feature, index) => (
        <div 
          key={index} 
          className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
        >
          <div className="w-full lg:w-3/5 rounded-2xl overflow-hidden h-[400px]">
            <img 
              src={feature.image} 
              alt={feature.title} 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer" 
            />
          </div>
          <div className="w-full lg:w-2/5 space-y-6">
            <h3 className="text-3xl font-bold text-gold">{feature.title}</h3>
            <p className="text-gray-400 leading-relaxed text-lg">
              {feature.description}
            </p>
            <button className="flex items-center gap-2 text-white border-b border-gold pb-1 hover:text-gold transition-colors">
              <Download size={18} />
              DOWNLOAD CATALOGUE
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Features;

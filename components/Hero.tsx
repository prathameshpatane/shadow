
import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              AeroEstate Gold
            </h1>
            <div className="flex items-center gap-2 text-gray-400">
              <MapPin size={18} className="text-gold" />
              <span>Khopoli, Maharashtra</span>
            </div>
            <p className="text-gray-400 max-w-md leading-relaxed">
              A 50-acre landmark plotted development, 40 mins from the Navi Mumbai International Airport at India's no.1 land investment destination - Khopoli.
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-sm text-gray-400">Starting at</p>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold text-white">₹ 64.99 Lakh +*</span>
            </div>
            <p className="text-xs text-gray-500">117 SQ.METERS (1,259 SQ.FT)</p>
          </div>

          <button 
            onClick={() => document.getElementById('enquiry-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="gold-gradient text-luxury-purple px-10 py-4 rounded-full font-bold flex items-center gap-3 hover:scale-105 transition-transform shadow-lg shadow-gold/20"
          >
            ENQUIRE NOW <ArrowRight size={20} />
          </button>
        </div>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gold/20 blur-xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <img 
              src="https://picsum.photos/seed/aerohero/1200/800" 
              alt="AeroEstate Render" 
              className="w-full h-auto object-cover transform transition duration-700 group-hover:scale-105"
            />
            <div className="absolute top-6 left-6 gold-gradient px-4 py-2 rounded-lg text-luxury-purple font-bold text-xs">
              GRAND TAKE-OFF CARNIVAL
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

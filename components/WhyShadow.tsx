import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const WhyShadow: React.FC = () => {
  const features = [
    "9+ years of experience in real estate industry",
    "Customer-Centric Approach",
    "Commitment to Quality",
    "Transparency & Openness",
    "Innovative Strategies",
    "Trustworthy"
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-black to-luxury-purple/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Why <span className="text-gold">Shadow Infratech?</span>
              </h2>
              <p className="text-gray-400 leading-relaxed text-lg">
                Experience real estate like never before with Shadow Infratech Pvt Ltd. Our commitment to innovation sets us apart as we incorporate cutting-edge technologies and modern design concepts into every project. Whether you're buying or investing, we ensure your property journey is marked by sophistication and contemporary style. Discover how we can redefine your real estate experience today!
              </p>
            </div>
            
            <button 
              onClick={() => document.getElementById('enquiry-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="gold-gradient text-luxury-purple px-10 py-4 rounded-full font-bold flex items-center gap-3 hover:scale-105 transition-transform shadow-lg shadow-gold/20"
            >
              ENQUIRE NOW <ArrowRight size={20} />
            </button>
          </div>

          {/* Right Features */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:border-gold/30 transition-all duration-300 hover:bg-gold/5">
                <CheckCircle className="text-gold flex-shrink-0" size={24} />
                <span className="text-white font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyShadow;
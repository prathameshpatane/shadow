import React from 'react';
import { ArrowRight } from 'lucide-react';

const ProcessFlow: React.FC = () => {
  const steps = [
    {
      step: 1,
      title: 'Explore and Inquire',
      description: 'Browse our exclusive land listings and tell us your preference.',
      time: '2 mins'
    },
    {
      step: 2,
      title: 'Schedule a virtual call',
      description: 'Book a virtual consultation and get expert guidance from the comfort of your home.',
      time: '15 mins'
    },
    {
      step: 3,
      title: 'Secure Your Plot of Land',
      description: 'Reserve your plot of land instantly through a secure online process.',
      time: '2 mins'
    },
    {
      step: 4,
      title: 'Sit back and Relax',
      description: 'Your dedicated relationship manager handles everything, from paperwork to possession.',
      time: ''
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-black to-luxury-purple/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Section */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-6">
              <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
                Land Ownership<br />made simple
              </h2>
              <button 
                onClick={() => document.getElementById('enquiry-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="gold-gradient text-luxury-purple px-8 py-3 rounded-full font-bold flex items-center gap-3 hover:scale-105 transition-transform w-fit shadow-lg shadow-gold/20"
              >
                START YOUR JOURNEY <ArrowRight size={20} />
              </button>
            </div>
          </div>

          {/* Right Section - Timeline */}
          <div className="space-y-8">
            {steps.map((item, index) => (
              <div key={item.step} className="relative">
                {/* Timeline Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-5 top-16 w-0.5 h-20 gold-gradient"></div>
                )}
                
                <div className="flex gap-6">
                  {/* Timeline Circle */}
                  <div className="flex flex-col items-center pt-1">
                    <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center flex-shrink-0 shadow-lg shadow-gold/30">
                      <span className="text-luxury-purple font-bold text-sm">{item.step}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pb-6 flex-1">
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <p className="text-gold text-xs font-bold tracking-widest uppercase mb-2">
                          STEP {item.step}
                        </p>
                        <h3 className="text-xl font-bold mb-3 text-white">
                          {item.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                      {item.time && (
                        <div className="text-right flex-shrink-0">
                          <p className="text-gold font-bold text-sm whitespace-nowrap">{item.time}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;

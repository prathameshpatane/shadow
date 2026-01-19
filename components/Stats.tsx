import React from 'react';

const Stats: React.FC = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-black to-luxury-purple/10">
      <div className="max-w-7xl mx-auto">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {/* Happy Customers */}
          <div className="flex flex-col items-center text-center group">
            <div className="mb-4 relative">
              <div className="absolute -inset-2 gold-gradient blur-xl opacity-0 group-hover:opacity-50 transition duration-500"></div>
              <span className="relative text-6xl md:text-7xl font-bold text-gold">
                1.5K+
              </span>
            </div>
            <p className="text-yellow-300 uppercase text-sm md:text-base font-bold tracking-widest drop-shadow-lg">Happy Customers</p>
          </div>

          {/* Land Sold */}
          <div className="flex flex-col items-center text-center group">
            <div className="mb-4 relative">
              <div className="absolute -inset-2 gold-gradient blur-xl opacity-0 group-hover:opacity-50 transition duration-500"></div>
              <span className="relative text-6xl md:text-7xl font-bold text-gold">
                600K+
              </span>
            </div>
            <p className="text-yellow-300 uppercase text-sm md:text-base font-bold tracking-widest drop-shadow-lg">SQ. FT. Land Sold</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;

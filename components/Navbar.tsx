
import React from 'react';
import { Plane } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-luxury-purple/90 backdrop-blur-md border-b border-white/10 px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 gold-gradient rounded-full flex items-center justify-center">
          <Plane className="text-luxury-purple" size={24} />
        </div>
        <div>
          <h1 className="text-xl font-bold tracking-tighter leading-none">AEROESTATE</h1>
          <p className="text-[10px] text-gold tracking-[0.2em]">GOLD EDITION</p>
        </div>
      </div>
      
      <button 
        onClick={() => document.getElementById('enquiry-form')?.scrollIntoView({ behavior: 'smooth' })}
        className="hidden md:block border border-gold text-gold px-6 py-2 rounded-full hover:bg-gold hover:text-luxury-purple transition-all text-sm font-medium"
      >
        ENQUIRE NOW
      </button>
    </nav>
  );
};

export default Navbar;

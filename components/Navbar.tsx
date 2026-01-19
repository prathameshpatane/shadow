
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-luxury-purple/90 backdrop-blur-md border-b border-white/10 px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <img 
          src="/logo_plot.png" 
          alt="Shadow Infratech Pvt Ltd." 
          className="h-12 object-contain"
        />
      </div>
      
      <div className="hidden md:flex items-center gap-8">
        <a href="#home" className="text-white hover:text-gold transition-colors text-sm font-medium">Home</a>
        <a href="#projects" className="text-white hover:text-gold transition-colors text-sm font-medium">Projects</a>
        <a href="#decoding" className="text-white hover:text-gold transition-colors text-sm font-medium">Decoding Land</a>
        <a href="#about" className="text-white hover:text-gold transition-colors text-sm font-medium">About Us</a>
        <a href="#contact" className="text-white hover:text-gold transition-colors text-sm font-medium">Contact Us</a>
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

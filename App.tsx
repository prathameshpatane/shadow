
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import ProcessFlow from './components/ProcessFlow';
import Features from './components/Features';
import Amenities from './components/Amenities';
import EnquiryForm from './components/EnquiryForm';
import WhyShadow from './components/WhyShadow';
import GeminiBot from './components/GeminiBot';
import { NAVIGATION_TABS } from './constants';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        <Stats />

        {/* Tab Navigation */}
        <div className="sticky top-[72px] z-40 bg-luxury-purple/80 backdrop-blur-md border-y border-white/5">
          <div className="max-w-7xl mx-auto flex justify-center md:justify-start gap-8 px-6 overflow-x-auto no-scrollbar">
            {NAVIGATION_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => scrollToSection(tab.id)}
                className={`py-5 text-xs font-bold tracking-[0.2em] transition-all relative ${
                  activeTab === tab.id ? 'text-gold' : 'text-gray-500 hover:text-white'
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 w-full h-[2px] gold-gradient" />
                )}
              </button>
            ))}
          </div>
        </div>

        <ProcessFlow />

        <div id="overview">
          <Amenities />
        </div>
        
        <Features />
        
        <WhyShadow />
        
        <div className="bg-gradient-to-b from-transparent to-black/50">
          <EnquiryForm />
        </div>
      </main>

      {/* Floating Enquire Button for Mobile */}
      <div className="fixed bottom-6 left-6 md:hidden z-50">
         <button 
           onClick={() => document.getElementById('enquiry-form')?.scrollIntoView({ behavior: 'smooth' })}
           className="bg-black border border-gold text-gold p-4 rounded-full font-bold shadow-xl"
         >
           ENQUIRE NOW
         </button>
      </div>

      <GeminiBot />

      <footer className="relative py-16 border-t border-gold/20 bg-gradient-to-b from-luxury-purple to-black overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1),transparent_50%)]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-gold to-yellow-400 bg-clip-text text-transparent">
                  Shadow Infratech Pvt Ltd
                </h3>
                <div className="w-16 h-1 gold-gradient rounded-full" />
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                NA plots in Pune – ideal for residential and investment purposes. Discover well-developed plots with great amenities in prime locations.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gold/10 border border-gold/30 rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-luxury-purple transition-all duration-300 hover:scale-110">
                  <span className="text-sm font-bold">f</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gold/10 border border-gold/30 rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-luxury-purple transition-all duration-300 hover:scale-110">
                  <span className="text-sm font-bold">Y</span>
                </a>
                <a href="#" className="w-10 h-10 bg-gold/10 border border-gold/30 rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-luxury-purple transition-all duration-300 hover:scale-110">
                  <span className="text-sm font-bold">I</span>
                </a>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-gold">Contact Us</h4>
                <div className="w-12 h-0.5 bg-gold/50 rounded-full" />
              </div>
              <div className="text-gray-300 text-sm space-y-4">
                <div className="p-4 bg-white/5 rounded-lg border border-white/10 hover:border-gold/30 transition-colors">
                  <p className="leading-relaxed">Office No. 101, First Floor, Near Shriram Manas, Opposite to ICICI Bank, Madhav Nagar, Dhanori, Pune, Maharashtra – 411015</p>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10 hover:border-gold/30 transition-colors">
                  <span className="text-gold">📞</span>
                  <p className="font-medium">+91-9370158119</p>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10 hover:border-gold/30 transition-colors">
                  <span className="text-gold">🌐</span>
                  <p className="text-gold hover:text-yellow-300 transition-colors cursor-pointer">shadowinfratech.com</p>
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-gold">Quick Links</h4>
                <div className="w-12 h-0.5 bg-gold/50 rounded-full" />
              </div>
              <div className="grid grid-cols-2 gap-2">
                {['Home', 'About Us', 'Projects', 'Careers', 'Our Gallery', 'Contact Us'].map((link) => (
                  <a key={link} href="#" className="text-gray-300 text-sm py-2 px-3 rounded-lg hover:bg-gold/10 hover:text-gold transition-all duration-300 border border-transparent hover:border-gold/20">
                    {link}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Opening Hours & CTA */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-gold">Opening Hours</h4>
                <div className="w-12 h-0.5 bg-gold/50 rounded-full" />
              </div>
              <div className="p-4 bg-gradient-to-br from-gold/10 to-transparent rounded-lg border border-gold/20">
                <div className="text-gray-300 text-sm space-y-2">
                  <p className="font-semibold text-white">Thursday - Tuesday</p>
                  <p className="text-gold font-medium">9:30 AM - 6:30 PM</p>
                </div>
              </div>
              <div className="space-y-3">
                <button className="w-full gold-gradient text-luxury-purple px-6 py-3 rounded-full font-bold text-sm hover:scale-105 transition-transform shadow-lg shadow-gold/20">
                  Enquire Now
                </button>
                <p className="text-gray-400 text-xs text-center">Call Shadow Infratech Pvt Ltd</p>
              </div>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-gold/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                Copyright © 2026 Shadow Infratech Pvt. Ltd. All rights reserved.
              </p>
              <p className="text-gold text-xs font-medium">
                Powered by Shadow Infratech Pvt Ltd
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

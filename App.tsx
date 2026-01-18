
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Amenities from './components/Amenities';
import EnquiryForm from './components/EnquiryForm';
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

        <div id="overview">
          <Amenities />
        </div>
        
        <Features />
        
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

      <footer className="py-12 border-t border-white/5 text-center px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
          <div className="text-xl font-bold tracking-tighter">AEROESTATE <span className="text-gold">GOLD</span></div>
          <p className="text-gray-500 text-sm max-w-xl">
            Disclaimer: Images are for representational purposes only. Real estate investments are subject to market risks. Please read the offer documents carefully. RERA Registration: PR/M/MUM/2024/0001
          </p>
          <div className="text-[10px] text-gray-600 tracking-widest uppercase">
            © 2024 AeroEstate Gold. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

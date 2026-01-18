
import React, { useState } from 'react';
import { Send } from 'lucide-react';

const EnquiryForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="enquiry-form" className="py-24 px-6 max-w-3xl mx-auto text-center">
      <div className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl">
        <h2 className="text-3xl font-bold mb-6">Enquire Now</h2>
        <p className="text-gray-400 mb-10">Get expert advice and detailed project insights delivered to your inbox.</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input 
              required
              type="text" 
              placeholder="Full Name" 
              className="w-full bg-black/40 border border-white/10 rounded-xl px-6 py-4 focus:border-gold outline-none transition-all"
            />
            <input 
              required
              type="tel" 
              placeholder="Phone Number" 
              className="w-full bg-black/40 border border-white/10 rounded-xl px-6 py-4 focus:border-gold outline-none transition-all"
            />
          </div>
          <input 
            required
            type="email" 
            placeholder="Email Address" 
            className="w-full bg-black/40 border border-white/10 rounded-xl px-6 py-4 focus:border-gold outline-none transition-all"
          />
          <button 
            disabled={status !== 'idle'}
            className="w-full gold-gradient text-luxury-purple font-bold py-5 rounded-xl flex items-center justify-center gap-3 disabled:opacity-50 transition-all hover:scale-[1.02]"
          >
            {status === 'idle' && <><Send size={20} /> SUBMIT INTEREST</>}
            {status === 'sending' && "SENDING..."}
            {status === 'success' && "THANK YOU! WE'LL CONTACT YOU SOON."}
          </button>
        </form>
      </div>
    </section>
  );
};

export default EnquiryForm;

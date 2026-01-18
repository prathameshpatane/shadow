
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';
import { getAIResponse } from '../services/geminiService';

const GeminiBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot', text: string }[]>([
    { role: 'bot', text: "Hello! I'm your AeroEstate assistant. Ask me anything about the location, amenities, or pricing!" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    const botMsg = await getAIResponse(userMsg);
    setMessages(prev => [...prev, { role: 'bot', text: botMsg }]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {isOpen ? (
        <div className="bg-luxury-purple border border-gold/30 w-[350px] h-[500px] rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5">
          <div className="gold-gradient p-4 flex justify-between items-center">
            <div className="flex items-center gap-2 text-luxury-purple font-bold">
              <Bot size={20} />
              <span>Estate Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-luxury-purple hover:scale-110 transition-transform">
              <X size={20} />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  msg.role === 'user' 
                    ? 'bg-gold text-luxury-purple rounded-br-none' 
                    : 'bg-white/10 text-white rounded-bl-none border border-white/5'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white/10 p-3 rounded-2xl rounded-bl-none animate-pulse text-xs">
                  AI is thinking...
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <div className="p-4 border-t border-white/10 bg-black/20">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask something..."
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm focus:border-gold outline-none"
              />
              <button 
                onClick={handleSend}
                className="gold-gradient p-2 rounded-xl text-luxury-purple hover:scale-105 transition-transform"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="gold-gradient p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 group"
        >
          <MessageSquare className="text-luxury-purple" size={28} />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 text-luxury-purple font-bold whitespace-nowrap">
            ASK AI
          </span>
        </button>
      )}
    </div>
  );
};

export default GeminiBot;

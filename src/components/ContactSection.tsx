import React, { useEffect, useState, useRef } from 'react';
import { MessageCircle, Phone, MapPin, Send, Instagram, Facebook } from 'lucide-react';

export default function ContactSection({ onBookingClick }: { onBookingClick: () => void }) {
  const gold = "#D4AF37";
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: 100, label: "Satisfaction", sub: "+100 clients heureux", color: "#D4AF37" },
    { value: 100, label: "Disponibilité", sub: "Accompagnement H24", color: "#000000" },
    { value: 10, label: "Expertise", sub: "Ans d'expérience", color: "#D4AF37" }
  ];

  return (
    <section ref={sectionRef} id="Contact" className="bg-white pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- SECTION CHIFFRES CLÉS --- */}
        <div className="text-center mb-16">
          <h2 className="text-slate-900 font-black text-[30px] md:text-[45px] uppercase leading-tight tracking-tighter">
            UN PATRIMOINE <span style={{ color: gold }}>SÉCURISÉ</span>
          </h2>
          <p className="text-gray-400 font-bold uppercase text-[12px] tracking-[0.3em] mt-2">L'excellence en chiffres</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center group">
              <div className="relative w-40 h-40 flex items-center justify-center">
                <svg className="w-full h-full rotate-[-90deg]">
                  <circle cx="80" cy="80" r="70" stroke="#F3F4F6" strokeWidth="8" fill="transparent" />
                  <circle
                    cx="80" cy="80" r="70"
                    stroke={stat.color}
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray="440"
                    strokeDashoffset={isVisible ? 440 - (440 * stat.value) / 100 : 440}
                    strokeLinecap="round"
                    className="transition-all duration-[2000ms] ease-out"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-black text-slate-900 tracking-tighter">
                    {isVisible ? (stat.label === "Expertise" ? `+${stat.value}` : `${stat.value}%`) : "0"}
                  </span>
                </div>
              </div>
              <div className="text-center mt-6">
                <p className="font-black uppercase text-[15px] text-slate-900 tracking-widest">{stat.label}</p>
                <p className="text-gray-400 text-[11px] font-bold uppercase mt-1 tracking-wider">{stat.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* --- BLOC CONTACT NOIR LUXE --- */}
        <div className="bg-slate-900 rounded-[3.5rem] p-8 md:p-20 relative overflow-hidden shadow-3xl">
          {/* Effet de lumière Or en fond */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#D4AF37] opacity-10 blur-[120px]" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
              <h3 className="text-white text-[35px] md:text-[55px] font-black uppercase leading-[0.9] tracking-tighter">
                PRÊT À <br/><span style={{ color: gold }}>INVESTIR ?</span>
              </h3>
              <p className="text-slate-400 font-medium text-[17px] leading-relaxed">
                Amara Bamba vous conseille personnellement pour sécuriser votre avenir foncier en Côte d'Ivoire.
              </p>
              
              <div className="flex flex-col gap-6 pt-4">
                <div className="flex items-center gap-5 justify-center lg:justify-start">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-[#D4AF37]">
                    <Phone size={22}/>
                  </div>
                  <span className="text-white font-black text-xl tracking-tight">+225 07 79 76 17 15</span>
                </div>
                <div className="flex items-center gap-5 justify-center lg:justify-start">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-[#D4AF37]">
                    <MapPin size={22}/>
                  </div>
                  <span className="text-white font-black text-lg tracking-tight uppercase">Cocody, Abidjan</span>
                </div>
              </div>
            </div>

            {/* BOUTONS D'ACTION */}
            <div className="lg:w-1/2 w-full bg-white rounded-[2.5rem] p-10 shadow-2xl">
              <h4 className="text-slate-900 font-black uppercase text-[18px] mb-8 text-center tracking-tight">Prendre contact maintenant</h4>
              <div className="space-y-4">
                <button 
                  onClick={() => window.open('https://wa.me/2250779761715?text=Bonjour%20M.%20Bamba,%20je%20souhaite%20discuter%20de%20mon%20projet%20immobilier.', '_blank')}
                  className="w-full bg-[#25D366] hover:bg-[#1DA851] text-white py-5 rounded-2xl font-black uppercase text-[12px] flex items-center justify-center gap-3 transition-all shadow-xl hover:scale-[1.02] active:scale-95"
                >
                  <MessageCircle size={24} /> WhatsApp Direct
                </button>
                <button 
                  onClick={onBookingClick} 
                  className="w-full bg-slate-900 hover:bg-black text-white py-5 rounded-2xl font-black uppercase text-[12px] tracking-[0.1em] transition-all shadow-xl hover:scale-[1.02] active:scale-95"
                >
                  Prendre rendez-vous
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- FOOTER ÉLITE --- */}
      <footer className="mt-24 bg-black py-16 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            
            {/* LOGO & NOM */}
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#D4AF37] h-10 w-10 rounded-lg flex items-center justify-center font-black text-black text-xl">
                  AB
                </div>
                <span className="font-black text-[20px] uppercase tracking-tighter">
                  Amara <span style={{ color: gold }}>Bamba</span>
                </span>
              </div>
              <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.4em]">
                Investisseur • Agro-Industrie • Services
              </p>
            </div>

            {/* RÉSEAUX SOCIAUX */}
            <div className="flex flex-col items-center gap-6">
              <span className="text-white/20 font-black text-[10px] uppercase tracking-[0.5em]">Suivez mon actualité</span>
              <div className="flex items-center gap-6">
                <a href="https://www.facebook.com/share/17rdMgpiRA/?mibextid=wwXIfr" target="_blank" className="hover:text-[#D4AF37] transition-colors"><Facebook size={24}/></a>
                <a href="https://www.tiktok.com/@amarabambalagrossepointu?_r=1&_t=ZS-94Io0lb8Sxd" target="_blank" className="hover:text-[#D4AF37] transition-colors">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47V13.3c0 1.97-.4 3.97-1.48 5.61-1.37 2.08-3.79 3.51-6.31 3.44-2.18-.04-4.29-.98-5.69-2.65-1.57-1.87-2.07-4.52-1.32-6.89.65-2.04 2.37-3.72 4.43-4.14.36-.08.72-.11 1.09-.13v4.11c-.13.01-.26.04-.39.08-1.07.31-1.92 1.25-2.14 2.35-.16.8.02 1.65.48 2.3.56.79 1.52 1.3 2.5 1.29 1.1-.01 2.1-.64 2.6-1.62.31-.6.44-1.28.44-1.96V0h-.01z"/></svg>
                </a>
              </div>
            </div>

            <div className="text-center md:text-right">
              <p className="text-white/20 text-[9px] font-black uppercase tracking-[0.2em] mb-2">
                © 2026 AMARA BAMBA • EXCELLENCE & INTÉGRITÉ
              </p>
              <p className="text-white/10 text-[8px] uppercase">Design by Elite Dev Ivory</p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
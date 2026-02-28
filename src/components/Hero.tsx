import React, { useState } from 'react';
import { Menu, X, TrendingUp } from 'lucide-react';

export default function Hero({ onBookingClick }: { onBookingClick: () => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const gold = "#D4AF37";
  const whatsappNumber = "2250779761715";

  // Fonction pour scroller proprement vers les sections
  const scrollTo = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWhatsApp = () => {
    const msg = "Bonjour M. Bamba, je souhaiterais discuter d'un projet immobilier.";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-xl z-[100] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="h-10 w-10 bg-black flex items-center justify-center rounded-lg shadow-lg">
                <span className="text-white font-black text-xl">AB</span>
            </div>
            <div className="flex flex-col">
              <span className="font-black text-[18px] leading-none uppercase text-slate-900 tracking-tighter">
                Amara <span style={{ color: gold }}>Bamba</span>
              </span>
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.3em]">Agent Immobilier</span>
            </div>
          </div>

          {/* MENU DESKTOP */}
          <div className="hidden lg:flex items-center gap-8">
            {['À Propos', 'Opportunités', 'Contact'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollTo(item)}
                className="text-[11px] font-black uppercase tracking-widest text-slate-600 hover:text-black transition-colors"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={onBookingClick} 
              className="px-8 py-3 bg-black text-white font-black uppercase text-[11px] rounded-full hover:bg-slate-800 transition-all shadow-xl active:scale-95"
            >
              Prendre rendez-vous
            </button>
          </div>

          {/* BOUTON BURGER MOBILE */}
          <button className="lg:hidden text-black p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MENU MOBILE DÉROULANT */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 p-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
            {['À Propos', 'Opportunités', 'Contact'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollTo(item)}
                className="text-left text-[14px] font-black uppercase tracking-widest text-slate-900"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => { setIsMenuOpen(false); onBookingClick(); }}
              className="w-full py-4 bg-black text-white font-black uppercase text-[12px] rounded-xl"
            >
              Prendre rendez-vous
            </button>
          </div>
        )}
      </nav>

      {/* --- HERO CORE --- */}
      <div className="relative pt-24 md:pt-32 flex flex-col items-center bg-white">
        <div className="relative w-full max-w-6xl px-4 md:px-6">
          <div className="relative bg-slate-900 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-[6px] md:border-[12px] border-white h-[75vh] md:h-[85vh] group">
            
            <div className="absolute inset-0 bg-cover bg-center opacity-30 blur-3xl scale-110" style={{ backgroundImage: "url('/imageaccueil.jpg')" }}></div>

            <img 
                src="/imageaccueil.jpg" 
                alt="Amara Bamba" 
                className="relative z-10 w-full h-full object-contain md:object-right transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/90 via-black/20 to-transparent md:bg-gradient-to-r md:from-black/80 md:via-black/40 md:to-transparent flex flex-col justify-end md:justify-center p-8 md:p-16">
                <div className="max-w-2xl flex flex-col items-start"> 
                    
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-6">
                        <span className="h-2 w-2 bg-red-500 rounded-full animate-pulse"></span>
                        <span className="text-white text-[10px] font-black uppercase tracking-[0.2em]">
                            A.B
                        </span>
                    </div>

                    <h1 className="text-white text-[38px] md:text-[75px] font-[900] leading-[0.95] uppercase tracking-tighter mb-6"
                        style={{ textShadow: '2px 4px 10px rgba(0,0,0,0.5)' }}>
                        Bâtissons votre <br/> 
                        <span style={{ color: gold }}>Patrimoine.</span>
                    </h1>

                    <p className="text-white/90 text-[16px] md:text-[20px] max-w-lg font-medium leading-snug mb-10"
                       style={{ textShadow: '1px 2px 8px rgba(0,0,0,0.4)' }}>
                        Sécurisez votre avenir avec des terrains et villas d'exception à Abidjan et à l'intérieur du pays.
                    </p>

                    {/* CTA PRINCIPAL : DIRECT WHATSAPP */}
                    <button 
                        onClick={handleWhatsApp}
                        className="w-full md:w-auto bg-white text-black px-10 py-5 rounded-2xl font-black uppercase text-[12px] hover:bg-[#D4AF37] hover:text-black transition-all shadow-2xl flex items-center justify-center gap-3 group"
                    >
                        Contactez-Nous <TrendingUp size={20} />
                    </button>
                </div>
            </div>
          </div>
        </div>

        {/* TRUST BAR RAPIDE */}
        <div className="w-full max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-6 py-12 px-6">
            {[
              { label: "EXPERTISE", val: "Depuis 2015" },
              { label: "SÉCURITÉ", val: "Vérification ACD" },
              { label: "ZONES", val: "Abidjan & Intérieur" },
              { label: "ENGAGEMENT", val: "Impact Social" }
            ].map((stat, i) => (
              <div key={i} className="border-l-2 border-slate-100 pl-4">
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-1">{stat.label}</span>
                <span className="text-slate-900 font-bold text-[14px] md:text-[16px]">{stat.val}</span>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
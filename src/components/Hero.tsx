import React, { useState } from 'react';
import { Menu, X, ShieldCheck, Globe, TrendingUp, Award } from 'lucide-react';

export default function Hero({ onBookingClick }: { onBookingClick: () => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Couleurs Élite
  const gold = "#D4AF37";
  const powerRed = "#E63946";

  return (
    <section className="relative w-full bg-white overflow-hidden selection:bg-black selection:text-white">
      {/* --- NAVIGATION LUXE --- */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-xl z-[100] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* IDENTITÉ */}
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-black flex items-center justify-center rounded-lg">
                <span className="text-white font-black text-xl">AB</span>
            </div>
            <div className="flex flex-col">
              <span className="font-black text-[18px] leading-none uppercase text-slate-900 tracking-tighter">
                Amara <span style={{ color: gold }}>Bamba</span>
              </span>
              <span className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.3em]">Investisseur Immobilier</span>
            </div>
          </div>

          {/* MENU DESKTOP */}
          <div className="hidden lg:flex items-center gap-10">
            {['Accueil', 'Opportunités', 'À Propos', 'Djassô FARM'].map((item) => (
              <a 
                key={item} 
                href={`#${item.replace(/\s+/g, '')}`} 
                className="text-[11px] font-black uppercase tracking-widest text-slate-600 hover:text-black transition-all relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* CTAs */}
          <div className="hidden lg:flex items-center gap-4">
             <button 
              onClick={onBookingClick}
              className="px-6 py-2.5 bg-black text-white font-black uppercase text-[10px] rounded-full hover:bg-slate-800 transition-all shadow-xl active:scale-95"
            >
              Sécuriser un terrain
            </button>
          </div>

          <button className="lg:hidden text-black" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <div className={`absolute top-20 left-0 w-full bg-white shadow-2xl lg:hidden transition-all duration-300 origin-top ${isMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'}`}>
          <div className="flex flex-col p-8 gap-6">
            {['Accueil', 'Opportunités', 'À Propos'].map((item) => (
              <a key={item} href={`#${item}`} onClick={() => setIsMenuOpen(false)} className="text-[18px] font-black uppercase text-slate-900">{item}</a>
            ))}
            <button onClick={() => { setIsMenuOpen(false); onBookingClick(); }} className="w-full bg-black text-white py-5 rounded-xl font-black uppercase text-xs tracking-widest">Prendre rendez-vous</button>
          </div>
        </div>
      </nav>

      {/* --- HERO CORE --- */}
      <div className="relative pt-20 flex flex-col items-center">
        
        {/* FRAME PHOTO SILICON VALLEY STYLE */}
        <div className="relative w-full max-w-7xl px-6 mt-10 md:mt-16">
          <div className="relative bg-white rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border-[12px] md:border-[20px] border-white animate-reveal">
            <div className="relative h-[55vh] md:h-[80vh] w-full bg-slate-100">
                <img 
                    src="/imageaccueil.jpg" 
                    alt="Amara Bamba" 
                    className="w-full h-full object-cover animate-zoom-slow"
                />
                {/* Overlay Dégradé */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-20">
                    <div className="animate-slide-up">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-6">
                            <span className="h-2 w-2 bg-red-500 rounded-full animate-pulse"></span>
                            <span className="text-white text-[10px] font-black uppercase tracking-[0.2em]">Expertise & Transparence</span>
                        </div>
                        <h1 className="text-white text-[38px] md:text-[85px] font-[900] leading-[0.9] uppercase tracking-tighter mb-6">
                            Bâtissons votre <br/> 
                            <span style={{ color: gold }}>Patrimoine.</span>
                        </h1>
                        <p className="text-white/70 text-[16px] md:text-[22px] max-w-xl font-medium leading-tight mb-10">
                            Sécurisez votre avenir avec des terrains et villas d'exception à Abidjan et Divo.
                        </p>
                        <button 
                            onClick={onBookingClick}
                            className="bg-white text-black px-10 py-5 rounded-full font-black uppercase text-[12px] hover:bg-red-600 hover:text-white transition-all shadow-2xl flex items-center gap-3 group"
                        >
                            Démarrer mon projet <TrendingUp size={18} className="group-hover:translate-y-[-2px] transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
          </div>
        </div>

        {/* --- STATS / TRUST BAR --- */}
        <div className="max-w-6xl mx-auto w-full grid grid-cols-2 md:grid-cols-4 gap-8 py-16 px-6">
            <div className="flex flex-col">
                <span className="text-slate-300 font-black text-4xl mb-1">01.</span>
                <span className="text-[11px] font-black uppercase tracking-widest text-slate-400">Expertise Terrain</span>
                <p className="font-bold text-slate-900 mt-1">Depuis 2015</p>
            </div>
            <div className="flex flex-col">
                <span className="text-slate-300 font-black text-4xl mb-1">02.</span>
                <span className="text-[11px] font-black uppercase tracking-widest text-slate-400">Zones Stratégiques</span>
                <p className="font-bold text-slate-900 mt-1">Abidjan & Divo</p>
            </div>
            <div className="flex flex-col">
                <span className="text-slate-300 font-black text-4xl mb-1">03.</span>
                <span className="text-[11px] font-black uppercase tracking-widest text-slate-400">Sécurité Totale</span>
                <p className="font-bold text-slate-900 mt-1">Vérification ACD</p>
            </div>
            <div className="flex flex-col">
                <span className="text-slate-300 font-black text-4xl mb-1">04.</span>
                <span className="text-[11px] font-black uppercase tracking-widest text-slate-400">Impact Social</span>
                <p className="font-bold text-slate-900 mt-1">Rotaract & SANGCOOLHEUR</p>
            </div>
        </div>
      </div>

      <style>{`
        @keyframes reveal {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes zoomSlow {
          from { transform: scale(1.1); }
          to { transform: scale(1); }
        }
        .animate-reveal { animation: reveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-slide-up { animation: slideUp 0.8s ease-out 0.5s forwards; opacity: 0; }
        .animate-zoom-slow { animation: zoomSlow 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>
    </section>
  );
}
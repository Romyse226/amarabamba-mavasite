import React, { useState } from 'react';
import { Menu, X, ShieldCheck, MapPin, Trophy, Landmark } from 'lucide-react';

export default function Hero({ onBookingClick }: { onBookingClick: () => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Palette de couleurs Luxe
  const gold = "#D4AF37";
  const crimsonRed = "#BC0000";

  return (
    <section className="relative w-full bg-[#050505] text-white">
      {/* --- NAVIGATION LUXE --- */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-xl z-[100] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* NOM / LOGO */}
          <div className="flex flex-col">
            <span className="font-black text-[20px] leading-none uppercase tracking-tighter">
              AMARA <span style={{ color: gold }}>BAMBA</span>
            </span>
            <span className="text-[9px] font-bold text-gray-400 uppercase tracking-[0.3em]">Investisseur Immobilier</span>
          </div>

          {/* MENU DESKTOP */}
          <div className="hidden lg:flex items-center gap-10">
            {['Accueil', 'Opportunités', 'À Propos', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.replace(/\s+/g, '')}`} 
                className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-300 hover:text-white transition-all relative group"
              >
                {item}
                <span className={`absolute -bottom-1 left-0 w-0 h-[1px] bg-[${gold}] transition-all group-hover:w-full`}></span>
              </a>
            ))}
          </div>

          {/* Bouton Desktop CTA */}
          <button 
            onClick={onBookingClick}
            className="hidden lg:block px-8 py-3 bg-white text-black font-black uppercase text-[10px] tracking-widest rounded-sm hover:bg-[#D4AF37] hover:text-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            Sécuriser un terrain
          </button>

          {/* Mobile Toggle */}
          <button className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`absolute top-20 left-0 w-full bg-black border-b border-white/10 transition-all duration-500 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <div className="p-8 flex flex-col gap-6">
            {['Accueil', 'Opportunités', 'À Propos', 'Contact'].map((item) => (
              <a key={item} href={`#${item.replace(/\s+/g, '')}`} onClick={() => setIsMenuOpen(false)} className="text-xl font-black uppercase italic">{item}</a>
            ))}
            <button onClick={onBookingClick} className="w-full py-4 bg-[#BC0000] text-white font-black uppercase">Contact WhatsApp</button>
          </div>
        </div>
      </nav>

      {/* --- HERO VISUAL --- */}
      <div className="relative h-[85vh] md:h-screen w-full flex items-center overflow-hidden">
        {/* Image de fond avec overlay dégradé */}
        <div className="absolute inset-0">
          <img 
            src="/hero-immobilier.jpg" 
            alt="Villa de luxe" 
            className="w-full h-full object-cover scale-105 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6 animate-fade-in">
              <div className="h-[2px] w-12 bg-[#BC0000]" />
              <span className="text-[12px] font-bold uppercase tracking-[0.4em] text-[#D4AF37]">Expertise Côte d'Ivoire</span>
            </div>
            
            <h1 className="text-[45px] md:text-[90px] font-black leading-[0.9] uppercase tracking-tighter mb-8 italic">
              Bâtissez votre <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Patrimoine</span> 
              <span style={{ color: crimsonRed }}>.</span>
            </h1>

            <p className="text-gray-300 text-[16px] md:text-[20px] font-medium max-w-xl leading-relaxed mb-10 border-l-2 border-[#D4AF37] pl-6">
              Villas à Angré et terrains sécurisés à Divo. Investissez avec le partenaire de confiance de la nouvelle génération.
            </p>

            <div className="flex flex-col md:flex-row gap-5">
              <button 
                onClick={onBookingClick}
                className="px-10 py-5 bg-[#BC0000] text-white font-black uppercase text-[12px] tracking-widest hover:bg-white hover:text-black transition-all"
              >
                Voir les lots disponibles
              </button>
              <div className="flex items-center gap-4 px-6 py-4 bg-white/5 backdrop-blur-md border border-white/10">
                <ShieldCheck size={24} style={{ color: gold }} />
                <span className="text-[10px] font-bold uppercase tracking-widest">Transactions <br/>100% Sécurisées</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- STATS / TRUST BAR --- */}
      <div className="relative z-20 bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <MapPin size={20} className="text-black mb-2" />
              <span className="text-black font-black text-xl leading-none">DIVO & ANGRÉ</span>
              <span className="text-gray-400 text-[9px] font-bold uppercase tracking-widest mt-1">Zones Stratégiques</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <Trophy size={20} className="text-[#BC0000] mb-2" />
              <span className="text-black font-black text-xl leading-none">10 ANS+</span>
              <span className="text-gray-400 text-[9px] font-bold uppercase tracking-widest mt-1">D'Expérience</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <Landmark size={20} className="text-black mb-2" />
              <span className="text-black font-black text-xl leading-none">SÉCURISÉ</span>
              <span className="text-gray-400 text-[9px] font-bold uppercase tracking-widest mt-1">Zéro Litige</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center gap-1 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-black text-black">DJASSÔ FARM</span>
              </div>
              <span className="text-black font-black text-xl leading-none">CEO</span>
              <span className="text-gray-400 text-[9px] font-bold uppercase tracking-widest mt-1">Groupe Multi-Services</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slowZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .animate-slow-zoom {
          animation: slowZoom 20s linear infinite alternate;
        }
      `}</style>
    </section>
  );
}
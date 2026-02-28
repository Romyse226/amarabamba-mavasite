import React, { useState } from 'react';
import { Menu, X, TrendingUp } from 'lucide-react';

export default function Hero({ onBookingClick }: { onBookingClick: () => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const gold = "#D4AF37";
  const powerRed = "#E63946";

  return (
    <section className="relative w-full bg-black overflow-hidden">
      {/* --- NAVIGATION NOIRE --- */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-xl z-[100] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-white flex items-center justify-center rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                <span className="text-black font-black text-xl">AB</span>
            </div>
            <div className="flex flex-col">
              <span className="font-black text-[18px] leading-none uppercase text-white tracking-tighter">
                Amara <span style={{ color: gold }}>Bamba</span>
              </span>
              {/* TEXTE BLANC ICI */}
              <span className="text-[9px] font-bold text-white uppercase tracking-[0.3em]">Agent Immobilier</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-4">
             <button onClick={onBookingClick} className="px-8 py-3 bg-white text-black font-black uppercase text-[11px] rounded-full hover:bg-red-600 hover:text-white transition-all shadow-xl active:scale-95">
              Prendre rendez-vous
            </button>
          </div>

          <button className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* --- HERO CORE --- */}
      <div className="relative pt-24 md:pt-32 flex flex-col items-center bg-black">
        
        {/* CONTAINER PHOTO ENTIÈRE */}
        <div className="relative w-full max-w-6xl px-4 md:px-6">
          <div className="relative bg-[#0A0A0A] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_0_50px_rgba(230,57,70,0.15)] border-[1px] border-white/10 h-[75vh] md:h-[85vh] group">
            
            {/* Arrière-plan flou pour remplir les bords */}
            <div className="absolute inset-0 bg-cover bg-center opacity-20 blur-3xl scale-110" style={{ backgroundImage: "url('/imageaccueil.jpg')" }}></div>

            {/* LA PHOTO AFFICHÉE EN ENTIER */}
            <img 
                src="/imageaccueil.jpg" 
                alt="Amara Bamba" 
                className="relative z-10 w-full h-full object-contain md:object-right transition-transform duration-700 group-hover:scale-105"
            />

            {/* OVERLAY DE TEXTE */}
            <div className="absolute inset-0 z-20 bg-gradient-to-t from-black via-black/20 to-transparent md:bg-gradient-to-r md:from-black md:via-black/20 md:to-transparent flex flex-col justify-end md:justify-center p-8 md:p-16">
                <div className="max-w-2xl">
                    <div className="inline-flex items-center gap-2 bg-red-600/10 backdrop-blur-md border border-red-600/20 px-4 py-2 rounded-full mb-6">
                        <span className="h-2 w-2 bg-red-600 rounded-full animate-pulse"></span>
                        <span className="text-white text-[10px] font-black uppercase tracking-[0.2em]">Expertise & Transparence</span>
                    </div>

                    <h1 className="text-white text-[38px] md:text-[75px] font-[900] leading-[0.95] uppercase tracking-tighter mb-6">
                        Bâtissons votre <br/> 
                        <span style={{ color: gold }}>Patrimoine.</span>
                    </h1>

                    <p className="text-white/80 text-[16px] md:text-[20px] max-w-lg font-medium leading-snug mb-10">
                        Sécurisez votre avenir avec des terrains et villas d'exception à Abidjan et à l'intérieur du pays.
                    </p>

                    <button 
                        onClick={onBookingClick}
                        className="w-full md:w-auto bg-white text-black px-10 py-5 rounded-2xl font-black uppercase text-[12px] hover:bg-red-600 hover:text-white transition-all shadow-2xl flex items-center justify-center gap-3 group"
                    >
                        Investir maintenant <TrendingUp size={20} />
                    </button>
                </div>
            </div>
          </div>
        </div>

        {/* TRUST BAR AVEC LUEURS ROUGES */}
        <div className="w-full max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-6 py-16 px-6">
            {[
              { label: "EXPERTISE", val: "Depuis 2015" },
              { label: "SÉCURITÉ", val: "Vérification ACD" },
              { label: "ZONES", val: "Abidjan & Divo" },
              { label: "ENGAGEMENT", val: "Impact Social" }
            ].map((stat, i) => (
              <div 
                key={i} 
                className="bg-[#111] border border-red-900/30 p-5 rounded-2xl transition-all hover:border-red-600"
                style={{ boxShadow: '0 0 15px rgba(230, 57, 70, 0.1)' }}
              >
                <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest block mb-1">{stat.label}</span>
                <span className="text-white font-bold text-[14px] md:text-[16px]">{stat.val}</span>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
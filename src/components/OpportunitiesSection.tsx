import React, { useState, useEffect } from 'react';
import { MapPin, Home, Trees, ArrowUpRight, Zap } from 'lucide-react';

export default function OpportunitiesSection({ onBookingClick }: { onBookingClick: () => void }) {
  const [activeTab, setActiveTab] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const gold = "#D4AF37";

  const opportunities = [
    { 
      id: 0, 
      title: "Terrains 500m²", 
      location: "Divo – Briboré",
      icon: <Trees size={22} />, 
      price: "800 000 F",
      desc: "Idéal pour une résidence secondaire ou un investissement locatif dans une zone en pleine expansion.",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80" // Image de terrain propre
    },
    { 
      id: 1, 
      title: "Terrains 1000m²", 
      location: "Divo – Briboré",
      icon: <MapPin size={22} />, 
      price: "1 500 000 F",
      desc: "Espace généreux pour projets d'envergure. Sécurisé, accessible et à fort potentiel de plus-value.",
      image: "https://images.unsplash.com/photo-1593510987185-1ec2256148a3?auto=format&fit=crop&q=80"
    },
    { 
      id: 2, 
      title: "Villas 4 Pièces", 
      location: "Angré – 10e Tranche",
      icon: <Home size={22} />, 
      price: "550 000 F / mois",
      desc: "Le luxe accessible. Devenez propriétaire en 5 ans avec notre plan de paiement flexible.",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80" // Image de villa moderne
    }
  ];

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setActiveTab((prev) => (prev + 1) % opportunities.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused, opportunities.length]);

  return (
    <section id="Opportunités" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* EN-TÊTE DE SECTION */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
               <span className="h-[2px] w-10 bg-black"></span>
               <span className="text-[11px] font-black uppercase tracking-[0.3em] text-gray-400">Catalogue Immobilier</span>
            </div>
            <h2 className="text-black font-[900] text-[35px] md:text-[55px] uppercase leading-[0.9] tracking-tighter">
              Nos Biens <br/> <span style={{ color: gold }}>Disponibles</span>
            </h2>
          </div>
          <p className="text-gray-500 font-medium max-w-sm border-l-2 border-gray-100 pl-6">
            Des opportunités sélectionnées pour leur sécurité juridique et leur rendement futur.
          </p>
        </div>

        {/* NAVIGATION ONGLET STYLE "DASHBOARD LUXE" */}
        <div className="flex flex-wrap gap-3 mb-10">
          {opportunities.map((opt, i) => (
            <button 
              key={i} 
              onClick={() => { setActiveTab(i); setIsPaused(true); }} 
              className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-black uppercase text-[11px] tracking-widest transition-all duration-300 ${
                activeTab === i 
                ? "bg-black text-white shadow-2xl scale-105" 
                : "bg-gray-50 text-gray-400 hover:bg-gray-100"
              }`}
            >
              <span className={activeTab === i ? "text-[#D4AF37]" : "text-gray-300"}>{opt.icon}</span>
              {opt.title}
            </button>
          ))}
        </div>

        {/* AFFICHAGE DU BIEN (MAIN CARD) */}
        <div className="group relative bg-black rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] flex flex-col lg:flex-row min-h-[550px]">
          
          {/* IMAGE AVEC EFFET ZOOM */}
          <div className="lg:w-3/5 w-full h-[300px] lg:h-auto relative overflow-hidden">
            <img 
              src={opportunities[activeTab].image} 
              alt={opportunities[activeTab].title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
            />
            <div className="absolute top-8 left-8 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-xl">
               <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-[#D4AF37]" />
                  <span className="text-white text-[10px] font-black uppercase tracking-widest">{opportunities[activeTab].location}</span>
               </div>
            </div>
          </div>

          {/* CONTENU TEXTUEL */}
          <div className="lg:w-2/5 p-8 md:p-14 flex flex-col justify-center bg-gradient-to-br from-neutral-900 to-black relative">
            
            {/* Barre de progression dorée */}
            {!isPaused && (
              <div className="absolute top-0 left-0 w-full h-1 bg-white/5">
                <div key={activeTab} className="h-full bg-[#D4AF37] animate-progress-fast" />
              </div>
            )}

            <div className="mb-8">
                <span className="text-[#D4AF37] font-black text-[12px] uppercase tracking-[0.4em] block mb-4">Investissement Recommandé</span>
                <h3 className="text-white font-black text-[35px] md:text-[45px] leading-none uppercase tracking-tighter mb-4">
                  {opportunities[activeTab].title}
                </h3>
                <div className="inline-block bg-[#D4AF37] text-black px-4 py-1 rounded-lg font-black text-[20px] mb-6">
                  {opportunities[activeTab].price}
                </div>
                <p className="text-white/60 font-medium text-[16px] leading-relaxed">
                  {opportunities[activeTab].desc}
                </p>
            </div>

            <div className="space-y-4">
              <button 
                onClick={onBookingClick}
                className="w-full flex items-center justify-between bg-white text-black px-8 py-6 rounded-2xl font-black uppercase text-[12px] tracking-widest hover:bg-[#D4AF37] hover:text-black transition-all group/btn shadow-xl"
              >
                Je réserve ce lot
                <ArrowUpRight size={20} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </button>
              
              <div className="flex items-center justify-center gap-2 text-white/30 py-2">
                 <Zap size={14} />
                 <span className="text-[9px] font-black uppercase tracking-[0.2em]">Transaction Sécurisée par ACD</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes progress-fast { from { width: 0%; } to { width: 100%; } }
        .animate-progress-fast { animation: progress-fast 5s linear forwards; }
      `}</style>
    </section>
  );
}
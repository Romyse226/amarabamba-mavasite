import React from 'react';
import { ShieldCheck, Target, Users, Landmark, Sprout, Heart } from 'lucide-react';

export default function AboutCEO() {
  const gold = "#D4AF37";

  const pillars = [
    { title: "Transparence", desc: "Chaque lot est légalement sécurisé avant la vente.", icon: <ShieldCheck size={20}/> },
    { title: "Flexibilité", desc: "Options de paiement adaptées à votre budget réel.", icon: <Target size={20}/> },
    { title: "Expertise", desc: "Conseils stratégiques pour optimiser votre rendement.", icon: <Landmark size={20}/> },
    { title: "Opportunité", desc: "Devenez commercial et gagnez jusqu'à 500.000 F / lot.", icon: <Users size={20}/> },
    { title: "Agro-Business", desc: "CEO de Djassô FARM : production de vivriers naturels.", icon: <Sprout size={20}/> },
    { title: "Engagement", desc: "Membre actif du Rotaract Club d'Abidjan.", icon: <Heart size={20}/> },
  ];

  return (
    <section id="ÀPropos" className="relative w-full bg-[#0A0A0A] py-20 md:py-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/[0.02] to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- HEADER SECTION --- */}
        <div className="flex flex-col md:flex-row gap-16 items-center mb-24">
          <div className="w-full md:w-1/2 relative group">
            {/* Cadre de luxe style Galerie */}
            <div className="absolute -inset-4 border border-white/10 rounded-[3rem] -rotate-3 group-hover:rotate-0 transition-transform duration-700" />
            <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl aspect-[4/5] bg-neutral-900 border border-white/20">
              <img 
                src="/imageaccueil.jpg" 
                alt="Amara Bamba" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
            </div>
          </div>

          <div className="w-full md:w-1/2 space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
              <span className="text-white/60 font-black uppercase text-[10px] tracking-[0.3em]">Visionnaire & Leader</span>
            </div>
            
            <h2 className="text-[40px] md:text-[65px] font-black text-white leading-[0.9] uppercase tracking-tighter">
              Amara Bamba : <br/>
              <span style={{ color: gold }}>L'intégrité au cœur de l'investissement.</span>
            </h2>
            
            <p className="text-[17px] md:text-[19px] text-white/70 leading-relaxed font-medium">
              Entrepreneur et Agent immobilier basé à Cocody, Abidjan. Depuis 2015, j’accompagne des centaines de particuliers et entreprises à sécuriser leur patrimoine grâce à l’achat de terrains et villas dans des zones stratégiques de la Côte d’Ivoire.
              Après avoir commencé dans le commerce et l’élevage, j’ai développé des projets dans l’immobilier, l’agro-industrie et les services du quotidien. Aujourd’hui, je mets mon expérience au service de votre investissement, avec professionnalisme et transparence et rigueur.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="border-l border-white/10 pl-4">
                    <span className="block text-white font-black text-2xl tracking-tighter">CEO</span>
                    <span className="text-white/40 text-[11px] font-bold uppercase tracking-widest">Djassô FARM</span>
                </div>
                <div className="border-l border-white/10 pl-4">
                    <span className="block text-white font-black text-2xl tracking-tighter">10 ANS</span>
                    <span className="text-white/40 text-[11px] font-bold uppercase tracking-widest">D'expérience</span>
                </div>
            </div>
          </div>
        </div>

        {/* --- GRILLE DES PILIERS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {pillars.map((item, index) => (
            <div key={index} className="group p-8 bg-white/5 border border-white/10 rounded-[2rem] transition-all hover:bg-white/10 hover:border-[#D4AF37]/50">
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-[#D4AF37] mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h4 className="text-white font-black uppercase text-[15px] tracking-tight mb-3">{item.title}</h4>
              <p className="text-white/50 text-[14px] leading-snug">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* --- BANDEAU SOCIAL & ENGAGEMENT --- */}
        <div className="relative py-12 px-8 bg-gradient-to-br from-[#1A1A1A] to-black rounded-[3rem] border border-white/10 overflow-hidden shadow-3xl">
          <div className="absolute top-0 right-0 p-10 opacity-10">
            <Heart size={150} color={gold} />
          </div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-xl">
                <h3 className="text-white text-[24px] md:text-[32px] font-black uppercase leading-tight mb-4">
                  Plus qu'un business, <span style={{ color: gold }}>un engagement humain</span>
                </h3>
                <p className="text-white/60 text-sm md:text-base leading-relaxed">
                  Membre actif du Rotaract Club d’Abidjan et de la Communauté SANGCOOLHEUR, je mets ma réussite au service du développement social et communautaire de la Côte d'Ivoire.
                </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
                <div className="flex flex-col items-center">
                    <div className="h-16 w-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center p-3 mb-2">
                        <img src="org2.jpeg" alt="Rotaract" className="invert brightness-200" />
                    </div>
                    <span className="text-[10px] text-white/40 font-black uppercase">Rotaract Abidjan</span>
                </div>
                <div className="flex flex-col items-center">
                    <div className="h-16 w-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden p-2 mb-2">
                        {/* Modification ici : remplacement du texte par l'image org1.jpeg */}
                        <img src="org1.jpeg" alt="SANGCOOLHEUR" className="w-full h-full object-contain" />
                    </div>
                    <span className="text-[10px] text-white/40 font-black uppercase">SANGCOOLHEUR</span>
                </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
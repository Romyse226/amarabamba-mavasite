import React from 'react';
import { MapPin, ArrowRight, ShieldCheck } from 'lucide-react';

export default function OpportunitiesSection() {
  const gold = "#D4AF37";
  const whatsappNumber = "2250779761715";

  const opportunities = [
    { 
      title: "Terrain 500 m²", 
      location: "Divo – Briboré", 
      price: "800 000 F",
      desc: "Zone stratégique en pleine expansion.",
      // MISE À JOUR IMAGE 1
      image: "/terrain.jpeg", 
      msg: "Bonjour M. Bamba, je suis intéressé par le lot de 500m2 à Divo."
    },
    { 
      title: "Terrain 1000 m²", 
      location: "Divo – Briboré", 
      price: "1 500 000 F",
      desc: "Idéal pour projet agricole ou immobilier.",
      // MISE À JOUR IMAGE 2
      image: "/terrain2.jpeg",
      msg: "Bonjour M. Bamba, je souhaite avoir des infos sur le lot de 1000m2 à Divo."
    },
    { 
      title: "Villa 4 Pièces", 
      location: "Angré – 10e Tranche", 
      price: "550 000 F / mois",
      desc: "Paiement flexible sur 5 ans.",
      // MISE À JOUR IMAGE 3
      image: "/villa.jpg",
      msg: "Bonjour M. Bamba, je souhaite des informations sur la villa à Angré."
    }
  ];

  const handleWhatsApp = (msg: string) => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="Opportunités" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* EN-TÊTE */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-slate-50 border border-slate-100 rounded-full mb-4">
            <span className="text-slate-400 font-black text-[10px] uppercase tracking-[0.3em]">Catalogue</span>
          </div>
          <h2 className="text-black font-[900] text-[32px] md:text-[50px] uppercase leading-none tracking-tighter">
            NOS BIENS <span style={{ color: gold }}>DISPONIBLES</span>
          </h2>
        </div>

        {/* GRILLE DE CARTES STATIQUES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {opportunities.map((item, i) => (
            <div key={i} className="group relative bg-black rounded-[2.5rem] overflow-hidden shadow-2xl transition-transform hover:-translate-y-2">
              
              {/* IMAGE (Hauteur optimisée pour mobile) */}
              <div className="relative h-[240px] md:h-[280px] overflow-hidden bg-neutral-900">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-5 left-5 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 flex items-center gap-2">
                  <MapPin size={12} className="text-[#D4AF37]" />
                  <span className="text-white text-[9px] font-black uppercase tracking-widest">{item.location}</span>
                </div>
              </div>

              {/* CONTENU TEXTE */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-white font-black text-[22px] uppercase leading-tight">{item.title}</h3>
                </div>
                
                <div className="inline-block bg-[#D4AF37] text-black px-3 py-1 rounded-lg font-black text-[16px] mb-4">
                  {item.price}
                </div>
                
                <p className="text-white/50 text-[13px] font-medium leading-relaxed mb-8">
                  {item.desc}
                </p>

                {/* BOUTON WHATSAPP DIRECT */}
                <button 
                  onClick={() => handleWhatsApp(item.msg)}
                  className="w-full bg-white text-black py-4 rounded-2xl font-black uppercase text-[11px] tracking-widest flex items-center justify-center gap-3 hover:bg-[#D4AF37] transition-all group/btn"
                >
                  Je veux ce bien
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* MENTION SÉCURITÉ BAS DE PAGE */}
        <div className="mt-16 flex flex-col items-center">
            <div className="flex items-center gap-3 bg-slate-50 px-6 py-3 rounded-2xl border border-slate-100">
                <ShieldCheck size={20} className="text-[#D4AF37]" />
                <span className="text-[11px] font-black text-slate-800 uppercase tracking-tighter">
                    Transactions 100% sécurisées & documents vérifiés
                </span>
            </div>
        </div>

      </div>
    </section>
  );
}
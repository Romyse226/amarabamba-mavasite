import React, { useState } from 'react';
import { Menu, X, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function Hero({ onBookingClick }: { onBookingClick: () => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const primaryOrange = "#FB6F42";

  const partners = ['BB1-2.png', 'BB2.png', 'BB3.png', 'BB4.png', 'BB5.png', 'BB6.png'];

  return (
    <section className="relative w-full bg-white">
      {/* --- MENU NAVIGATION --- */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-[100] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          
          {/* LOGO + NOM */}
          <div className="flex items-center gap-2">
            <img src="/logo.jpg" alt="Logo" className="h-12 md:h-14 w-auto object-contain" />
            <span className="font-black text-[14px] md:text-[16px] leading-[1.1] uppercase text-[#424346]">
              Visa Voyage<br/><span style={{ color: primaryOrange }}>Succès</span>
            </span>
          </div>

          {/* MENU DESKTOP */}
          <div className="hidden lg:flex items-center gap-8">
            {['Accueil', 'Nos Services', 'Notre Agence'].map((item) => (
              <a 
                key={item} 
                href={`#${item.replace(/\s+/g, '')}`} 
                className="text-[12px] font-extrabold uppercase tracking-widest text-[#424346] hover:text-[#FB6F42] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Boutons Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <button 
              onClick={onBookingClick}
              className="px-5 py-2 border-2 border-[#424346] font-bold uppercase text-[10px] rounded-full text-[#424346] hover:bg-gray-50 transition-colors"
            >
              Nous contacter
            </button>
            <button 
              onClick={onBookingClick}
              className="bg-[#FB6F42] hover:bg-[#424346] text-white px-6 py-2.5 rounded-full font-black uppercase text-[10px] transition-all"
            >
              Commencer 
            </button>
          </div>

          {/* Bouton Burger Mobile */}
          <button className="lg:hidden text-[#424346]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Menu Mobile Déroulant */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white p-6 flex flex-col gap-4 shadow-xl border-t border-gray-100">
             {['Accueil', 'Nos Services', 'Notre Agence'].map((item) => (
              <a 
                key={item} 
                href={`#${item.replace(/\s+/g, '')}`} 
                onClick={() => setIsMenuOpen(false)}
                className="text-[15px] font-black uppercase text-[#424346] py-3 border-b border-gray-50"
              >
                {item}
              </a>
            ))}
            <div className="grid grid-cols-2 gap-4 mt-2">
              <button onClick={() => { setIsMenuOpen(false); onBookingClick(); }} className="py-3 bg-[#FB6F42] text-white font-black uppercase text-[12px] rounded-lg">Réserver</button>
              <button onClick={() => { setIsMenuOpen(false); onBookingClick(); }} className="py-3 border-2 border-[#424346] text-[#424346] font-black uppercase text-[12px] rounded-lg">Contact</button>
            </div>
          </div>
        )}
      </nav>

      {/* --- HERO IMAGE --- */}
      <div className="relative pt-20 w-full">
        <div className="relative h-[65vh] md:h-[90vh] w-full overflow-hidden">
          <img 
            src="/imageaccueil.jpg" 
            alt="Accueil" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-white text-[32px] md:text-[65px] font-[900] leading-[1.0] uppercase max-w-4xl drop-shadow-2xl">
              Votre agence de voyages <br/>
              <span className="bg-[#FB6F42] px-4 py-1 inline-block mt-3 shadow-xl">professionnelle</span>
            </h1>
            
            <p 
              className="text-white mt-8 text-[18px] md:text-[24px] font-bold tracking-wide"
              style={{ filter: 'drop-shadow(0 0 5px rgba(0,0,0,1))' }}
            >
              Un monde, 1.000 destinations. Prêt à partir ?
            </p>
          </div>
        </div>

        {/* PARTENAIRES LOGOS */}
        <div className="w-full bg-white py-8 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
              {partners.map((logo, i) => (
                <img 
                  key={i} 
                  src={`/${logo}`} 
                  alt="Partner" 
                  className="h-7 md:h-9 w-auto object-contain transition-transform hover:scale-105" 
                />
              ))}
            </div>
          </div>
        </div>

        {/* --- CARTE ÉLIGIBILITÉ --- */}
        <div className="max-w-5xl mx-auto px-6 -mt-9 md:-mt-20 relative z-30 pb-10">
          <div 
            className="bg-white rounded-2xl p-8 border border-orange-100"
            style={{ boxShadow: '0 0 30px rgba(251, 111, 66, 0.25)' }}
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 border-b md:border-b-0 md:border-r border-gray-100 pb-4 md:pb-0 md:pr-8">
                <span className="text-[#FB6F42] font-black uppercase text-[11px] tracking-widest">Accompagnement</span>
                <h3 className="text-[#424346] font-black text-[20px] md:text-[24px] leading-tight mt-1">NOUS ASSISTONS UNIQUEMENT :</h3>
              </div>
              <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-2">
                {['Fonctionnaire', 'Salarié', 'Chef d\'entreprise', 'Commerçants', 'Étudiant', 'Élève'].map((job) => (
                  <div key={job} className="flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-[#FB6F42] flex-shrink-0" />
                    <span className="font-bold text-[11px] md:text-[13px] uppercase text-[#424346]">{job}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-50 flex justify-center">
               <div className="flex items-center gap-3 px-6 py-2 bg-orange-50 rounded-full border border-orange-100">
                  <ShieldCheck size={20} className="text-[#FB6F42]" />
                  <span className="text-[11px] md:text-[13px] font-black uppercase text-[#FB6F42] tracking-tighter">
                    Paiement après obtention du visa
                  </span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
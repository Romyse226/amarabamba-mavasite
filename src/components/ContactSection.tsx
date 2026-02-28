import React, { useEffect, useState, useRef } from 'react';
import { MessageCircle, Phone, MapPin, Mail, Send } from 'lucide-react';

export default function FinalSection({ onBookingClick }: { onBookingClick: () => void }) {
  const primaryOrange = "#FB6F42";
  const darkGrey = "#424346";
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } // Seuil réduit pour mobile
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: 99, label: "Satisfaction", sub: "de nos clients", color: "#FB6F42" },
    { value: 100, label: "Disponibilité", sub: "pour vous accompagner", color: "#424346" },
    { value: 99, label: "Réussite", sub: "sur nos dossiers", color: "#FB6F42" }
  ];

  return (
    <section ref={sectionRef} className="bg-white pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- SECTION CHIFFRES --- */}
        <div className="text-center mb-16">
          <h2 className="text-[#424346] font-black text-[25px] md:text-[40px] uppercase leading-tight">
            Confiez-nous <span className="text-[#FB6F42]">votre voyage</span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-around gap-12 mb-32">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center group">
              <div className="relative w-40 h-40 flex items-center justify-center">
                <svg className="w-full h-full rotate-[-90deg]">
                  <circle cx="80" cy="80" r="70" stroke="#F3F4F6" strokeWidth="10" fill="transparent" />
                  <circle
                    cx="80" cy="80" r="70"
                    stroke={stat.color}
                    strokeWidth="10"
                    fill="transparent"
                    strokeDasharray="440"
                    strokeDashoffset={isVisible ? 440 - (440 * stat.value) / 100 : 440}
                    strokeLinecap="round"
                    className="transition-all duration-[1500ms] ease-out"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-[900] text-[#424346]">
                    {isVisible ? stat.value : 0}%
                  </span>
                </div>
              </div>
              <div className="text-center mt-6">
                <p className="font-black uppercase text-[14px] text-[#424346] tracking-widest">{stat.label}</p>
                <p className="text-gray-400 text-[12px] font-medium uppercase mt-1">{stat.sub}</p>
              </div>
            </div>
          ))}
          
          <div className="flex flex-col items-center">
            <div className="w-40 h-40 rounded-full border-4 border-dashed border-orange-200 flex items-center justify-center">
               <span className="text-4xl font-black text-[#FB6F42]">24/7</span>
            </div>
            <div className="text-center mt-6">
                <p className="font-black uppercase text-[14px] text-[#424346] tracking-widest">Support Global</p>
                <p className="text-gray-400 text-[12px] font-medium uppercase mt-1">Toujours à vos côtés</p>
            </div>
          </div>
        </div>

        {/* --- BLOC CONTACT FINAL --- */}
        <div className="bg-[#424346] rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FB6F42] opacity-10 blur-[100px]" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
              <h3 className="text-white text-[32px] md:text-[45px] font-black uppercase leading-[1.0]">
                Besoin d'une <br/><span className="text-[#FB6F42]">solution rapide ?</span>
              </h3>
              <p className="text-gray-300 font-medium text-[16px]">
                Notre équipe est prête. Contactez-nous pour une assistance immédiate.
              </p>
              
              <div className="flex flex-col gap-4 pt-6">
                <div className="flex items-center gap-4 justify-center lg:justify-start">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-[#FB6F42] shadow-lg shadow-black/20">
                    <Phone size={20}/>
                  </div>
                  <span className="text-white font-bold tracking-tight">+225 07 05 65 56 50</span>
                </div>
                <div className="flex items-center gap-4 justify-center lg:justify-start">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-[#FB6F42] shadow-lg shadow-black/20">
                    <Mail size={20}/>
                  </div>
                  <span className="text-white font-bold tracking-tight">info@visavoyagesucces.com</span>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 w-full bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h4 className="text-[#424346] font-black uppercase text-[18px] mb-6 text-center">Lancez votre projet</h4>
              <div className="space-y-4">
                <button 
                  onClick={() => window.open('https://wa.me/2250799145540', '_blank')}
                  className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-4 rounded-2xl font-black uppercase text-[12px] flex items-center justify-center gap-3 transition-all"
                >
                  <MessageCircle size={22} /> WhatsApp Direct
                </button>
                <button 
                  onClick={onBookingClick} 
                  className="w-full bg-[#FB6F42] hover:bg-[#424346] text-white py-4 rounded-2xl font-black uppercase text-[12px] shadow-lg shadow-orange-200 transition-all"
                >
                  Commencer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- FOOTER COMPACTÉ --- */}
      <footer className="mt-20 bg-[#FB6F42] py-10 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            
            {/* LOGO & SLOGAN */}
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="flex items-center gap-3">
                <div className="bg-white p-1 rounded-xl shadow-lg border-2 border-[#424346]/10">
                  <img src="/logo.jpg" alt="Logo" className="h-12 w-auto rounded-lg" />
                </div>
                <span className="font-black text-[16px] uppercase leading-tight">
                  Visa Voyage<br/>Succès
                </span>
              </div>
              <p className="text-white/80 text-[11px] font-bold uppercase tracking-widest text-center md:text-left">
                L'excellence au service de vos projets.
              </p>
            </div>

            {/* LOCALISATION & CONTACT */}
            <div className="flex flex-col items-center md:items-start gap-4">
              <h5 className="font-black text-white uppercase text-[10px] tracking-widest bg-[#424346] px-4 py-1 rounded-full">Nous trouver</h5>
              <div className="flex items-center gap-3 text-center md:text-left">
                <MapPin size={18} className="text-[#424346]" />
                <span className="text-[12px] font-bold uppercase">Cocody 2 Plateaux, En face du garage CFA</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#424346]" />
                <a href="mailto:stephanekader2@gmail.com" className="text-[12px] font-bold hover:underline">
                  stephanekader2@gmail.com
                </a>
              </div>
            </div>

            {/* RÉSEAUX SOCIAUX */}
            <div className="flex flex-col items-center md:items-end gap-4">
              <h5 className="font-black text-white uppercase text-[10px] tracking-widest bg-[#424346] px-4 py-1 rounded-full">Suivez-nous</h5>
              <a 
                href="https://www.facebook.com/share/1HpNryeEB2/?mibextid=wwXIfr" 
                target="_blank" 
                className="w-10 h-10 bg-[#424346] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <p className="text-white/60 text-[9px] font-black uppercase tracking-tighter">
                © 2026 Visa Voyage Succès • Tous droits réservés.
              </p>
            </div>

          </div>
        </div>
      </footer>
    </section>
  );
}
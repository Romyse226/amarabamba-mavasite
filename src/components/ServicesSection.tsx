import React, { useState, useEffect } from 'react';
import { Plane, Hotel, ShieldCheck, Map, ArrowRight } from 'lucide-react';

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const services = [
    { id: 0, title: "Billet d'avion", icon: <Plane size={24} />, headline: "Envolez-vous avec facilité", desc: "Meilleurs tarifs pour vos vols internationaux.", image: "/image1.jpg" },
    { id: 1, title: "Hôtel & Séjour", icon: <Hotel size={24} />, headline: "Dormez en toute serrénité", desc: "Logements vérifiés pour votre confort.", image: "/hotel.jpg" },
    { id: 2, title: "Visa & Assurance", icon: <ShieldCheck size={24} />, headline: "Assistance démarches", desc: "Expertise totale sur vos dossiers de visa.", image: "/visa.jpg" },
    { id: 3, title: "Tourisme", icon: <Map size={24} />, headline: "Découvrez l'inattendu", desc: "Circuits immersifs et authentiques.", image: "/imageanimation1.jpg" }
  ];

  // Fonction pour envoyer vers WhatsApp avec message dédié
  const handleWhatsApp = () => {
    const phoneNumber = "2250799145540";
    const serviceName = services[activeTab].title;
    const message = `Bonjour Visa Voyage Succès, je souhaiterais avoir des informations concernant votre service : *${serviceName}*.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setActiveTab((prev) => (prev + 1) % services.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isPaused, services.length]);

  return (
    <section className="bg-gray-50 py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center mb-8">
          <h2 className="text-[#424346] font-black text-[28px] md:text-[40px] uppercase">
            NOS SERVICES <span className="text-[#FB6F42]">SUR-MESURE</span>
          </h2>
        </div>

        {/* ONGLETS */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {services.map((s, i) => (
            <button 
              key={i} 
              onClick={() => { setActiveTab(i); setIsPaused(true); }} 
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-black uppercase text-[10px] border-2 transition-all ${
                activeTab === i 
                ? "bg-[#FB6F42] border-[#FB6F42] text-white shadow-md" 
                : "bg-white border-gray-100 text-[#424346]"
              }`}
            >
              {s.icon}
              {s.title}
            </button>
          ))}
        </div>

        {/* CARTE COMPRESSÉE ET UNIFORME */}
        <div className="bg-white rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 flex flex-col lg:flex-row h-auto lg:h-[450px]">
          
          {/* IMAGE : Hauteur fixe et forcée sur PC */}
          <div className="lg:w-1/2 w-full h-[250px] lg:h-full relative">
            <img 
              src={services[activeTab].image} 
              alt={services[activeTab].title}
              className="w-full h-full object-cover" 
            />
          </div>

          {/* TEXTE COMPRESSÉ */}
          <div className="lg:w-1/2 p-6 md:p-10 flex flex-col justify-center">
            {/* Barre de progression discrète */}
            {!isPaused && (
              <div className="w-16 h-1 bg-gray-100 mb-4 rounded-full overflow-hidden">
                <div key={activeTab} className="h-full bg-[#FB6F42] animate-progress" />
              </div>
            )}

            <h4 className="text-[#424346] font-black text-[24px] md:text-[32px] leading-tight uppercase mb-3">
              {services[activeTab].headline}
            </h4>
            
            <p className="text-gray-500 font-medium text-[15px] md:text-[16px] leading-snug mb-6">
              {services[activeTab].desc}
            </p>

            <div>
              <button 
                onClick={handleWhatsApp}
                className="group flex items-center gap-3 bg-[#424346] text-white px-6 py-3.5 rounded-xl font-black uppercase text-[11px] hover:bg-[#FB6F42] transition-all"
              >
                Réserver ce service 
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes progress { from { width: 0%; } to { width: 100%; } }
        .animate-progress { animation: progress 4s linear forwards; }
      `}</style>
    </section>
  );
}
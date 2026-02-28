import React, { useState } from 'react';
import { Plane, Hotel, ShieldCheck, Map, ArrowRight } from 'lucide-react';

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState(0);
  const primaryOrange = "#FB6F42";

  const services = [
    {
      id: 0,
      title: "Billet d'avion",
      icon: <Plane size={24} />,
      headline: "Envolez-vous avec facilité",
      desc: "Accès à un large éventail de compagnies aériennes et tarifs compétitifs. Nous trouvons les meilleurs vols selon votre budget.",
      image: "/imageanimation1.jpg"
    },
    {
      id: 1,
      title: "Hôtel & Séjour",
      icon: <Hotel size={24} />,
      headline: "Dormez en toute sérénité",
      desc: "Hébergements de luxe ou séjours économiques, nous sélectionnons des logements vérifiés pour une expérience mémorable.",
      image: "/image1.jpg"
    },
    {
      id: 2,
      title: "Visa & Assurance",
      icon: <ShieldCheck size={24} />,
      headline: "Assistance démarches",
      desc: "De Dubaï à l'espace Schengen, notre équipe vous guide à travers les démarches administratives avec expertise.",
      image: "/imagevisagehumain.jpg" 
    },
    {
      id: 3,
      title: "Tourisme",
      icon: <Map size={24} />,
      headline: "Découvrez l'inattendu",
      desc: "Circuits soigneusement organisés et expériences immersives pour découvrir les trésors cachés de chaque destination.",
      image: "/imageaccueil.jpg"
    }
  ];

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* EN-TÊTE SECTION */}
        <div className="text-center mb-12">
          <h2 className="text-[#424346] font-black text-[30px] md:text-[45px] uppercase leading-tight">
            NOS SERVICES <span className="text-[#FB6F42]">SUR-MESURE</span>
          </h2>
          <div className="h-1 w-20 bg-[#FB6F42] mx-auto mt-4" />
        </div>

        {/* SYSTÈME D'ONGLETS (TABS) */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-black uppercase text-[11px] transition-all border-2 ${
                activeTab === index 
                ? "bg-[#FB6F42] border-[#FB6F42] text-white shadow-lg shadow-orange-200" 
                : "bg-white border-gray-100 text-[#424346] hover:border-orange-200"
              }`}
            >
              {service.icon}
              {service.title}
            </button>
          ))}
        </div>

        {/* AFFICHAGE DU SERVICE ACTIF */}
        <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-100 flex flex-col lg:flex-row">
          {/* IMAGE DU SERVICE (Fond de bouton ou image) */}
          <div className="lg:w-1/2 h-[300px] lg:h-auto relative overflow-hidden">
            <img 
              src={services[activeTab].image} 
              alt={services[activeTab].title}
              className="w-full h-full object-cover transition-transform duration-1000 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
          </div>

          {/* CONTENU DU SERVICE */}
          <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center space-y-6">
            <h3 className="text-[#FB6F42] font-black text-[12px] uppercase tracking-[0.3em]">
              {services[activeTab].title}
            </h3>
            <h4 className="text-[#424346] font-black text-[28px] md:text-[38px] leading-tight uppercase">
              {services[activeTab].headline}
            </h4>
            <p className="text-gray-500 text-[16px] md:text-[18px] leading-relaxed font-medium">
              {services[activeTab].desc}
            </p>
            
            <div className="pt-6">
              <button 
                className="group flex items-center gap-4 bg-[#424346] text-white px-8 py-4 rounded-2xl font-black uppercase text-[12px] hover:bg-[#FB6F42] transition-all"
              >
                Réserver ce service
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* RÉSUMÉ D'ENGAGEMENT (Faites juste vos bagages) */}
        <div className="mt-20 text-center max-w-3xl mx-auto px-6 py-10 bg-white rounded-3xl border-2 border-dashed border-orange-200">
           <h3 className="text-[#424346] font-black text-[22px] uppercase mb-4">Faites juste vos bagages</h3>
           <p className="text-gray-500 font-medium leading-relaxed">
             Plongez dans l’aventure avec VISA VOYAGE SUCCÈS. De la sélection de l'hébergement de charme à l'assistance visa totale, chaque instant est une invitation à l'émerveillement. Nous gérons la complexité, vous vivez l'aventure.
           </p>
        </div>

      </div>
    </section>
  );
}
import { ShieldCheck, FileText, CheckCircle, Calendar, Users, Target } from 'lucide-react';

export default function AboutAndExpertise() {
  const primaryOrange = "#FB6F42";

  const expertises = [
    { title: "Information claire", desc: "Procédures de visa décryptées sans jargon.", icon: <Target size={20}/> },
    { title: "Documents", desc: "Explication détaillée des pièces nécessaires.", icon: <FileText size={20}/> },
    { title: "Formulaires", desc: "Assistance au remplissage des documents officiels.", icon: <CheckCircle size={20}/> },
    { title: "Vérification", desc: "Contrôle complet et organisation du dossier.", icon: <ShieldCheck size={20}/> },
    { title: "Rendez-vous", desc: "Prise de RDV centres agréés (VFS, TLS, etc).", icon: <Calendar size={20}/> },
    { title: "Préparation", desc: "Coaching intensif pour l'entretien consulaire.", icon: <Users size={20}/> },
  ];

  const destinations = [
    { name: "France", code: "fr" },
    { name: "Schengen", code: "eu" },
    { name: "Canada", code: "ca" },
    { name: "USA", code: "us" },
    { name: "Turquie", code: "tr" },
    { name: "Brésil", code: "br" },
    { name: "Chine", code: "cn" },
    { name: "Afrique du Sud", code: "za" },
  ];

  return (
    <section className="relative w-full bg-white py-12 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- BLOC IDENTITÉ --- */}
        <div className="flex flex-col gap-10 mb-20">
          <div className="relative w-full group">
            <div className="absolute -top-3 -left-3 w-16 h-16 border-t-4 border-l-4 border-[#FB6F42] z-10" />
            <div className="overflow-hidden rounded-3xl shadow-2xl bg-gray-100">
              <img 
                src="/imagevisagehumain.jpg" 
                alt="Expertise Humaine" 
                className="w-full h-[250px] md:h-[450px] object-cover object-top transition-transform duration-700 group-hover:scale-105" 
              />
            </div>
          </div>

          <div className="w-full space-y-6">
            <div className="inline-block px-4 py-1 bg-orange-50 rounded-full">
              <span className="text-[#FB6F42] font-black uppercase text-[10px] tracking-widest">Qui sommes-nous ?</span>
            </div>
            <h2 className="text-[30px] md:text-[50px] font-black text-[#424346] leading-[1.0] uppercase">
              VISA VOYAGE SUCCÈS : <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FB6F42] to-[#ff9b7a]">L'excellence au service de vos projets.</span>
            </h2>
            <p className="text-[16px] md:text-[18px] text-[#424346]/80 leading-relaxed font-medium max-w-4xl">
              En tant que cabinet de conseil visa, nous accompagnons nos clients dans toutes les étapes de leur demande de Visa avec sérieux et professionnalisme.
            </p>

        {/* --- GRILLE D'EXPERTISE --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-20">
          {expertises.map((item, index) => (
            <div key={index} className="group p-6 bg-white border-2 border-gray-300 rounded-2xl transition-all hover:shadow-xl hover:border-[#FB6F42]/30 hover:-translate-y-1">
              <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center text-[#FB6F42] mb-4 group-hover:bg-[#FB6F42] group-hover:text-white transition-colors">
                {item.icon}
              </div>
              <h4 className="text-[#424346] font-black uppercase text-[14px] mb-2">{item.title}</h4>
              <p className="text-gray-500 text-[13px] font-medium leading-snug">{item.desc}</p>
            </div>
          ))}
        </div>

           {/* --- CARTE CEO ORANGE FORMAT LARGE --- */}
            <div className="flex flex-col md:flex-row items-center gap-8 p-10 bg-[#FB6F42] rounded-[3.5rem] shadow-2xl max-w-3xl mt-12 border-b-8 border-r-8 border-[#424346]/20">
              <div className="w-40 h-40 rounded-full overflow-hidden border-8 border-[#424346] shadow-2xl flex-shrink-0">
                <img 
                  src="/photoceo.jpg" 
                  alt="PDG - M. SEREBOH STÉPHANE KADER" 
                  className="w-full h-full object-cover scale-110"
                />
              </div>
              <div className="flex flex-col text-center md:text-left">
                <span className="text-[#424346] font-black text-[13px] uppercase tracking-[0.2em] bg-white px-4 py-1.5 rounded-full self-center md:self-start shadow-sm">
                  Le Fondateur
                </span>
                <span className="text-white font-black text-[26px] md:text-[32px] uppercase leading-tight mt-4 tracking-tight">
                  M. SEREBOH <br className="hidden md:block" /> STÉPHANE KADER
                </span>
                <div className="w-12 h-1 bg-[#424346] my-3 self-center md:self-start rounded-full opacity-50"></div>
                <span className="text-white/90 font-black text-[14px] uppercase tracking-[0.15em]">
                  Président Directeur Général
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* --- BANDEAU DESTINATIONS --- */}
        <div className="relative py-10 px-6 bg-[#424346] rounded-[2rem] overflow-hidden shadow-xl">
          <div className="relative z-10 flex flex-col items-center">
            <h3 className="text-white text-[20px] md:text-[28px] font-black uppercase text-center mb-8">
              Ouvrez les portes de <span style={{ color: primaryOrange }}>votre destination idéale</span>
            </h3>
            
            <div className="flex flex-wrap justify-center gap-3">
              {destinations.map((dest) => (
                <div key={dest.name} className="px-4 py-2 bg-white/5 rounded-xl border border-white/10 flex items-center gap-3 hover:bg-white/10 transition-colors">
                  <img 
                    src={`https://flagcdn.com/w40/${dest.code}.png`}
                    width="24"
                    alt={dest.name}
                    className="rounded-sm"
                  />
                  <span className="text-white text-[12px] font-bold uppercase tracking-tight">{dest.name}</span>
                </div>
              ))}
              <div className="px-4 py-2 bg-[#FB6F42]/20 rounded-xl border border-[#FB6F42]/30 flex items-center">
                <span className="text-white text-[11px] font-black uppercase italic tracking-tighter">Et bien d'autres...</span>
              </div>
            </div>
          </div>
        </div>
 

      </div>
    </section>
  );
}
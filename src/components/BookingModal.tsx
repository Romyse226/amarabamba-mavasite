import React, { useState } from 'react';
import { X, CalendarCheck, Send, ChevronDown } from 'lucide-react';

export default function BookingModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const gold = "#D4AF37";
  const [formData, setFormData] = useState({ 
    name: '', 
    phone: '', 
    project: 'NON PRÉCISÉ',
    availability: 'ASAP' 
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construction du message ultra-pro pour WhatsApp
    const message = `*DEMANDE DE RENDEZ-VOUS - AMARA BAMBA*%0A%0A` +
      `*Nom:* ${formData.name}%0A` +
      `*Contact:* ${formData.phone}%0A` +
      `*Intérêt:* ${formData.project}%0A` +
      `*Disponibilité:* ${formData.availability}%0A%0A` +
      `_Envoyé depuis le site officiel Amara Bamba_`;
    
    const whatsappUrl = `https://wa.me/2250779761715?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
      <div className="bg-white w-full max-w-md rounded-[3rem] overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.2)] animate-in fade-in zoom-in duration-300">
        <div className="relative p-8 md:p-12">
          
          {/* BOUTON FERMER */}
          <button 
            onClick={onClose} 
            className="absolute top-8 right-8 text-gray-400 hover:text-black transition-colors"
          >
            <X size={24} />
          </button>

          {/* HEADER MODAL */}
          <div className="mb-10 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-slate-50 px-3 py-1 rounded-full mb-4">
              <CalendarCheck size={14} style={{ color: gold }} />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Consultation Privée</span>
            </div>
            <h3 className="text-slate-900 font-black text-[26px] md:text-[32px] uppercase leading-[0.9] tracking-tighter">
              Prendre <br/> <span style={{ color: gold }}>Rendez-vous</span>
            </h3>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* NOM */}
            <div>
              <label className="text-[10px] font-black text-gray-400 uppercase ml-4 mb-2 block">Identité Complète</label>
              <input 
                required 
                type="text" 
                placeholder="Ex: Jean Koffi"
                className="w-full px-8 py-5 bg-slate-50 border-2 border-transparent focus:border-slate-900 rounded-2xl outline-none font-bold text-[14px] transition-all"
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            {/* TÉLÉPHONE */}
            <div>
              <label className="text-[10px] font-black text-gray-400 uppercase ml-4 mb-2 block">Numéro WhatsApp</label>
              <input 
                required 
                type="tel" 
                placeholder="+225 07..."
                className="w-full px-8 py-5 bg-slate-50 border-2 border-transparent focus:border-slate-900 rounded-2xl outline-none font-bold text-[14px] transition-all"
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>

            {/* PROJET */}
            <div className="relative">
              <label className="text-[10px] font-black text-gray-400 uppercase ml-4 mb-2 block">Nature de l'investissement</label>
              <select 
                className="w-full px-8 py-5 bg-slate-50 border-2 border-transparent focus:border-slate-900 rounded-2xl outline-none font-bold text-[14px] appearance-none transition-all"
                onChange={(e) => setFormData({...formData, project: e.target.value})}
              >
                <option value="NON PRÉCISÉ">Choisir un projet</option>
                <option value="ACHAT TERRAIN (DIVO)">ACHAT TERRAIN</option>
                <option value="VILLA 4 PIÈCES (ANGRÉ)">VILLA</option>
                <option value="OPPORTUNITÉ COMMERCIALE">DEVENIR COMMERCIALE</option>
                <option value="AUTRE">AUTRE DEMANDE</option>
              </select>
              <ChevronDown className="absolute right-6 bottom-5 text-gray-400 pointer-events-none" size={20} />
            </div>

            {/* DISPONIBILITÉ */}
            <div>
                <label className="text-[10px] font-black text-gray-400 uppercase ml-4 mb-2 block">Quand souhaitez-vous être rappelé ?</label>
                <div className="grid grid-cols-2 gap-3">
                    {['MATIN', 'APRÈS-MIDI'].map((time) => (
                        <button
                            key={time}
                            type="button"
                            onClick={() => setFormData({...formData, availability: time})}
                            className={`py-3 rounded-xl text-[11px] font-black transition-all border-2 ${formData.availability === time ? 'bg-slate-900 border-slate-900 text-white' : 'bg-white border-slate-100 text-slate-400'}`}
                        >
                            {time}
                        </button>
                    ))}
                </div>
            </div>

            {/* SUBMIT */}
            <button 
                type="submit" 
                className="w-full bg-slate-900 text-white py-6 rounded-[1.5rem] font-black uppercase text-[12px] flex items-center justify-center gap-3 shadow-2xl mt-6 transition-all hover:bg-black active:scale-95 group"
            >
              Confirmer la demande <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>

          <p className="text-center text-[10px] text-gray-400 mt-8 font-bold uppercase tracking-widest">
            Réponse garantie sous 24h
          </p>
        </div>
      </div>
    </div>
  );
}
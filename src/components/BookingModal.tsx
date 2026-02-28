import React, { useState } from 'react';
import { X, Send } from 'lucide-react';

export default function BookingModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  // On adapte les champs : on remplace "destination" par "projet"
  const [formData, setFormData] = useState({ name: '', phone: '', project: 'NON PRÉCISÉ' });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construction du message pour l'immobilier
    const message = `Bonjour M. Amara Bamba, je suis intéressé par un investissement :
- *Nom :* ${formData.name}
- *Téléphone :* ${formData.phone}
- *Type de projet :* ${formData.project}`;
    
    // Numéro d'Amara Bamba mis à jour
    const whatsappUrl = `https://wa.me/2250779761715?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm">
      <div className="bg-white w-full max-w-md rounded-[2rem] overflow-hidden shadow-2xl">
        <div className="relative p-8">
          <button onClick={onClose} className="absolute top-6 right-6 text-gray-400 hover:text-green-600">
            <X size={24} />
          </button>

          <h3 className="text-slate-800 font-black text-[22px] uppercase mb-6 leading-tight">
            Sécuriser mon <span className="text-green-600">Patrimoine</span>
          </h3>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="text-[10px] font-black text-gray-400 uppercase ml-2">Nom Complet</label>
              <input 
                required 
                type="text" 
                placeholder="Votre nom"
                className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent focus:border-green-600 rounded-2xl outline-none font-bold text-[13px]"
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            <div>
              <label className="text-[10px] font-black text-gray-400 uppercase ml-2">Téléphone</label>
              <input 
                required 
                type="tel" 
                placeholder="07 00 00 00 00"
                className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent focus:border-green-600 rounded-2xl outline-none font-bold text-[13px]"
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>

            <div>
              <label className="text-[10px] font-black text-gray-400 uppercase ml-2">Type d'investissement</label>
              <select 
                className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent focus:border-green-600 rounded-2xl outline-none font-bold text-[13px] appearance-none"
                onChange={(e) => setFormData({...formData, project: e.target.value})}
              >
                <option value="NON PRÉCISÉ">Sélectionnez une option</option>
                <option value="TERRAIN (DIVO)">TERRAIN (DIVO)</option>
                <option value="VILLA 4 PIÈCES (ANGRÉ)">VILLA 4 PIÈCES (ANGRÉ)</option>
                <option value="AUTRE PROJET">AUTRE PROJET</option>
              </select>
            </div>

            <button type="submit" className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black uppercase text-[12px] flex items-center justify-center gap-3 shadow-xl mt-4 transition-transform active:scale-95 hover:bg-green-600">
              Discuter sur WhatsApp <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
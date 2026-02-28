import React, { useState } from 'react';
import { X, Send } from 'lucide-react';

export default function BookingModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [formData, setFormData] = useState({ name: '', phone: '', destination: 'NON PRÉCISÉ' });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construction du message WhatsApp
    const message = `Bonjour Visa Voyage Succès, je souhaite faire une demande de voyage :
- *Nom :* ${formData.name}
- *Téléphone :* ${formData.phone}
- *Destination :* ${formData.destination}`;
    
    const whatsappUrl = `https://wa.me/2250705655650?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-[#424346]/90 backdrop-blur-sm">
      <div className="bg-white w-full max-w-md rounded-[2.5rem] overflow-hidden shadow-2xl">
        <div className="relative p-8">
          <button onClick={onClose} className="absolute top-6 right-6 text-gray-400 hover:text-[#FB6F42]">
            <X size={24} />
          </button>

          <h3 className="text-[#424346] font-black text-[22px] uppercase mb-6">
            Votre <span className="text-[#FB6F42]">Projet de voyage</span>
          </h3>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="text-[10px] font-black text-gray-400 uppercase ml-2">Nom Complet</label>
              <input 
                required 
                type="text" 
                className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent focus:border-[#FB6F42] rounded-2xl outline-none font-bold text-[13px]"
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            <div>
              <label className="text-[10px] font-black text-gray-400 uppercase ml-2">Téléphone</label>
              <input 
                required 
                type="tel" 
                className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent focus:border-[#FB6F42] rounded-2xl outline-none font-bold text-[13px]"
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>

            <div>
              <label className="text-[10px] font-black text-gray-400 uppercase ml-2">Destination</label>
              <select 
                className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent focus:border-[#FB6F42] rounded-2xl outline-none font-bold text-[13px] appearance-none"
                onChange={(e) => setFormData({...formData, destination: e.target.value})}
              >
                <option value="NON PRÉCISÉ">Choisir une destination</option>
                <option value="EUROPE (SCHENGEN)">EUROPE (SCHENGEN)</option>
                <option value="CANADA">CANADA</option>
                <option value="USA">USA</option>
                <option value="ASIE">ASIE</option>
              </select>
            </div>

            <button type="submit" className="w-full bg-[#FB6F42] text-white py-5 rounded-2xl font-black uppercase text-[12px] flex items-center justify-center gap-3 shadow-lg shadow-orange-200 mt-4 transition-transform active:scale-95">
              Confirmer sur WhatsApp <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
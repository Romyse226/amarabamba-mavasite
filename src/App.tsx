import { useState } from 'react';
// On s'assure que les noms de composants reflètent l'activité d'Amara Bamba
import Hero from './components/Hero'; 
import OpportunitiesSection from './components/OpportunitiesSection';
import AboutCEO from './components/AboutCEO';
import ContactSection from './components/ContactSection';
import BookingModal from './components/BookingModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fonctions de contrôle de la Modal d'investissement
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* HERO : Présentation d'Amara Bamba et accroche patrimoine */}
        <Hero onBookingClick={openModal} />
        
        {/* À PROPOS : Parcours entrepreneur, CEO de Djassô FARM et engagement social */}
        <AboutCEO />
        
        {/* CONTACT : Section finale avec coordonnées et valeurs de confiance */}
        <ContactSection onBookingClick={openModal} />
      </main>

      {/* MODAL : Adaptée avec les champs "Projet" et le numéro 0779761715 */}
      <BookingModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;
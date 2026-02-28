import { useState } from 'react';
import Hero from './components/Hero'; 
import AboutCEO from './components/AboutCEO';
import OpportunitiesSection from './components/OpportunitiesSection'; // Importé ici
import ContactSection from './components/ContactSection';
import BookingModal from './components/BookingModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* 1. L'accueil */}
        <Hero onBookingClick={openModal} />
        
        {/* 2. Le profil de l'investisseur */}
        <AboutCEO />

        {/* 3. AJOUT ICI : Les terrains et villas (C'était la pièce manquante) */}
        <OpportunitiesSection onBookingClick={openModal} />
        
        {/* 4. Le contact et les valeurs */}
        <ContactSection onBookingClick={openModal} />
      </main>

      <BookingModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;
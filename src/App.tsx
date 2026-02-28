import { useState } from 'react';
// On ne garde que les imports vers les fichiers que tu as réellement créés
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection'; 
import AboutAndExpertise from './components/AboutAndExpertise';
import FinalSection from './components/FinalSection';
import BookingModal from './components/BookingModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* On affiche uniquement les sections dont les fichiers existent */}
        <Hero onBookingClick={openModal} />
        
        <ServicesSection onBookingClick={openModal} />
        
        <AboutAndExpertise />
        
        <FinalSection onBookingClick={openModal} />
      </main>

      {/* La Modal qui s'ouvre quand on clique sur les boutons */}
      <BookingModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;
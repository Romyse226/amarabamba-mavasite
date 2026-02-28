import { useState } from 'react';
import Hero from './components/Hero'; 
import AboutCEO from './components/AboutCEO';
import OpportunitiesSection from './components/OpportunitiesSection';
import ContactSection from './components/ContactSection';
import BookingModal from './components/BookingModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* L'ID "Accueil" est déjà dans le composant Hero */}
        <Hero onBookingClick={openModal} />
        
        <AboutCEO />

        {/* L'ID "Opportunités" est utilisé ici pour le scroll */}
        <div id="Opportunités">
          <OpportunitiesSection />
        </div>
        
        {/* L'ID "Contact" est utilisé ici pour le scroll */}
        <div id="Contact">
          <ContactSection onBookingClick={openModal} />
        </div>
      </main>

      <BookingModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;
import { useState } from 'react';
import Hero from './components/Hero'; 
import AboutCEO from './components/AboutCEO';
import OpportunitiesSection from './components/OpportunitiesSection';
import ContactSection from './components/ContactSection';
import BookingModal from './components/BookingModal';
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // --- LE KILL SWITCH (À L'INTÉRIEUR DE LA FONCTION) ---
  // Si la variable sur Vercel est 'false', on affiche le message de maintenance
  if (import.meta.env.VITE_SITE_ACTIVE === 'false') {
    return (
      <div style={{
        display:'flex', 
        justifyContent:'center', 
        alignItems:'center', 
        height:'100vh',
        backgroundColor: '#1a1a1a',
        color: 'white',
        fontFamily: 'sans-serif',
        textAlign: 'center',
        padding: '20px'
      }}>
        <div>
          <h1 style={{fontSize: '24px', fontWeight: 'bold', marginBottom: '10px'}}>MAINTENANCE EN COURS</h1>
          <p style={{opacity: 0.7}}>Le site LCC voyage  sera bientôt de retour.</p>
        </div>
      </div>
    );
  }

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
import React, { useEffect } from 'react';
import { useLanguage } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ChatDemo from './components/ChatDemo';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Integrations from './components/Integrations';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import RestaurantAutomation from './components/RestaurantAutomation';
import Academy from './components/Academy';

function App() {
  const { language } = useLanguage();
  const path = window.location.pathname;

  useEffect(() => {
    document.title = language === 'en' 
      ? 'AISCEND - AI Assistant Platform'
      : 'AISCEND - Plataforma de Asistentes IA';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', language === 'en'
        ? 'Create custom AI assistants in minutes with AISCEND. Connect to your data and automate your workflows.'
        : 'Crea asistentes de IA personalizados en minutos con AISCEND. Conecta con tus datos y automatiza tus flujos de trabajo.'
      );
    }
  }, [language]);

  const renderContent = () => {
    switch (path) {
      case '/restaurants':
        return <RestaurantAutomation />;
      case '/academy':
        return <Academy />;
      default:
        return (
          <>
            <Hero />
            <ChatDemo />
            <Features />
            <Integrations />
            <Pricing />
            <Testimonials />
            <FAQ />
          </>
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
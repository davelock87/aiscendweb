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
import VCard from './components/VCard';
import MedicalHealthcare from './components/MedicalHealthcare';
import RealEstate from './components/RealEstate';
import CarSales from './components/CarSales';
import Ecommerce from './components/Ecommerce';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import AboutUs from './components/AboutUs';
import Careers from './components/Careers';
import Clients from './components/Clients';

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
        return (
          <>
            <RestaurantAutomation />
            <Clients />
          </>
        );
      case '/academy':
        return (
          <>
            <Academy />
            <Clients />
          </>
        );
      case '/vcard':
        return <VCard />;
      case '/medical':
        return (
          <>
            <MedicalHealthcare />
            <Clients />
          </>
        );
      case '/realestate':
        return (
          <>
            <RealEstate />
            <Clients />
          </>
        );
      case '/carsales':
        return (
          <>
            <CarSales />
            <Clients />
          </>
        );
      case '/ecommerce':
        return (
          <>
            <Ecommerce />
            <Clients />
          </>
        );
      case '/privacy':
        return <PrivacyPolicy />;
      case '/terms':
        return <TermsOfService />;
      case '/about':
        return <AboutUs />;
      case '/careers':
        return <Careers />;
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
            <Clients />
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
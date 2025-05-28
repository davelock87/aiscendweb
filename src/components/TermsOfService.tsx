import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const TermsOfService: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-500 to-dark-400 py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">
          {language === 'en' ? 'Terms of Service' : 'Términos de Servicio'}
        </h1>
        
        <div className="bg-dark-300 rounded-xl p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              {language === 'en' ? 'Agreement to Terms' : 'Aceptación de Términos'}
            </h2>
            <p className="text-white/70">
              {language === 'en'
                ? 'By accessing or using our services, you agree to be bound by these Terms of Service.'
                : 'Al acceder o utilizar nuestros servicios, usted acepta estar sujeto a estos Términos de Servicio.'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              {language === 'en' ? 'Use of Services' : 'Uso de Servicios'}
            </h2>
            <p className="text-white/70">
              {language === 'en'
                ? 'You agree to use our services only for lawful purposes and in accordance with these Terms.'
                : 'Usted acepta usar nuestros servicios solo para fines legales y de acuerdo con estos Términos.'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              {language === 'en' ? 'Intellectual Property' : 'Propiedad Intelectual'}
            </h2>
            <p className="text-white/70">
              {language === 'en'
                ? 'All content and services provided are protected by copyright and other intellectual property laws.'
                : 'Todo el contenido y servicios proporcionados están protegidos por derechos de autor y otras leyes de propiedad intelectual.'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              {language === 'en' ? 'Contact Us' : 'Contáctenos'}
            </h2>
            <p className="text-white/70">
              {language === 'en'
                ? 'For any questions about these Terms, please contact us at:'
                : 'Para cualquier pregunta sobre estos Términos, contáctenos en:'}
            </p>
            <a 
              href="https://wa.me/573228391374"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-button px-6 py-2 rounded-lg inline-block mt-4"
            >
              WhatsApp
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
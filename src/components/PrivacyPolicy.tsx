import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const PrivacyPolicy: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-500 to-dark-400 py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">
          {language === 'en' ? 'Privacy Policy' : 'Política de Privacidad'}
        </h1>
        
        <div className="bg-dark-300 rounded-xl p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              {language === 'en' ? 'Information We Collect' : 'Información que Recopilamos'}
            </h2>
            <p className="text-white/70">
              {language === 'en' 
                ? 'We collect information you provide directly to us, including name, email, and business information when you use our services.'
                : 'Recopilamos la información que nos proporciona directamente, incluyendo nombre, correo electrónico e información comercial cuando utiliza nuestros servicios.'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              {language === 'en' ? 'How We Use Your Information' : 'Cómo Usamos su Información'}
            </h2>
            <p className="text-white/70">
              {language === 'en'
                ? 'We use the information we collect to provide, maintain, and improve our services, communicate with you, and develop new services.'
                : 'Utilizamos la información que recopilamos para proporcionar, mantener y mejorar nuestros servicios, comunicarnos con usted y desarrollar nuevos servicios.'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              {language === 'en' ? 'Data Security' : 'Seguridad de Datos'}
            </h2>
            <p className="text-white/70">
              {language === 'en'
                ? 'We implement appropriate security measures to protect your personal information against unauthorized access, alteration, or destruction.'
                : 'Implementamos medidas de seguridad apropiadas para proteger su información personal contra acceso, alteración o destrucción no autorizados.'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              {language === 'en' ? 'Contact Us' : 'Contáctenos'}
            </h2>
            <p className="text-white/70">
              {language === 'en'
                ? 'If you have any questions about this Privacy Policy, please contact us at:'
                : 'Si tiene alguna pregunta sobre esta Política de Privacidad, contáctenos en:'}
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

export default PrivacyPolicy;
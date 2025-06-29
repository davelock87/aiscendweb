import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const ScheduleCTA: React.FC = () => {
  const { language } = useLanguage();

  return (
    <section className="py-16 bg-dark-400">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12 text-center border border-primary/20">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
              <Calendar className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {language === 'en' 
              ? 'Ready to Transform Your Business?' 
              : '¿Listo para Transformar tu Negocio?'}
          </h2>
          
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            {language === 'en'
              ? 'Schedule a 15-minute consultation and discover how AI can revolutionize your operations'
              : 'Agenda una consulta de 15 minutos y descubre cómo la IA puede revolucionar tus operaciones'}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <div className="flex items-center text-white/70">
              <Clock className="w-5 h-5 mr-2 text-primary" />
              <span>{language === 'en' ? '15 minutes' : '15 minutos'}</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-white/30 rounded-full"></div>
            <div className="flex items-center text-white/70">
              <span>{language === 'en' ? 'Free consultation' : 'Consulta gratuita'}</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-white/30 rounded-full"></div>
            <div className="flex items-center text-white/70">
              <span>{language === 'en' ? 'No commitment' : 'Sin compromiso'}</span>
            </div>
          </div>
          
          <a
            href="https://wa.me/573228391374"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-button px-8 py-4 rounded-full text-white font-semibold text-lg inline-flex items-center justify-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            {language === 'en' ? 'Schedule Your Free Consultation' : 'Agenda tu Consulta Gratuita'}
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
          
          <p className="text-sm text-white/60 mt-4">
            {language === 'en'
              ? 'Join hundreds of businesses already transforming with AISCEND'
              : 'Únete a cientos de empresas que ya se están transformando con AISCEND'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ScheduleCTA;
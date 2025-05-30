import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Clients: React.FC = () => {
  const { language } = useLanguage();

  const clients = [
    {
      name: 'Beca Moda',
      logo: '/logo600.png',
      url: 'https://becamoda.com/',
      grayscaleClass: 'brightness-0 invert opacity-50',
    },
    {
      name: 'Tu Compras',
      logo: '/tucompras.jpg',
      url: 'https://tucomprascol.com/',
      grayscaleClass: 'brightness-0 opacity-50',
    },
    {
      name: 'CSoft',
      logo: '/LOGO DE CSOFT blanco svg-svg.png',
      url: 'https://csoft.co/',
      grayscaleClass: 'brightness-0 invert opacity-50',
    },
  ];

  return (
    <section className="py-16 bg-dark-400">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          {language === 'en' ? 'Trusted by Industry Leaders' : 'Empresas que Confían en Nosotros'}
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          {clients.map((client) => (
            <a
              key={client.name}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <img
                src={client.logo}
                alt={client.name}
                className={`h-12 md:h-16 w-auto object-contain transition-all duration-300 ${client.grayscaleClass} group-hover:filter-none group-hover:opacity-100`}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
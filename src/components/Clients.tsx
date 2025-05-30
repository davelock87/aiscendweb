import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Clients: React.FC = () => {
  const { language } = useLanguage();

  const clients = [
    {
      name: 'Beca Moda',
      logo: '/BECAMODAVECTOR.svg',
      url: 'https://becamoda.com/',
      className: 'h-16 md:h-24 brightness-0 invert'
    },
    {
      name: 'Tu Compras',
      logo: '/cropped-cropped-cropped-cropped-QT-LOGO-PW-200x66-1-100x89.png.webp',
      url: 'https://tucomprascol.com/',
      className: 'h-12 md:h-16'
    },
    {
      name: 'CSoft',
      logo: '/LOGO DE CSOFT blanco svg-svg.png',
      url: 'https://csoft.co/',
      className: 'h-12 md:h-16'
    },
    {
      name: 'Mi Local',
      logo: '/logo 80x80.png',
      url: 'https://milocal.com.co/',
      className: 'h-12 md:h-16'
    },
    {
      name: 'Quality Tech',
      logo: '/cropped-cropped-cropped-QT-LOGO-PW-200x66 copy.png',
      url: 'https://www.qualitytech-id.com/',
      className: 'h-12 md:h-16'
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
              className="block transform transition-all duration-300 hover:scale-110 hover:-translate-y-2"
            >
              <img
                src={client.logo}
                alt={client.name}
                className={`w-auto object-contain grayscale hover:grayscale-0 hover:brightness-125 transition-all duration-500 ${client.className}`}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Particles from './Particles';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const [wordIndex, setWordIndex] = useState(0);
  const rotatingWords = [
    t('hero.rotatingWords.0'),
    t('hero.rotatingWords.1'),
    t('hero.rotatingWords.2'),
    t('hero.rotatingWords.3')
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [rotatingWords.length]);

  return (
    <section id="home" className="relative pt-24 pb-8 overflow-hidden">
      <Particles />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            {t('hero.title1')} <br />
            <span className="gradient-text">{t('hero.title2')}</span>
          </h1>
          <div className="h-16 mb-6 flex items-center justify-center overflow-hidden">
            <span className="text-xl md:text-2xl font-medium opacity-80 flex items-center">
              <span className="mr-2">Powered by</span>
              <span className="gradient-text font-bold text-2xl md:text-3xl">
                {rotatingWords[wordIndex]}
              </span>
            </span>
          </div>
          <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto mb-10">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <a
              href="https://wa.me/573228391374"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-button px-8 py-3 rounded-full text-white font-medium text-lg shadow-lg"
            >
              {t('hero.cta')}
            </a>
            <a
              href="#pricing"
              className="px-8 py-3 rounded-full text-white font-medium text-lg border border-white/20 hover:bg-white/10 transition-all duration-300"
            >
              {t('hero.pricing')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero
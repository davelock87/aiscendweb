import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [useCasesOpen, setUseCasesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  const navLinks = [
    { name: t('nav.features'), href: '#features' },
    { name: t('nav.demo'), href: '#demo' },
    { name: t('nav.pricing'), href: '#pricing' },
    { name: t('nav.faq'), href: '#faq' },
    { name: t('nav.blog'), href: 'https://blog.automatizacionesaiscend.com/', external: true },
    { name: t('nav.academy'), href: '/academy' },
  ];

  const useCases = [
    { name: t('nav.restaurants'), href: '/restaurants' },
    { name: t('nav.medical'), href: '/medical' },
    { name: t('nav.realestate'), href: '/realestate' },
    { name: t('nav.carsales'), href: '/carsales' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark-500/90 backdrop-blur-lg py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <svg className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                <path d="M2 17L12 22L22 17" />
                <path d="M2 12L12 17L22 12" />
              </svg>
              <span className="ml-2 text-xl font-bold text-white">AISCEND</span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <div className="hidden md:flex space-x-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="text-white/80 hover:text-white transition duration-150 font-medium"
                >
                  {link.name}
                </a>
              ))}
              <div className="relative">
                <button
                  onClick={() => setUseCasesOpen(!useCasesOpen)}
                  className="flex items-center text-white/80 hover:text-white transition duration-150 font-medium"
                >
                  {t('nav.useCases')}
                  <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                {useCasesOpen && (
                  <div className="absolute top-full mt-2 w-48 rounded-md shadow-lg bg-dark-400 ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu">
                      {useCases.map((useCase) => (
                        <a
                          key={useCase.name}
                          href={useCase.href}
                          className="block px-4 py-2 text-sm text-white/80 hover:bg-dark-300 hover:text-white"
                          role="menuitem"
                        >
                          {useCase.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button 
                onClick={toggleLanguage}
                className="flex items-center text-white/80 hover:text-white transition duration-150"
                aria-label="Toggle language"
              >
                <Globe size={20} />
                <span className="ml-1">{language.toUpperCase()}</span>
              </button>
              <a 
                href="https://wa.me/573228391374"
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-button px-5 py-2 rounded-full text-white font-medium"
              >
                {t('nav.getStarted')}
              </a>
            </div>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button 
              onClick={toggleLanguage}
              className="text-white/80 hover:text-white transition duration-150"
              aria-label="Toggle language"
            >
              <Globe size={20} />
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-white"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-dark-400/95 backdrop-blur-lg">
          <div className="px-4 pt-2 pb-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="block py-2 text-white/80 hover:text-white transition duration-150"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="py-2">
              <button
                onClick={() => setUseCasesOpen(!useCasesOpen)}
                className="flex items-center text-white/80 hover:text-white transition duration-150"
              >
                {t('nav.useCases')}
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              {useCasesOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  {useCases.map((useCase) => (
                    <a
                      key={useCase.name}
                      href={useCase.href}
                      className="block py-2 text-white/80 hover:text-white transition duration-150"
                      onClick={() => setIsOpen(false)}
                    >
                      {useCase.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <a 
              href="https://wa.me/573228391374"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center gradient-button mt-4 px-5 py-2 rounded-full text-white font-medium"
              onClick={() => setIsOpen(false)}
            >
              {t('nav.getStarted')}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex space-x-4">
            <a href="/about" className="text-white/60 hover:text-primary transition-colors">
              {t('footer.about')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
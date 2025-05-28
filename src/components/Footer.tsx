import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-dark-500 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <svg className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                <path d="M2 17L12 22L22 17" />
                <path d="M2 12L12 17L22 12" />
              </svg>
              <span className="ml-2 text-xl font-bold text-white">AISCEND</span>
            </div>
            <p className="text-white/60 mb-4">
              Building AI assistants that understand your business and data.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/automatizaciones.aiscend" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/60 hover:text-primary transition-colors" 
                aria-label="Facebook"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/aiscend_automatiza/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/60 hover:text-primary transition-colors" 
                aria-label="Instagram"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2.16c3.2,0,3.58,0,4.85.07,3.25.15,4.77,1.69,4.92,4.92.06,1.27.07,1.65.07,4.85s0,3.58-.07,4.85c-.15,3.23-1.66,4.77-4.92,4.92-1.27.06-1.64.07-4.85.07s-3.58,0-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.64-.07-4.85s0-3.58.07-4.85C2.38,3.92,3.9,2.38,7.15,2.23,8.42,2.18,8.8,2.16,12,2.16ZM12,0C8.74,0,8.33,0,7.05.07c-4.27.2-6.78,2.71-7,7C0,8.33,0,8.74,0,12s0,3.67.07,4.95c.2,4.27,2.71,6.78,7,7C8.33,24,8.74,24,12,24s3.67,0,4.95-.07c4.27-.2,6.78-2.71,7-7C24,15.67,24,15.26,24,12s0-3.67-.07-4.95c-.2-4.27-2.71-6.78-7-7C15.67,0,15.26,0,12,0Zm0,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM18.41,4.15a1.44,1.44,0,1,0,1.44,1.44A1.44,1.44,0,0,0,18.41,4.15Z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/company/106263913/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/60 hover:text-primary transition-colors" 
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="https://g.co/kgs/fRqRTS7" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/60 hover:text-primary transition-colors" 
                aria-label="Google Business"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm-1.78 18.989h-3.11v-9.412h3.11v9.412zm7.56-7.967c0 2.928-1.538 4.33-3.582 4.33-1.65 0-2.383-.907-2.797-1.547v1.33h-3.11V9.577h3.11v5.912c0 .264.022.527.088.714.193.462.627.94 1.364.94.957 0 1.342-.726 1.342-1.79V9.577h3.11v6.412z"/>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.product')}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-white/60 hover:text-primary transition-colors">
                  {t('footer.features')}
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-white/60 hover:text-primary transition-colors">
                  {t('footer.pricing')}
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-primary transition-colors">
                  {t('footer.integrations')}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.company')}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/60 hover:text-primary transition-colors">
                  {t('footer.about')}
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-primary transition-colors">
                  {t('footer.careers')}
                </a>
              </li>
              <li>
                <a href="https://blog.automatizacionesaiscend.com/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-primary transition-colors">
                  {t('footer.blog')}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.subscribe')}</h3>
            <p className="text-white/60 mb-4">{t('footer.subscribeText')}</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder={t('footer.email')}
                className="w-full px-4 py-2 rounded-lg bg-dark-300 border border-dark-200 focus:outline-none focus:ring-1 focus:ring-primary text-white placeholder-white/50"
                required
              />
              <button
                type="submit"
                className="w-full gradient-button py-2 rounded-lg font-medium text-white"
              >
                {t('footer.subscribe.button')}
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-dark-300 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">{t('footer.copyright')}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="text-white/60 text-sm hover:text-primary transition-colors">
              {t('footer.privacy')}
            </a>
            <a href="/terms" className="text-white/60 text-sm hover:text-primary transition-colors">
              {t('footer.terms')}
            </a>
            <a href="https://wa.me/573228391374" target="_blank" rel="noopener noreferrer" className="text-white/60 text-sm hover:text-primary transition-colors">
              {t('footer.contact')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
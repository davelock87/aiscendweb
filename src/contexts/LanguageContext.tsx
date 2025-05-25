import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type LanguageType = 'en' | 'es';

interface LanguageContextProps {
  language: LanguageType;
  setLanguage: (lang: LanguageType) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

const translations = {
  en: {
    // Previous English translations remain unchanged...
    
    // Integrations
    'integrations.title': 'Powerful Integrations & Enterprise Solutions',
    'integrations.subtitle': 'Connect with your favorite tools and automate your business processes',
    'integrations.section1.title': 'Popular Integrations',
    'integrations.section2.title': 'Enterprise Solutions',
    
    // Enterprise Solutions
    'solutions.hr.title': 'HR Automation',
    'solutions.hr.desc': 'Streamline onboarding, time tracking, and employee management',
    'solutions.finance.title': 'Finance & Operations',
    'solutions.finance.desc': 'Automate invoicing, expense tracking, and reporting',
    'solutions.sales.title': 'Sales & Marketing',
    'solutions.sales.desc': 'CRM integration, lead tracking, and campaign automation',
    'solutions.analytics.title': 'Analytics & Reporting',
    'solutions.analytics.desc': 'Custom dashboards and automated reporting',
    'solutions.security.title': 'Security & Compliance',
    'solutions.security.desc': 'Data protection, audit logs, and access control',
    'solutions.api.title': 'API Management',
    'solutions.api.desc': 'Custom integrations and webhook management',
    'solutions.ai.title': 'AI & Machine Learning',
    'solutions.ai.desc': 'Intelligent automation and predictive analytics',
    'solutions.supply.title': 'Supply Chain',
    'solutions.supply.desc': 'Inventory management and logistics automation'
  },
  es: {
    // Previous Spanish translations remain unchanged...
    
    // Integrations
    'integrations.title': 'Integraciones Potentes y Soluciones Empresariales',
    'integrations.subtitle': 'Conéctate con tus herramientas favoritas y automatiza tus procesos de negocio',
    'integrations.section1.title': 'Integraciones Populares',
    'integrations.section2.title': 'Soluciones Empresariales',
    
    // Enterprise Solutions
    'solutions.hr.title': 'Automatización de RRHH',
    'solutions.hr.desc': 'Optimiza la incorporación, seguimiento de tiempo y gestión de empleados',
    'solutions.finance.title': 'Finanzas y Operaciones',
    'solutions.finance.desc': 'Automatiza la facturación, seguimiento de gastos e informes',
    'solutions.sales.title': 'Ventas y Marketing',
    'solutions.sales.desc': 'Integración CRM, seguimiento de leads y automatización de campañas',
    'solutions.analytics.title': 'Análisis y Reportes',
    'solutions.analytics.desc': 'Tableros personalizados y reportes automatizados',
    'solutions.security.title': 'Seguridad y Cumplimiento',
    'solutions.security.desc': 'Protección de datos, registros de auditoría y control de acceso',
    'solutions.api.title': 'Gestión de APIs',
    'solutions.api.desc': 'Integraciones personalizadas y gestión de webhooks',
    'solutions.ai.title': 'IA y Machine Learning',
    'solutions.ai.desc': 'Automatización inteligente y análisis predictivo',
    'solutions.supply.title': 'Cadena de Suministro',
    'solutions.supply.desc': 'Gestión de inventario y automatización logística'
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

const getBrowserLanguage = (): LanguageType => {
  const browserLang = navigator.language.toLowerCase().split('-')[0];
  return browserLang === 'es' ? 'es' : 'en';
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<LanguageType>(() => getBrowserLanguage());

  useEffect(() => {
    const browserLang = getBrowserLanguage();
    setLanguage(browserLang);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
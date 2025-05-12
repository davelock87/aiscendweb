import React, { createContext, useContext, useState, ReactNode } from 'react';

type LanguageType = 'en' | 'es';

interface LanguageContextProps {
  language: LanguageType;
  setLanguage: (lang: LanguageType) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

// Translations for both languages
const translations = {
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.features': 'Features',
    'nav.pricing': 'Pricing',
    'nav.demo': 'Demo',
    'nav.faq': 'FAQ',
    'nav.getStarted': 'Get Started',

    // Hero
    'hero.title1': 'Craft an AI Assistant',
    'hero.title2': 'in Minutes!',
    'hero.subtitle': 'Rapidly Develop a Tailored AI Assistant with OpenAI GPT-3.5: Seamlessly Connect to Resources and Upload Files for Comprehensive Assistance.',
    'hero.cta': 'Get Started',
    'hero.pricing': 'View Pricing',
    'hero.rotatingWords.0': 'Chatbots',
    'hero.rotatingWords.1': 'Automation',
    'hero.rotatingWords.2': 'Analysis',
    'hero.rotatingWords.3': 'Support',

    // Features
    'features.title': 'Customized for Every Need',
    'features.subtitle': 'Craft dedicated assistants for teams, projects, or workflows. Boost team efficiency by 90% with tailored data access for each assistant.',
    'features.card1.title': 'Data Integration',
    'features.card1.desc': 'Connect to your existing tools and databases for context-aware responses.',
    'features.card2.title': 'Custom Training',
    'features.card2.desc': 'Train on your documentation, knowledge base, and company data.',
    'features.card3.title': 'Workflow Automation',
    'features.card3.desc': 'Automate repetitive tasks and integrate with your existing processes.',
    'features.card4.title': 'Advanced Analytics',
    'features.card4.desc': 'Track usage patterns and improve your assistants over time.',
    'features.learnMore': 'Learn more',

    // Chat Demo
    'demo.placeholder': 'Type your message',
    'demo.send': 'Send',
    'demo.you': 'You',
    'demo.assistant': 'Assistify',
    'demo.message1': 'What was the revenue generated during the Black Friday Sale 2022 campaign?',
    'demo.response1': 'The revenue generated during the Black Friday Sale 2022 campaign was $20,000.',
    'demo.message2': 'What was the open rate for the Black Friday Sale 2022 campaign?',
    'demo.response2': 'The open rate for the Black Friday Sale 2022 campaign was 25%.',

    // Pricing
    'pricing.title': 'Simple, Transparent Pricing',
    'pricing.subtitle': 'Choose the plan that works best for you and your team',
    'pricing.free': 'Free',
    'pricing.pro': 'Pro',
    'pricing.enterprise': 'Enterprise',
    'pricing.freePrice': '$0',
    'pricing.proPrice': '$29',
    'pricing.enterprisePrice': 'Custom',
    'pricing.month': '/month',
    'pricing.feature1': 'AI Assistants',
    'pricing.feature2': 'Data Connections',
    'pricing.feature3': 'Monthly Queries',
    'pricing.feature4': 'Users',
    'pricing.feature5': 'Custom Training',
    'pricing.feature6': 'Priority Support',
    'pricing.free1': '1',
    'pricing.free2': '2',
    'pricing.free3': '100',
    'pricing.free4': '1',
    'pricing.free5': 'Limited',
    'pricing.free6': 'Email',
    'pricing.pro1': '5',
    'pricing.pro2': '10',
    'pricing.pro3': '1,000',
    'pricing.pro4': '10',
    'pricing.pro5': 'Yes',
    'pricing.pro6': '24/7 Chat',
    'pricing.enterprise1': 'Unlimited',
    'pricing.enterprise2': 'Unlimited',
    'pricing.enterprise3': 'Unlimited',
    'pricing.enterprise4': 'Unlimited',
    'pricing.enterprise5': 'Advanced',
    'pricing.enterprise6': 'Dedicated Manager',
    'pricing.startFree': 'Start Free',
    'pricing.startPro': 'Go Pro',
    'pricing.contactSales': 'Contact Sales',

    // Testimonials
    'testimonials.title': 'What Our Customers Say',
    'testimonials.1.name': 'Sarah Johnson',
    'testimonials.1.position': 'Marketing Director, TechGrow',
    'testimonials.1.quote': 'Assistify has revolutionized how our marketing team handles campaign analytics. The custom AI knows exactly where to find our data and delivers insights instantly.',
    'testimonials.2.name': 'Michael Chen',
    'testimonials.2.position': 'CTO, Innovate Inc',
    'testimonials.2.quote': 'The ROI on Assistify has been incredible. Our support team now handles 3x the tickets with the same headcount, and customer satisfaction has increased by 40%.',
    'testimonials.3.name': 'Jessica Miller',
    'testimonials.3.position': 'Head of Sales, GrowthForce',
    'testimonials.3.quote': 'Our sales team uses Assistify daily to pull client data, generate proposals, and track deal progress. It\'s become our secret competitive advantage.',

    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.1.question': 'How does Assistify connect to our existing data?',
    'faq.1.answer': 'Assistify offers secure integrations with popular platforms like Salesforce, Google Workspace, Slack, and more. We also provide API access and database connectors for custom data sources.',
    'faq.2.question': 'Is our company data secure with Assistify?',
    'faq.2.answer': 'Absolutely. We use enterprise-grade encryption, SOC 2 compliance measures, and never store your queries or responses. Your data security is our top priority.',
    'faq.3.question': 'How much technical knowledge is needed to set up an assistant?',
    'faq.3.answer': 'Very little! Our platform is designed for non-technical users with a simple interface for connecting data sources and training assistants. No coding required.',
    'faq.4.question': 'Can we customize the AI\'s responses and knowledge?',
    'faq.4.answer': 'Yes, you have full control over your assistant\'s knowledge base, tone, and capabilities. You can train it on your documentation and set specific guidelines for responses.',

    // Footer
    'footer.product': 'Product',
    'footer.company': 'Company',
    'footer.legal': 'Legal',
    'footer.subscribe': 'Subscribe to our newsletter',
    'footer.subscribeText': 'Get the latest updates and news',
    'footer.email': 'Your email',
    'footer.subscribe.button': 'Subscribe',
    'footer.copyright': '© 2025 Assistify. All rights reserved.',
    'footer.features': 'Features',
    'footer.pricing': 'Pricing',
    'footer.integrations': 'Integrations',
    'footer.about': 'About Us',
    'footer.careers': 'Careers',
    'footer.blog': 'Blog',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.contact': 'Contact Us',
  },
  es: {
    // Navbar
    'nav.home': 'Inicio',
    'nav.features': 'Características',
    'nav.pricing': 'Precios',
    'nav.demo': 'Demo',
    'nav.faq': 'Preguntas',
    'nav.getStarted': 'Comenzar',

    // Hero
    'hero.title1': 'Crea un Asistente de IA',
    'hero.title2': '¡en Minutos!',
    'hero.subtitle': 'Desarrolla rápidamente un Asistente de IA personalizado con OpenAI GPT-3.5: Conecta sin problemas a recursos y sube archivos para una asistencia integral.',
    'hero.cta': 'Comenzar',
    'hero.pricing': 'Ver Precios',
    'hero.rotatingWords.0': 'Chatbots',
    'hero.rotatingWords.1': 'Automatización',
    'hero.rotatingWords.2': 'Análisis',
    'hero.rotatingWords.3': 'Soporte',

    // Features
    'features.title': 'Personalizado para Cada Necesidad',
    'features.subtitle': 'Crea asistentes dedicados para equipos, proyectos o flujos de trabajo. Aumenta la eficiencia del equipo en un 90% con acceso a datos personalizados para cada asistente.',
    'features.card1.title': 'Integración de Datos',
    'features.card1.desc': 'Conéctate a tus herramientas y bases de datos existentes para respuestas contextualizadas.',
    'features.card2.title': 'Entrenamiento Personalizado',
    'features.card2.desc': 'Entrena con tu documentación, base de conocimientos y datos de la empresa.',
    'features.card3.title': 'Automatización de Flujos',
    'features.card3.desc': 'Automatiza tareas repetitivas e intégralo con tus procesos existentes.',
    'features.card4.title': 'Análisis Avanzado',
    'features.card4.desc': 'Rastrea patrones de uso y mejora tus asistentes con el tiempo.',
    'features.learnMore': 'Saber más',

    // Chat Demo
    'demo.placeholder': 'Escribe tu mensaje',
    'demo.send': 'Enviar',
    'demo.you': 'Tú',
    'demo.assistant': 'Assistify',
    'demo.message1': '¿Cuáles fueron los ingresos generados durante la campaña de Black Friday 2022?',
    'demo.response1': 'Los ingresos generados durante la campaña de Black Friday 2022 fueron de $20,000.',
    'demo.message2': '¿Cuál fue la tasa de apertura para la campaña de Black Friday 2022?',
    'demo.response2': 'La tasa de apertura para la campaña de Black Friday 2022 fue del 25%.',

    // Pricing
    'pricing.title': 'Precios Simples y Transparentes',
    'pricing.subtitle': 'Elige el plan que mejor funcione para ti y tu equipo',
    'pricing.free': 'Gratis',
    'pricing.pro': 'Pro',
    'pricing.enterprise': 'Empresa',
    'pricing.freePrice': '€0',
    'pricing.proPrice': '€29',
    'pricing.enterprisePrice': 'Personalizado',
    'pricing.month': '/mes',
    'pricing.feature1': 'Asistentes IA',
    'pricing.feature2': 'Conexiones de Datos',
    'pricing.feature3': 'Consultas Mensuales',
    'pricing.feature4': 'Usuarios',
    'pricing.feature5': 'Entrenamiento Personalizado',
    'pricing.feature6': 'Soporte Prioritario',
    'pricing.free1': '1',
    'pricing.free2': '2',
    'pricing.free3': '100',
    'pricing.free4': '1',
    'pricing.free5': 'Limitado',
    'pricing.free6': 'Email',
    'pricing.pro1': '5',
    'pricing.pro2': '10',
    'pricing.pro3': '1,000',
    'pricing.pro4': '10',
    'pricing.pro5': 'Sí',
    'pricing.pro6': 'Chat 24/7',
    'pricing.enterprise1': 'Ilimitados',
    'pricing.enterprise2': 'Ilimitadas',
    'pricing.enterprise3': 'Ilimitadas',
    'pricing.enterprise4': 'Ilimitados',
    'pricing.enterprise5': 'Avanzado',
    'pricing.enterprise6': 'Gestor Dedicado',
    'pricing.startFree': 'Comenzar Gratis',
    'pricing.startPro': 'Ir a Pro',
    'pricing.contactSales': 'Contactar Ventas',

    // Testimonials
    'testimonials.title': 'Lo Que Dicen Nuestros Clientes',
    'testimonials.1.name': 'Sara Jiménez',
    'testimonials.1.position': 'Directora de Marketing, TechGrow',
    'testimonials.1.quote': 'Assistify ha revolucionado cómo nuestro equipo de marketing maneja la analítica de campañas. La IA personalizada sabe exactamente dónde encontrar nuestros datos y entrega insights al instante.',
    'testimonials.2.name': 'Miguel Chen',
    'testimonials.2.position': 'CTO, Innovate Inc',
    'testimonials.2.quote': 'El ROI de Assistify ha sido increíble. Nuestro equipo de soporte ahora maneja 3 veces más tickets con el mismo personal, y la satisfacción del cliente ha aumentado un 40%.',
    'testimonials.3.name': 'Jessica Miller',
    'testimonials.3.position': 'Jefa de Ventas, GrowthForce',
    'testimonials.3.quote': 'Nuestro equipo de ventas usa Assistify diariamente para extraer datos de clientes, generar propuestas y seguir el progreso de las oportunidades. Se ha convertido en nuestra ventaja competitiva secreta.',

    // FAQ
    'faq.title': 'Preguntas Frecuentes',
    'faq.1.question': '¿Cómo se conecta Assistify a nuestros datos existentes?',
    'faq.1.answer': 'Assistify ofrece integraciones seguras con plataformas populares como Salesforce, Google Workspace, Slack y más. También proporcionamos acceso API y conectores de bases de datos para fuentes de datos personalizadas.',
    'faq.2.question': '¿Están seguros los datos de nuestra empresa con Assistify?',
    'faq.2.answer': 'Absolutamente. Utilizamos cifrado de nivel empresarial, medidas de cumplimiento SOC 2, y nunca almacenamos tus consultas o respuestas. La seguridad de tus datos es nuestra máxima prioridad.',
    'faq.3.question': '¿Cuánto conocimiento técnico se necesita para configurar un asistente?',
    'faq.3.answer': '¡Muy poco! Nuestra plataforma está diseñada para usuarios no técnicos con una interfaz simple para conectar fuentes de datos y entrenar asistentes. No se requiere programación.',
    'faq.4.question': '¿Podemos personalizar las respuestas y el conocimiento de la IA?',
    'faq.4.answer': 'Sí, tienes control total sobre la base de conocimientos, el tono y las capacidades de tu asistente. Puedes entrenarlo con tu documentación y establecer pautas específicas para las respuestas.',

    // Footer
    'footer.product': 'Producto',
    'footer.company': 'Empresa',
    'footer.legal': 'Legal',
    'footer.subscribe': 'Suscríbete a nuestro boletín',
    'footer.subscribeText': 'Recibe las últimas actualizaciones y noticias',
    'footer.email': 'Tu email',
    'footer.subscribe.button': 'Suscribirse',
    'footer.copyright': '© 2025 Assistify. Todos los derechos reservados.',
    'footer.features': 'Características',
    'footer.pricing': 'Precios',
    'footer.integrations': 'Integraciones',
    'footer.about': 'Sobre Nosotros',
    'footer.careers': 'Carreras',
    'footer.blog': 'Blog',
    'footer.privacy': 'Política de Privacidad',
    'footer.terms': 'Términos de Servicio',
    'footer.contact': 'Contáctanos',
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<LanguageType>('en');

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
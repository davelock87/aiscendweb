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
    // Navbar
    'nav.home': 'Home',
    'nav.features': 'Features',
    'nav.pricing': 'Pricing',
    'nav.demo': 'Chat',
    'nav.faq': 'FAQ',
    'nav.blog': 'Blog',
    'nav.useCases': 'Use Cases',
    'nav.getStarted': 'Get Started',
    'nav.restaurants': 'Restaurants',
    'nav.medical': 'Healthcare',
    'nav.academy': 'Academy',

    // Academy
    'academy.hero.title': 'The Growth Accelerator',
    'academy.hero.subtitle': 'for Your Startup',
    'academy.hero.description': 'We make your business gain more revenue at a glance with our comprehensive solutions and expert guidance.',
    'academy.hero.cta': 'Get Started',

    'academy.services.research': 'Market Research',
    'academy.services.researchDesc': 'Deep market analysis and competitor research to position your business effectively.',
    'academy.services.ux': 'User Experience',
    'academy.services.uxDesc': 'Create intuitive and engaging user experiences that convert visitors into customers.',
    'academy.services.marketing': 'Digital Marketing',
    'academy.services.marketingDesc': 'Strategic digital marketing campaigns that drive growth and engagement.',
    'academy.services.web': 'Web Development',
    'academy.services.webDesc': 'Custom web solutions built with modern technologies and best practices.',
    'academy.services.brand': 'Brand Design Identity',
    'academy.services.brandDesc': 'Distinctive brand identity design that makes your business stand out.',
    'academy.services.seo': 'SEO & SMM Services',
    'academy.services.seoDesc': 'Optimize your online presence and social media strategy for maximum impact.',

    'academy.benefits.strategy': 'Customer-Centric Strategy',
    'academy.benefits.strategyDesc': 'Build a marketing strategy that puts your customers first and drives sustainable growth.',
    'academy.benefits.data': 'Connect Your Data',
    'academy.benefits.dataDesc': 'Integrate all your data sources in one place for better decision making.',
    'academy.benefits.workflow': 'Streamlined Workflows',
    'academy.benefits.workflowDesc': 'Optimize your business processes for maximum efficiency and productivity.',

    'academy.features.growth': 'Proven Growth Strategy',
    'academy.features.growthDesc': 'Implement strategies that have been proven to drive business growth.',
    'academy.features.productivity': 'Enhanced Productivity',
    'academy.features.productivityDesc': 'Achieve more with optimized workflows and automated processes.',
    'academy.features.solution': 'Scalable Solutions',
    'academy.features.solutionDesc': 'Solutions that grow with your business and adapt to your needs.',

    'academy.cta.title': 'Ready to Accelerate Your Growth?',
    'academy.cta.description': 'Join our program and transform your business with expert guidance and proven strategies.',
    'academy.cta.button': 'Contact Us Now',

    // Hero
    'hero.title1': 'Craft an AI Assistant',
    'hero.title2': 'in Minutes!',
    'hero.subtitle': 'Rapidly Develop a Tailored AI Assistant with N8N: Seamlessly Connect to Resources and Upload Files for Comprehensive Assistance.',
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
    'demo.assistant': 'AISCEND',
    'demo.message1': 'What was the revenue generated during the Black Friday Sale 2022 campaign?',
    'demo.response1': 'The revenue generated during the Black Friday Sale 2022 campaign was $20,000.',
    'demo.message2': 'What was the open rate for the Black Friday Sale 2022 campaign?',
    'demo.response2': 'The open rate for the Black Friday Sale 2022 campaign was 25%.',

    // Restaurant Automation
    'restaurant.title': 'Restaurant Automation',
    'restaurant.subtitle': 'Services',
    'restaurant.description': 'Automate customer service and order management for your restaurant with artificial intelligence',
    'restaurant.feature1.title': 'Multichannel Responses',
    'restaurant.feature1.desc': 'Automatic message management on WhatsApp, Instagram, and Messenger',
    'restaurant.feature2.title': 'Delivery Verification',
    'restaurant.feature2.desc': 'Automatic postal code verification through Google Maps',
    'restaurant.feature3.title': 'Visual Menu',
    'restaurant.feature3.desc': 'Send menu with attractive images of your dishes',
    'restaurant.feature4.title': 'Order Management',
    'restaurant.feature4.desc': 'Collection of selections and suggestion of complements',
    'restaurant.feature5.title': 'Payment Links',
    'restaurant.feature5.desc': 'Automatic generation of secure payment links',
    'restaurant.feature6.title': 'Kitchen Notifications',
    'restaurant.feature6.desc': 'Automatic sending of confirmed orders to the kitchen',
    'restaurant.feature7.title': 'Secure Storage',
    'restaurant.feature7.desc': 'Secure recording of messages and session data',
    'restaurant.feature8.title': 'Conversational AI',
    'restaurant.feature8.desc': 'Natural and friendly communication with customers',
    'restaurant.madeWithLove.title': 'Made with ❤️ for Restaurants',
    'restaurant.madeWithLove.desc': 'This workflow was created especially for you, who run a restaurant, a small burger joint, or a delivery business full of heart. We know how busy your days can be, so we developed this AI assistant to help you take care of your customers across all channels.',
    'restaurant.support.title': 'Support Plans',
    'restaurant.basic.title': 'Basic Support',
    'restaurant.basic.price': '$150,000/hour',
    'restaurant.basic.hours': 'Minimum block: 1 hour',
    'restaurant.basic.desc': 'Essential support for general inquiries and basic configurations',
    'restaurant.basic.features': [
      'General system inquiries',
      'Platform usage advice',
      'Basic template configuration',
      'Remote support via WhatsApp'
    ],
    'restaurant.technical.title': 'Technical Support',
    'restaurant.technical.price': '$220,000/hour',
    'restaurant.technical.hours': 'Minimum block: 1 hour',
    'restaurant.technical.desc': 'Advanced technical assistance and flow optimization',
    'restaurant.technical.features': [
      'Technical problem resolution',
      'Existing flow optimization',
      'Advanced configuration',
      'Remote access support'
    ],
    'restaurant.specialized.title': 'Specialized Support',
    'restaurant.specialized.price': '$320,000/hour',
    'restaurant.specialized.hours': 'Minimum block: 2 hours',
    'restaurant.specialized.desc': 'Specialized solutions and optimization',
    'restaurant.specialized.features': [
      'Complex problem diagnosis',
      'Performance optimization',
      'Integration configuration',
      'Change documentation'
    ],
    'restaurant.cta.title': 'Ready to Automate?',
    'restaurant.cta.desc': 'Contact us today and discover how we can help grow your business',
    'restaurant.cta.button': 'Contact via WhatsApp',

    // Pricing
    'pricing.title': 'Simple, Transparent Pricing',
    'pricing.subtitle': 'Choose the plan that works best for you and your team',
    'pricing.free': 'Starter',
    'pricing.pro': 'Pro',
    'pricing.enterprise': 'Enterprise',
    'pricing.freePrice': '$29',
    'pricing.proPrice': '$60',
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
    'pricing.startFree': 'Start',
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
    'faq.1.question': 'How does AISCEND connect to our existing data?',
    'faq.1.answer': 'Assistify offers secure integrations with popular platforms like Salesforce, Google Workspace, Slack, and more. We also provide API access and database connectors for custom data sources.',
    'faq.2.question': 'Is our company data secure with AISCEND?',
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
    'footer.copyright': '© 2025 AISCEND. All rights reserved.',
    'footer.features': 'Features',
    'footer.pricing': 'Pricing',
    'footer.integrations': 'Integrations',
    'footer.about': 'About Us',
    'footer.careers': 'Careers',
    'footer.blog': 'Blog',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.contact': 'Contact Us',

    // Integrations
    'integrations.title': 'Powerful Integrations & Enterprise Solutions',
    'integrations.subtitle': 'Connect with your favorite tools and automate your business processes',
    'integrations.section1.title': 'Popular Integrations',
    'integrations.section2.title': 'Enterprise Solutions',

    // Medical & Healthcare
    'medical.title': 'AI-Powered Solutions for',
    'medical.subtitle': 'Healthcare & Medical Practices',
    'medical.description': 'Transform your medical practice with intelligent automation that enhances patient care and streamlines administrative tasks',
    
    'medical.feature1.title': 'Smart Scheduling',
    'medical.feature1.desc': 'Automated appointment booking and intelligent schedule management',
    
    'medical.feature2.title': 'Patient Communication',
    'medical.feature2.desc': 'Automated reminders and follow-ups across multiple channels',
    
    'medical.feature3.title': 'Digital Records',
    'medical.feature3.desc': 'Secure electronic health records management and access',
    
    'medical.feature4.title': 'Wait Time Management',
    'medical.feature4.desc': 'Real-time updates and queue management system',
    
    'medical.feature5.title': 'Health Monitoring',
    'medical.feature5.desc': 'Remote patient monitoring and alert systems',
    
    'medical.feature6.title': 'Data Security',
    'medical.feature6.desc': 'HIPAA-compliant data protection and encryption',
    
    'medical.feature7.title': 'Medical Integration',
    'medical.feature7.desc': 'Integration with existing medical systems and EMRs',
    
    'medical.feature8.title': 'AI Assistant',
    'medical.feature8.desc': 'Intelligent medical chatbot for patient inquiries',

    'medical.compliance.title': 'Healthcare Compliance & Security',
    'medical.compliance.description': 'Our platform is built with healthcare regulations in mind, ensuring your practice stays compliant while improving efficiency',
    
    'medical.benefit1.title': 'HIPAA Compliance',
    'medical.benefit1.desc': 'Fully compliant with healthcare data protection regulations',
    
    'medical.benefit2.title': 'Data Encryption',
    'medical.benefit2.desc': 'End-to-end encryption for all patient data and communications',
    
    'medical.benefit3.title': 'Audit Trails',
    'medical.benefit3.desc': 'Comprehensive logging and tracking of all system activities',

    'medical.cta.title': 'Ready to Transform Your Practice?',
    'medical.cta.description': 'Join healthcare providers who are revolutionizing patient care with AI',
    'medical.cta.button': 'Schedule a Demo'
  },
  es: {
    // Navbar
    'nav.home': 'Inicio',
    'nav.features': 'Características',
    'nav.pricing': 'Precios',
    'nav.demo': 'Chat',
    'nav.faq': 'Preguntas',
    'nav.blog': 'Blog',
    'nav.useCases': 'Casos de Uso',
    'nav.getStarted': 'Comenzar',
    'nav.restaurants': 'Restaurantes',
    'nav.medical': 'Sector Salud',
    'nav.academy': 'Academia',

    // Academy
    'academy.hero.title': 'El Acelerador de Crecimiento',
    'academy.hero.subtitle': 'para Tu Startup',
    'academy.hero.description': 'Hacemos que tu negocio genere más ingresos de un vistazo con nuestras soluciones integrales y guía experta.',
    'academy.hero.cta': 'Comenzar',

    'academy.services.research': 'Investigación de Mercado',
    'academy.services.researchDesc': 'Análisis profundo del mercado y la competencia para posicionar tu negocio efectivamente.',
    'academy.services.ux': 'Experiencia de Usuario',
    'academy.services.uxDesc': 'Crea experiencias intuitivas y atractivas que conviertan visitantes en clientes.',
    'academy.services.marketing': 'Marketing Digital',
    'academy.services.marketingDesc': 'Campañas estratégicas de marketing digital que impulsan el crecimiento.',
    'academy.services.web': 'Desarrollo Web',
    'academy.services.webDesc': 'Soluciones web personalizadas construidas con tecnologías modernas.',
    'academy.services.brand': 'Diseño de Marca',
    'academy.services.brandDesc': 'Diseño de identidad de marca distintiva que hace destacar tu negocio.',
    'academy.services.seo': 'Servicios SEO y SMM',
    'academy.services.seoDesc': 'Optimiza tu presencia online y estrategia en redes sociales.',

    'academy.benefits.strategy': 'Estrategia Centrada en Cliente',
    'academy.benefits.strategyDesc': 'Construye una estrategia de marketing que prioriza a tus clientes.',
    'academy.benefits.data': 'Conecta tus Datos',
    'academy.benefits.dataDesc': 'Integra todas tus fuentes de datos en un solo lugar.',
    'academy.benefits.workflow': 'Flujos de Trabajo Optimizados',
    'academy.benefits.workflowDesc': 'Optimiza tus procesos de negocio para máxima eficiencia.',

    'academy.features.growth': 'Estrategia Probada',
    'academy.features.growthDesc': 'Implementa estrategias que han demostrado impulsar el crecimiento.',
    'academy.features.productivity': 'Mayor Productividad',
    'academy.features.productivityDesc': 'Logra más con flujos de trabajo optimizados.',
    'academy.features.solution': 'Soluciones Escalables',
    'academy.features.solutionDesc': 'Soluciones que crecen con tu negocio.',

    'academy.cta.title': '¿Listo para Acelerar tu Crecimiento?',
    'academy.cta.description': 'Únete a nuestro programa y transforma tu negocio con guía experta.',
    'academy.cta.button': 'Contáctanos Ahora',

    // Hero
    'hero.title1': 'Crea un Asistente de IA',
    'hero.title2': '¡en Minutos!',
    'hero.subtitle': 'Desarrolla rápidamente un Asistente de IA personalizado con N8N: Conecta sin problemas a recursos y sube archivos para una asistencia integral.',
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
    'demo.assistant': 'AISCEND',
    'demo.message1': '¿Cuáles fueron los ingresos generados durante la campaña de Black Friday 2022?',
    'demo.response1': 'Los ingresos generados durante la campaña de Black Friday 2022 fueron de $20,000.',
    'demo.message2': '¿Cuál fue la tasa de apertura para la campaña de Black Friday 2022?',
    'demo.response2': 'La tasa de apertura para la campaña de Black Friday 2022 fue del 25%.',

    // Restaurant Automation
    'restaurant.title': 'Servicios de Automatización para',
    'restaurant.subtitle': 'Restaurantes',
    'restaurant.description': 'Automatiza la atención al cliente y gestión de pedidos de tu restaurante con inteligencia artificial',
    'restaurant.feature1.title': 'Respuestas Multicanal',
    'restaurant.feature1.desc': 'Gestión automática de mensajes en WhatsApp, Instagram y Messenger',
    'restaurant.feature2.title': 'Verificación de Entregas',
    'restaurant.feature2.desc': 'Comprobación automática de códigos postales mediante Google Maps',
    'restaurant.feature3.title': 'Menú Visual',
    'restaurant.feature3.desc': 'Envío de menú con imágenes atractivas de tus platillos',
    'restaurant.feature4.title': 'Gestión de Pedidos',
    'restaurant.feature4.desc': 'Recopilación de selecciones y sugerencia de complementos',
    'restaurant.feature5.title': 'Enlaces de Pago',
    'restaurant.feature5.desc': 'Generación automática de enlaces para pagos seguros',
    'restaurant.feature6.title': 'Notificaciones a Cocina',
    'restaurant.feature6.desc': 'Envío automático de pedidos confirmados a la cocina',
    'restaurant.feature7.title': 'Almacenamiento Seguro',
    'restaurant.feature7.desc': 'Registro seguro de mensajes y datos de sesión',
    'restaurant.feature8.title': 'IA Conversacional',
    'restaurant.feature8.desc': 'Comunicación natural y amigable con los clientes',
    'restaurant.madeWithLove.title': 'Hecho con ❤️ para Restaurantes',
    'restaurant.madeWithLove.desc': 'Este flujo de trabajo fue creado especialmente para ti, que diriges un restaurante, una pequeña hamburguesería o un negocio de entrega lleno de corazón. Sé lo ocupados que pueden ser tus días, así que desarrollamos este asistente de IA para ayudarte a cuidar a tus clientes en todos los canales.',
    'restaurant.support.title': 'Planes de Soporte',
    'restaurant.basic.title': 'Soporte Básico',
    'restaurant.basic.price': '$150,000/hora',
    'restaurant.basic.hours': 'Bloque mínimo: 1 hora',
    'restaurant.basic.desc': 'Soporte esencial para consultas generales y configuraciones básicas',
    'restaurant.basic.features': [
      'Consultas generales del sistema',
      'Asesoramiento en uso de plataforma',
      'Configuración básica de plantillas',
      'Soporte remoto por WhatsApp'
    ],
    'restaurant.technical.title': 'Soporte Técnico',
    'restaurant.technical.price': '$220,000/hora',
    'restaurant.technical.hours': 'Bloque mínimo: 1 hora',
    'restaurant.technical.desc': 'Asistencia técnica avanzada y optimización de flujos',
    'restaurant.technical.features': [
      'Resolución de problemas técnicos',
      'Optimización de flujos existentes',
      'Configuración avanzada',
      'Soporte con acceso remoto'
    ],
    'restaurant.specialized.title': 'Soporte Especializado',
    'restaurant.specialized.price': '$320,000/hora',
    'restaurant.specialized.hours': 'Bloque mínimo: 2 horas',
    'restaurant.specialized.desc': 'Soluciones especializadas y optimización avanzada',
    'restaurant.specialized.features': [
      'Diagnóstico de problemas complejos',
      'Optimización de rendimiento',
      'Configuración de integraciones',
      'Documentación de cambios'
    ],
    'restaurant.cta.title': '¿Listo para Automatizar?',
    'restaurant.cta.desc': 'Contáctanos hoy y descubre cómo podemos ayudarte a hacer crecer tu negocio',
    'restaurant.cta.button': 'Contactar por WhatsApp',

    // Pricing
    'pricing.title': 'Precios Simples y Transparentes',
    'pricing.subtitle': 'Elige el plan que mejor funcione para ti y tu equipo',
    'pricing.free': 'Inicio',
    'pricing.pro': 'Pro',
    'pricing.enterprise': 'Empresa',
    'pricing.freePrice': '$29',
    'pricing.proPrice': '$60',
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
    'pricing.startFree': 'Comenzar',
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
    'faq.1.question': '¿Cómo se conecta AISCEND a nuestros datos existentes?',
    'faq.1.answer': 'AISCEND ofrece integraciones seguras con plataformas populares como Salesforce, Google Workspace, Slack y más. También proporcionamos acceso API y conectores de bases de datos para fuentes de datos personalizadas.',
    'faq.2.question': '¿Están seguros los datos de nuestra empresa con AISCEND?',
    'faq.2.answer': 'Absolutamente. Utilizamos cifrado de nivel empresarial, medidas de cumplimiento SOC 2, y nunca almacenamos tus consultas o respuestas. La seguridad de tus datos es nuestra máxima prioridad.',
    'faq.3.question': '¿Cuánto conocimiento técnico se necesita para configurar un asistente?',
    'faq.3.answer': '¡Muy poco! Nuestra plataforma está diseñada para usuarios no técnicos con una interfaz simple para conectar fuentes de datos y entrenar asistentes. No se requiere programación.',
    'faq.4.question': '¿Podemos personalizar las respuestas y el conocimiento de la  IA?',
    'faq.4.answer': 'Sí, tienes control total sobre la base de conocimientos, el tono y las capacidades de tu asistente. Puedes entrenarlo con tu documentación y establecer pautas específicas para las respuestas.',

    // Footer
    'footer.product': 'Producto',
    'footer.company': 'Empresa',
    'footer.legal': 'Legal',
    'footer.subscribe': 'Suscríbete a nuestro boletín',
    'footer.subscribeText': 'Recibe las últimas actualizaciones y noticias',
    'footer.email': 'Tu email',
    'footer.subscribe.button': 'Suscribirse',
    'footer.copyright': '© 2025 AISCEND. Todos los derechos reservados.',
    'footer.features': 'Características',
    'footer.pricing': 'Precios',
    'footer.integrations': 'Integraciones',
    'footer.about': 'Sobre Nosotros',
    'footer.careers': 'Carreras',
    'footer.blog': 'Blog',
    'footer.privacy': 'Política de Privacidad',
    'footer.terms': 'Términos de Servicio',
    'footer.contact': 'Contáctanos',

    // Integrations
    'integrations.title': 'Integraciones Potentes y Soluciones Empresariales',
    'integrations.subtitle': 'Conéctate con tus herramientas favoritas y automatiza tus procesos de negocio',
    'integrations.section1.title': 'Integraciones Populares',
    'integrations.section2.title': 'Soluciones Empresariales',

    // Medical & Healthcare
    'medical.title': 'Soluciones Impulsadas por IA para',
    'medical.subtitle': 'Salud y Prácticas Médicas',
    'medical.description': 'Transforma tu práctica médica con automatización inteligente que mejora la atención al paciente y optimiza las tareas administrativas',
    
    'medical.feature1.title': 'Agenda Inteligente',
    'medical.feature1.desc': 'Reserva automatizada de citas y gestión inteligente de horarios',
    
    'medical.feature2.title': 'Comunicación con Pacientes',
    'medical.feature2.desc': 'Recordatorios y seguimientos automatizados en múltiples canales',
    
    'medical.feature3.title': 'Registros Digitales',
    'medical.feature3.desc': 'Gestión y acceso seguro a registros médicos electrónicos',
    
    'medical.feature4.title': 'Gestión de Espera',
    'medical.feature4.desc': 'Actualizaciones en tiempo real y sistema de gestión de colas',
    
    'medical.feature5.title': 'Monitoreo de Salud',
    'medical.feature5.desc': 'Sistema de monitoreo remoto y alertas de pacientes',
    
    'medical.feature6.title': 'Seguridad de Datos',
    'medical.feature6.desc': 'Protección y encriptación de datos compatible con HIPAA',
    
    'medical.feature7.title': 'Integración Médica',
    'medical.feature7.desc': 'Integración con sistemas médicos existentes y EMR',
    
    'medical.feature8.title': 'Asistente IA',
    'medical.feature8.desc': 'Chatbot médico inteligente para consultas de pacientes',

    'medical.compliance.title': 'Cumplimiento y Seguridad en Salud',
    'medical.compliance.description': 'Nuestra plataforma está construida considerando las regulaciones de salud, asegurando que tu práctica cumpla las normas mientras mejora la eficiencia',
    
    'medical.benefit1.title': 'Cumplimiento HIPAA',
    'medical.benefit1.desc': 'Totalmente compatible con regulaciones de protección de datos médicos',
    
    'medical.benefit2.title': 'Encriptación de Datos',
    'medical.benefit2.desc': 'Encriptación de extremo a extremo para todos los datos y comunicaciones',
    
    'medical.benefit3.title': 'Registro de Auditoría',
    'medical.benefit3.desc': 'Registro y seguimiento completo de todas las actividades del sistema',

    'medical.cta.title': '¿Listo para Transformar tu Práctica?',
    'medical.cta.description': 'Únete a los proveedores de salud que están revolucionando la atención al paciente con IA',
    'medical.cta.button': 'Programa una Demo'
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
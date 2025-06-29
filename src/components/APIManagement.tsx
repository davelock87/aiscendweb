import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  Code, 
  Webhook, 
  Settings, 
  Activity, 
  Shield, 
  Zap, 
  CheckCircle, 
  Bot,
  ArrowRight,
  Database,
  Globe,
  Lock,
  BarChart3
} from 'lucide-react';
import Particles from './Particles';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-dark-300 p-6 rounded-xl transition-all duration-300 hover:transform hover:scale-105">
    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
      <div className="gradient-icon">{icon}</div>
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-white/70">{description}</p>
  </div>
);

const APIManagement: React.FC = () => {
  const { language } = useLanguage();

  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: language === 'en' ? 'Custom Integrations' : 'Integraciones Personalizadas',
      description: language === 'en' 
        ? 'Build custom API integrations with any third-party service or internal system.'
        : 'Construye integraciones API personalizadas con cualquier servicio de terceros o sistema interno.'
    },
    {
      icon: <Webhook className="w-6 h-6" />,
      title: language === 'en' ? 'Webhook Management' : 'Gestión de Webhooks',
      description: language === 'en'
        ? 'Automated webhook handling with real-time event processing and error handling.'
        : 'Manejo automatizado de webhooks con procesamiento de eventos en tiempo real y manejo de errores.'
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: language === 'en' ? 'API Gateway' : 'Gateway de API',
      description: language === 'en'
        ? 'Centralized API management with rate limiting, authentication, and monitoring.'
        : 'Gestión centralizada de APIs con limitación de velocidad, autenticación y monitoreo.'
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: language === 'en' ? 'Real-time Monitoring' : 'Monitoreo en Tiempo Real',
      description: language === 'en'
        ? 'Monitor API performance, usage analytics, and system health in real-time.'
        : 'Monitorea rendimiento de API, análisis de uso y salud del sistema en tiempo real.'
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: language === 'en' ? 'Security & Authentication' : 'Seguridad y Autenticación',
      description: language === 'en'
        ? 'Enterprise-grade security with OAuth, API keys, and encrypted communications.'
        : 'Seguridad de nivel empresarial con OAuth, claves API y comunicaciones encriptadas.'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: language === 'en' ? 'Analytics & Reporting' : 'Análisis y Reportes',
      description: language === 'en'
        ? 'Detailed API usage analytics, performance metrics, and automated reporting.'
        : 'Análisis detallado de uso de API, métricas de rendimiento y reportes automatizados.'
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: language === 'en' ? '10x Faster Integration' : '10x Integración Más Rápida',
      description: language === 'en'
        ? 'Accelerate system integrations with pre-built connectors and automation.'
        : 'Acelera integraciones de sistemas con conectores pre-construidos y automatización.'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: language === 'en' ? '99.9% Uptime' : '99.9% Tiempo de Actividad',
      description: language === 'en'
        ? 'Ensure reliable API performance with enterprise-grade infrastructure.'
        : 'Asegura rendimiento confiable de API con infraestructura de nivel empresarial.'
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: language === 'en' ? '100% Scalability' : '100% Escalabilidad',
      description: language === 'en'
        ? 'Scale your integrations seamlessly as your business grows.'
        : 'Escala tus integraciones sin problemas mientras tu negocio crece.'
    }
  ];

  return (
    <div className="relative min-h-screen">
      <Particles />
      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto pt-32 pb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">
              {language === 'en' ? 'API Management' : 'Gestión de APIs'}
            </span>
            <span className="block mt-4 text-3xl md:text-4xl">
              {language === 'en' ? 'Seamless System Integration' : 'Integración Perfecta de Sistemas'}
            </span>
          </h1>
          <p className="text-xl text-white/70 mb-8">
            {language === 'en'
              ? 'Create custom integrations and manage webhooks with enterprise-grade API management solutions.'
              : 'Crea integraciones personalizadas y gestiona webhooks con soluciones de gestión de API de nivel empresarial.'}
          </p>
          <a
            href="https://wa.me/573228391374"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-button px-8 py-3 rounded-full text-white font-medium text-lg inline-block"
          >
            {language === 'en' ? 'Connect Your Systems' : 'Conecta tus Sistemas'}
          </a>
        </div>

        {/* Features Section */}
        <div className="mb-32">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {language === 'en' ? 'Complete API Platform' : 'Plataforma API Completa'}
            </h2>
            <p className="text-lg text-white/70">
              {language === 'en'
                ? 'Everything you need to build, manage, and monitor APIs and integrations at scale.'
                : 'Todo lo que necesitas para construir, gestionar y monitorear APIs e integraciones a escala.'}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-dark-400 rounded-2xl p-8 mb-32">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">
              {language === 'en' ? 'Integration Excellence' : 'Excelencia en Integración'}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <div className="gradient-icon">{benefit.icon}</div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-white/70">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-dark-400 rounded-2xl p-8 text-center mb-20">
          <h2 className="text-3xl font-bold mb-6">
            {language === 'en' ? 'Ready to Streamline Your Integrations?' : '¿Listo para Optimizar tus Integraciones?'}
          </h2>
          <p className="text-lg text-white/70 mb-8">
            {language === 'en'
              ? 'Join companies that have accelerated their digital transformation with our API platform.'
              : 'Únete a empresas que han acelerado su transformación digital con nuestra plataforma API.'}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/573228391374"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-button px-8 py-3 rounded-full text-white font-medium text-lg inline-flex items-center justify-center"
            >
              {language === 'en' ? 'Start Integration' : 'Comenzar Integración'}
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="https://wa.me/573228391374"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full text-white font-medium text-lg border border-white/20 hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center"
            >
              {language === 'en' ? 'Schedule Demo' : 'Agendar Demo'}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default APIManagement;
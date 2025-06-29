import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  Code, 
  Monitor, 
  Smartphone, 
  Zap, 
  Shield, 
  Search, 
  CheckCircle, 
  ArrowRight,
  Globe,
  Database,
  Settings,
  Rocket
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

const WebDevelopment: React.FC = () => {
  const { language } = useLanguage();

  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: language === 'en' ? 'Custom Development' : 'Desarrollo Personalizado',
      description: language === 'en' 
        ? 'Personalized web solutions built with modern technologies and best practices.'
        : 'Soluciones web personalizadas construidas con tecnologías modernas y mejores prácticas.'
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: language === 'en' ? 'Responsive Design' : 'Diseño Responsivo',
      description: language === 'en'
        ? 'Websites that work perfectly on all devices and screen sizes.'
        : 'Sitios web que funcionan perfectamente en todos los dispositivos y tamaños de pantalla.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: language === 'en' ? 'Performance Optimization' : 'Optimización de Rendimiento',
      description: language === 'en'
        ? 'Fast-loading websites optimized for speed and user experience.'
        : 'Sitios web de carga rápida optimizados para velocidad y experiencia de usuario.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: language === 'en' ? 'Security & Maintenance' : 'Seguridad y Mantenimiento',
      description: language === 'en'
        ? 'Robust security measures and ongoing maintenance for peace of mind.'
        : 'Medidas de seguridad robustas y mantenimiento continuo para tranquilidad.'
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: language === 'en' ? 'SEO Optimization' : 'Optimización SEO',
      description: language === 'en'
        ? 'Built-in SEO optimization to improve search engine visibility.'
        : 'Optimización SEO integrada para mejorar la visibilidad en motores de búsqueda.'
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: language === 'en' ? 'Database Integration' : 'Integración de Base de Datos',
      description: language === 'en'
        ? 'Seamless database integration for dynamic and scalable applications.'
        : 'Integración perfecta de base de datos para aplicaciones dinámicas y escalables.'
    }
  ];

  const benefits = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: language === 'en' ? '3x Faster Loading' : '3x Carga Más Rápida',
      description: language === 'en'
        ? 'Optimized websites that load in under 3 seconds.'
        : 'Sitios web optimizados que cargan en menos de 3 segundos.'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: language === 'en' ? '100% Mobile Ready' : '100% Listo para Móvil',
      description: language === 'en'
        ? 'Perfect experience across all devices and platforms.'
        : 'Experiencia perfecta en todos los dispositivos y plataformas.'
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: language === 'en' ? '99.9% Uptime' : '99.9% Tiempo de Actividad',
      description: language === 'en'
        ? 'Reliable hosting and maintenance for maximum availability.'
        : 'Hosting confiable y mantenimiento para máxima disponibilidad.'
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
              {language === 'en' ? 'Web Development' : 'Desarrollo Web'}
            </span>
            <span className="block mt-4 text-3xl md:text-4xl">
              {language === 'en' ? 'Modern Technology Solutions' : 'Soluciones con Tecnología Moderna'}
            </span>
          </h1>
          <p className="text-xl text-white/70 mb-8">
            {language === 'en'
              ? 'Personalized web solutions built with modern technologies for optimal performance and user experience.'
              : 'Soluciones web personalizadas construidas con tecnologías modernas para rendimiento óptimo y experiencia de usuario.'}
          </p>
          <a
            href="https://wa.me/573228391374"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-button px-8 py-3 rounded-full text-white font-medium text-lg inline-block"
          >
            {language === 'en' ? 'Build Your Website' : 'Construye tu Sitio Web'}
          </a>
        </div>

        {/* Features Section */}
        <div className="mb-32">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {language === 'en' ? 'Complete Web Development Services' : 'Servicios Completos de Desarrollo Web'}
            </h2>
            <p className="text-lg text-white/70">
              {language === 'en'
                ? 'From concept to launch, we create websites that drive results and grow your business.'
                : 'Desde concepto hasta lanzamiento, creamos sitios web que generan resultados y hacen crecer tu negocio.'}
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
              {language === 'en' ? 'Development Excellence' : 'Excelencia en Desarrollo'}
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
            {language === 'en' ? 'Ready to Build Your Digital Presence?' : '¿Listo para Construir tu Presencia Digital?'}
          </h2>
          <p className="text-lg text-white/70 mb-8">
            {language === 'en'
              ? 'Create a powerful web presence that drives growth and engages your customers.'
              : 'Crea una presencia web poderosa que impulse el crecimiento y involucre a tus clientes.'}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/573228391374"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-button px-8 py-3 rounded-full text-white font-medium text-lg inline-flex items-center justify-center"
            >
              {language === 'en' ? 'Start Web Project' : 'Comenzar Proyecto Web'}
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="https://wa.me/573228391374"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full text-white font-medium text-lg border border-white/20 hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center"
            >
              {language === 'en' ? 'Schedule Consultation' : 'Agendar Consulta'}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDevelopment;
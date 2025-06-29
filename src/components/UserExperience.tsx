import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  Users, 
  Eye, 
  Smartphone, 
  Monitor, 
  Heart, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Palette,
  MousePointer,
  Layout,
  Target
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

const UserExperience: React.FC = () => {
  const { language } = useLanguage();

  const features = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: language === 'en' ? 'User Research' : 'Investigación de Usuario',
      description: language === 'en' 
        ? 'Deep user research to understand behaviors, needs, and pain points.'
        : 'Investigación profunda de usuarios para entender comportamientos, necesidades y puntos de dolor.'
    },
    {
      icon: <Layout className="w-6 h-6" />,
      title: language === 'en' ? 'Information Architecture' : 'Arquitectura de Información',
      description: language === 'en'
        ? 'Organize content and features for optimal user navigation and understanding.'
        : 'Organiza contenido y características para navegación y comprensión óptima del usuario.'
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: language === 'en' ? 'UI/UX Design' : 'Diseño UI/UX',
      description: language === 'en'
        ? 'Create intuitive and attractive interfaces that convert visitors into customers.'
        : 'Crea interfaces intuitivas y atractivas que conviertan visitantes en clientes.'
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: language === 'en' ? 'Mobile Optimization' : 'Optimización Móvil',
      description: language === 'en'
        ? 'Responsive design optimized for all devices and screen sizes.'
        : 'Diseño responsivo optimizado para todos los dispositivos y tamaños de pantalla.'
    },
    {
      icon: <MousePointer className="w-6 h-6" />,
      title: language === 'en' ? 'Usability Testing' : 'Pruebas de Usabilidad',
      description: language === 'en'
        ? 'Test and validate designs with real users to ensure optimal experience.'
        : 'Prueba y valida diseños con usuarios reales para asegurar experiencia óptima.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: language === 'en' ? 'Conversion Optimization' : 'Optimización de Conversión',
      description: language === 'en'
        ? 'Optimize user flows and interfaces to maximize conversion rates.'
        : 'Optimiza flujos de usuario e interfaces para maximizar tasas de conversión.'
    }
  ];

  const benefits = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: language === 'en' ? '85% User Satisfaction' : '85% Satisfacción de Usuario',
      description: language === 'en'
        ? 'Create experiences that users love and remember.'
        : 'Crea experiencias que los usuarios amen y recuerden.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: language === 'en' ? '60% Higher Conversion' : '60% Mayor Conversión',
      description: language === 'en'
        ? 'Improve conversion rates with optimized user experiences.'
        : 'Mejora tasas de conversión con experiencias de usuario optimizadas.'
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: language === 'en' ? '40% Reduced Bounce Rate' : '40% Menor Tasa de Rebote',
      description: language === 'en'
        ? 'Keep users engaged with intuitive and attractive designs.'
        : 'Mantén usuarios comprometidos con diseños intuitivos y atractivos.'
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
              {language === 'en' ? 'User Experience' : 'Experiencia de Usuario'}
            </span>
            <span className="block mt-4 text-3xl md:text-4xl">
              {language === 'en' ? 'Design That Converts' : 'Diseño que Convierte'}
            </span>
          </h1>
          <p className="text-xl text-white/70 mb-8">
            {language === 'en'
              ? 'Create intuitive and attractive experiences that turn visitors into loyal customers.'
              : 'Crea experiencias intuitivas y atractivas que conviertan visitantes en clientes leales.'}
          </p>
          <a
            href="https://wa.me/573228391374"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-button px-8 py-3 rounded-full text-white font-medium text-lg inline-block"
          >
            {language === 'en' ? 'Improve Your UX' : 'Mejora tu UX'}
          </a>
        </div>

        {/* Features Section */}
        <div className="mb-32">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {language === 'en' ? 'Complete UX Design Process' : 'Proceso Completo de Diseño UX'}
            </h2>
            <p className="text-lg text-white/70">
              {language === 'en'
                ? 'From research to implementation, we create user experiences that drive results.'
                : 'Desde investigación hasta implementación, creamos experiencias de usuario que generan resultados.'}
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
              {language === 'en' ? 'UX Impact on Business' : 'Impacto UX en el Negocio'}
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
            {language === 'en' ? 'Ready to Transform Your User Experience?' : '¿Listo para Transformar tu Experiencia de Usuario?'}
          </h2>
          <p className="text-lg text-white/70 mb-8">
            {language === 'en'
              ? 'Create experiences that users love and that drive your business growth.'
              : 'Crea experiencias que los usuarios amen y que impulsen el crecimiento de tu negocio.'}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/573228391374"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-button px-8 py-3 rounded-full text-white font-medium text-lg inline-flex items-center justify-center"
            >
              {language === 'en' ? 'Start UX Project' : 'Comenzar Proyecto UX'}
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

export default UserExperience;
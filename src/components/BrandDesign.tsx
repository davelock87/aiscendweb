import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  Palette, 
  Eye, 
  Heart, 
  Sparkles, 
  Target, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Brush,
  Image,
  Layout,
  Award
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

const BrandDesign: React.FC = () => {
  const { language } = useLanguage();

  const features = [
    {
      icon: <Brush className="w-6 h-6" />,
      title: language === 'en' ? 'Logo Design' : 'Diseño de Logo',
      description: language === 'en' 
        ? 'Distinctive logo design that captures your brand essence and values.'
        : 'Diseño de logo distintivo que captura la esencia y valores de tu marca.'
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: language === 'en' ? 'Brand Identity' : 'Identidad de Marca',
      description: language === 'en'
        ? 'Complete brand identity system including colors, typography, and visual guidelines.'
        : 'Sistema completo de identidad de marca incluyendo colores, tipografía y guías visuales.'
    },
    {
      icon: <Image className="w-6 h-6" />,
      title: language === 'en' ? 'Visual Assets' : 'Activos Visuales',
      description: language === 'en'
        ? 'Comprehensive visual assets for all your marketing and communication needs.'
        : 'Activos visuales comprehensivos para todas tus necesidades de marketing y comunicación.'
    },
    {
      icon: <Layout className="w-6 h-6" />,
      title: language === 'en' ? 'Brand Guidelines' : 'Guías de Marca',
      description: language === 'en'
        ? 'Detailed brand guidelines to ensure consistent application across all touchpoints.'
        : 'Guías detalladas de marca para asegurar aplicación consistente en todos los puntos de contacto.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: language === 'en' ? 'Market Positioning' : 'Posicionamiento de Mercado',
      description: language === 'en'
        ? 'Strategic brand positioning that differentiates you from competitors.'
        : 'Posicionamiento estratégico de marca que te diferencia de la competencia.'
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: language === 'en' ? 'Brand Experience' : 'Experiencia de Marca',
      description: language === 'en'
        ? 'Cohesive brand experience across all customer touchpoints and interactions.'
        : 'Experiencia de marca cohesiva en todos los puntos de contacto e interacciones con clientes.'
    }
  ];

  const benefits = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: language === 'en' ? '85% Brand Recognition' : '85% Reconocimiento de Marca',
      description: language === 'en'
        ? 'Build strong brand recognition that customers remember and trust.'
        : 'Construye reconocimiento de marca sólido que los clientes recuerden y en el que confíen.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: language === 'en' ? '60% Higher Value' : '60% Mayor Valor',
      description: language === 'en'
        ? 'Strong brands command premium pricing and customer loyalty.'
        : 'Las marcas fuertes demandan precios premium y lealtad del cliente.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: language === 'en' ? '90% Professional Image' : '90% Imagen Profesional',
      description: language === 'en'
        ? 'Project professionalism and credibility in every interaction.'
        : 'Proyecta profesionalismo y credibilidad en cada interacción.'
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
              {language === 'en' ? 'Brand Design' : 'Diseño de Marca'}
            </span>
            <span className="block mt-4 text-3xl md:text-4xl">
              {language === 'en' ? 'Distinctive Identity Creation' : 'Creación de Identidad Distintiva'}
            </span>
          </h1>
          <p className="text-xl text-white/70 mb-8">
            {language === 'en'
              ? 'Distinctive brand identity design that makes your business stand out and connect with customers.'
              : 'Diseño de identidad de marca distintiva que hace que tu negocio destaque y conecte con los clientes.'}
          </p>
          <a
            href="https://wa.me/573228391374"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-button px-8 py-3 rounded-full text-white font-medium text-lg inline-block"
          >
            {language === 'en' ? 'Create Your Brand' : 'Crea tu Marca'}
          </a>
        </div>

        {/* Features Section */}
        <div className="mb-32">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {language === 'en' ? 'Complete Brand Design Process' : 'Proceso Completo de Diseño de Marca'}
            </h2>
            <p className="text-lg text-white/70">
              {language === 'en'
                ? 'From concept to implementation, we create brands that resonate with your audience.'
                : 'Desde concepto hasta implementación, creamos marcas que resuenan con tu audiencia.'}
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
              {language === 'en' ? 'Brand Impact' : 'Impacto de Marca'}
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
            {language === 'en' ? 'Ready to Build a Memorable Brand?' : '¿Listo para Construir una Marca Memorable?'}
          </h2>
          <p className="text-lg text-white/70 mb-8">
            {language === 'en'
              ? 'Create a brand identity that stands out and builds lasting connections with your customers.'
              : 'Crea una identidad de marca que destaque y construya conexiones duraderas con tus clientes.'}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/573228391374"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-button px-8 py-3 rounded-full text-white font-medium text-lg inline-flex items-center justify-center"
            >
              {language === 'en' ? 'Start Brand Project' : 'Comenzar Proyecto de Marca'}
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

export default BrandDesign;
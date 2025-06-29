import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  Megaphone, 
  Target, 
  TrendingUp, 
  Mail, 
  Share2, 
  BarChart3, 
  CheckCircle, 
  ArrowRight,
  Zap,
  Users,
  Globe,
  Heart
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

const DigitalMarketing: React.FC = () => {
  const { language } = useLanguage();

  const features = [
    {
      icon: <Target className="w-6 h-6" />,
      title: language === 'en' ? 'Strategic Campaigns' : 'Campañas Estratégicas',
      description: language === 'en' 
        ? 'Data-driven marketing campaigns that target your ideal customers effectively.'
        : 'Campañas de marketing basadas en datos que se dirigen a tus clientes ideales efectivamente.'
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: language === 'en' ? 'Social Media Management' : 'Gestión de Redes Sociales',
      description: language === 'en'
        ? 'Complete social media strategy, content creation, and community management.'
        : 'Estrategia completa de redes sociales, creación de contenido y gestión de comunidad.'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: language === 'en' ? 'Email Marketing' : 'Email Marketing',
      description: language === 'en'
        ? 'Automated email campaigns that nurture leads and drive conversions.'
        : 'Campañas de email automatizadas que nutren leads y generan conversiones.'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: language === 'en' ? 'Content Marketing' : 'Marketing de Contenido',
      description: language === 'en'
        ? 'Valuable content that attracts, engages, and converts your target audience.'
        : 'Contenido valioso que atrae, involucra y convierte a tu audiencia objetivo.'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: language === 'en' ? 'Performance Analytics' : 'Análisis de Rendimiento',
      description: language === 'en'
        ? 'Detailed analytics and reporting to measure and optimize campaign performance.'
        : 'Análisis detallado y reportes para medir y optimizar el rendimiento de campañas.'
    },
    {
      icon: <Megaphone className="w-6 h-6" />,
      title: language === 'en' ? 'Paid Advertising' : 'Publicidad Pagada',
      description: language === 'en'
        ? 'Strategic paid advertising campaigns across Google, Facebook, and other platforms.'
        : 'Campañas estratégicas de publicidad pagada en Google, Facebook y otras plataformas.'
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: language === 'en' ? '300% ROI Increase' : '300% Aumento de ROI',
      description: language === 'en'
        ? 'Maximize return on investment with strategic digital marketing.'
        : 'Maximiza el retorno de inversión con marketing digital estratégico.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: language === 'en' ? '5x Lead Generation' : '5x Generación de Leads',
      description: language === 'en'
        ? 'Generate more qualified leads with targeted campaigns.'
        : 'Genera más leads calificados con campañas dirigidas.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: language === 'en' ? '90% Brand Awareness' : '90% Reconocimiento de Marca',
      description: language === 'en'
        ? 'Build strong brand presence across digital channels.'
        : 'Construye presencia de marca sólida en canales digitales.'
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
              {language === 'en' ? 'Digital Marketing' : 'Marketing Digital'}
            </span>
            <span className="block mt-4 text-3xl md:text-4xl">
              {language === 'en' ? 'Growth-Driven Strategies' : 'Estrategias que Impulsan Crecimiento'}
            </span>
          </h1>
          <p className="text-xl text-white/70 mb-8">
            {language === 'en'
              ? 'Strategic digital marketing campaigns that drive growth and maximize your business impact.'
              : 'Campañas estratégicas de marketing digital que impulsan el crecimiento y maximizan el impacto de tu negocio.'}
          </p>
          <a
            href="https://wa.me/573228391374"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-button px-8 py-3 rounded-full text-white font-medium text-lg inline-block"
          >
            {language === 'en' ? 'Boost Your Growth' : 'Impulsa tu Crecimiento'}
          </a>
        </div>

        {/* Features Section */}
        <div className="mb-32">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {language === 'en' ? 'Complete Digital Marketing Suite' : 'Suite Completa de Marketing Digital'}
            </h2>
            <p className="text-lg text-white/70">
              {language === 'en'
                ? 'From strategy to execution, we handle all aspects of your digital marketing needs.'
                : 'Desde estrategia hasta ejecución, manejamos todos los aspectos de tus necesidades de marketing digital.'}
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
              {language === 'en' ? 'Marketing Results' : 'Resultados de Marketing'}
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
            {language === 'en' ? 'Ready to Accelerate Your Growth?' : '¿Listo para Acelerar tu Crecimiento?'}
          </h2>
          <p className="text-lg text-white/70 mb-8">
            {language === 'en'
              ? 'Transform your digital presence with strategic marketing that delivers measurable results.'
              : 'Transforma tu presencia digital con marketing estratégico que entrega resultados medibles.'}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/573228391374"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-button px-8 py-3 rounded-full text-white font-medium text-lg inline-flex items-center justify-center"
            >
              {language === 'en' ? 'Start Marketing Campaign' : 'Comenzar Campaña de Marketing'}
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="https://wa.me/573228391374"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full text-white font-medium text-lg border border-white/20 hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center"
            >
              {language === 'en' ? 'Schedule Strategy Session' : 'Agendar Sesión de Estrategia'}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketing;
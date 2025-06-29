import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  Search, 
  TrendingUp, 
  Target, 
  BarChart3, 
  Globe, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  FileText,
  Link,
  Eye,
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

const SEOServices: React.FC = () => {
  const { language } = useLanguage();

  const features = [
    {
      icon: <Search className="w-6 h-6" />,
      title: language === 'en' ? 'Keyword Research' : 'Investigación de Palabras Clave',
      description: language === 'en' 
        ? 'Strategic keyword research to target high-value search terms for your business.'
        : 'Investigación estratégica de palabras clave para dirigirse a términos de búsqueda de alto valor para tu negocio.'
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: language === 'en' ? 'Content Optimization' : 'Optimización de Contenido',
      description: language === 'en'
        ? 'SEO-optimized content that ranks well and engages your target audience.'
        : 'Contenido optimizado para SEO que se posiciona bien e involucra a tu audiencia objetivo.'
    },
    {
      icon: <Link className="w-6 h-6" />,
      title: language === 'en' ? 'Link Building' : 'Construcción de Enlaces',
      description: language === 'en'
        ? 'High-quality backlink strategies to improve domain authority and rankings.'
        : 'Estrategias de backlinks de alta calidad para mejorar la autoridad del dominio y posicionamiento.'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: language === 'en' ? 'Technical SEO' : 'SEO Técnico',
      description: language === 'en'
        ? 'Technical optimization to improve site speed, crawlability, and search performance.'
        : 'Optimización técnica para mejorar velocidad del sitio, rastreabilidad y rendimiento de búsqueda.'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: language === 'en' ? 'Analytics & Reporting' : 'Análisis y Reportes',
      description: language === 'en'
        ? 'Detailed SEO analytics and reporting to track progress and ROI.'
        : 'Análisis detallado de SEO y reportes para rastrear progreso y ROI.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: language === 'en' ? 'Local SEO' : 'SEO Local',
      description: language === 'en'
        ? 'Local search optimization to attract customers in your geographic area.'
        : 'Optimización de búsqueda local para atraer clientes en tu área geográfica.'
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: language === 'en' ? '300% Traffic Increase' : '300% Aumento de Tráfico',
      description: language === 'en'
        ? 'Dramatically increase organic traffic with strategic SEO optimization.'
        : 'Aumenta dramáticamente el tráfico orgánico con optimización SEO estratégica.'
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: language === 'en' ? 'Top 3 Rankings' : 'Posicionamiento Top 3',
      description: language === 'en'
        ? 'Achieve top search engine rankings for your target keywords.'
        : 'Logra posicionamiento top en motores de búsqueda para tus palabras clave objetivo.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: language === 'en' ? '85% Lead Quality' : '85% Calidad de Leads',
      description: language === 'en'
        ? 'Attract high-quality leads through targeted SEO strategies.'
        : 'Atrae leads de alta calidad a través de estrategias SEO dirigidas.'
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
              {language === 'en' ? 'SEO & SMM Services' : 'Servicios SEO y SMM'}
            </span>
            <span className="block mt-4 text-3xl md:text-4xl">
              {language === 'en' ? 'Optimize Your Online Presence' : 'Optimiza tu Presencia Online'}
            </span>
          </h1>
          <p className="text-xl text-white/70 mb-8">
            {language === 'en'
              ? 'Optimize your online presence and social media strategy to reach more customers and grow your business.'
              : 'Optimiza tu presencia online y estrategia en redes sociales para alcanzar más clientes y hacer crecer tu negocio.'}
          </p>
          <a
            href="https://wa.me/573228391374"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-button px-8 py-3 rounded-full text-white font-medium text-lg inline-block"
          >
            {language === 'en' ? 'Boost Your Visibility' : 'Aumenta tu Visibilidad'}
          </a>
        </div>

        {/* Features Section */}
        <div className="mb-32">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {language === 'en' ? 'Complete SEO & Social Media Strategy' : 'Estrategia Completa de SEO y Redes Sociales'}
            </h2>
            <p className="text-lg text-white/70">
              {language === 'en'
                ? 'Comprehensive optimization strategies to improve your search rankings and social media presence.'
                : 'Estrategias de optimización comprehensivas para mejorar tu posicionamiento en búsquedas y presencia en redes sociales.'}
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
              {language === 'en' ? 'SEO Results' : 'Resultados SEO'}
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
            {language === 'en' ? 'Ready to Dominate Search Results?' : '¿Listo para Dominar los Resultados de Búsqueda?'}
          </h2>
          <p className="text-lg text-white/70 mb-8">
            {language === 'en'
              ? 'Improve your search rankings and social media presence with our proven optimization strategies.'
              : 'Mejora tu posicionamiento en búsquedas y presencia en redes sociales con nuestras estrategias de optimización probadas.'}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/573228391374"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-button px-8 py-3 rounded-full text-white font-medium text-lg inline-flex items-center justify-center"
            >
              {language === 'en' ? 'Start SEO Campaign' : 'Comenzar Campaña SEO'}
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="https://wa.me/573228391374"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full text-white font-medium text-lg border border-white/20 hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center"
            >
              {language === 'en' ? 'Schedule SEO Audit' : 'Agendar Auditoría SEO'}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SEOServices;
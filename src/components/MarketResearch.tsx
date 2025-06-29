import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  Search, 
  BarChart3, 
  Target, 
  TrendingUp, 
  Users, 
  Eye, 
  CheckCircle, 
  ArrowRight,
  Lightbulb,
  Database,
  PieChart,
  Zap
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

const MarketResearch: React.FC = () => {
  const { language } = useLanguage();

  const features = [
    {
      icon: <Search className="w-6 h-6" />,
      title: language === 'en' ? 'Market Analysis' : 'Análisis de Mercado',
      description: language === 'en' 
        ? 'Deep market research and competitive analysis to position your business effectively.'
        : 'Investigación profunda del mercado y análisis competitivo para posicionar tu negocio efectivamente.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: language === 'en' ? 'Consumer Behavior' : 'Comportamiento del Consumidor',
      description: language === 'en'
        ? 'Understanding customer preferences, buying patterns, and decision-making processes.'
        : 'Comprensión de preferencias del cliente, patrones de compra y procesos de toma de decisiones.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: language === 'en' ? 'Target Audience' : 'Audiencia Objetivo',
      description: language === 'en'
        ? 'Identify and define your ideal customer segments for targeted marketing strategies.'
        : 'Identifica y define tus segmentos de clientes ideales para estrategias de marketing dirigidas.'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: language === 'en' ? 'Market Trends' : 'Tendencias de Mercado',
      description: language === 'en'
        ? 'Stay ahead with insights on emerging trends and market opportunities.'
        : 'Mantente adelante con insights sobre tendencias emergentes y oportunidades de mercado.'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: language === 'en' ? 'Data Analytics' : 'Análisis de Datos',
      description: language === 'en'
        ? 'Advanced data analysis and statistical modeling for actionable insights.'
        : 'Análisis avanzado de datos y modelado estadístico para insights accionables.'
    },
    {
      icon: <PieChart className="w-6 h-6" />,
      title: language === 'en' ? 'Market Sizing' : 'Dimensionamiento de Mercado',
      description: language === 'en'
        ? 'Accurate market size estimation and growth potential assessment.'
        : 'Estimación precisa del tamaño del mercado y evaluación del potencial de crecimiento.'
    }
  ];

  const benefits = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: language === 'en' ? 'Strategic Insights' : 'Insights Estratégicos',
      description: language === 'en'
        ? 'Make informed decisions with comprehensive market intelligence.'
        : 'Toma decisiones informadas con inteligencia de mercado comprehensiva.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: language === 'en' ? 'Competitive Advantage' : 'Ventaja Competitiva',
      description: language === 'en'
        ? 'Gain competitive edge with deep market understanding.'
        : 'Obtén ventaja competitiva con comprensión profunda del mercado.'
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: language === 'en' ? 'Risk Mitigation' : 'Mitigación de Riesgos',
      description: language === 'en'
        ? 'Reduce business risks with data-driven market insights.'
        : 'Reduce riesgos de negocio con insights de mercado basados en datos.'
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
              {language === 'en' ? 'Market Research' : 'Investigación de Mercado'}
            </span>
            <span className="block mt-4 text-3xl md:text-4xl">
              {language === 'en' ? 'Strategic Business Intelligence' : 'Inteligencia Estratégica de Negocio'}
            </span>
          </h1>
          <p className="text-xl text-white/70 mb-8">
            {language === 'en'
              ? 'Deep market analysis and competitive intelligence to position your business for success.'
              : 'Análisis profundo del mercado e inteligencia competitiva para posicionar tu negocio para el éxito.'}
          </p>
          <a
            href="https://wa.me/573228391374"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-button px-8 py-3 rounded-full text-white font-medium text-lg inline-block"
          >
            {language === 'en' ? 'Start Market Research' : 'Comenzar Investigación'}
          </a>
        </div>

        {/* Features Section */}
        <div className="mb-32">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {language === 'en' ? 'Comprehensive Market Intelligence' : 'Inteligencia de Mercado Comprehensiva'}
            </h2>
            <p className="text-lg text-white/70">
              {language === 'en'
                ? 'Get deep insights into your market, competitors, and customers to make strategic decisions.'
                : 'Obtén insights profundos sobre tu mercado, competidores y clientes para tomar decisiones estratégicas.'}
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
              {language === 'en' ? 'Research Impact' : 'Impacto de la Investigación'}
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
            {language === 'en' ? 'Ready to Understand Your Market?' : '¿Listo para Entender tu Mercado?'}
          </h2>
          <p className="text-lg text-white/70 mb-8">
            {language === 'en'
              ? 'Get comprehensive market research that drives strategic business decisions.'
              : 'Obtén investigación de mercado comprehensiva que impulse decisiones estratégicas de negocio.'}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/573228391374"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-button px-8 py-3 rounded-full text-white font-medium text-lg inline-flex items-center justify-center"
            >
              {language === 'en' ? 'Start Research Project' : 'Comenzar Proyecto de Investigación'}
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

export default MarketResearch;
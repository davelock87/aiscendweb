import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  BarChart3, 
  PieChart, 
  TrendingUp, 
  Activity, 
  Database, 
  Eye, 
  Zap, 
  Bot,
  CheckCircle,
  ArrowRight,
  LineChart,
  Target,
  Brain,
  Clock
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

const AnalyticsReports: React.FC = () => {
  const { language } = useLanguage();

  const features = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: language === 'en' ? 'Custom Dashboards' : 'Dashboards Personalizados',
      description: language === 'en' 
        ? 'Create personalized dashboards with real-time KPIs and interactive visualizations.'
        : 'Crea dashboards personalizados con KPIs en tiempo real y visualizaciones interactivas.'
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: language === 'en' ? 'AI-Powered Insights' : 'Insights con IA',
      description: language === 'en'
        ? 'Get intelligent recommendations and predictive analytics powered by machine learning.'
        : 'Obtén recomendaciones inteligentes y análisis predictivo impulsado por machine learning.'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: language === 'en' ? 'Automated Reports' : 'Reportes Automatizados',
      description: language === 'en'
        ? 'Schedule and distribute automated reports to stakeholders with customizable formats.'
        : 'Programa y distribuye reportes automatizados a stakeholders con formatos personalizables.'
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: language === 'en' ? 'Data Integration' : 'Integración de Datos',
      description: language === 'en'
        ? 'Connect multiple data sources and create unified analytics across all platforms.'
        : 'Conecta múltiples fuentes de datos y crea análisis unificados en todas las plataformas.'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: language === 'en' ? 'Performance Tracking' : 'Seguimiento de Rendimiento',
      description: language === 'en'
        ? 'Monitor business performance with advanced metrics and trend analysis.'
        : 'Monitorea el rendimiento del negocio con métricas avanzadas y análisis de tendencias.'
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: language === 'en' ? 'Real-time Monitoring' : 'Monitoreo en Tiempo Real',
      description: language === 'en'
        ? 'Track business metrics in real-time with alerts and notifications.'
        : 'Rastrea métricas de negocio en tiempo real con alertas y notificaciones.'
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: language === 'en' ? '90% Faster Insights' : '90% Insights Más Rápidos',
      description: language === 'en'
        ? 'Get business insights in minutes instead of hours with automated analytics.'
        : 'Obtén insights de negocio en minutos en lugar de horas con análisis automatizado.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: language === 'en' ? '95% Data Accuracy' : '95% Precisión de Datos',
      description: language === 'en'
        ? 'Ensure data integrity with automated validation and error detection.'
        : 'Asegura la integridad de datos con validación automatizada y detección de errores.'
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: language === 'en' ? '100% Visibility' : '100% Visibilidad',
      description: language === 'en'
        ? 'Get complete visibility into your business operations with comprehensive reporting.'
        : 'Obtén visibilidad completa de las operaciones de tu negocio con reportes comprehensivos.'
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
              {language === 'en' ? 'Analytics & Reports' : 'Análisis y Reportes'}
            </span>
            <span className="block mt-4 text-3xl md:text-4xl">
              {language === 'en' ? 'Data-Driven Intelligence' : 'Inteligencia Basada en Datos'}
            </span>
          </h1>
          <p className="text-xl text-white/70 mb-8">
            {language === 'en'
              ? 'Transform your data into actionable insights with personalized dashboards and automated reporting.'
              : 'Transforma tus datos en insights accionables con dashboards personalizados y reportes automatizados.'}
          </p>
          <a
            href="https://wa.me/573228391374"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-button px-8 py-3 rounded-full text-white font-medium text-lg inline-block"
          >
            {language === 'en' ? 'Unlock Your Data' : 'Desbloquea tus Datos'}
          </a>
        </div>

        {/* Features Section */}
        <div className="mb-32">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {language === 'en' ? 'Complete Analytics Platform' : 'Plataforma de Análisis Completa'}
            </h2>
            <p className="text-lg text-white/70">
              {language === 'en'
                ? 'From data collection to actionable insights, get everything you need for data-driven decisions.'
                : 'Desde recolección de datos hasta insights accionables, obtén todo lo que necesitas para decisiones basadas en datos.'}
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
              {language === 'en' ? 'Business Intelligence Impact' : 'Impacto de Inteligencia de Negocio'}
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
            {language === 'en' ? 'Ready to Make Data-Driven Decisions?' : '¿Listo para Tomar Decisiones Basadas en Datos?'}
          </h2>
          <p className="text-lg text-white/70 mb-8">
            {language === 'en'
              ? 'Join organizations that have improved decision-making speed by 90% with our analytics platform.'
              : 'Únete a organizaciones que han mejorado la velocidad de toma de decisiones en 90% con nuestra plataforma de análisis.'}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/573228391374"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-button px-8 py-3 rounded-full text-white font-medium text-lg inline-flex items-center justify-center"
            >
              {language === 'en' ? 'Start Free Trial' : 'Comenzar Prueba Gratuita'}
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

export default AnalyticsReports;
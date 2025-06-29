import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  Target, 
  Users, 
  Mail, 
  TrendingUp, 
  MessageSquare, 
  BarChart, 
  Zap, 
  Bot,
  CheckCircle,
  ArrowRight,
  Phone,
  Calendar,
  Database,
  Megaphone
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

const SalesMarketing: React.FC = () => {
  const { language } = useLanguage();

  const features = [
    {
      icon: <Database className="w-6 h-6" />,
      title: language === 'en' ? 'CRM Integration' : 'Integración CRM',
      description: language === 'en' 
        ? 'Centralized customer data management with automated lead scoring and pipeline tracking.'
        : 'Gestión centralizada de datos de clientes con puntuación automática de leads y seguimiento de pipeline.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: language === 'en' ? 'Lead Generation' : 'Generación de Leads',
      description: language === 'en'
        ? 'AI-powered lead identification, qualification, and automated nurturing campaigns.'
        : 'Identificación de leads con IA, calificación y campañas de nutrición automatizadas.'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: language === 'en' ? 'Email Automation' : 'Automatización de Email',
      description: language === 'en'
        ? 'Personalized email sequences, A/B testing, and performance optimization.'
        : 'Secuencias de email personalizadas, pruebas A/B y optimización de rendimiento.'
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: language === 'en' ? 'Campaign Management' : 'Gestión de Campañas',
      description: language === 'en'
        ? 'Multi-channel campaign orchestration with automated scheduling and optimization.'
        : 'Orquestación de campañas multicanal con programación y optimización automatizadas.'
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: language === 'en' ? 'Analytics & Reporting' : 'Análisis y Reportes',
      description: language === 'en'
        ? 'Real-time performance dashboards, ROI tracking, and predictive analytics.'
        : 'Dashboards de rendimiento en tiempo real, seguimiento de ROI y análisis predictivo.'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: language === 'en' ? 'Sales Automation' : 'Automatización de Ventas',
      description: language === 'en'
        ? 'Automated follow-ups, proposal generation, and deal closing workflows.'
        : 'Seguimientos automatizados, generación de propuestas y flujos de trabajo de cierre de ventas.'
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: language === 'en' ? '300% Lead Increase' : '300% Aumento de Leads',
      description: language === 'en'
        ? 'Generate and qualify more leads with intelligent automation.'
        : 'Genera y califica más leads con automatización inteligente.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: language === 'en' ? '50% Faster Sales Cycle' : '50% Ciclo de Ventas Más Rápido',
      description: language === 'en'
        ? 'Accelerate deal closure with automated workflows and follow-ups.'
        : 'Acelera el cierre de ventas con flujos de trabajo automatizados y seguimientos.'
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: language === 'en' ? '85% Higher Conversion' : '85% Mayor Conversión',
      description: language === 'en'
        ? 'Improve conversion rates with personalized, data-driven campaigns.'
        : 'Mejora las tasas de conversión con campañas personalizadas basadas en datos.'
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
              {language === 'en' ? 'Sales & Marketing' : 'Ventas y Marketing'}
            </span>
            <span className="block mt-4 text-3xl md:text-4xl">
              {language === 'en' ? 'Intelligent Growth Engine' : 'Motor de Crecimiento Inteligente'}
            </span>
          </h1>
          <p className="text-xl text-white/70 mb-8">
            {language === 'en'
              ? 'Integrate CRM, automate lead generation, and optimize marketing campaigns with AI-powered solutions.'
              : 'Integra CRM, automatiza generación de leads y optimiza campañas de marketing con soluciones impulsadas por IA.'}
          </p>
          <a
            href="https://wa.me/573228391374"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-button px-8 py-3 rounded-full text-white font-medium text-lg inline-block"
          >
            {language === 'en' ? 'Accelerate Your Growth' : 'Acelera tu Crecimiento'}
          </a>
        </div>

        {/* Features Section */}
        <div className="mb-32">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {language === 'en' ? 'Complete Sales & Marketing Suite' : 'Suite Completa de Ventas y Marketing'}
            </h2>
            <p className="text-lg text-white/70">
              {language === 'en'
                ? 'From lead generation to deal closure, automate your entire sales and marketing funnel.'
                : 'Desde generación de leads hasta cierre de ventas, automatiza todo tu embudo de ventas y marketing.'}
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
              {language === 'en' ? 'Growth Results' : 'Resultados de Crecimiento'}
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
            {language === 'en' ? 'Ready to Scale Your Sales?' : '¿Listo para Escalar tus Ventas?'}
          </h2>
          <p className="text-lg text-white/70 mb-8">
            {language === 'en'
              ? 'Join companies that have tripled their lead generation with our automation platform.'
              : 'Únete a empresas que han triplicado su generación de leads con nuestra plataforma de automatización.'}
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

export default SalesMarketing;
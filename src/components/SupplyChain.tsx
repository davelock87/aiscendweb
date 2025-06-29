import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  Package, 
  Truck, 
  BarChart3, 
  MapPin, 
  Clock, 
  TrendingUp, 
  CheckCircle, 
  Bot,
  ArrowRight,
  Warehouse,
  ShoppingCart,
  AlertTriangle,
  Zap,
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

const SupplyChain: React.FC = () => {
  const { language } = useLanguage();

  const features = [
    {
      icon: <Warehouse className="w-6 h-6" />,
      title: language === 'en' ? 'Inventory Management' : 'Gestión de Inventario',
      description: language === 'en' 
        ? 'Automated inventory tracking, stock optimization, and reorder point management.'
        : 'Seguimiento automatizado de inventario, optimización de stock y gestión de puntos de reorden.'
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: language === 'en' ? 'Logistics Automation' : 'Automatización Logística',
      description: language === 'en'
        ? 'Streamlined shipping, delivery tracking, and route optimization with real-time updates.'
        : 'Envío optimizado, seguimiento de entregas y optimización de rutas con actualizaciones en tiempo real.'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: language === 'en' ? 'Supply Chain Visibility' : 'Visibilidad de Cadena de Suministro',
      description: language === 'en'
        ? 'End-to-end visibility across your entire supply chain with real-time monitoring.'
        : 'Visibilidad de extremo a extremo en toda tu cadena de suministro con monitoreo en tiempo real.'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: language === 'en' ? 'Demand Forecasting' : 'Pronóstico de Demanda',
      description: language === 'en'
        ? 'AI-powered demand prediction to optimize inventory levels and reduce costs.'
        : 'Predicción de demanda impulsada por IA para optimizar niveles de inventario y reducir costos.'
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: language === 'en' ? 'Risk Management' : 'Gestión de Riesgos',
      description: language === 'en'
        ? 'Proactive risk identification and mitigation strategies for supply chain disruptions.'
        : 'Identificación proactiva de riesgos y estrategias de mitigación para interrupciones de la cadena de suministro.'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: language === 'en' ? 'Performance Analytics' : 'Análisis de Rendimiento',
      description: language === 'en'
        ? 'Comprehensive analytics on supplier performance, delivery times, and cost optimization.'
        : 'Análisis comprehensivo del rendimiento de proveedores, tiempos de entrega y optimización de costos.'
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: language === 'en' ? '40% Cost Reduction' : '40% Reducción de Costos',
      description: language === 'en'
        ? 'Optimize inventory levels and reduce operational costs with intelligent automation.'
        : 'Optimiza niveles de inventario y reduce costos operacionales con automatización inteligente.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: language === 'en' ? '99% Order Accuracy' : '99% Precisión de Pedidos',
      description: language === 'en'
        ? 'Ensure accurate order fulfillment with automated tracking and validation.'
        : 'Asegura cumplimiento preciso de pedidos con seguimiento y validación automatizados.'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: language === 'en' ? '60% Faster Delivery' : '60% Entrega Más Rápida',
      description: language === 'en'
        ? 'Accelerate delivery times with optimized logistics and automated workflows.'
        : 'Acelera tiempos de entrega con logística optimizada y flujos de trabajo automatizados.'
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
              {language === 'en' ? 'Supply Chain' : 'Cadena de Suministro'}
            </span>
            <span className="block mt-4 text-3xl md:text-4xl">
              {language === 'en' ? 'Intelligent Logistics Automation' : 'Automatización Logística Inteligente'}
            </span>
          </h1>
          <p className="text-xl text-white/70 mb-8">
            {language === 'en'
              ? 'Optimize inventory management and automate logistics with AI-powered supply chain solutions.'
              : 'Optimiza gestión de inventario y automatiza logística con soluciones de cadena de suministro impulsadas por IA.'}
          </p>
          <a
            href="https://wa.me/573228391374"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-button px-8 py-3 rounded-full text-white font-medium text-lg inline-block"
          >
            {language === 'en' ? 'Optimize Your Supply Chain' : 'Optimiza tu Cadena de Suministro'}
          </a>
        </div>

        {/* Features Section */}
        <div className="mb-32">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {language === 'en' ? 'Complete Supply Chain Solution' : 'Solución Completa de Cadena de Suministro'}
            </h2>
            <p className="text-lg text-white/70">
              {language === 'en'
                ? 'From inventory management to delivery optimization, automate every aspect of your supply chain.'
                : 'Desde gestión de inventario hasta optimización de entregas, automatiza cada aspecto de tu cadena de suministro.'}
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
              {language === 'en' ? 'Supply Chain Excellence' : 'Excelencia en Cadena de Suministro'}
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
            {language === 'en' ? 'Ready to Transform Your Supply Chain?' : '¿Listo para Transformar tu Cadena de Suministro?'}
          </h2>
          <p className="text-lg text-white/70 mb-8">
            {language === 'en'
              ? 'Join companies that have reduced supply chain costs by 40% with our automation platform.'
              : 'Únete a empresas que han reducido costos de cadena de suministro en 40% con nuestra plataforma de automatización.'}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/573228391374"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-button px-8 py-3 rounded-full text-white font-medium text-lg inline-flex items-center justify-center"
            >
              {language === 'en' ? 'Start Optimization' : 'Comenzar Optimización'}
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

export default SupplyChain;
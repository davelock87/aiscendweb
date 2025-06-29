import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  Brain, 
  Bot, 
  TrendingUp, 
  Eye, 
  Zap, 
  Target, 
  CheckCircle, 
  ArrowRight,
  Database,
  Lightbulb,
  BarChart3,
  Cpu,
  Sparkles,
  Activity
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

const AIMLAutomation: React.FC = () => {
  const { language } = useLanguage();

  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: language === 'en' ? 'Intelligent Automation' : 'Automatización Inteligente',
      description: language === 'en' 
        ? 'AI-powered workflows that learn and adapt to optimize business processes automatically.'
        : 'Flujos de trabajo impulsados por IA que aprenden y se adaptan para optimizar procesos de negocio automáticamente.'
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: language === 'en' ? 'Predictive Analytics' : 'Análisis Predictivo',
      description: language === 'en'
        ? 'Machine learning models that predict trends, customer behavior, and business outcomes.'
        : 'Modelos de machine learning que predicen tendencias, comportamiento del cliente y resultados de negocio.'
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: language === 'en' ? 'Smart Recommendations' : 'Recomendaciones Inteligentes',
      description: language === 'en'
        ? 'AI-driven insights and recommendations to optimize operations and decision-making.'
        : 'Insights y recomendaciones impulsados por IA para optimizar operaciones y toma de decisiones.'
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: language === 'en' ? 'Natural Language Processing' : 'Procesamiento de Lenguaje Natural',
      description: language === 'en'
        ? 'Advanced NLP for document analysis, sentiment analysis, and automated content generation.'
        : 'NLP avanzado para análisis de documentos, análisis de sentimientos y generación automatizada de contenido.'
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: language === 'en' ? 'Pattern Recognition' : 'Reconocimiento de Patrones',
      description: language === 'en'
        ? 'Identify hidden patterns in data to uncover opportunities and optimize performance.'
        : 'Identifica patrones ocultos en datos para descubrir oportunidades y optimizar rendimiento.'
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: language === 'en' ? 'Real-time Learning' : 'Aprendizaje en Tiempo Real',
      description: language === 'en'
        ? 'Continuous learning algorithms that improve performance based on new data and feedback.'
        : 'Algoritmos de aprendizaje continuo que mejoran el rendimiento basado en nuevos datos y retroalimentación.'
    }
  ];

  const benefits = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: language === 'en' ? '5x Smarter Decisions' : '5x Decisiones Más Inteligentes',
      description: language === 'en'
        ? 'Make data-driven decisions with AI-powered insights and predictions.'
        : 'Toma decisiones basadas en datos con insights y predicciones impulsados por IA.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: language === 'en' ? '70% Process Optimization' : '70% Optimización de Procesos',
      description: language === 'en'
        ? 'Optimize business processes automatically with intelligent automation.'
        : 'Optimiza procesos de negocio automáticamente con automatización inteligente.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: language === 'en' ? '95% Accuracy' : '95% Precisión',
      description: language === 'en'
        ? 'Achieve high accuracy in predictions and automated decision-making.'
        : 'Logra alta precisión en predicciones y toma de decisiones automatizada.'
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
              {language === 'en' ? 'AI & Machine Learning' : 'IA y Machine Learning'}
            </span>
            <span className="block mt-4 text-3xl md:text-4xl">
              {language === 'en' ? 'Intelligent Business Automation' : 'Automatización Inteligente de Negocio'}
            </span>
          </h1>
          <p className="text-xl text-white/70 mb-8">
            {language === 'en'
              ? 'Transform your business with AI-powered automation, predictive analytics, and intelligent decision-making.'
              : 'Transforma tu negocio con automatización impulsada por IA, análisis predictivo y toma de decisiones inteligente.'}
          </p>
          <a
            href="https://wa.me/573228391374"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-button px-8 py-3 rounded-full text-white font-medium text-lg inline-block"
          >
            {language === 'en' ? 'Unleash AI Power' : 'Libera el Poder de la IA'}
          </a>
        </div>

        {/* Features Section */}
        <div className="mb-32">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {language === 'en' ? 'Advanced AI Capabilities' : 'Capacidades Avanzadas de IA'}
            </h2>
            <p className="text-lg text-white/70">
              {language === 'en'
                ? 'Leverage cutting-edge AI and machine learning technologies to automate and optimize your business.'
                : 'Aprovecha tecnologías de IA y machine learning de vanguardia para automatizar y optimizar tu negocio.'}
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
              {language === 'en' ? 'AI-Driven Results' : 'Resultados Impulsados por IA'}
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
            {language === 'en' ? 'Ready to Transform with AI?' : '¿Listo para Transformar con IA?'}
          </h2>
          <p className="text-lg text-white/70 mb-8">
            {language === 'en'
              ? 'Join forward-thinking companies that are leveraging AI to gain competitive advantages.'
              : 'Únete a empresas visionarias que están aprovechando la IA para obtener ventajas competitivas.'}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/573228391374"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-button px-8 py-3 rounded-full text-white font-medium text-lg inline-flex items-center justify-center"
            >
              {language === 'en' ? 'Start AI Journey' : 'Comenzar Viaje de IA'}
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

export default AIMLAutomation;
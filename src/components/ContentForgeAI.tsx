import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  PenTool, 
  Target, 
  Zap, 
  Search, 
  FileText, 
  TrendingUp, 
  Clock, 
  DollarSign,
  Brain,
  Lightbulb,
  BarChart3,
  MessageSquare,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Users,
  Globe
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

interface ProblemCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ProblemCard: React.FC<ProblemCardProps> = ({ icon, title, description }) => (
  <div className="bg-red-900/20 border border-red-500/30 p-6 rounded-xl">
    <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-4">
      <div className="text-red-400">{icon}</div>
    </div>
    <h3 className="text-lg font-semibold mb-2 text-red-300">{title}</h3>
    <p className="text-red-200/70">{description}</p>
  </div>
);

interface SolutionStepProps {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const SolutionStep: React.FC<SolutionStepProps> = ({ number, title, description, icon }) => (
  <div className="relative">
    <div className="flex items-start">
      <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold text-xl mr-6">
        {number}
      </div>
      <div className="flex-1">
        <div className="flex items-center mb-3">
          <div className="gradient-icon mr-3">{icon}</div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-white/70">{description}</p>
      </div>
    </div>
  </div>
);

const ContentForgeAI: React.FC = () => {
  const { language } = useLanguage();

  const problems = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: language === 'en' ? 'Lack of Time and Resources' : 'Falta de Tiempo y Recursos',
      description: language === 'en' 
        ? 'Small businesses don\'t have large content teams or budgets for agencies.'
        : 'Las PyMES no tienen equipos de contenido grandes ni presupuestos para agencias.'
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: language === 'en' ? 'Creative Block' : 'Bloqueo Creativo',
      description: language === 'en'
        ? 'Struggling to consistently generate fresh and relevant ideas.'
        : 'Les cuesta generar ideas frescas y relevantes consistentemente.'
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: language === 'en' ? 'Complex SEO Optimization' : 'Optimización SEO Compleja',
      description: language === 'en'
        ? 'Understanding and implementing SEO best practices is overwhelming.'
        : 'Entender e implementar las mejores prácticas de SEO es abrumador.'
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: language === 'en' ? 'High Cost of Writers' : 'Costo Elevado de Redactores',
      description: language === 'en'
        ? 'Hiring quality freelance writers can be expensive.'
        : 'Contratar redactores freelance de calidad puede ser caro.'
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: language === 'en' ? 'Generic Content' : 'Contenido Genérico',
      description: language === 'en'
        ? 'Many existing AI tools produce content that sounds robotic or unoriginal.'
        : 'Muchas herramientas de IA existentes producen contenido que suena robótico o poco original.'
    }
  ];

  const solutionSteps = [
    {
      number: '1',
      icon: <Target className="w-6 h-6" />,
      title: language === 'en' ? 'Keyword & Topic Analysis' : 'Análisis de Palabras Clave y Temas',
      description: language === 'en'
        ? 'Input target keywords and brief topic description. AI researches search intent and related trending topics.'
        : 'Introduce palabras clave objetivo y una breve descripción del tema. La IA investiga la intención de búsqueda y los temas relacionados más populares.'
    },
    {
      number: '2',
      icon: <FileText className="w-6 h-6" />,
      title: language === 'en' ? 'Detailed Outline Generation' : 'Generación de Esquemas Detallados',
      description: language === 'en'
        ? 'Before writing, AI proposes blog, social media, or email outlines with titles, subtitles, and key points, ensuring structure and SEO coverage.'
        : 'Antes de escribir, la IA propone un esquema de blog, post de redes o email con títulos, subtítulos y puntos clave, garantizando estructura y cobertura SEO.'
    },
    {
      number: '3',
      icon: <PenTool className="w-6 h-6" />,
      title: language === 'en' ? 'Original & Personalized Content Creation' : 'Creación de Contenido Original y Personalizado',
      description: language === 'en'
        ? 'Generates natural, coherent text drafts optimized for keywords, focusing on user-defined brand voice.'
        : 'Genera borradores de texto que suenan naturales, coherentes y están optimizados para las palabras clave, pero con un enfoque en la voz de marca del usuario.'
    },
    {
      number: '4',
      icon: <Globe className="w-6 h-6" />,
      title: language === 'en' ? 'Variants & Adaptations' : 'Variantes y Adaptaciones',
      description: language === 'en'
        ? 'Offers multiple content versions and automatically adapts for different platforms (blog, Instagram, LinkedIn, email).'
        : 'Ofrece múltiples versiones del contenido y lo adapta automáticamente para diferentes plataformas (blog, Instagram, LinkedIn, email).'
    },
    {
      number: '5',
      icon: <BarChart3 className="w-6 h-6" />,
      title: language === 'en' ? 'Real-time SEO & Readability Analysis' : 'Análisis de Legibilidad y SEO en Tiempo Real',
      description: language === 'en'
        ? 'While content is generated, provides suggestions to improve readability and keyword density, enhancing SEO quality.'
        : 'Mientras el contenido se genera, proporciona sugerencias para mejorar la legibilidad y la densidad de palabras clave, elevando la calidad SEO.'
    },
    {
      number: '6',
      icon: <MessageSquare className="w-6 h-6" />,
      title: language === 'en' ? 'Smart CTA Suggestions' : 'Sugerencias de CTA Inteligentes',
      description: language === 'en'
        ? 'AI suggests relevant call-to-actions for the content and user objectives.'
        : 'La IA puede sugerir CTAs relevantes para el contenido y el objetivo del usuario.'
    }
  ];

  const features = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: language === 'en' ? 'Contextual AI Generation' : 'Generación de IA Contextual',
      description: language === 'en'
        ? 'Advanced AI that understands context, brand voice, and target audience for personalized content.'
        : 'IA avanzada que entiende el contexto, la voz de marca y la audiencia objetivo para contenido personalizado.'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: language === 'en' ? 'SEO Optimization' : 'Optimización SEO',
      description: language === 'en'
        ? 'Built-in SEO analysis and optimization to ensure your content ranks higher in search results.'
        : 'Análisis y optimización SEO integrados para asegurar que tu contenido se posicione mejor en los resultados de búsqueda.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: language === 'en' ? 'Multi-Platform Adaptation' : 'Adaptación Multi-Plataforma',
      description: language === 'en'
        ? 'Automatically adapts content for different social media platforms and marketing channels.'
        : 'Adapta automáticamente el contenido para diferentes plataformas de redes sociales y canales de marketing.'
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: language === 'en' ? 'Creative Ideation' : 'Ideación Creativa',
      description: language === 'en'
        ? 'Never run out of ideas with AI-powered content suggestions and trending topic analysis.'
        : 'Nunca te quedes sin ideas con sugerencias de contenido impulsadas por IA y análisis de temas trending.'
    }
  ];

  return (
    <div className="relative min-h-screen">
      <Particles />
      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto pt-32 pb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {language === 'en' ? 'AI-Powered' : 'Fábrica de'}
            <span className="gradient-text block mt-4">
              {language === 'en' ? 'Content Factory' : 'Contenido SEO'}
            </span>
            <span className="text-2xl md:text-3xl block mt-4 text-white/80">
              {language === 'en' ? 'SEO & Marketing Revolution' : 'y Marketing con IA'}
            </span>
          </h1>
          <p className="text-xl text-white/70 mb-8">
            {language === 'en'
              ? 'Transform your content creation with our hyper-segmented, contextual AI that generates original, SEO-optimized content for SMEs and freelancers.'
              : 'Transforma tu creación de contenido con nuestra IA hiper-segmentada y contextual que genera contenido original y optimizado para SEO para PyMES y freelancers.'}
          </p>
          <a
            href="https://wa.me/573228391374"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-button px-8 py-3 rounded-full text-white font-medium text-lg inline-block"
          >
            {language === 'en' ? 'Start Creating Content' : 'Comenzar a Crear Contenido'}
          </a>
        </div>

        {/* Problems Section */}
        <div className="mb-32">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {language === 'en' ? 'The Problems We Solve' : 'Los Problemas que Resolvemos'}
            </h2>
            <p className="text-lg text-white/70">
              {language === 'en'
                ? 'SMEs and freelancers often struggle with content creation challenges that limit their growth.'
                : 'Las PyMES y freelancers a menudo luchan con desafíos de creación de contenido que limitan su crecimiento.'}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((problem, index) => (
              <ProblemCard key={index} {...problem} />
            ))}
          </div>
        </div>

        {/* Solution Section */}
        <div className="mb-32">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {language === 'en' ? 'Our AI Solution' : 'Nuestra Solución con IA'}
              <span className="gradient-text block mt-2">
                {language === 'en' ? 'Content Forge AI' : 'Content Forge AI'}
              </span>
            </h2>
            <p className="text-lg text-white/70">
              {language === 'en'
                ? 'Our "Contextual & Hyper-Segmented Content Generator" doesn\'t just generate text - it creates intelligent, brand-aligned content.'
                : 'Nuestro "Generador de Contenido Contextual e Hiper-Segmentado" no solo genera texto - crea contenido inteligente y alineado con la marca.'}
            </p>
          </div>
          <div className="space-y-12">
            {solutionSteps.map((step, index) => (
              <SolutionStep key={index} {...step} />
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-32">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {language === 'en' ? 'Killer Features' : 'Características Principales'}
            </h2>
            <p className="text-lg text-white/70">
              {language === 'en'
                ? 'Advanced AI capabilities that set us apart from generic content tools.'
                : 'Capacidades avanzadas de IA que nos distinguen de las herramientas de contenido genéricas.'}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-dark-400 rounded-2xl p-8 mb-32">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">
              {language === 'en' ? 'Why Choose Content Forge AI?' : '¿Por Qué Elegir Content Forge AI?'}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 gradient-icon" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {language === 'en' ? '10x Faster' : '10x Más Rápido'}
              </h3>
              <p className="text-white/70">
                {language === 'en'
                  ? 'Generate high-quality content in minutes, not hours.'
                  : 'Genera contenido de alta calidad en minutos, no en horas.'}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 gradient-icon" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {language === 'en' ? '80% Cost Reduction' : '80% Reducción de Costos'}
              </h3>
              <p className="text-white/70">
                {language === 'en'
                  ? 'Save thousands on content creation and freelance writers.'
                  : 'Ahorra miles en creación de contenido y redactores freelance.'}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 gradient-icon" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {language === 'en' ? 'SEO Optimized' : 'Optimizado para SEO'}
              </h3>
              <p className="text-white/70">
                {language === 'en'
                  ? 'Every piece of content is optimized for search engines.'
                  : 'Cada pieza de contenido está optimizada para motores de búsqueda.'}
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-dark-400 rounded-2xl p-8 text-center mb-20">
          <h2 className="text-3xl font-bold mb-6">
            {language === 'en' ? 'Ready to Transform Your Content Strategy?' : '¿Listo para Transformar tu Estrategia de Contenido?'}
          </h2>
          <p className="text-lg text-white/70 mb-8">
            {language === 'en'
              ? 'Join thousands of SMEs and freelancers who are already creating amazing content with AI.'
              : 'Únete a miles de PyMES y freelancers que ya están creando contenido increíble con IA.'}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/573228391374"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-button px-8 py-3 rounded-full text-white font-medium text-lg inline-flex items-center justify-center"
            >
              {language === 'en' ? 'Get Started Now' : 'Comenzar Ahora'}
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

export default ContentForgeAI;
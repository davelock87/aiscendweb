import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  ShoppingCart, 
  Target, 
  Zap, 
  Mail, 
  Eye, 
  TrendingUp, 
  Clock, 
  DollarSign,
  Brain,
  Users,
  BarChart3,
  MessageSquare,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Globe,
  Heart,
  Star,
  Layers,
  Settings,
  PieChart,
  Filter,
  Smartphone
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

const HyperTailorAI: React.FC = () => {
  const { language } = useLanguage();

  const problems = [
    {
      icon: <Target className="w-6 h-6" />,
      title: language === 'en' ? 'Generic Recommendations' : 'Recomendaciones Genéricas',
      description: language === 'en' 
        ? 'Product suggestions are basic or irrelevant, based on "what others bought" without deep customer understanding.'
        : 'Las sugerencias de productos suelen ser básicas o irrelevantes, basadas en "lo que otros compraron" sin un entendimiento profundo del cliente.'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: language === 'en' ? 'Impersonal Marketing Messages' : 'Mensajes de Marketing Impersonales',
      description: language === 'en'
        ? 'Emails, notifications, and ads that don\'t resonate with individual customer interests, leading to low open and click rates.'
        : 'Emails, notificaciones y anuncios que no resuenan con el interés individual de cada cliente, lo que lleva a bajas tasas de apertura y clics.'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: language === 'en' ? 'Lack of Real-time Optimization' : 'Falta de Optimización en Tiempo Real',
      description: language === 'en'
        ? 'No dynamic adaptation of offers or website content as customers navigate.'
        : 'No se adaptan dinámicamente las ofertas o el contenido del sitio web a medida que el cliente navega.'
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: language === 'en' ? 'High Personalization Costs' : 'Costos Elevados de Marketing Personalizado',
      description: language === 'en'
        ? 'Implementing large-scale personalization usually requires large teams or expensive software, inaccessible to SMEs.'
        : 'Implementar una estrategia de personalización a gran escala suele requerir equipos grandes o software muy costoso, inaccesible para las PyMES.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: language === 'en' ? 'Difficulty Identifying Potential Customers' : 'Dificultad para Identificar Clientes Potenciales',
      description: language === 'en'
        ? 'It\'s complicated to quickly recognize which customers are most likely to buy certain products or respond to certain offers.'
        : 'Es complicado reconocer rápidamente qué clientes tienen más probabilidades de comprar ciertos productos o responder a ciertas ofertas.'
    }
  ];

  const solutionSteps = [
    {
      number: '1',
      icon: <Brain className="w-6 h-6" />,
      title: language === 'en' ? 'Hyper-Personalized Product Recommendations' : 'Recomendaciones de Productos Hiper-Personalizadas',
      description: language === 'en'
        ? 'AI analyzes browsing and purchase history, viewed products, cart items, and demographics to suggest the most relevant products in real-time, including complementary or alternative products.'
        : 'La IA analiza el historial de navegación y compra del cliente, los productos vistos, los artículos en el carrito, e incluso datos demográficos para sugerir los productos más relevantes en tiempo real, incluyendo productos complementarios o alternativos.'
    },
    {
      number: '2',
      icon: <MessageSquare className="w-6 h-6" />,
      title: language === 'en' ? 'Personalized Marketing Content Generation' : 'Generación de Contenido de Marketing Personalizado',
      description: language === 'en'
        ? 'For email campaigns or push notifications, AI creates unique subject lines, email bodies, and offer messages for each segment or individual customer, adapted to their specific interests.'
        : 'Para campañas de email marketing o notificaciones push, la IA crea líneas de asunto, cuerpos de email y mensajes de ofertas únicos para cada segmento o incluso para cada cliente, adaptado al interés específico del cliente.'
    },
    {
      number: '3',
      icon: <Globe className="w-6 h-6" />,
      title: language === 'en' ? 'Dynamic Website Content' : 'Contenido Dinámico en el Sitio Web',
      description: language === 'en'
        ? 'AI suggests real-time changes to homepage, product pages, or banners, adapting them to visitor browsing behavior (e.g., showing products related to last search).'
        : 'La IA puede sugerir cambios en la homepage, páginas de productos o banners en tiempo real, adaptándolos al comportamiento de navegación del visitante (ej. mostrar productos relacionados con la última búsqueda).'
    },
    {
      number: '4',
      icon: <PieChart className="w-6 h-6" />,
      title: language === 'en' ? 'Behavioral Customer Segmentation' : 'Segmentación de Clientes por Comportamiento',
      description: language === 'en'
        ? 'AI automatically identifies customer segments with similar purchasing behaviors and preferences, facilitating more targeted marketing campaigns.'
        : 'La IA identifica automáticamente segmentos de clientes con comportamientos de compra y preferencias similares, facilitando campañas de marketing más dirigidas.'
    },
    {
      number: '5',
      icon: <Settings className="w-6 h-6" />,
      title: language === 'en' ? 'Smart Pricing & Discount Optimization' : 'Optimización de Precios y Descuentos Inteligentes',
      description: language === 'en'
        ? 'AI suggests specific discounts for certain customers to maximize conversion without sacrificing too much margin, based on their purchase probability.'
        : 'La IA podría sugerir descuentos específicos para ciertos clientes para maximizar la conversión sin sacrificar demasiado margen, basándose en su probabilidad de compra.'
    },
    {
      number: '6',
      icon: <BarChart3 className="w-6 h-6" />,
      title: language === 'en' ? 'Conversion & Performance Reports' : 'Reportes de Conversión y Rendimiento',
      description: language === 'en'
        ? 'Shows clearly how AI personalization is impacting conversion rates, average order value (AOV), and customer retention.'
        : 'Muestra claramente cómo la personalización de la IA está impactando las tasas de conversión, el valor promedio del pedido (AOV) y la retención de clientes.'
    }
  ];

  const features = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: language === 'en' ? 'Contextual Personalization Engine' : 'Motor de Personalización Contextual',
      description: language === 'en'
        ? 'Advanced AI that understands customer behavior, preferences, and intent for hyper-personalized experiences.'
        : 'IA avanzada que entiende el comportamiento, preferencias e intención del cliente para experiencias hiper-personalizadas.'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: language === 'en' ? 'Real-time Optimization' : 'Optimización en Tiempo Real',
      description: language === 'en'
        ? 'Dynamic content and offer adaptation based on customer behavior and browsing patterns.'
        : 'Adaptación dinámica de contenido y ofertas basada en el comportamiento del cliente y patrones de navegación.'
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: language === 'en' ? 'Multi-Channel Integration' : 'Integración Multi-Canal',
      description: language === 'en'
        ? 'Seamless personalization across website, email, mobile app, and social media platforms.'
        : 'Personalización perfecta en sitio web, email, aplicación móvil y plataformas de redes sociales.'
    },
    {
      icon: <Filter className="w-6 h-6" />,
      title: language === 'en' ? 'Smart Customer Segmentation' : 'Segmentación Inteligente de Clientes',
      description: language === 'en'
        ? 'Automatic identification of customer segments for targeted marketing campaigns and personalized experiences.'
        : 'Identificación automática de segmentos de clientes para campañas de marketing dirigidas y experiencias personalizadas.'
    }
  ];

  return (
    <div className="relative min-h-screen">
      <Particles />
      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto pt-32 pb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">HyperTailor AI</span>
            <span className="block mt-4 text-3xl md:text-4xl">
              {language === 'en' ? 'Hyper-Personalized' : 'Asistente de Contenido'}
            </span>
            <span className="block text-2xl md:text-3xl text-white/80">
              {language === 'en' ? 'E-commerce Assistant' : 'y Ofertas Hiper-Personalizadas'}
            </span>
          </h1>
          <p className="text-xl text-white/70 mb-8">
            {language === 'en'
              ? 'Transform your e-commerce with AI-powered hyper-personalization. Generate automatic product recommendations, personalized offers, and marketing content tailored to each customer.'
              : 'Transforma tu e-commerce con hiper-personalización impulsada por IA. Genera recomendaciones automáticas de productos, ofertas personalizadas y contenido de marketing adaptado a cada cliente.'}
          </p>
          <a
            href="https://wa.me/573228391374"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-button px-8 py-3 rounded-full text-white font-medium text-lg inline-block"
          >
            {language === 'en' ? 'Start Personalizing Now' : 'Comenzar a Personalizar'}
          </a>
        </div>

        {/* Problems Section */}
        <div className="mb-32">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {language === 'en' ? 'The E-commerce Challenges We Solve' : 'Los Desafíos del E-commerce que Resolvemos'}
            </h2>
            <p className="text-lg text-white/70">
              {language === 'en'
                ? 'Online stores struggle to stand out and truly connect with customers in a saturated market.'
                : 'Las tiendas online a menudo luchan por destacar y conectar verdaderamente con sus clientes en un mercado saturado.'}
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
                {language === 'en' ? 'Contextual Personalization Engine' : 'Motor de Personalización Contextual'}
              </span>
            </h2>
            <p className="text-lg text-white/70">
              {language === 'en'
                ? 'HyperTailor AI goes beyond basic recommendation plugins. Our main AI functionality is a "Contextual Personalization Engine and Dynamic Content Generation" that:'
                : 'HyperTailor AI va mucho más allá de un plugin de recomendación básico. Su funcionalidad de IA principal será un "Motor de Personalización Contextual y Generación de Contenido Dinámico" que:'}
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
                ? 'Advanced AI capabilities that transform your e-commerce into a personalized shopping experience.'
                : 'Capacidades avanzadas de IA que transforman tu e-commerce en una experiencia de compra personalizada.'}
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
              {language === 'en' ? 'Why Choose HyperTailor AI?' : '¿Por Qué Elegir HyperTailor AI?'}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 gradient-icon" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {language === 'en' ? '3x Higher Conversion' : '3x Mayor Conversión'}
              </h3>
              <p className="text-white/70">
                {language === 'en'
                  ? 'Increase your conversion rates with hyper-personalized experiences.'
                  : 'Aumenta tus tasas de conversión con experiencias hiper-personalizadas.'}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="w-8 h-8 gradient-icon" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {language === 'en' ? '45% Higher AOV' : '45% Mayor AOV'}
              </h3>
              <p className="text-white/70">
                {language === 'en'
                  ? 'Boost average order value with intelligent product recommendations.'
                  : 'Aumenta el valor promedio del pedido con recomendaciones inteligentes de productos.'}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 gradient-icon" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {language === 'en' ? '60% Better Retention' : '60% Mejor Retención'}
              </h3>
              <p className="text-white/70">
                {language === 'en'
                  ? 'Keep customers coming back with personalized experiences.'
                  : 'Mantén a los clientes regresando con experiencias personalizadas.'}
              </p>
            </div>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="mb-32">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {language === 'en' ? 'Perfect For' : 'Perfecto Para'}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-dark-300 p-6 rounded-xl text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="w-8 h-8 gradient-icon" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {language === 'en' ? 'E-commerce Stores' : 'Tiendas E-commerce'}
              </h3>
              <p className="text-white/70">
                {language === 'en'
                  ? 'Online retailers looking to increase sales and customer satisfaction.'
                  : 'Minoristas online que buscan aumentar las ventas y la satisfacción del cliente.'}
              </p>
            </div>
            <div className="bg-dark-300 p-6 rounded-xl text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 gradient-icon" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {language === 'en' ? 'SME Businesses' : 'PyMES'}
              </h3>
              <p className="text-white/70">
                {language === 'en'
                  ? 'Small and medium enterprises wanting enterprise-level personalization.'
                  : 'Pequeñas y medianas empresas que quieren personalización de nivel empresarial.'}
              </p>
            </div>
            <div className="bg-dark-300 p-6 rounded-xl text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Layers className="w-8 h-8 gradient-icon" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {language === 'en' ? 'Multi-brand Retailers' : 'Retailers Multi-marca'}
              </h3>
              <p className="text-white/70">
                {language === 'en'
                  ? 'Businesses managing multiple brands or product categories.'
                  : 'Empresas que gestionan múltiples marcas o categorías de productos.'}
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-dark-400 rounded-2xl p-8 text-center mb-20">
          <h2 className="text-3xl font-bold mb-6">
            {language === 'en' ? 'Ready to Revolutionize Your E-commerce?' : '¿Listo para Revolucionar tu E-commerce?'}
          </h2>
          <p className="text-lg text-white/70 mb-8">
            {language === 'en'
              ? 'Join the future of personalized e-commerce and watch your conversions soar.'
              : 'Únete al futuro del e-commerce personalizado y observa cómo se disparan tus conversiones.'}
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
              {language === 'en' ? 'Book Demo' : 'Reservar Demo'}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HyperTailorAI;
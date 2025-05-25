import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { MessageSquare, MapPin, Image, ShoppingCart, CreditCard, ChefHat, Database, Bot } from 'lucide-react';

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

interface PricingTierProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  hours: string;
}

const PricingTier: React.FC<PricingTierProps> = ({ title, price, description, features, hours }) => (
  <div className="bg-dark-300 p-6 rounded-xl">
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <div className="text-2xl font-bold text-primary mb-2">{price}</div>
    <p className="text-sm text-white/70 mb-4">{hours}</p>
    <p className="mb-4 text-white/70">{description}</p>
    <ul className="space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center text-sm">
          <span className="w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center mr-2">✓</span>
          {feature}
        </li>
      ))}
    </ul>
  </div>
);

const RestaurantAutomation: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Respuestas Multicanal",
      description: "Gestión automática de mensajes en WhatsApp, Instagram y Messenger"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Verificación de Entregas",
      description: "Comprobación automática de códigos postales mediante Google Maps"
    },
    {
      icon: <Image className="w-6 h-6" />,
      title: "Menú Visual",
      description: "Envío de menú con imágenes atractivas de tus platillos"
    },
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: "Gestión de Pedidos",
      description: "Recopilación de selecciones y sugerencia de complementos"
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Enlaces de Pago",
      description: "Generación automática de enlaces para pagos seguros"
    },
    {
      icon: <ChefHat className="w-6 h-6" />,
      title: "Notificaciones a Cocina",
      description: "Envío automático de pedidos confirmados a la cocina"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Almacenamiento Seguro",
      description: "Registro seguro de mensajes y datos de sesión"
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "IA Conversacional",
      description: "Comunicación natural y amigable con los clientes"
    }
  ];

  const supportTiers = [
    {
      title: "Soporte Básico",
      price: "$150,000/hora",
      hours: "Bloque mínimo: 1 hora",
      description: "Soporte esencial para consultas generales y configuraciones básicas",
      features: [
        "Consultas generales del sistema",
        "Asesoramiento en uso de plataforma",
        "Configuración básica de plantillas",
        "Soporte remoto por WhatsApp"
      ]
    },
    {
      title: "Soporte Técnico",
      price: "$220,000/hora",
      hours: "Bloque mínimo: 1 hora",
      description: "Asistencia técnica avanzada y optimización de flujos",
      features: [
        "Resolución de problemas técnicos",
        "Optimización de flujos existentes",
        "Configuración avanzada",
        "Soporte con acceso remoto"
      ]
    },
    {
      title: "Soporte Especializado",
      price: "$320,000/hora",
      hours: "Bloque mínimo: 2 horas",
      description: "Soluciones especializadas y optimización avanzada",
      features: [
        "Diagnóstico de problemas complejos",
        "Optimización de rendimiento",
        "Configuración de integraciones",
        "Documentación de cambios"
      ]
    }
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Servicios de Automatización para
            <span className="gradient-text block">Restaurantes</span>
          </h1>
          <p className="text-xl text-white/70">
            Automatiza la atención al cliente y gestión de pedidos de tu restaurante con inteligencia artificial
          </p>
        </div>

        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>

        <div className="bg-dark-400 rounded-2xl p-8 mb-20">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Hecho con ❤️ para Restaurantes</h2>
            <p className="text-lg text-white/70">
              Este flujo de trabajo fue creado especialmente para ti, que diriges un restaurante, 
              una pequeña hamburguesería o un negocio de entrega lleno de corazón. Sé lo ocupados 
              que pueden ser tus días, así que desarrollamos este asistente de IA para ayudarte a 
              cuidar a tus clientes en todos los canales.
            </p>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Planes de Soporte</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportTiers.map((tier, index) => (
              <PricingTier key={index} {...tier} />
            ))}
          </div>
        </div>

        <div className="bg-dark-400 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Listo para Automatizar?</h2>
          <p className="text-lg text-white/70 mb-8">
            Contáctanos hoy y descubre cómo podemos ayudarte a hacer crecer tu negocio
          </p>
          <a
            href="https://wa.me/573228391374"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-button px-8 py-3 rounded-full text-white font-medium text-lg inline-block"
          >
            Contactar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default RestaurantAutomation;
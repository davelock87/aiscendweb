import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { MessageSquare, MapPin, Image, ShoppingCart, CreditCard, ChefHat, Database, Bot } from 'lucide-react';
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
      title: t('restaurant.feature1.title'),
      description: t('restaurant.feature1.desc')
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: t('restaurant.feature2.title'),
      description: t('restaurant.feature2.desc')
    },
    {
      icon: <Image className="w-6 h-6" />,
      title: t('restaurant.feature3.title'),
      description: t('restaurant.feature3.desc')
    },
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: t('restaurant.feature4.title'),
      description: t('restaurant.feature4.desc')
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: t('restaurant.feature5.title'),
      description: t('restaurant.feature5.desc')
    },
    {
      icon: <ChefHat className="w-6 h-6" />,
      title: t('restaurant.feature6.title'),
      description: t('restaurant.feature6.desc')
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: t('restaurant.feature7.title'),
      description: t('restaurant.feature7.desc')
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: t('restaurant.feature8.title'),
      description: t('restaurant.feature8.desc')
    }
  ];

  const supportTiers = [
    {
      title: t('restaurant.basic.title'),
      price: t('restaurant.basic.price'),
      hours: t('restaurant.basic.hours'),
      description: t('restaurant.basic.desc'),
      features: t('restaurant.basic.features')
    },
    {
      title: t('restaurant.technical.title'),
      price: t('restaurant.technical.price'),
      hours: t('restaurant.technical.hours'),
      description: t('restaurant.technical.desc'),
      features: t('restaurant.technical.features')
    },
    {
      title: t('restaurant.specialized.title'),
      price: t('restaurant.specialized.price'),
      hours: t('restaurant.specialized.hours'),
      description: t('restaurant.specialized.desc'),
      features: t('restaurant.specialized.features')
    }
  ];

  return (
    <div className="relative min-h-screen">
      <Particles />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto pt-32 pb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t('restaurant.title')}
            <span className="gradient-text block mt-4">{t('restaurant.subtitle')}</span>
          </h1>
          <p className="text-xl text-white/70">
            {t('restaurant.description')}
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
            <h2 className="text-3xl font-bold mb-4">{t('restaurant.madeWithLove.title')}</h2>
            <p className="text-lg text-white/70">
              {t('restaurant.madeWithLove.desc')}
            </p>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">{t('restaurant.support.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportTiers.map((tier, index) => (
              <PricingTier key={index} {...tier} />
            ))}
          </div>
        </div>

        <div className="bg-dark-400 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-6">{t('restaurant.cta.title')}</h2>
          <p className="text-lg text-white/70 mb-8">
            {t('restaurant.cta.desc')}
          </p>
          <a
            href="https://wa.me/573228391374"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-button px-8 py-3 rounded-full text-white font-medium text-lg inline-block"
          >
            {t('restaurant.cta.button')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default RestaurantAutomation;
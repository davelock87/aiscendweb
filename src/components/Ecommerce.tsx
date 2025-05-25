import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  ShoppingCart, 
  Package, 
  CreditCard, 
  TrendingUp, 
  Truck, 
  BarChart, 
  Shield, 
  Bot,
  Store,
  Users,
  LineChart
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

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description }) => (
  <div className="flex items-start p-6 bg-dark-300 rounded-xl">
    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
      <div className="gradient-icon">{icon}</div>
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-white/70">{description}</p>
    </div>
  </div>
);

const Ecommerce: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: t('ecommerce.feature1.title'),
      description: t('ecommerce.feature1.desc')
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: t('ecommerce.feature2.title'),
      description: t('ecommerce.feature2.desc')
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: t('ecommerce.feature3.title'),
      description: t('ecommerce.feature3.desc')
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: t('ecommerce.feature4.title'),
      description: t('ecommerce.feature4.desc')
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: t('ecommerce.feature5.title'),
      description: t('ecommerce.feature5.desc')
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: t('ecommerce.feature6.title'),
      description: t('ecommerce.feature6.desc')
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: t('ecommerce.feature7.title'),
      description: t('ecommerce.feature7.desc')
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: t('ecommerce.feature8.title'),
      description: t('ecommerce.feature8.desc')
    }
  ];

  const benefits = [
    {
      icon: <Store className="w-6 h-6" />,
      title: t('ecommerce.benefit1.title'),
      description: t('ecommerce.benefit1.desc')
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: t('ecommerce.benefit2.title'),
      description: t('ecommerce.benefit2.desc')
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: t('ecommerce.benefit3.title'),
      description: t('ecommerce.benefit3.desc')
    }
  ];

  return (
    <div className="relative min-h-screen">
      <Particles />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto pt-32 pb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t('ecommerce.title')}
            <span className="gradient-text block mt-4">{t('ecommerce.subtitle')}</span>
          </h1>
          <p className="text-xl text-white/70">
            {t('ecommerce.description')}
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
            <h2 className="text-3xl font-bold mb-4">{t('ecommerce.benefits.title')}</h2>
            <p className="text-lg text-white/70">
              {t('ecommerce.benefits.description')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <BenefitCard key={index} {...benefit} />
            ))}
          </div>
        </div>

        <div className="bg-dark-400 rounded-2xl p-8 text-center mb-20">
          <h2 className="text-3xl font-bold mb-6">{t('ecommerce.cta.title')}</h2>
          <p className="text-lg text-white/70 mb-8">
            {t('ecommerce.cta.description')}
          </p>
          <a
            href="https://wa.me/573228391374"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-button px-8 py-3 rounded-full text-white font-medium text-lg inline-block"
          >
            {t('ecommerce.cta.button')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  Search, 
  Users, 
  Globe, 
  Code, 
  Palette, 
  BarChart, 
  Database,
  Workflow,
  Target,
  ArrowUpRight,
  LineChart,
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

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Benefit: React.FC<BenefitProps> = ({ icon, title, description }) => (
  <div className="flex items-start">
    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
      <div className="gradient-icon">{icon}</div>
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-white/70">{description}</p>
    </div>
  </div>
);

const Academy: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Search className="w-6 h-6" />,
      title: t('academy.services.research'),
      description: t('academy.services.researchDesc')
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: t('academy.services.ux'),
      description: t('academy.services.uxDesc')
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: t('academy.services.marketing'),
      description: t('academy.services.marketingDesc')
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: t('academy.services.web'),
      description: t('academy.services.webDesc')
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: t('academy.services.brand'),
      description: t('academy.services.brandDesc')
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: t('academy.services.seo'),
      description: t('academy.services.seoDesc')
    }
  ];

  const benefits = [
    {
      icon: <Target className="w-6 h-6" />,
      title: t('academy.benefits.strategy'),
      description: t('academy.benefits.strategyDesc')
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: t('academy.benefits.data'),
      description: t('academy.benefits.dataDesc')
    },
    {
      icon: <Workflow className="w-6 h-6" />,
      title: t('academy.benefits.workflow'),
      description: t('academy.benefits.workflowDesc')
    }
  ];

  const features = [
    {
      icon: <LineChart className="w-6 h-6" />,
      title: t('academy.features.growth'),
      description: t('academy.features.growthDesc')
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: t('academy.features.productivity'),
      description: t('academy.features.productivityDesc')
    },
    {
      icon: <ArrowUpRight className="w-6 h-6" />,
      title: t('academy.features.solution'),
      description: t('academy.features.solutionDesc')
    }
  ];

  return (
    <div className="relative py-20">
      <Particles />
      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t('academy.hero.title')}
            <span className="gradient-text block mt-2">{t('academy.hero.subtitle')}</span>
          </h1>
          <p className="text-xl text-white/70 mb-8">
            {t('academy.hero.description')}
          </p>
          <a
            href="#contact"
            className="gradient-button px-8 py-3 rounded-full text-white font-medium text-lg inline-block"
          >
            {t('academy.hero.cta')}
          </a>
        </div>

        {/* Services Grid */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FeatureCard key={index} {...service} />
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-dark-400 rounded-2xl p-8 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Benefit key={index} {...benefit} />
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-dark-400 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-6">{t('academy.cta.title')}</h2>
          <p className="text-lg text-white/70 mb-8">
            {t('academy.cta.description')}
          </p>
          <a
            href="https://wa.me/573228391374"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-button px-8 py-3 rounded-full text-white font-medium text-lg inline-block"
          >
            {t('academy.cta.button')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Academy;
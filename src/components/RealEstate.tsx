import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  Home,
  Search,
  MessageSquare,
  Calendar,
  FileText,
  Key,
  PieChart,
  Bot,
  Shield,
  Building2,
  Wallet
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

const RealEstate: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Search className="w-6 h-6" />,
      title: t('realestate.feature1.title'),
      description: t('realestate.feature1.desc')
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: t('realestate.feature2.title'),
      description: t('realestate.feature2.desc')
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: t('realestate.feature3.title'),
      description: t('realestate.feature3.desc')
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: t('realestate.feature4.title'),
      description: t('realestate.feature4.desc')
    },
    {
      icon: <Key className="w-6 h-6" />,
      title: t('realestate.feature5.title'),
      description: t('realestate.feature5.desc')
    },
    {
      icon: <PieChart className="w-6 h-6" />,
      title: t('realestate.feature6.title'),
      description: t('realestate.feature6.desc')
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: t('realestate.feature7.title'),
      description: t('realestate.feature7.desc')
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: t('realestate.feature8.title'),
      description: t('realestate.feature8.desc')
    }
  ];

  const benefits = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: t('realestate.benefit1.title'),
      description: t('realestate.benefit1.desc')
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: t('realestate.benefit2.title'),
      description: t('realestate.benefit2.desc')
    },
    {
      icon: <Wallet className="w-6 h-6" />,
      title: t('realestate.benefit3.title'),
      description: t('realestate.benefit3.desc')
    }
  ];

  return (
    <div className="relative min-h-screen">
      <Particles />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto pt-32 pb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t('realestate.title')}
            <span className="gradient-text block mt-4">{t('realestate.subtitle')}</span>
          </h1>
          <p className="text-xl text-white/70">
            {t('realestate.description')}
          </p>
        </div>

        <div className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>

        <div className="bg-dark-400 rounded-2xl p-8 mb-32">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('realestate.benefits.title')}</h2>
            <p className="text-lg text-white/70">
              {t('realestate.benefits.description')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <BenefitCard key={index} {...benefit} />
            ))}
          </div>
        </div>

        <div className="bg-dark-400 rounded-2xl p-8 text-center mb-20">
          <h2 className="text-3xl font-bold mb-6">{t('realestate.cta.title')}</h2>
          <p className="text-lg text-white/70 mb-8">
            {t('realestate.cta.description')}
          </p>
          <a
            href="https://wa.me/573228391374"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-button px-8 py-3 rounded-full text-white font-medium text-lg inline-block"
          >
            {t('realestate.cta.button')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default RealEstate;
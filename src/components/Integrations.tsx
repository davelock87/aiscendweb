import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import {
  Database,
  Mail,
  MessageSquare,
  Calendar,
  FileText,
  ShoppingCart,
  Users,
  Building2,
  Briefcase,
  LineChart,
  Shield,
  Webhook,
  Cloud,
  Code2,
  Bot,
  Boxes
} from 'lucide-react';

interface IntegrationCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const IntegrationCard: React.FC<IntegrationCardProps> = ({ icon, title, description }) => (
  <div className="bg-dark-300 p-6 rounded-xl transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl">
    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
      <div className="gradient-icon">{icon}</div>
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-white/70 text-sm">{description}</p>
  </div>
);

const Integrations: React.FC = () => {
  const { t } = useLanguage();

  const integrations = [
    {
      icon: <Database className="w-6 h-6" />,
      title: t('integrations.databases.title'),
      description: t('integrations.databases.desc'),
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: t('integrations.email.title'),
      description: t('integrations.email.desc'),
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: t('integrations.communication.title'),
      description: t('integrations.communication.desc'),
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: t('integrations.calendar.title'),
      description: t('integrations.calendar.desc'),
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: t('integrations.documents.title'),
      description: t('integrations.documents.desc'),
    },
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: t('integrations.ecommerce.title'),
      description: t('integrations.ecommerce.desc'),
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: t('integrations.cloud.title'),
      description: t('integrations.cloud.desc'),
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: t('integrations.development.title'),
      description: t('integrations.development.desc'),
    },
  ];

  const solutions = [
    {
      icon: <Users className="w-6 h-6" />,
      title: t('integrations.hr.title'),
      description: t('integrations.hr.desc'),
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: t('integrations.finance.title'),
      description: t('integrations.finance.desc'),
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: t('integrations.sales.title'),
      description: t('integrations.sales.desc'),
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: t('integrations.analytics.title'),
      description: t('integrations.analytics.desc'),
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: t('integrations.security.title'),
      description: t('integrations.security.desc'),
    },
    {
      icon: <Webhook className="w-6 h-6" />,
      title: t('integrations.api.title'),
      description: t('integrations.api.desc'),
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: t('integrations.ai.title'),
      description: t('integrations.ai.desc'),
    },
    {
      icon: <Boxes className="w-6 h-6" />,
      title: t('integrations.supply.title'),
      description: t('integrations.supply.desc'),
    },
  ];

  return (
    <section className="py-20 bg-dark-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('integrations.title')}
          </h2>
          <p className="text-white/70 text-lg">
            {t('integrations.subtitle')}
          </p>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center">{t('integrations.section1.title')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <IntegrationCard key={index} {...integration} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">{t('integrations.section2.title')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution, index) => (
              <IntegrationCard key={index} {...solution} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
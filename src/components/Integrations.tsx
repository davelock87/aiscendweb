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
    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
      {icon}
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
      title: 'Databases',
      description: 'MySQL, PostgreSQL, MongoDB, Redis, and more',
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Services',
      description: 'Gmail, Outlook, SMTP, SendGrid, Mailchimp',
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Communication',
      description: 'Slack, Discord, Telegram, WhatsApp, Teams',
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: 'Calendar',
      description: 'Google Calendar, Outlook Calendar, Calendly',
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Documents',
      description: 'Google Docs, Notion, Airtable, Excel',
    },
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: 'E-commerce',
      description: 'Shopify, WooCommerce, Stripe, PayPal',
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: 'Cloud Services',
      description: 'AWS, Google Cloud, Azure, DigitalOcean',
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: 'Development',
      description: 'GitHub, GitLab, Bitbucket, Jira',
    },
  ];

  const solutions = [
    {
      icon: <Users className="w-6 h-6" />,
      title: 'HR Automation',
      description: 'Streamline onboarding, time tracking, and employee management',
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: 'Finance & Operations',
      description: 'Automate invoicing, expense tracking, and reporting',
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: 'Sales & Marketing',
      description: 'CRM integration, lead tracking, and campaign automation',
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: 'Analytics & Reporting',
      description: 'Custom dashboards and automated reporting',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Security & Compliance',
      description: 'Data protection, audit logs, and access control',
    },
    {
      icon: <Webhook className="w-6 h-6" />,
      title: 'API Management',
      description: 'Custom integrations and webhook management',
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: 'AI & Machine Learning',
      description: 'Intelligent automation and predictive analytics',
    },
    {
      icon: <Boxes className="w-6 h-6" />,
      title: 'Supply Chain',
      description: 'Inventory management and logistics automation',
    },
  ];

  return (
    <section className="py-20 bg-dark-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Integrations & Enterprise Solutions
          </h2>
          <p className="text-white/70 text-lg">
            Connect with your favorite tools and automate your business processes
          </p>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center">Popular Integrations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <IntegrationCard key={index} {...integration} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Enterprise Solutions</h3>
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
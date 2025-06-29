import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  DollarSign, 
  FileText, 
  Calculator, 
  TrendingUp, 
  CreditCard, 
  PieChart, 
  Shield, 
  Bot,
  CheckCircle,
  ArrowRight,
  Receipt,
  Banknote,
  Target,
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

const FinanceAutomation: React.FC = () => {
  const { language } = useLanguage();

  const features = [
    {
      icon: <Receipt className="w-6 h-6" />,
      title: language === 'en' ? 'Automated Invoicing' : 'Facturación Automatizada',
      description: language === 'en' 
        ? 'Generate, send, and track invoices automatically with smart payment reminders.'
        : 'Genera, envía y rastrea facturas automáticamente con recordatorios de pago inteligentes.'
    },
    {
      icon: <Calculator className="w-6 h-6" />,
      title: language === 'en' ? 'Expense Tracking' : 'Seguimiento de Gastos',
      description: language === 'en'
        ? 'AI-powered expense categorization, receipt scanning, and approval workflows.'
        : 'Categorización de gastos con IA, escaneo de recibos y flujos de trabajo de aprobación.'
    },
    {
      icon: <PieChart className="w-6 h-6" />,
      title: language === 'en' ? 'Financial Reporting' : 'Reportes Financieros',
      description: language === 'en'
        ? 'Automated financial reports, P&L statements, and cash flow analysis.'
        : 'Reportes financieros automatizados, estados de P&G y análisis de flujo de efectivo.'
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: language === 'en' ? 'Payment Processing' : 'Procesamiento de Pagos',
      description: language === 'en'
        ? 'Automated payment collection, reconciliation, and multi-currency support.'
        : 'Cobranza automatizada de pagos, conciliación y soporte multi-moneda.'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: language === 'en' ? 'Budget Management' : 'Gestión de Presupuesto',
      description: language === 'en'
        ? 'Smart budget planning, variance analysis, and spending alerts.'
        : 'Planificación inteligente de presupuesto, análisis de variaciones y alertas de gastos.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: language === 'en' ? 'Tax Compliance' : 'Cumplimiento Fiscal',
      description: language === 'en'
        ? 'Automated tax calculations, filing assistance, and compliance monitoring.'
        : 'Cálculos fiscales automatizados, asistencia en declaraciones y monitoreo de cumplimiento.'
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: language === 'en' ? '80% Faster Processing' : '80% Procesamiento Más Rápido',
      description: language === 'en'
        ? 'Automate invoice generation and expense processing in seconds.'
        : 'Automatiza la generación de facturas y procesamiento de gastos en segundos.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: language === 'en' ? '99% Accuracy' : '99% Precisión',
      description: language === 'en'
        ? 'Eliminate calculation errors and ensure financial data integrity.'
        : 'Elimina errores de cálculo y asegura la integridad de datos financieros.'
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: language === 'en' ? '100% Compliance' : '100% Cumplimiento',
      description: language === 'en'
        ? 'Stay compliant with tax regulations and financial standards automatically.'
        : 'Mantente en cumplimiento con regulaciones fiscales y estándares financieros automáticamente.'
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
              {language === 'en' ? 'Finance Automation' : 'Automatización Financiera'}
            </span>
            <span className="block mt-4 text-3xl md:text-4xl">
              {language === 'en' ? 'Smart Financial Operations' : 'Operaciones Financieras Inteligentes'}
            </span>
          </h1>
          <p className="text-xl text-white/70 mb-8">
            {language === 'en'
              ? 'Automate invoicing, expense tracking, and financial reporting with AI-powered solutions.'
              : 'Automatiza facturación, seguimiento de gastos y reportes financieros con soluciones impulsadas por IA.'}
          </p>
          <a
            href="https://wa.me/573228391374"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-button px-8 py-3 rounded-full text-white font-medium text-lg inline-block"
          >
            {language === 'en' ? 'Automate Your Finances' : 'Automatiza tus Finanzas'}
          </a>
        </div>

        {/* Features Section */}
        <div className="mb-32">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {language === 'en' ? 'Complete Financial Automation' : 'Automatización Financiera Completa'}
            </h2>
            <p className="text-lg text-white/70">
              {language === 'en'
                ? 'Streamline every aspect of your financial operations with intelligent automation.'
                : 'Optimiza cada aspecto de tus operaciones financieras con automatización inteligente.'}
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
              {language === 'en' ? 'Financial Impact' : 'Impacto Financiero'}
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
            {language === 'en' ? 'Ready to Automate Your Finances?' : '¿Listo para Automatizar tus Finanzas?'}
          </h2>
          <p className="text-lg text-white/70 mb-8">
            {language === 'en'
              ? 'Join businesses that have reduced financial processing time by 80% with our automation.'
              : 'Únete a empresas que han reducido el tiempo de procesamiento financiero en 80% con nuestra automatización.'}
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
              {language === 'en' ? 'Schedule Demo' : 'Agendar Demo'}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinanceAutomation;
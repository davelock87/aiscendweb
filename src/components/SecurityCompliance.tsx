import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  Shield, 
  Lock, 
  FileCheck, 
  Eye, 
  Key, 
  AlertTriangle, 
  CheckCircle, 
  Bot,
  ArrowRight,
  Database,
  UserCheck,
  Clock,
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

const SecurityCompliance: React.FC = () => {
  const { language } = useLanguage();

  const features = [
    {
      icon: <Database className="w-6 h-6" />,
      title: language === 'en' ? 'Data Protection' : 'Protección de Datos',
      description: language === 'en' 
        ? 'Advanced encryption, secure storage, and GDPR compliance for all your sensitive data.'
        : 'Encriptación avanzada, almacenamiento seguro y cumplimiento GDPR para todos tus datos sensibles.'
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: language === 'en' ? 'Audit Trails' : 'Registros de Auditoría',
      description: language === 'en'
        ? 'Comprehensive audit logs with automated compliance reporting and activity monitoring.'
        : 'Registros de auditoría comprehensivos con reportes de cumplimiento automatizados y monitoreo de actividad.'
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: language === 'en' ? 'Access Control' : 'Control de Acceso',
      description: language === 'en'
        ? 'Role-based permissions, multi-factor authentication, and automated access management.'
        : 'Permisos basados en roles, autenticación multifactor y gestión automatizada de acceso.'
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: language === 'en' ? 'Threat Detection' : 'Detección de Amenazas',
      description: language === 'en'
        ? 'AI-powered threat detection with real-time alerts and automated response protocols.'
        : 'Detección de amenazas con IA con alertas en tiempo real y protocolos de respuesta automatizados.'
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: language === 'en' ? 'Compliance Management' : 'Gestión de Cumplimiento',
      description: language === 'en'
        ? 'Automated compliance monitoring for HIPAA, SOX, PCI-DSS, and other regulations.'
        : 'Monitoreo automatizado de cumplimiento para HIPAA, SOX, PCI-DSS y otras regulaciones.'
    },
    {
      icon: <Key className="w-6 h-6" />,
      title: language === 'en' ? 'Identity Management' : 'Gestión de Identidad',
      description: language === 'en'
        ? 'Centralized identity management with single sign-on and automated provisioning.'
        : 'Gestión centralizada de identidad con inicio de sesión único y aprovisionamiento automatizado.'
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: language === 'en' ? '99.9% Security Uptime' : '99.9% Tiempo de Seguridad',
      description: language === 'en'
        ? 'Enterprise-grade security with continuous monitoring and protection.'
        : 'Seguridad de nivel empresarial con monitoreo y protección continua.'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: language === 'en' ? '24/7 Monitoring' : 'Monitoreo 24/7',
      description: language === 'en'
        ? 'Round-the-clock security monitoring with instant threat response.'
        : 'Monitoreo de seguridad las 24 horas con respuesta instantánea a amenazas.'
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: language === 'en' ? '100% Compliance' : '100% Cumplimiento',
      description: language === 'en'
        ? 'Maintain full regulatory compliance with automated monitoring and reporting.'
        : 'Mantén cumplimiento regulatorio completo con monitoreo y reportes automatizados.'
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
              {language === 'en' ? 'Security & Compliance' : 'Seguridad y Cumplimiento'}
            </span>
            <span className="block mt-4 text-3xl md:text-4xl">
              {language === 'en' ? 'Enterprise-Grade Protection' : 'Protección de Nivel Empresarial'}
            </span>
          </h1>
          <p className="text-xl text-white/70 mb-8">
            {language === 'en'
              ? 'Protect your data with advanced security measures, audit trails, and automated compliance monitoring.'
              : 'Protege tus datos con medidas de seguridad avanzadas, registros de auditoría y monitoreo automatizado de cumplimiento.'}
          </p>
          <a
            href="https://wa.me/573228391374"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-button px-8 py-3 rounded-full text-white font-medium text-lg inline-block"
          >
            {language === 'en' ? 'Secure Your Business' : 'Asegura tu Negocio'}
          </a>
        </div>

        {/* Features Section */}
        <div className="mb-32">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {language === 'en' ? 'Complete Security Suite' : 'Suite de Seguridad Completa'}
            </h2>
            <p className="text-lg text-white/70">
              {language === 'en'
                ? 'Comprehensive security and compliance solutions to protect your business and meet regulatory requirements.'
                : 'Soluciones comprehensivas de seguridad y cumplimiento para proteger tu negocio y cumplir requisitos regulatorios.'}
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
              {language === 'en' ? 'Security Assurance' : 'Garantía de Seguridad'}
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
            {language === 'en' ? 'Ready to Secure Your Operations?' : '¿Listo para Asegurar tus Operaciones?'}
          </h2>
          <p className="text-lg text-white/70 mb-8">
            {language === 'en'
              ? 'Join enterprises that trust our security platform to protect their most sensitive data.'
              : 'Únete a empresas que confían en nuestra plataforma de seguridad para proteger sus datos más sensibles.'}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/573228391374"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-button px-8 py-3 rounded-full text-white font-medium text-lg inline-flex items-center justify-center"
            >
              {language === 'en' ? 'Start Security Assessment' : 'Comenzar Evaluación de Seguridad'}
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

export default SecurityCompliance;
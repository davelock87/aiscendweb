import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  Users, 
  Clock, 
  FileText, 
  Calendar, 
  UserCheck, 
  TrendingUp, 
  Shield, 
  Bot,
  CheckCircle,
  ArrowRight,
  Briefcase,
  Award,
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

const HRAutomation: React.FC = () => {
  const { language } = useLanguage();

  const features = [
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: language === 'en' ? 'Automated Recruitment' : 'Reclutamiento Automatizado',
      description: language === 'en' 
        ? 'AI-powered candidate screening, interview scheduling, and talent pipeline management.'
        : 'Filtrado de candidatos con IA, programación de entrevistas y gestión de pipeline de talento.'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: language === 'en' ? 'Time & Attendance' : 'Tiempo y Asistencia',
      description: language === 'en'
        ? 'Automated time tracking, attendance monitoring, and overtime calculations.'
        : 'Seguimiento automático de tiempo, monitoreo de asistencia y cálculos de horas extra.'
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: language === 'en' ? 'Document Management' : 'Gestión de Documentos',
      description: language === 'en'
        ? 'Digital employee files, contract management, and automated document workflows.'
        : 'Archivos digitales de empleados, gestión de contratos y flujos de trabajo automatizados.'
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: language === 'en' ? 'Leave Management' : 'Gestión de Permisos',
      description: language === 'en'
        ? 'Automated leave requests, approval workflows, and vacation tracking.'
        : 'Solicitudes de permisos automatizadas, flujos de aprobación y seguimiento de vacaciones.'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: language === 'en' ? 'Performance Analytics' : 'Análisis de Rendimiento',
      description: language === 'en'
        ? 'Employee performance tracking, goal setting, and automated review processes.'
        : 'Seguimiento del rendimiento de empleados, establecimiento de objetivos y procesos de revisión automatizados.'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: language === 'en' ? 'Training & Development' : 'Capacitación y Desarrollo',
      description: language === 'en'
        ? 'Automated training assignments, progress tracking, and skill development programs.'
        : 'Asignaciones de capacitación automatizadas, seguimiento de progreso y programas de desarrollo de habilidades.'
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: language === 'en' ? '75% Time Reduction' : '75% Reducción de Tiempo',
      description: language === 'en'
        ? 'Automate repetitive HR tasks and focus on strategic initiatives.'
        : 'Automatiza tareas repetitivas de RRHH y enfócate en iniciativas estratégicas.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: language === 'en' ? '90% Accuracy' : '90% Precisión',
      description: language === 'en'
        ? 'Eliminate human errors in payroll, compliance, and data management.'
        : 'Elimina errores humanos en nómina, cumplimiento y gestión de datos.'
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: language === 'en' ? '100% Compliance' : '100% Cumplimiento',
      description: language === 'en'
        ? 'Ensure full compliance with labor laws and regulations automatically.'
        : 'Asegura el cumplimiento total de leyes laborales y regulaciones automáticamente.'
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
              {language === 'en' ? 'HR Automation' : 'Automatización de RRHH'}
            </span>
            <span className="block mt-4 text-3xl md:text-4xl">
              {language === 'en' ? 'Intelligent Workforce Management' : 'Gestión Inteligente de Personal'}
            </span>
          </h1>
          <p className="text-xl text-white/70 mb-8">
            {language === 'en'
              ? 'Optimize recruitment, time tracking, and employee management with AI-powered automation solutions.'
              : 'Optimiza reclutamiento, seguimiento de tiempo y gestión de empleados con soluciones de automatización impulsadas por IA.'}
          </p>
          <a
            href="https://wa.me/573228391374"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-button px-8 py-3 rounded-full text-white font-medium text-lg inline-block"
          >
            {language === 'en' ? 'Transform Your HR' : 'Transforma tu RRHH'}
          </a>
        </div>

        {/* Features Section */}
        <div className="mb-32">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {language === 'en' ? 'Complete HR Automation Suite' : 'Suite Completa de Automatización de RRHH'}
            </h2>
            <p className="text-lg text-white/70">
              {language === 'en'
                ? 'From recruitment to retirement, automate every aspect of human resource management.'
                : 'Desde reclutamiento hasta jubilación, automatiza cada aspecto de la gestión de recursos humanos.'}
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
              {language === 'en' ? 'Measurable Results' : 'Resultados Medibles'}
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
            {language === 'en' ? 'Ready to Revolutionize Your HR?' : '¿Listo para Revolucionar tu RRHH?'}
          </h2>
          <p className="text-lg text-white/70 mb-8">
            {language === 'en'
              ? 'Join thousands of companies that have transformed their HR operations with AI automation.'
              : 'Únete a miles de empresas que han transformado sus operaciones de RRHH con automatización de IA.'}
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

export default HRAutomation;
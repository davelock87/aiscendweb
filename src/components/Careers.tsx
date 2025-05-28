import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Briefcase, MapPin, Clock, Code, Palette, BarChart, Send } from 'lucide-react';
import Particles from './Particles';

interface JobPosition {
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  benefits: string[];
}

const Careers: React.FC = () => {
  const { language } = useLanguage();

  const positions: JobPosition[] = [
    {
      title: language === 'en' ? 'Senior Full Stack Developer' : 'Desarrollador Full Stack Senior',
      department: language === 'en' ? 'Engineering' : 'Ingeniería',
      location: language === 'en' ? 'Remote (Colombia)' : 'Remoto (Colombia)',
      type: language === 'en' ? 'Full-time' : 'Tiempo completo',
      description: language === 'en' 
        ? 'Join our engineering team to build innovative AI-powered solutions that help businesses automate and scale their operations.'
        : 'Únete a nuestro equipo de ingeniería para construir soluciones innovadoras impulsadas por IA que ayuden a las empresas a automatizar y escalar sus operaciones.',
      requirements: language === 'en' 
        ? [
            '5+ years of experience in full-stack development',
            'Strong knowledge of React, Node.js, and TypeScript',
            'Experience with AI/ML technologies',
            'Excellent problem-solving skills'
          ]
        : [
            '5+ años de experiencia en desarrollo full-stack',
            'Sólido conocimiento de React, Node.js y TypeScript',
            'Experiencia con tecnologías de IA/ML',
            'Excelentes habilidades de resolución de problemas'
          ],
      benefits: language === 'en'
        ? [
            'Competitive salary',
            'Flexible work hours',
            'Remote work',
            'Professional development opportunities',
            'Health insurance'
          ]
        : [
            'Salario competitivo',
            'Horario flexible',
            'Trabajo remoto',
            'Oportunidades de desarrollo profesional',
            'Seguro de salud'
          ]
    },
    {
      title: language === 'en' ? 'UI/UX Designer' : 'Diseñador UI/UX',
      department: language === 'en' ? 'Design' : 'Diseño',
      location: language === 'en' ? 'Remote (Colombia)' : 'Remoto (Colombia)',
      type: language === 'en' ? 'Full-time' : 'Tiempo completo',
      description: language === 'en'
        ? 'Create beautiful and intuitive user experiences for our AI-powered platform and help shape the future of business automation.'
        : 'Crea experiencias de usuario hermosas e intuitivas para nuestra plataforma impulsada por IA y ayuda a dar forma al futuro de la automatización empresarial.',
      requirements: language === 'en'
        ? [
            '3+ years of UI/UX design experience',
            'Proficiency in Figma and design tools',
            'Experience with design systems',
            'Strong portfolio of web applications'
          ]
        : [
            '3+ años de experiencia en diseño UI/UX',
            'Dominio de Figma y herramientas de diseño',
            'Experiencia con sistemas de diseño',
            'Sólido portafolio de aplicaciones web'
          ],
      benefits: language === 'en'
        ? [
            'Competitive salary',
            'Flexible work hours',
            'Remote work',
            'Design tool subscriptions',
            'Professional development budget'
          ]
        : [
            'Salario competitivo',
            'Horario flexible',
            'Trabajo remoto',
            'Suscripciones a herramientas de diseño',
            'Presupuesto para desarrollo profesional'
          ]
    }
  ];

  return (
    <div className="relative min-h-screen">
      <Particles />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto pt-32 pb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {language === 'en' ? 'Join Our Team' : 'Únete a Nuestro Equipo'}
            <span className="gradient-text block mt-4">
              {language === 'en' ? 'Shape the Future of AI' : 'Da Forma al Futuro de la IA'}
            </span>
          </h1>
          <p className="text-xl text-white/70">
            {language === 'en' 
              ? 'Join us in our mission to transform businesses through intelligent automation'
              : 'Únete a nuestra misión de transformar empresas a través de la automatización inteligente'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {positions.map((position, index) => (
            <div key={index} className="bg-dark-300 rounded-xl p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{position.title}</h2>
                  <div className="flex flex-wrap gap-4">
                    <span className="flex items-center text-white/70">
                      <Briefcase className="w-4 h-4 mr-2" />
                      {position.department}
                    </span>
                    <span className="flex items-center text-white/70">
                      <MapPin className="w-4 h-4 mr-2" />
                      {position.location}
                    </span>
                    <span className="flex items-center text-white/70">
                      <Clock className="w-4 h-4 mr-2" />
                      {position.type}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-white/70 mb-6">{position.description}</p>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">
                  {language === 'en' ? 'Requirements' : 'Requisitos'}
                </h3>
                <ul className="space-y-2">
                  {position.requirements.map((req, i) => (
                    <li key={i} className="flex items-center text-white/70">
                      <Code className="w-4 h-4 mr-2 text-primary" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">
                  {language === 'en' ? 'Benefits' : 'Beneficios'}
                </h3>
                <ul className="space-y-2">
                  {position.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-white/70">
                      <BarChart className="w-4 h-4 mr-2 text-primary" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="https://wa.me/573228391374"
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-button px-6 py-3 rounded-lg inline-flex items-center"
              >
                <Send className="w-4 h-4 mr-2" />
                {language === 'en' ? 'Apply Now' : 'Aplicar Ahora'}
              </a>
            </div>
          ))}
        </div>

        <div className="bg-dark-400 rounded-2xl p-8 text-center mb-20">
          <h2 className="text-3xl font-bold mb-6">
            {language === 'en' ? 'Don\'t see the right position?' : '¿No ves la posición adecuada?'}
          </h2>
          <p className="text-lg text-white/70 mb-8">
            {language === 'en'
              ? 'Send us your resume and let us know what you\'re interested in!'
              : '¡Envíanos tu currículum y cuéntanos qué te interesa!'}
          </p>
          <a
            href="https://wa.me/573228391374"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-button px-8 py-3 rounded-full text-white font-medium text-lg inline-block"
          >
            {language === 'en' ? 'Contact Us' : 'Contáctanos'}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Careers;
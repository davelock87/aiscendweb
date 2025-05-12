import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Database, Zap, TrendingUp, RefreshCw } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('fade-in');
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={cardRef} 
      className="bg-dark-300 p-6 rounded-xl card-hover opacity-0"
      style={{ transform: 'translateY(20px)' }}
    >
      <div className="mb-4 text-primary w-12 h-12 flex items-center justify-center bg-primary/10 rounded-lg icon-float">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-white/70">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Database className="animate-pulse" size={24} />,
      title: t('features.card1.title'),
      description: t('features.card1.desc'),
    },
    {
      icon: <Zap className="animate-bounce" size={24} />,
      title: t('features.card2.title'),
      description: t('features.card2.desc'),
    },
    {
      icon: <RefreshCw className="animate-spin-slow" size={24} />,
      title: t('features.card3.title'),
      description: t('features.card3.desc'),
    },
    {
      icon: <TrendingUp className="animate-pulse" size={24} />,
      title: t('features.card4.title'),
      description: t('features.card4.desc'),
    },
  ];

  return (
    <section id="features" className="py-20 bg-dark-500/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('features.title')}</h2>
          <p className="text-white/70 text-lg">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 100}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://wa.me/573228391374"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 rounded-full border border-primary/50 text-primary hover:bg-primary/10 transition-all duration-300"
          >
            {t('features.learnMore')}
            <svg
              className="ml-2 h-4 w-4 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
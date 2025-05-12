import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Check } from 'lucide-react';

interface PlanProps {
  title: string;
  price: string;
  features: string[];
  featureValues: string[];
  buttonText: string;
  popular?: boolean;
}

const PricingPlan: React.FC<PlanProps> = ({
  title,
  price,
  features,
  featureValues,
  buttonText,
  popular = false,
}) => {
  return (
    <div
      className={`rounded-xl p-6 ${
        popular
          ? 'bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 transform scale-105 lg:scale-110'
          : 'bg-dark-300'
      } flex flex-col h-full relative overflow-hidden card-hover`}
    >
      {popular && (
        <div className="absolute top-0 right-0">
          <div className="bg-primary/80 text-white px-4 py-1 rounded-bl-lg text-sm font-medium">
            Popular
          </div>
        </div>
      )}
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="flex items-end">
          <span className="text-3xl font-bold">{price}</span>
          {price !== 'Custom' && <span className="text-white/60 ml-1">/month</span>}
        </div>
      </div>
      <div className="flex-grow">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <span
                className={`w-5 h-5 rounded-full ${
                  popular ? 'bg-primary/20 text-primary' : 'bg-dark-200 text-white/80'
                } flex items-center justify-center mr-3 flex-shrink-0`}
              >
                <Check size={12} />
              </span>
              <div className="flex justify-between w-full">
                <span className="text-white/80">{feature}</span>
                <span className={`font-medium ${popular ? 'text-primary' : 'text-white'}`}>
                  {featureValues[index]}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8">
        <button
          className={`w-full py-2 rounded-lg font-medium transition-all ${
            popular
              ? 'gradient-button text-white'
              : 'bg-dark-200 text-white hover:bg-dark-100'
          }`}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

const Pricing: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    t('pricing.feature1'),
    t('pricing.feature2'),
    t('pricing.feature3'),
    t('pricing.feature4'),
    t('pricing.feature5'),
    t('pricing.feature6'),
  ];

  return (
    <section id="pricing" className="py-20 bg-dark-400">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('pricing.title')}</h2>
          <p className="text-white/70 text-lg">
            {t('pricing.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          <PricingPlan
            title={t('pricing.free')}
            price={t('pricing.freePrice')}
            features={features}
            featureValues={[
              t('pricing.free1'),
              t('pricing.free2'),
              t('pricing.free3'),
              t('pricing.free4'),
              t('pricing.free5'),
              t('pricing.free6'),
            ]}
            buttonText={t('pricing.startFree')}
          />
          <PricingPlan
            title={t('pricing.pro')}
            price={t('pricing.proPrice')}
            features={features}
            featureValues={[
              t('pricing.pro1'),
              t('pricing.pro2'),
              t('pricing.pro3'),
              t('pricing.pro4'),
              t('pricing.pro5'),
              t('pricing.pro6'),
            ]}
            buttonText={t('pricing.startPro')}
            popular={true}
          />
          <PricingPlan
            title={t('pricing.enterprise')}
            price={t('pricing.enterprisePrice')}
            features={features}
            featureValues={[
              t('pricing.enterprise1'),
              t('pricing.enterprise2'),
              t('pricing.enterprise3'),
              t('pricing.enterprise4'),
              t('pricing.enterprise5'),
              t('pricing.enterprise6'),
            ]}
            buttonText={t('pricing.contactSales')}
          />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
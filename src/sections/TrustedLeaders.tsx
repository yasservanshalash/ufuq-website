import React from 'react';
import Section from '../components/ui/Section';
import { useLocalization } from '../hooks/useLocalization';

const TrustedLeaders: React.FC = () => {
  const { t, isRTL } = useLocalization();

  const stats = [
    {
      value: t('trusted.stats.companies'),
      label: t('trusted.stats.companiesLabel'),
    },
    {
      value: t('trusted.stats.countries'),
      label: t('trusted.stats.countriesLabel'),
    },
    {
      value: t('trusted.stats.users'),
      label: t('trusted.stats.usersLabel'),
    },
    {
      value: t('trusted.stats.years'),
      label: t('trusted.stats.yearsLabel'),
    },
  ];

  return (
    <Section
      title={t('trusted.title')}
      subtitle={t('trusted.subtitle')}
      centered
      className="bg-white py-20"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-12">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="opacity-0 translate-y-8 animate-[fade-in-up_0.5s_ease-out_forwards]"
            style={{ 
              animationDelay: `${index * 0.1}s`,
              textAlign: isRTL ? 'right' : 'left'
            }}
          >
            <div className="flex flex-col items-center text-center">
              <span className="text-4xl md:text-5xl font-bold text-[#A6292E] mb-2">
                {stat.value}
              </span>
              <span className="text-lg text-gray-600">
                {stat.label}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Trusted Companies Logos Grid */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-75">
        {/* Add company logos here */}
        {Array(6).fill(null).map((_, index) => (
          <div
            key={index}
            className="w-32 h-16 bg-gray-100 rounded-lg flex items-center justify-center opacity-0 translate-y-8 animate-[fade-in-up_0.5s_ease-out_forwards]"
            style={{ animationDelay: `${(index + 4) * 0.1}s` }}
          >
            {/* Replace with actual company logos */}
            <div className="text-gray-400 text-sm">Logo {index + 1}</div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default TrustedLeaders; 
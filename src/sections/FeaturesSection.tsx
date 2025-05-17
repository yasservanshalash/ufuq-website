import React from 'react';
import Section from '../components/ui/Section';
import FeatureCard from '../components/ui/FeatureCard';
<<<<<<< HEAD
import { getFeatures } from '../data/features';
import { useLocalization } from '../hooks/useLocalization';

const FeaturesSection: React.FC = () => {
  const { t } = useLocalization();
  const features = getFeatures();

  return (
    <Section 
      id="modules"
      title={t('features.title')}
      subtitle={t('features.subtitle')}
=======
import { features } from '../data/features';

const FeaturesSection: React.FC = () => {
  return (
    <Section 
      id="features"
      title="Core Modules & Advanced Capabilities"
      subtitle="Our comprehensive ERP platform offers powerful tools to streamline your business operations"
>>>>>>> origin/main
      centered
      className="bg-slate-50"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="opacity-0 translate-y-8 animate-[fade-in-up_0.5s_ease-out_forwards]"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <FeatureCard feature={feature} />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default FeaturesSection;
import React, { useEffect } from 'react';
import Section from '../components/ui/Section';
import TeamSection from '../sections/TeamSection';
import { Card } from '../components/ui/Card';
import { Award, Target, Users, Clock } from 'lucide-react';
import { useLocalization } from '../hooks/useLocalization';

const AboutPage: React.FC = () => {
  const { t } = useLocalization();

  useEffect(() => {
    document.title = 'About Us | Ufuq ERP';
  }, []);

  const stats = [
    { icon: Users, label: t('about.stats.clients'), value: '500+' },
    { icon: Clock, label: t('about.stats.experience'), value: '15+' },
    { icon: Award, label: t('about.stats.awards'), value: '25+' },
    { icon: Target, label: t('about.stats.success'), value: '99%' },
  ];

  return (
    <>
      <Section className="bg-[#DCD6C9] pt-32">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#A6292E] mb-4">{t('about.title')}</h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#A6292E] mb-6">{t('about.story.title')}</h2>
            <p className="text-lg text-gray-700 mb-6">
              {t('about.story.paragraph1')}
            </p>
            <p className="text-lg text-gray-700">
              {t('about.story.paragraph2')}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-[#f7a3a3] rounded-full flex items-center justify-center text-[#A6292E]">
                    <stat.icon size={24} />
                  </div>
                </div>
                <div className="text-3xl font-bold text-[#A6292E] mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <TeamSection />

      <Section className="bg-slate-50">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#A6292E] mb-6">{t('about.vision.title')}</h2>
          <p className="text-lg text-gray-700 mb-8">
            {t('about.vision.description')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">{t('about.values.innovation')}</h3>
              <p className="text-gray-600">{t('about.values.innovation.desc')}</p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">{t('about.values.excellence')}</h3>
              <p className="text-gray-600">{t('about.values.excellence.desc')}</p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">{t('about.values.partnership')}</h3>
              <p className="text-gray-600">{t('about.values.partnership.desc')}</p>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
};

export default AboutPage;
import React, { useEffect } from 'react';
import Section from '../components/ui/Section';
import TeamSection from '../sections/TeamSection';
import { Card } from '../components/ui/Card';
import { Award, Target, Users, Clock } from 'lucide-react';
<<<<<<< HEAD
import { useLocalization } from '../hooks/useLocalization';

const AboutPage: React.FC = () => {
  const { t } = useLocalization();

=======

const AboutPage: React.FC = () => {
>>>>>>> origin/main
  useEffect(() => {
    document.title = 'About Us | Ufuq ERP';
  }, []);

  const stats = [
<<<<<<< HEAD
    { icon: Users, label: t('about.stats.clients'), value: '500+' },
    { icon: Clock, label: t('about.stats.experience'), value: '15+' },
    { icon: Award, label: t('about.stats.awards'), value: '25+' },
    { icon: Target, label: t('about.stats.success'), value: '99%' },
=======
    { icon: Users, label: 'Clients Worldwide', value: '500+' },
    { icon: Clock, label: 'Years of Experience', value: '15+' },
    { icon: Award, label: 'Industry Awards', value: '25+' },
    { icon: Target, label: 'Success Rate', value: '99%' },
>>>>>>> origin/main
  ];

  return (
    <>
      <Section className="bg-[#DCD6C9] pt-32">
        <div className="text-center mb-12">
<<<<<<< HEAD
          <h1 className="text-4xl md:text-5xl font-bold text-[#A6292E] mb-4">{t('about.title')}</h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            {t('about.subtitle')}
=======
          <h1 className="text-4xl md:text-5xl font-bold text-[#A6292E] mb-4">About Ufuq ERP</h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Transforming businesses through innovative enterprise solutions since 2010.
>>>>>>> origin/main
          </p>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
<<<<<<< HEAD
            <h2 className="text-3xl font-bold text-[#A6292E] mb-6">{t('about.story.title')}</h2>
            <p className="text-lg text-gray-700 mb-6">
              {t('about.story.paragraph1')}
            </p>
            <p className="text-lg text-gray-700">
              {t('about.story.paragraph2')}
=======
            <h2 className="text-3xl font-bold text-[#A6292E] mb-6">Our Story</h2>
            <p className="text-lg text-gray-700 mb-6">
              Founded in 2010, Ufuq ERP has been at the forefront of enterprise resource planning innovation. 
              Our mission is to empower businesses with intelligent, scalable solutions that drive growth and efficiency.
            </p>
            <p className="text-lg text-gray-700">
              What started as a small team of passionate developers has grown into a global organization, 
              serving hundreds of businesses across multiple industries.
>>>>>>> origin/main
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
<<<<<<< HEAD
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
=======
          <h2 className="text-3xl font-bold text-[#A6292E] mb-6">Our Vision</h2>
          <p className="text-lg text-gray-700 mb-8">
            We envision a future where every business, regardless of size, has access to enterprise-grade 
            solutions that drive innovation, efficiency, and sustainable growth.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-600">Continuously pushing the boundaries of what's possible in ERP solutions.</p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-600">Delivering exceptional quality and reliability in everything we do.</p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Partnership</h3>
              <p className="text-gray-600">Building lasting relationships with our clients and partners.</p>
>>>>>>> origin/main
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
};

export default AboutPage;
import React, { useEffect } from 'react';
import Section from '../components/ui/Section';
import TeamSection from '../sections/TeamSection';
import { Card } from '../components/ui/Card';
import { Award, Target, Users, Clock, Lightbulb, Star, Handshake } from 'lucide-react';
import { useLocalization } from '../hooks/useLocalization';
import img from '../sadu.png';
import logo from '../logo_final-3.png';
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
      <Section className="pt-32 relative">
        <div className="absolute inset-0 z-0 overflow-hidden border-b-4 border-[#A6292E]">
          <img 
            src={img} 
            alt="Sadu Pattern" 
            className="w-full h-full object-cover scale-110 transform-origin-center"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#DCD6C9] mb-4 mt-6">{t('about.title')}</h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
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
          <div>
            <img src={logo} alt="logo" className="w-full h-full object-cover" />
          </div>
        </div>
      </Section>

      {/* <TeamSection /> */}
      <div className='flex'>
      <Section className="bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#A6292E] mb-6">{t('about.vision.title')}</h2>
          <p className="text-lg text-gray-700 mb-8">
            {t('about.vision.description')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="flex mb-4">
                <div className="p-3 rounded-lg text-[#A6292E]">
                  <Lightbulb size={24} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('about.values.innovation')}</h3>
              <p className="text-gray-600">{t('about.values.innovation.desc')}</p>
            </Card>
            <Card className="p-6">
              <div className="flex mb-4">
                <div className="p-3 rounded-lg text-[#A6292E]">
                  <Star size={24} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('about.values.excellence')}</h3>
              <p className="text-gray-600">{t('about.values.excellence.desc')}</p>
            </Card>
            <Card className="p-6">
              <div className="flex mb-4">
                <div className="p-3 rounded-lg text-[#A6292E]">
                  <Handshake size={24} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('about.values.partnership')}</h3>
              <p className="text-gray-600">{t('about.values.partnership.desc')}</p>
            </Card>
          </div>
        </div>
      </Section>
            <Section className="bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#A6292E] mb-6">{t('about.vision.title')}</h2>
          <p className="text-lg text-gray-700 mb-8">
            {t('about.vision.description')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="flex mb-4">
                <div className="p-3 rounded-lg text-[#A6292E]">
                  <Lightbulb size={24} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('about.values.innovation')}</h3>
              <p className="text-gray-600">{t('about.values.innovation.desc')}</p>
            </Card>
            <Card className="p-6">
              <div className="flex mb-4">
                <div className="p-3 rounded-lg text-[#A6292E]">
                  <Star size={24} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('about.values.excellence')}</h3>
              <p className="text-gray-600">{t('about.values.excellence.desc')}</p>
            </Card>
            <Card className="p-6">
              <div className="flex mb-4">
                <div className="p-3 rounded-lg text-[#A6292E]">
                  <Handshake size={24} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('about.values.partnership')}</h3>
              <p className="text-gray-600">{t('about.values.partnership.desc')}</p>
            </Card>
          </div>
        </div>
      </Section>
      </div>
    </>
  );
};

export default AboutPage;
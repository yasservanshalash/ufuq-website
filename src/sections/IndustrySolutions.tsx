import React from 'react';
import Section from '../components/ui/Section';
import { Card, CardContent } from '../components/ui/Card';
import { Check } from 'lucide-react';
import Button from '../components/ui/Button';
import tradingImg from '../../public/trading and distribution.png'
import hospitalityImg from '../../public/hospitality.png'
import automotiveImg from '../../public/Automotive.png'
import realEstateImg from '../../public/real estate and property management.png'
import logisticsImg from '../../public/logistics and transportation.png'
import financialServicesImg from '../../public/financial services.png'
import posImg from '../../public/POS (2).png';
import manifacturing from '../../public/manifacturing.png';
import constructionImg from '../../public/construction.png';
import healthcareImg from '../../public/healthcare.png';
import { useLocalization } from '../hooks/useLocalization';

const IndustrySolutions: React.FC = () => {
  const { t } = useLocalization();

  const industries = [
    {
      title: t('industry.retail.title'),
      features: [
        t('industry.retail.feature1'),
        t('industry.retail.feature2'),
        t('industry.retail.feature3'),
        t('industry.retail.feature4')
      ],
      image: posImg
    },
    {
      title: t('industry.manufacturing.title'),
      features: [
        t('industry.manufacturing.feature1'),
        t('industry.manufacturing.feature2'),
        t('industry.manufacturing.feature3'),
        t('industry.manufacturing.feature4')
      ],
      image: manifacturing
    },
    {
      title: t('industry.construction.title'),
      features: [
        t('industry.construction.feature1'),
        t('industry.construction.feature2'),
        t('industry.construction.feature3'),
        t('industry.construction.feature4')
      ],
      image: constructionImg
    },
    {
      title: t('industry.healthcare.title'),
      features: [
        t('industry.healthcare.feature1'),
        t('industry.healthcare.feature2'),
        t('industry.healthcare.feature3'),
        t('industry.healthcare.feature4')
      ],
      image: healthcareImg
    },
    {
      title: t('industry.trading.title'),
      features: [
        t('industry.trading.feature1'),
        t('industry.trading.feature2'),
        t('industry.trading.feature3'),
        t('industry.trading.feature4')
      ],
      image: tradingImg
    },
    {
      title: t('industry.hospitality.title'),
      features: [
        t('industry.hospitality.feature1'),
        t('industry.hospitality.feature2'),
        t('industry.hospitality.feature3'),
        t('industry.hospitality.feature4')
      ],
      image: hospitalityImg
    },
    {
      title: t('industry.automotive.title'),
      features: [
        t('industry.automotive.feature1'),
        t('industry.automotive.feature2'),
        t('industry.automotive.feature3'),
        t('industry.automotive.feature4')
      ],
      image: automotiveImg
    },
    {
      title: t('industry.realestate.title'),
      features: [
        t('industry.realestate.feature1'),
        t('industry.realestate.feature2'),
        t('industry.realestate.feature3'),
        t('industry.realestate.feature4')
      ],
      image: realEstateImg
    },
    {
      title: t('industry.logistics.title'),
      features: [
        t('industry.logistics.feature1'),
        t('industry.logistics.feature2'),
        t('industry.logistics.feature3'),
        t('industry.logistics.feature4')
      ],
      image: logisticsImg
    },
    {
      title: t('industry.financial.title'),
      features: [
        t('industry.financial.feature1'),
        t('industry.financial.feature2'),
        t('industry.financial.feature3'),
        t('industry.financial.feature4')
      ],
      image: financialServicesImg
    }
  ];

  return (
    <Section
      id="industries"
      title={t('industry.title')}
      subtitle={t('industry.subtitle')}
      centered
      className="bg-slate-50"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {industries.map((industry, index) => (
          <div
            key={index}
            className="opacity-0 translate-y-8 animate-[fade-in-up_0.5s_ease-out_forwards]"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <Card className="h-full">
              <div className="h-48 overflow-hidden">
                <img 
                  src={industry.image} 
                  alt={industry.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">{industry.title}</h3>
                <ul className="space-y-3">
                  {industry.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="mr-2 text-[#A6292E]">
                        <Check size={20} />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full mt-6">
                  {t('button.learnMore')}
                </Button>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default IndustrySolutions;
import React, { useState, useEffect, useRef } from 'react';
import Section from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { 
  SearchIcon, 
  Lightbulb, 
  Code, 
  TestTube, 
  Upload, 
  HeartPulse,
  Settings,
  UserCheck,
  BarChart3 
} from 'lucide-react';
import { useLocalization } from '../hooks/useLocalization';
import img from '../sadu.png';
import imp1 from '../discovery and planning.png';
import imp2 from '../design.png';
import imp3 from '../testing.png';
import imp4 from '../development.png';
import imp5 from '../support.png';
import imp6 from '../deployment.png';

const ImplementationPage: React.FC = () => {
  const { t, isRTL } = useLocalization();
  const [currentStage, setCurrentStage] = useState(0);
  const stageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    document.title = 'Implementation | Ufuq ERP';
  }, []);

  const implementationStages = [
    {
      id: 'discovery',
      icon: SearchIcon,
      title: t('implementation.stages.discovery.title'),
      description: t('implementation.stages.discovery.description')
    },
    {
      id: 'design',
      icon: Lightbulb,
      title: t('implementation.stages.design.title'),
      description: t('implementation.stages.design.description')
    },
    {
      id: 'development',
      icon: Code,
      title: t('implementation.stages.development.title'),
      description: t('implementation.stages.development.description')
    },
    {
      id: 'testing',
      icon: TestTube,
      title: t('implementation.stages.testing.title'),
      description: t('implementation.stages.testing.description')
    },
    {
      id: 'deployment',
      icon: Upload,
      title: t('implementation.stages.deployment.title'),
      description: t('implementation.stages.deployment.description')
    },
    {
      id: 'support',
      icon: HeartPulse,
      title: t('implementation.stages.support.title'),
      description: t('implementation.stages.support.description')
    }
  ];

  // Track visibility of each stage
  const stageVisibility = implementationStages.map((_, index) => {
    const ref = (el: HTMLDivElement) => {
      stageRefs.current[index] = el;
    };
    const isVisible = useIntersectionObserver(
      { current: stageRefs.current[index] },
      { threshold: 0.5 }
    );
    return { ref, isVisible };
  });

  // Update current stage based on visibility
  useEffect(() => {
    const visibleIndex = stageVisibility.findIndex(stage => stage.isVisible);
    if (visibleIndex !== -1) {
      setCurrentStage(visibleIndex);
    }
  }, [stageVisibility.map(stage => stage.isVisible).join(',')]);

  return (
    <>
      <Section className="pt-32 relative mt-10">
        <div className="absolute inset-0 z-0 overflow-hidden border-b-4 border-[#A6292E]">
          <img 
            src={img} 
            alt="Sadu Pattern" 
            className="w-full h-full object-cover scale-110 transform-origin-center"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#DCD6C9] mb-4 mt-6">{t('implementation.title')}</h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            {t('implementation.subtitle')}
          </p>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#A6292E] mb-4">{t('implementation.stages.title')}</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            {t('implementation.stages.subtitle')}
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {/* Centered Timeline */}
          <div className="relative">
            {/* Vertical timeline line - hidden on mobile, centered on desktop */}
            <div className="hidden md:block absolute w-1 h-full bg-[#A6292E] z-0" style={{ left: 'calc(50% - 0.5px)' }}></div>
            
            {/* Vertical timeline line for mobile - centered in the page */}
            <div className="md:hidden absolute w-1 h-full bg-[#A6292E] z-0 left-1/2 -ml-0.5"></div>
            
            {/* Implementation stages */}
            {implementationStages.map((stage, index) => (
              <div 
                key={stage.id} 
                ref={stageVisibility[index].ref}
                className="relative z-10 flex flex-col md:flex-row items-center gap-4 md:gap-12 mb-16 last:mb-0"
              >
                {/* Timeline dot for mobile - visible only on small screens */}
                <div className="md:hidden w-8 h-8 bg-[#A6292E] rounded-full flex items-center justify-center mb-4">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                
                {/* Card - full width on mobile, left positioned on desktop */}
                <div className="w-full md:w-6/12 px-4 md:pr-8 md:relative" style={{ right: isRTL ? '-60px' : '30px' }}>
                  <Card className="p-6 hover:shadow-lg transition-all duration-300 w-full">
                    <div>
                      <h3 className="text-xl font-semibold text-[#A6292E] mb-2 text-center">{stage.title}</h3>
                      <p className="text-gray-700 text-center">{stage.description}</p>
                    </div>
                  </Card>
                </div>
                
                {/* Timeline dot for desktop - hidden on small screens */}
                <div className="hidden md:flex w-1/12 justify-center relative z-20" style={{ right: isRTL ? '-39px' : '37px' }}>
                  <div className="w-8 h-8 bg-[#A6292E] rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
                
                {/* Icon or image - full width on mobile, right positioned on desktop */}
                <div className="w-full md:w-5/12 px-4 md:pl-6 flex justify-center md:justify-start mt-4 md:mt-0">
                  {stage.id === 'discovery' ? (
                    <div className="rounded-md overflow-hidden" style={{ maxWidth: '200px' }}>
                      <img src={imp1} alt="Discovery Phase" className="w-full h-auto" />
                    </div>
                  ) : stage.id === 'design' ? (
                    <div className="rounded-md overflow-hidden" style={{ maxWidth: '200px' }}>
                      <img src={imp2} alt="Design Phase" className="w-full h-auto" />
                    </div>
                  ) : stage.id === 'testing' ? (
                    <div className="rounded-md overflow-hidden" style={{ maxWidth: '200px' }}>
                      <img src={imp3} alt="Testing Phase" className="w-full h-auto" />
                    </div>
                  ) : stage.id === 'development' ? (
                    <div className="rounded-md overflow-hidden" style={{ maxWidth: '200px' }}>
                      <img src={imp4} alt="Development Phase" className="w-full h-auto" />
                    </div>
                  ) : stage.id === 'deployment' ? (
                    <div className="rounded-md overflow-hidden" style={{ maxWidth: '200px' }}>
                      <img src={imp6} alt="Deployment Phase" className="w-full h-auto" />
                    </div>
                  ) : stage.id === 'support' ? (
                    <div className="rounded-md overflow-hidden" style={{ maxWidth: '200px' }}>
                      <img src={imp5} alt="Support Phase" className="w-full h-auto" />
                    </div>
                  ) : (
                    <div className="p-3 rounded-lg text-[#A6292E] bg-white shadow-md">
                      <stage.icon size={28} />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-slate-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#A6292E] mb-4">{t('implementation.approach.title')}</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            {t('implementation.approach.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="p-6 hover:shadow-lg transition-all duration-300">
            <div className="flex mb-4">
              <div className="p-3 rounded-lg text-[#A6292E]">
                <Settings size={24} />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-[#A6292E] mb-3">Tailored Solutions</h3>
            <p className="text-gray-700">Every implementation is customized to your specific business requirements and industry needs.</p>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-all duration-300">
            <div className="flex mb-4">
              <div className="p-3 rounded-lg text-[#A6292E]">
                <UserCheck size={24} />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-[#A6292E] mb-3">Expert Guidance</h3>
            <p className="text-gray-700">Our experienced team provides continuous support throughout the entire implementation journey.</p>
          </Card>
          
          <Card className="p-6 hover:shadow-lg transition-all duration-300">
            <div className="flex mb-4">
              <div className="p-3 rounded-lg text-[#A6292E]">
                <BarChart3 size={24} />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-[#A6292E] mb-3">Minimal Disruption</h3>
            <p className="text-gray-700">We ensure your business operations continue smoothly during the transition to the new system.</p>
          </Card>
        </div>
      </Section>
    </>
  );
};

export default ImplementationPage;
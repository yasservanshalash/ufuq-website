import React, { useState, useEffect, useRef } from 'react';
import Section from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { Scene } from '../components/3d/Scene';
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

const ImplementationPage: React.FC = () => {
  const { t } = useLocalization();
  const [currentStage, setCurrentStage] = useState(0);
  const stageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    document.title = 'Implementation | Ufuq ERP';
  }, []);

  const implementationStages = [
    {
      id: 'discovery',
      icon: SearchIcon,
      title: 'Discovery & Planning',
      description: 'This stage focuses on analyzing organizational needs and defining project goals.'
    },
    {
      id: 'design',
      icon: Lightbulb,
      title: 'Design',
      description: 'Defines the system\'s architecture, modules, and interface based on planning requirements.'
    },
    {
      id: 'development',
      icon: Code,
      title: 'Development',
      description: 'The ERP system is built, customized, and integrated, including coding and database setup.'
    },
    {
      id: 'testing',
      icon: TestTube,
      title: 'Testing',
      description: 'Extensive testing ensures the system works as intended, covering all key functions.'
    },
    {
      id: 'deployment',
      icon: Upload,
      title: 'Deployment',
      description: 'Deployment includes system installation, data migration, and user training for a smooth transition.'
    },
    {
      id: 'support',
      icon: HeartPulse,
      title: 'Support & Updates',
      description: 'Ongoing support includes issue resolution, user assistance, and regular updates to meet evolving needs.'
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
          <h1 className="text-4xl md:text-5xl font-bold text-[#DCD6C9] mb-4 mt-6">Implementation Process</h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Our comprehensive approach ensures a successful ERP implementation tailored to your business needs
          </p>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#A6292E] mb-4">Bcor ERP Implementation Stages</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Our proven implementation methodology ensures a successful transition to your new ERP system
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-start">
          {/* 3D Character */}
          <div className="lg:sticky lg:top-24 w-full lg:w-1/2 h-[400px] mb-8 lg:mb-0">
            <Scene 
              currentStage={currentStage} 
              isVisible={stageVisibility[currentStage]?.isVisible} 
            />
          </div>

          {/* Timeline */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="absolute left-8 top-0 h-full w-1 bg-[#A6292E]"></div>
              
              {implementationStages.map((stage, index) => (
                <div 
                  key={stage.id}
                  ref={stageVisibility[index].ref}
                  className="relative z-10 mb-16 last:mb-0 ml-16"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[-32px] w-8 h-8 bg-[#A6292E] rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  
                  <Card className="p-6 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start">
                      <div className="mr-4 p-3 rounded-lg text-[#A6292E]">
                        <stage.icon size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-[#A6292E] mb-2">{stage.title}</h3>
                        <p className="text-gray-700">{stage.description}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-slate-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#A6292E] mb-4">Our Implementation Approach</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We prioritize your business needs and ensure a smooth transition with minimal disruption
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
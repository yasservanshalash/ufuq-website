import React, { useEffect, useState } from 'react';
import Button from '../components/ui/Button';
import Container from '../components/ui/Container';
import { ArrowRight, CheckCircle } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-[#DCD6C9]">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTh2LTRoLTJ2NGgyem0tOCA4aDJ2LTRoLTJ2NHptMC04di00aDJ2NGgtMnoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-6">
              Smarter ERP Solutions for{' '}
              <span className="bg-clip-text bg-gradient-to-r text-[#A6292E]">
                Growing Businesses
              </span>
            </h1>
            <p className="text-xl text-black-300 mb-8 max-w-xl mx-auto lg:mx-0">
              Ufuq delivers intelligent, scalable, and cost-effective ERP solutions tailored for small and medium-sized enterprises.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <Button size="lg" className="group">
                <span>Request a Demo</span>
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
              <Button variant="outline" size="lg" className="text-[#A6292E] border-white hover:bg-white/10 hover:text-white">
                Get in Touch
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center text-[#A6292E]">
                <CheckCircle size={20} className="mr-2" />
                <span>Cloud & On-Premise ERP</span>
              </div>
              <div className="flex items-center text-[#A6292E]">
                <CheckCircle size={20} className="mr-2" />
                <span>Industry-Specific Modules</span>
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative">
              <div className="absolute -inset-1 bg-[#A6292E] rounded-lg blur-lg opacity-75 animate-pulse"></div>
              <div className="relative bg-white dark:bg-slate-800 rounded-lg shadow-xl overflow-hidden">
                <img 
                  src="https://media.discordapp.net/attachments/1301600905506066494/1372708620025729085/Screen_Shot_2025-05-13_at_1.58.58_PM.png?ex=6827c206&is=68267086&hm=8f619e1ecebdb613a5909d6c8c75da74a89288076ce06cbb879bb04e2b791c22&=&format=webp&quality=lossless" 
                  alt="Business Analytics Dashboard" 
                  className="w-[full] h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
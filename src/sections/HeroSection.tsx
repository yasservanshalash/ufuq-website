import React, { useEffect, useState } from 'react';
import Button from '../components/ui/Button';
import Container from '../components/ui/Container';
import { ArrowRight, CheckCircle } from 'lucide-react';
import portrait from '../portrait.png';
import { useLocalization } from '../hooks/useLocalization';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t, isRTL } = useLocalization();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 xs:pb-0 overflow-hidden bg-[#DCD6C9]">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTh2LTRoLTJ2NGgyem0tOCA4aDJ2LTRoLTJ2NHptMC04di00aDJ2NGgtMnoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`order-2 lg:order-1 text-center lg:text-start lg:pt-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-black leading-tight mb-6 xs:mt-[-75px] xs:text-left xs:text-5xl" style={{ lineHeight: isRTL ? '1.2' : '1' }}>
              { isRTL ? "حلول تخطيط موارد المؤسسات الذكية " : t('hero.title')}
              <span className="bg-clip-text bg-gradient-to-r text-[#A6292E]">
                { isRTL ? null : <br />}
                { isRTL ? "للشركات النامية" : t('hero.titleHighlight')}
              </span>
            </h1>
            <p className="text-xl text-black-300 mb-8 max-w-xl mx-auto lg:mx-0 xs:text-left">
              {t('hero.description')}
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-8" style={{ gap: isRTL ? '10px' : '0px' }}>
              <Link to="/contact">
                <Button size="lg" className="group">
                  <span>{t('button.requestDemo')}</span>
                  <ArrowRight className="mx-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Button>
              </Link>
              <a href={`https://wa.me/+16479493768`} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="text-[#A6292E] border-white hover:bg-white/10 hover:text-white">
                  {t('button.getInTouch')}
                </Button>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-6 xs:hidden lg:flex relative right-2">
              <div className="flex items-center text-[#A6292E]">
                <CheckCircle size={20} className="mx-2" />
                <span>{t('hero.feature1')}</span>
              </div>
              <div className="flex items-center text-[#A6292E] xs:hidden lg:flex">
                <CheckCircle size={20} className="mx-2" />
                <span>{t('hero.feature2')}</span>
              </div>
            </div>
          </div>

          {/* Mobile Image */}
          <div className="order-1 lg:order-2 block lg:hidden transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}"
          style={{
            transform: 'translate(-13%, -10%)',
            width: '130%',
            height: '100%'
          }}>
            <div className="relative">
              <img 
                src={portrait} 
                alt="Business Analytics Dashboard" 
                className="w-full h-auto max-w-[600px] mx-auto"
                style={{
                  transform: isRTL ? 'scaleX(-1)' : 'none',
                  width: '100%',
                  height: '100%'
                }}
              />
            </div>
          </div>

          {/* Desktop Image */}
          <div className={`order-1 lg:order-2 hidden lg:block transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} 
          style={{
            position: 'absolute',
            top: '35%',
            left: isRTL ? '10%' : '90%',
            transform: 'translate(-55%, -45%)',
            width: '100%',
            height: '100%',
            zIndex: -1
          }}>
            <div className="relative">
              <div className="absolute animate-pulse"></div>
              <div className="relative">
                <img 
                  src={portrait} 
                  alt="Business Analytics Dashboard" 
                  className="w-full h-auto relative bottom-10"
                  style={{
                    width: "1400px", 
                    height: "200%",
                    transform: isRTL ? 'scaleX(-1)' : 'none'
                  }}
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
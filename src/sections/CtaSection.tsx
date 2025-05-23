import React from 'react';
import Button from '../components/ui/Button';
import Container from '../components/ui/Container';
import { ArrowRight } from 'lucide-react';
import { useLocalization } from '../hooks/useLocalization';

const CtaSection: React.FC = () => {
  const { t, isRTL } = useLocalization();

  return (
    <section className="py-16 bg-gradient-to-r from-[#A6292E] to-[#A6292E] text-white">
      <Container>
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 max-w-2xl">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl">
            {t('cta.description')}
          </p>
          <div className={`flex flex-col sm:flex-row space-y-4 sm:space-y-0 ${isRTL ? 'sm:space-x-reverse sm:space-x-4' : 'sm:space-x-4'}`}>
            <Button 
              size="lg" 
              className="group"
              style={{ backgroundColor: '#DCD6C9', color: '#A6292E' }}
            >
              <span>{t('cta.button.start')}</span>
              <ArrowRight 
                className={`${isRTL ? 'mr-2 group-hover:-translate-x-1' : 'ml-2 group-hover:translate-x-1'} transition-transform`} 
                size={18} 
              />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-white border-white hover:bg-white/10 hover:text-white"
            >
              {t('cta.button.contact')}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CtaSection;
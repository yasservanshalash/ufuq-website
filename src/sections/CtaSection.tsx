import React from 'react';
import Button from '../components/ui/Button';
import Container from '../components/ui/Container';
import { ArrowRight } from 'lucide-react';

const CtaSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-[#A6292E] to-[#A6292E] text-white">
      <Container>
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 max-w-2xl">
            Ready to transform your business operations?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl">
            Join thousands of businesses that have streamlined their operations and
            accelerated growth with Ufuq ERP.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              size="lg" 
              className="group"
              style={{ backgroundColor: '#DCD6C9', color: '#A6292E' }}
            >
              <span>Get Started Today</span>
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-white border-white hover:bg-white/10 hover:text-white"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CtaSection;
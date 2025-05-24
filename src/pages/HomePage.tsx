import React, { useEffect } from 'react';
import HeroSection from '../sections/HeroSection';
import FeaturesSection from '../sections/FeaturesSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import IndustrySolutions from '../sections/IndustrySolutions';
import ContactSection from '../sections/ContactSection';
import CtaSection from '../sections/CtaSection';
// import TrustedLeaders from '../sections/TrustedLeaders';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Ufuq ERP | Enterprise Solutions';
  }, []);

  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <IndustrySolutions />
      {/* <TrustedLeaders /> */}
      {/* <TestimonialsSection /> */}
      <ContactSection />
      <CtaSection />
    </>
  );
};

export default HomePage;
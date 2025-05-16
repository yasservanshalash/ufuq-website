import React, { useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './sections/HeroSection';
import FeaturesSection from './sections/FeaturesSection';
import TestimonialsSection from './sections/TestimonialsSection';
import IndustrySolutions from './sections/IndustrySolutions';
import ContactSection from './sections/ContactSection';
import CtaSection from './sections/CtaSection';

function App() {
  useEffect(() => {
    document.title = 'Ufuq ERP | Enterprise Solutions';
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <IndustrySolutions />
        <TestimonialsSection />
        <ContactSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
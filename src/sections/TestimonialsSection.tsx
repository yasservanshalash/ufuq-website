import React, { useState } from 'react';
import Section from '../components/ui/Section';
import TestimonialCard from '../components/ui/TestimonialCard';
import { testimonials } from '../data/testimonials';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <Section
      id="testimonials"
      title="Trusted by Industry Leaders"
      subtitle="Hear from our clients about their experience with our ERP solutions"
      centered
    >
      {/* Desktop View - Show all testimonials */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>

      {/* Mobile View - Carousel */}
      <div className="md:hidden">
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button 
            className="absolute top-1/2 left-0 -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
            onClick={handlePrev}
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            className="absolute top-1/2 right-0 -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
            onClick={handleNext}
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === activeIndex ? 'bg-[#A6292E]' : 'bg-slate-300'
              }`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default TestimonialsSection;
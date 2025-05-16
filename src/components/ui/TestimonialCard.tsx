import React from 'react';
import { Card, CardContent } from './Card';
import { TestimonialType } from '../../types';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: TestimonialType;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <Card hoverable className="h-full">
      <CardContent className="p-6">
        <div className="mb-4 text-[#A6292E]">
          <Quote size={24} />
        </div>
        <p className="italic text-slate-700 mb-6">{testimonial.quote}</p>
        <div className="flex items-center">
          <img 
            src={testimonial.image} 
            alt={testimonial.author} 
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <div>
            <p className="font-semibold">{testimonial.author}</p>
            <p className="text-sm text-slate-600">{testimonial.company}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
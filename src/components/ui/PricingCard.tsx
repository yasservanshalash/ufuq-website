import React from 'react';
import { Card, CardHeader, CardContent, CardFooter } from './Card';
import Button from './Button';
import { PricingPlan } from '../../types';
import { Check } from 'lucide-react';

interface PricingCardProps {
  plan: PricingPlan;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan }) => {
  return (
    <Card 
      className={`h-full flex flex-col ${
        plan.highlighted 
          ? 'border-2 border-teal-500 shadow-lg relative' 
          : ''
      }`}
    >
      {plan.highlighted && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span className="bg-teal-500 text-white text-xs font-semibold px-4 py-1 rounded-full">
            Most Popular
          </span>
        </div>
      )}
      <CardHeader>
        <h3 className="text-2xl font-bold">{plan.name}</h3>
        <div className="mt-4">
          <span className="text-3xl font-bold">{plan.price}</span>
          {plan.price !== 'Custom' && <span className="text-slate-500">/month</span>}
        </div>
        <p className="mt-2 text-slate-600">{plan.description}</p>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-3">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2 text-teal-500">
                <Check size={20} />
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button 
          variant={plan.highlighted ? 'primary' : 'outline'} 
          className="w-full"
        >
          {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
import React from 'react';
import Section from '../components/ui/Section';
import { Card, CardContent } from '../components/ui/Card';
import { Check } from 'lucide-react';
import Button from '../components/ui/Button';

const IndustrySolutions: React.FC = () => {
  const industries = [
    {
      title: 'Retail & POS',
      features: [
        'Inventory Management',
        'Point of Sale',
        'Customer Loyalty',
        'Multi-store Operations'
      ],
      image: 'https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      title: 'Manufacturing',
      features: [
        'Production Planning',
        'Quality Control',
        'Material Requirements',
        'Cost Management'
      ],
      image: 'https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      title: 'Construction',
      features: [
        'Project Management',
        'Resource Planning',
        'Contract Management',
        'Site Operations'
      ],
      image: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      title: 'Healthcare',
      features: [
        'Patient Management',
        'Appointment Scheduling',
        'Inventory Control',
        'Billing & Insurance'
      ],
      image: 'https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      title: 'Trading and Distribution',
      features: [
        'Inventory Management',
        'Point of Sale',
        'Customer Loyalty',
        'Multi-store Operations'
      ],
      image: 'https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      title: 'Hospitality and Restaurants',
      features: [
        'Inventory Management',
        'Point of Sale',
        'Customer Loyalty',
        'Multi-store Operations'
      ],
      image: 'https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      title: 'Automotive and Workshop Services',
      features: [
        'Inventory Management',
        'Point of Sale',
        'Customer Loyalty',
        'Multi-store Operations'
      ],
      image: 'https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      title: 'Real Estate and Property Management',
      features: [
        'Inventory Management',
        'Point of Sale',
        'Customer Loyalty',
        'Multi-store Operations'
      ],
      image: 'https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      title: 'Logistics and Transportation',
      features: [
        'Inventory Management',
        'Point of Sale',
        'Customer Loyalty',
        'Multi-store Operations'
      ],
      image: 'https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      title: 'Financial Services',
      features: [
        'Inventory Management',
        'Point of Sale',
        'Customer Loyalty',
        'Multi-store Operations'
      ],
      image: 'https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  return (
    <Section
      id="industries"
      title="Industry Solutions"
      subtitle="Tailored ERP solutions designed for your specific industry needs"
      centered
      className="bg-slate-50"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {industries.map((industry, index) => (
          <div
            key={index}
            className="opacity-0 translate-y-8 animate-[fade-in-up_0.5s_ease-out_forwards]"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <Card className="h-full">
              <div className="h-48 overflow-hidden">
                <img 
                  src={industry.image} 
                  alt={industry.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">{industry.title}</h3>
                <ul className="space-y-3">
                  {industry.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <span className="mr-2 text-[#A6292E]">
                        <Check size={20} />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full mt-6">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default IndustrySolutions;
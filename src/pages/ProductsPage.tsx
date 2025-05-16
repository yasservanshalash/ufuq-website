import React, { useEffect } from 'react';
import Section from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Check, ArrowRight, Scale, HeadphonesIcon, RefreshCw } from 'lucide-react';
import img from "../sadu.png"
import bcorImg from "../bcor.png"

const ProductsPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Products | Ufuq ERP';
  }, []);

  const products = [
    {
      name: 'Ufuq Core ERP',
      description: 'Complete enterprise resource planning solution for growing businesses',
      features: [
        'Financial Management',
        'Inventory Control',
        'Human Resources',
        'Project Management',
        'Supply Chain Management',
        'Business Intelligence',
      ],
      image: 'https://us.images.westend61.de/0001876358pw/group-of-middle-eastern-corporate-business-people-wearing-traditional-emirati-clothes-meeting-in-the-office-in-dubai-business-team-working-and-brainstorming-in-the-uae-DMDF02237.jpg'
    }
  ];

  return (
    <>
      <Section className="pt-32 relative">
        <div className="absolute inset-0 z-0 overflow-hidden border-b-4 border-[#A6292E]">
          <img 
            src={img} 
            alt="Sadu Pattern" 
            className="w-full h-full object-cover scale-110 transform-origin-center"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#DCD6C9] mb-4 mt-6">Our Products</h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Comprehensive ERP solutions designed to meet your business needs
          </p>
        </div>
      </Section>

      <Section className="bg-white">
        {products.map((product, index) => (
          <div key={index} className="mb-16 last:mb-0">
            <Card className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="p-8">
                  <div className='flex items-center'>
                  <h2 className="text-3xl font-bold text-[#A6292E] mb-4">{product.name}</h2>
                  <img src={bcorImg} className='w-[50px] relative bottom-1'/>
                  </div>
                  <p className="text-lg text-gray-700 mb-6">{product.description}</p>
                  <ul className="space-y-4 mb-8">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="text-[#A6292E] mr-3" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex space-x-4">
                    <Button className="group">
                      Modules
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
                <div className="relative h-[400px] lg:h-auto">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </Card>
          </div>
        ))}
      </Section>

      <Section className="bg-slate-50">
        <div className="text-center">
          <div className='flex'>
          <h2 className="text-3xl font-bold text-[#A6292E] mb-6">Why Choose Ufuq ERP?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-6">
              <div className="flex justify-center mb-4">
                <Scale className="text-[#A6292E] w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Scalable Solutions</h3>
              <p className="text-gray-600">Grow your business with confidence using our scalable ERP solutions.</p>
            </Card>
            <Card className="p-6">
              <div className="flex justify-center mb-4">
                <HeadphonesIcon className="text-[#A6292E] w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Support</h3>
              <p className="text-gray-600">24/7 support from our team of ERP implementation experts.</p>
            </Card>
            <Card className="p-6">
              <div className="flex justify-center mb-4">
                <RefreshCw className="text-[#A6292E] w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Regular Updates</h3>
              <p className="text-gray-600">Stay ahead with regular feature updates and security patches.</p>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
};

export default ProductsPage;
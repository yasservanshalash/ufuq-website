import { PricingPlan } from '../types';

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Starter',
    price: '$499',
    description: 'Essential ERP features for small businesses',
    features: [
      'Financial Management',
      'Basic Inventory Control',
      'Customer Management',
      'Up to 5 users',
      'Standard Support',
      'Cloud Hosting',
    ],
  },
  {
    name: 'Professional',
    price: '$999',
    description: 'Comprehensive solution for growing businesses',
    features: [
      'All Starter features',
      'Advanced Supply Chain',
      'HR & Payroll',
      'Business Intelligence',
      'Up to 20 users',
      'Priority Support',
      'Data Migration Assistance',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Tailored solutions for large organizations',
    features: [
      'All Professional features',
      'Multi-company Management',
      'Advanced Customization',
      'API Access',
      'Unlimited users',
      'Dedicated Account Manager',
      'On-premise Option Available',
    ],
  },
];
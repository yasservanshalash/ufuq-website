export type NavItem = {
  title: string;
  href: string;
  children?: NavItem[];
};

export type TestimonialType = {
  id: number;
  quote: string;
  author: string;
  company: string;
  image: string;
};

export type FeatureType = {
  title: string;
  description: string;
  icon: string;
};

export type PricingPlan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

export type TeamMember = {
  name: string;
  position: string;
  image: string;
  bio: string;
};
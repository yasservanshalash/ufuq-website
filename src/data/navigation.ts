import { NavItem } from '../types';

export const mainNavItems: NavItem[] = [
  {
    title: 'Features',
    href: '#features',
    children: [
      {
        title: 'Finance',
        href: '#finance',
      },
      {
        title: 'Trading',
        href: '#trading',
      },
      {
        title: 'Inventory',
        href: '#inventory',
      },
      {
        title: 'HRM',
        href: '#hrm',
      },
    ],
  },
  {
    title: 'Industries',
    href: '#industries',
    children: [
      {
        title: 'Retail & POS',
        href: '#retail',
      },
      {
        title: 'Manufacturing',
        href: '#manufacturing',
      },
      {
        title: 'Construction',
        href: '#construction',
      },
      {
        title: 'Healthcare',
        href: '#healthcare',
      },
    ],
  },
  {
    title: 'Implementation',
    href: '#implementation',
  },
  {
    title: 'About',
    href: '#about',
  },
  {
    title: 'Contact',
    href: '#contact',
  },
];

export const footerNavItems = [
  {
    title: 'Company',
    items: [
      { title: 'About Us', href: '#about' },
      { title: 'Implementation', href: '#implementation' },
      { title: 'Contact', href: '#contact' },
      { title: 'Partners', href: '#partners' },
    ],
  },
  {
    title: 'Solutions',
    items: [
      { title: 'Retail & POS', href: '#retail' },
      { title: 'Manufacturing', href: '#manufacturing' },
      { title: 'Healthcare', href: '#healthcare' },
      { title: 'Construction', href: '#construction' },
    ],
  },
  {
    title: 'Features',
    items: [
      { title: 'Finance', href: '#finance' },
      { title: 'Trading', href: '#trading' },
      { title: 'Inventory', href: '#inventory' },
      { title: 'HRM', href: '#hrm' },
    ],
  },
  {
    title: 'Resources',
    items: [
      { title: 'Documentation', href: '#docs' },
      { title: 'Support', href: '#support' },
      { title: 'Blog', href: '#blog' },
      { title: 'Case Studies', href: '#case-studies' },
    ],
  },
];
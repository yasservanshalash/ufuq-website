import { NavItem } from '../types';

export const mainNavItems: NavItem[] = [
  {
    title: 'Products',
    href: '/products',
  },
  {
<<<<<<< HEAD
    title: 'Modules',
    href: '#modules',
    // children: [
    //   {
    //     title: 'Finance',
    //     href: '#finance',
    //   },
    //   {
    //     title: 'Trading',
    //     href: '#trading',
    //   },
    //   {
    //     title: 'Inventory',
    //     href: '#inventory',
    //   },
    //   {
    //     title: 'HRM',
    //     href: '#hrm',
    //   },
    // ],
=======
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
>>>>>>> origin/main
  },
  {
    title: 'Industries',
    href: '#industries',
<<<<<<< HEAD
    // children: [
    //   {
    //     title: 'Retail & POS',
    //     href: '#retail',
    //   },
    //   {
    //     title: 'Manufacturing',
    //     href: '#manufacturing',
    //   },
    //   {
    //     title: 'Construction',
    //     href: '#construction',
    //   },
    //   {
    //     title: 'Healthcare',
    //     href: '#healthcare',
    //   },
    // ],
  },
  {
    title: 'Implementation',
    href: '/implementation',
=======
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
>>>>>>> origin/main
  },
  {
    title: 'About',
    href: '/about',
  },
<<<<<<< HEAD

=======
  {
    title: 'Contact',
    href: '/contact',
  },
>>>>>>> origin/main
];

export const footerNavItems = [
  {
    title: 'Company',
    items: [
      { title: 'About Us', href: '/about' },
<<<<<<< HEAD
      { title: 'Implementation', href: '/implementation' },
=======
      { title: 'Implementation', href: '#implementation' },
>>>>>>> origin/main
      { title: 'Contact', href: '/contact' },
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
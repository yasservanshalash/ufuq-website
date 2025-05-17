import React from 'react';
import Container from '../ui/Container';
import { footerNavItems } from '../../data/navigation';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../../logo.svg.png';
import logoMobile from '../../logo-mobile.png';
<<<<<<< HEAD
import { useLocalization } from '../../hooks/useLocalization';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLocalization();

  // Create translated footer navigation items
  const translatedFooterItems = footerNavItems.map(group => {
    const groupKey = group.title.toLowerCase();
    return {
      ...group,
      title: t(`footer.${groupKey}`),
      items: group.items.map(item => {
        // Create a standardized key for translation - handle special cases
        let itemKey;
        
        if (item.title === 'Retail & POS') {
          itemKey = 'retail';
        } else if (item.title === 'Case Studies') {
          itemKey = 'casestudies';
        } else if (item.title === 'About Us') {
          itemKey = 'aboutus';
        } else {
          itemKey = item.title.toLowerCase().replace(/\s+/g, '');
        }
        
        return {
          ...item,
          title: t(`footer.${groupKey}.${itemKey}`)
        };
      })
    };
  });
=======

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
>>>>>>> origin/main

  return (
    <footer className="bg-[#DCD6C9] text-[#A6292E] pt-16 pb-6">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              {/* Mobile logo - shown on small screens */}
              <img 
                src={logoMobile} 
                alt="Ufuq ERP" 
                className="md:hidden h-10 scale-150"
              />
              {/* Desktop logo - hidden on small screens */}
              <img 
                src={logo} 
                alt="Ufuq ERP" 
                className="hidden md:block h-12 scale-150 ml-5" 
              />
            </div>
            <p className="text-black mb-6 max-w-md">
<<<<<<< HEAD
              {t('footer.companyDescription')}
=======
              Transforming businesses with integrated enterprise solutions. 
              We help companies streamline operations and drive growth through 
              innovative ERP technology.
>>>>>>> origin/main
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-[#A6292E] text-white hover:bg-primary-800 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-[#A6292E] text-white hover:bg-primary-800 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-[#A6292E] text-white hover:bg-primary-800 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-[#A6292E] text-white hover:bg-primary-800 transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Nav Links */}
<<<<<<< HEAD
          {translatedFooterItems.map((group, index) => (
=======
          {footerNavItems.map((group, index) => (
>>>>>>> origin/main
            <div key={index}>
              <h3 className="font-semibold text-lg mb-4">{group.title}</h3>
              <ul className="space-y-2">
                {group.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a 
                      href={item.href} 
                      className="text-black hover:text-primary-500 transition-colors"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <div className="mb-4 md:mb-0 space-y-3">
              <div className="flex items-center text-black">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#A6292E] text-white mr-3">
                  <Phone size={14} />
                </div>
<<<<<<< HEAD
                <span>{t('footer.phone')}</span>
=======
                <span>+1 (555) 123-4567</span>
>>>>>>> origin/main
              </div>
              <div className="flex items-center text-black">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#A6292E] text-white mr-3">
                  <Mail size={14} />
                </div>
<<<<<<< HEAD
                <span>{t('footer.email')}</span>
=======
                <span>contact@ufuqerp.com</span>
>>>>>>> origin/main
              </div>
              <div className="flex items-center text-black">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#A6292E] text-white mr-3">
                  <MapPin size={14} />
                </div>
<<<<<<< HEAD
                <span>{t('footer.address')}</span>
              </div>
            </div>
            <div className="text-[#A6292E] text-sm">
              {t('footer.copyright').replace('{year}', currentYear.toString())}
=======
                <span>1234 Technology Plaza, Suite 500, San Francisco, CA 94107</span>
              </div>
            </div>
            <div className="text-[#A6292E] text-sm">
              © {currentYear} Ufuq Technologies Inc. All rights reserved.
>>>>>>> origin/main
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { ChevronDown, Menu, X } from 'lucide-react';
import { mainNavItems } from '../../data/navigation';
import logo from '../../logo.svg.png';
import logoMobile from '../../logo-mobile.png';
import LanguageToggle from '../ui/LanguageToggle';
import { useLocalization } from '../../hooks/useLocalization';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const { t, isRTL } = useLocalization();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check for hash in URL when component mounts or location changes
  useEffect(() => {
    // Get the hash from the URL (e.g., #modules)
    const hash = location.hash.replace('#', '');
    
    // If there's a hash and it's not empty, scroll to that section
    if (hash) {
      // Small timeout to ensure the DOM is fully loaded
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else if (location.pathname !== '/') {
      // Scroll to top when navigating to other pages
      window.scrollTo(0, 0);
    }
  }, [location]);

  const toggleDropdown = (title: string) => {
    if (activeDropdown === title) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(title);
    }
  };

  const isHomePage = location.pathname === '/';

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      setIsMobileMenuOpen(false);
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigateToSectionFromAnyPage = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    
    // If already on home page, just scroll to the section
    if (location.pathname === '/') {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home page with the section hash
      window.location.href = `/#${sectionId}`;
    }
  };

  const scrollToTop = () => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const getTranslatedNavItems = () => {
    return mainNavItems.map(item => ({
      ...item,
      title: t(`nav.${item.title.toLowerCase()}`),
      children: item.children ? item.children.map(child => {
        // Create appropriate translation key - handle special cases
        let itemKey;
        
        if (child.title === 'Retail & POS') {
          itemKey = 'retail';
        } else if (child.title === 'Case Studies') {
          itemKey = 'casestudies';
        } else {
          itemKey = child.title.toLowerCase().replace(/\s+/g, '');
        }
        
        return {
          ...child,
          title: t(`nav.${item.title.toLowerCase()}.${itemKey}`)
        };
      }) : undefined
    }));
  };

  const translatedNavItems = getTranslatedNavItems();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen || !isHomePage ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between relative">
          <div className="md:w-auto w-1/3">
            <Link to="/">
              <img 
                src={logo} 
                alt="Ufuq ERP" 
                className="hidden md:block h-10 transition-transform duration-300" 
                style={{ transform: isScrolled ? 'scale(1.5)' : 'scale(3)'}}
              />
            </Link>
          </div>

          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 md:hidden z-10" style={{ marginTop: '30px' }}>
            <Link to="/">
              <img 
                src={logoMobile} 
                alt="Ufuq ERP" 
                className="h-10 transition-transform duration-300" 
                style={{ transform: isScrolled ? 'scale(1.5)' : 'scale(3)' }}
              />
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {translatedNavItems.map((item) => (
              <div key={item.title} className="relative group">
                {item.children ? (
                  <button
                    className={`flex items-center font-medium ${
                      isScrolled || !isHomePage ? 'text-slate-800' : 'text-[#A6292E]'
                    } hover:text-primary-700 transition-colors`}
                    onClick={() => toggleDropdown(item.title)}
                  >
                    {item.title}
                    <ChevronDown size={16} className="mx-1" />
                  </button>
                ) : (
                  item.title === t('nav.modules') ? (
                    <button
                      onClick={() => navigateToSectionFromAnyPage('modules')}
                      className={`font-medium ${
                        isScrolled || !isHomePage ? 'text-slate-800' : 'text-[#A6292E]'
                      } hover:text-primary-700 transition-colors`}
                    >
                      {item.title}
                    </button>
                  ) : item.title === t('nav.industries') ? (
                    <button
                      onClick={() => navigateToSectionFromAnyPage('industries')}
                      className={`font-medium ${
                        isScrolled || !isHomePage ? 'text-slate-800' : 'text-[#A6292E]'
                      } hover:text-primary-700 transition-colors`}
                    >
                      {item.title}
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className={`font-medium ${
                        isScrolled || !isHomePage ? 'text-slate-800' : 'text-[#A6292E]'
                      } hover:text-primary-700 transition-colors`}
                      onClick={scrollToTop}
                    >
                      {item.title}
                    </Link>
                  )
                )}
                {item.children && (
                  <div className="absolute mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                      <div className="p-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.title}
                            to={child.href}
                            className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 rounded-md"
                            onClick={scrollToTop}
                          >
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <LanguageToggle className={`${isScrolled || !isHomePage ? 'text-slate-800' : 'text-[#A6292E]'} font-semibold`} />
            <Link to="/contact" onClick={scrollToTop}>
              <Button variant="outline" className={isScrolled || !isHomePage ? '' : 'text-[#A6292E] border-black hover:bg-white/10 hover:text-white'}>
                {t('button.contactUs')}
              </Button>
            </Link>
            <Button>{t('button.requestDemo')}</Button>
          </div>

          <button
            className="md:hidden text-slate-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} className={isScrolled || !isHomePage ? 'text-slate-800' : 'text-white'} />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2">
            <nav className="flex flex-col space-y-1">
              {translatedNavItems.map((item) => (
                <div key={item.title} className="w-full">
                  {item.children ? (
                    <button
                      className="flex items-center justify-between w-full py-2 font-medium text-slate-800 hover:text-primary-700"
                      onClick={() => toggleDropdown(item.title)}
                    >
                      {item.title}
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          activeDropdown === item.title ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  ) : (
                    item.title === t('nav.modules') ? (
                      <button
                        onClick={() => navigateToSectionFromAnyPage('modules')}
                        className="block py-2 font-medium text-slate-800 hover:text-primary-700 w-full text-left"
                      >
                        {item.title}
                      </button>
                    ) : item.title === t('nav.industries') ? (
                      <button
                        onClick={() => navigateToSectionFromAnyPage('industries')}
                        className="block py-2 font-medium text-slate-800 hover:text-primary-700 w-full text-left"
                      >
                        {item.title}
                      </button>
                    ) : (
                      <Link
                        to={item.href}
                        className="block py-2 font-medium text-slate-800 hover:text-primary-700"
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          scrollToTop();
                        }}
                      >
                        {item.title}
                      </Link>
                    )
                  )}
                  {item.children && activeDropdown === item.title && (
                    <div className="mt-1 border-slate-200 pl-4 border-l-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.title}
                          to={child.href}
                          className="block py-2 text-sm text-slate-700 hover:text-primary-700"
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            scrollToTop();
                          }}
                        >
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            <div className="mt-4 flex flex-col space-y-2">
              <LanguageToggle className="mb-2 w-full" />
              <Link to="/contact" onClick={() => {
                setIsMobileMenuOpen(false);
                scrollToTop();
              }}>
                <Button variant="outline" className="w-full">
                  {t('button.contactUs')}
                </Button>
              </Link>
              <Button className="w-full">{t('button.requestDemo')}</Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;
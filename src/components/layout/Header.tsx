import React, { useState, useEffect } from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { ChevronDown, Menu, X } from 'lucide-react';
import { mainNavItems } from '../../data/navigation';
import logo from '../../logo.svg.png';
import logoMobile from '../../logo-mobile.png';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

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

  const toggleDropdown = (title: string) => {
    if (activeDropdown === title) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(title);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between relative">
          {/* Logo Container - Takes 1/3 of space on mobile */}
          <div className="md:w-auto w-1/3">
            {/* Desktop Logo (hidden on smaller than md screens) */}
            <a href="#">
              <img 
                src={logo} 
                alt="Ufuq ERP" 
                className="hidden md:block h-10 transition-transform duration-300" 
                style={{ transform: isScrolled ? 'scale(1.5)' : 'scale(3)'}}
              />
            </a>
          </div>

          {/* Mobile Logo (centered, hidden on md screens and up) */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 md:hidden z-10" style={{ marginTop: '30px' }}>
            <a href="#">
              <img 
                src={logoMobile} 
                alt="Ufuq ERP" 
                className="h-10 transition-transform duration-300" 
                style={{ transform: isScrolled ? 'scale(1.5)' : 'scale(3)' }}
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {mainNavItems.map((item) => (
              <div key={item.title} className="relative group">
                <button
                  className={`flex items-center font-medium ${
                    isScrolled ? 'text-slate-800' : 'text-[#A6292E]'
                  } hover:text-primary-700 transition-colors`}
                  onClick={() => item.children && toggleDropdown(item.title)}
                >
                  {item.title}
                  {item.children && <ChevronDown size={16} className="ml-1" />}
                </button>
                {item.children && (
                  <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                      <div className="p-2">
                        {item.children.map((child) => (
                          <a
                            key={child.title}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 rounded-md"
                          >
                            {child.title}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className={isScrolled ? '' : 'text-[#A6292E] border-black hover:bg-white/10 hover:text-white'}>
              Contact Us
            </Button>
            <Button>Request Demo</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} className={isScrolled ? 'text-slate-800' : 'text-white'} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2">
            <nav className="flex flex-col space-y-1">
              {mainNavItems.map((item) => (
                <div key={item.title}>
                  <button
                    className="flex items-center justify-between w-full py-2 font-medium text-slate-800 hover:text-primary-700"
                    onClick={() => item.children && toggleDropdown(item.title)}
                  >
                    {item.title}
                    {item.children && (
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          activeDropdown === item.title ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </button>
                  {item.children && activeDropdown === item.title && (
                    <div className="ml-4 mt-1 border-l-2 border-slate-200 pl-4">
                      {item.children.map((child) => (
                        <a
                          key={child.title}
                          href={child.href}
                          className="block py-2 text-sm text-slate-700 hover:text-primary-700"
                        >
                          {child.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            <div className="mt-4 flex flex-col space-y-2">
              <Button variant="outline" className="w-full">
                Contact Us
              </Button>
              <Button className="w-full">Request Demo</Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;
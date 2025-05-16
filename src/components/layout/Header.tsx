import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
  const location = useLocation();

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

  const isHomePage = location.pathname === '/';

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
            {mainNavItems.map((item) => (
              <div key={item.title} className="relative group">
                {item.children ? (
                  <button
                    className={`flex items-center font-medium ${
                      isScrolled || !isHomePage ? 'text-slate-800' : 'text-[#A6292E]'
                    } hover:text-primary-700 transition-colors`}
                    onClick={() => toggleDropdown(item.title)}
                  >
                    {item.title}
                    <ChevronDown size={16} className="ml-1" />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className={`font-medium ${
                      isScrolled || !isHomePage ? 'text-slate-800' : 'text-[#A6292E]'
                    } hover:text-primary-700 transition-colors`}
                  >
                    {item.title}
                  </Link>
                )}
                {item.children && (
                  <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                      <div className="p-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.title}
                            to={child.href}
                            className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-100 rounded-md"
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
            <Link to="/contact">
              <Button variant="outline" className={isScrolled || !isHomePage ? '' : 'text-[#A6292E] border-black hover:bg-white/10 hover:text-white'}>
                Contact Us
              </Button>
            </Link>
            <Button>Request Demo</Button>
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
              {mainNavItems.map((item) => (
                <div key={item.title}>
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
                    <Link
                      to={item.href}
                      className="block py-2 font-medium text-slate-800 hover:text-primary-700"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  )}
                  {item.children && activeDropdown === item.title && (
                    <div className="ml-4 mt-1 border-l-2 border-slate-200 pl-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.title}
                          to={child.href}
                          className="block py-2 text-sm text-slate-700 hover:text-primary-700"
                          onClick={() => setIsMobileMenuOpen(false)}
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
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full">
                  Contact Us
                </Button>
              </Link>
              <Button className="w-full">Request Demo</Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;
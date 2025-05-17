import React from 'react';
import { useLocalization } from '../../hooks/useLocalization';
import { Globe } from 'lucide-react';

interface LanguageToggleProps {
  className?: string;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ className = '' }) => {
  const { language, setLanguage, isRTL } = useLocalization();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className={`flex items-center justify-center px-3 py-2 rounded-md border border-slate-300 bg-white hover:bg-slate-50 transition-colors ${className}`}
      aria-label={`Switch to ${language === 'en' ? 'Arabic' : 'English'}`}
    >
      <Globe size={18} className={isRTL ? 'ml-2' : 'mr-2'} />
      <span className="font-medium text-sm">{language === 'en' ? 'العربية' : 'English'}</span>
    </button>
  );
};

export default LanguageToggle; 
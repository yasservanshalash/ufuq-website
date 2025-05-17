import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LocalizationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LocalizationContext = createContext<LocalizationContextType | undefined>(undefined);

// English translations
const enTranslations: Record<string, string> = {
  // Navigation
  'nav.products': 'Products',
  'nav.modules': 'Modules',
  'nav.industries': 'Industries',
  'nav.implementation': 'Implementation',
  'nav.about': 'About',
  'nav.contact': 'Contact',
  
  // Features submenu
  'nav.modules.finance': 'Finance',
  'nav.modules.trading': 'Trading',
  'nav.modules.inventory': 'Inventory',
  'nav.modules.hrm': 'HRM',
  
  // Industries submenu
  'nav.industries.retail': 'Retail & POS',
  'nav.industries.manufacturing': 'Manufacturing',
  'nav.industries.construction': 'Construction',
  'nav.industries.healthcare': 'Healthcare',
  
  // Buttons
  'button.contactUs': 'Contact Us',
  'button.requestDemo': 'Request Demo',
  'button.getInTouch': 'Get in Touch',
  'button.learnMore': 'Learn More',
  
  // Hero Section
  'hero.title': 'Smarter ERP Solutions for',
  'hero.titleHighlight': 'Growing Businesses',
  'hero.description': 'Ufuq delivers intelligent, scalable, and cost-effective ERP solutions tailored for small and medium-sized enterprises.',
  'hero.feature1': 'Cloud & On-Premise ERP',
  'hero.feature2': 'Industry-Specific Modules',
  
  // Products Page
  'products.title': 'Our Products',
  'products.subtitle': 'Comprehensive ERP solutions designed to meet your business needs',
  'products.coreErp': 'Ufuq Core ERP',
  'products.coreErpDesc': 'Complete enterprise resource planning solution for growing businesses',
  'products.modules': 'Modules',
  'products.whyChoose': 'Why Choose Ufuq ERP?',
  'products.scalable': 'Scalable Solutions',
  'products.scalableDesc': 'Grow your business with confidence using our scalable ERP solutions.',
  'products.support': 'Expert Support',
  'products.supportDesc': '24/7 support from our team of ERP implementation experts.',
  'products.updates': 'Regular Updates',
  'products.updatesDesc': 'Stay ahead with regular feature updates and security patches.',
  'products.feature.financialManagement': 'Financial Management',
  'products.feature.inventoryControl': 'Inventory Control',
  'products.feature.humanResources': 'Human Resources',
  'products.feature.projectManagement': 'Project Management',
  'products.feature.supplyChain': 'Supply Chain Management',
  'products.feature.businessIntelligence': 'Business Intelligence',
  
  // Features Section
  'features.title': 'Core Modules & Advanced Capabilities',
  'features.subtitle': 'Our comprehensive ERP platform offers powerful tools to streamline your business operations',
  'features.finance.title': 'Finance',
  'features.finance.description': 'Gain full financial insight and control with comprehensive accounting and financial management tools.',
  'features.trading.title': 'Trading',
  'features.trading.description': 'Streamline operations with real-time data and integrated trading management capabilities.',
  'features.inventory.title': 'Inventory',
  'features.inventory.description': 'Optimize inventory and supply chains with advanced tracking and management features.',
  'features.hrm.title': 'HRM',
  'features.hrm.description': 'Manage your workforce efficiently with integrated human resource management tools.',
  'features.projects.title': 'Projects',
  'features.projects.description': 'Monitor tasks, budgets & timelines effortlessly with comprehensive project management.',
  'features.production.title': 'Production',
  'features.production.description': 'Drive innovation in manufacturing with integrated production management solutions.',
  'features.fixedAssets.title': 'Fixed Assets',
  'features.fixedAssets.description': 'Track and manage asset value precisely with detailed fixed asset management.',
  'features.automotive.title': 'Automotive',
  'features.automotive.description': 'Simplify workshop & repair management with specialized automotive solutions.',
  'features.healthcare.title': 'Healthcare',
  'features.healthcare.description': 'Enables small and medium hospitals to enhance patient management, billing, EMR, and overall operational efficiency.',
  'features.CRM.title': 'CRM',
  'features.CRM.description': 'Foster strong customer relationships and accelerate business growth with our robust CRM features.',
  'features.property.title': 'Property',
  'features.property.description': 'Provides complete management solutions, ensuring smooth control and optimization across all aspects of property management.',
  'features.readyMix.title': 'Ready Mix',
  'features.readyMix.description': 'Provides accurate control and optimization in concrete mixing, operations, batch processing, and more.',
  // Footer
  'footer.company': 'Company',
  'footer.solutions': 'Solutions',
  'footer.modules': 'Modules',
  'footer.resources': 'Resources',
  'footer.company.aboutus': 'About Us',
  'footer.company.implementation': 'Implementation',
  'footer.company.contact': 'Contact',
  'footer.company.partners': 'Partners',
  'footer.solutions.retail': 'Retail & POS',
  'footer.solutions.manufacturing': 'Manufacturing',
  'footer.solutions.healthcare': 'Healthcare',
  'footer.solutions.construction': 'Construction',
  'footer.modules.finance': 'Finance',
  'footer.modules.trading': 'Trading',
  'footer.modules.inventory': 'Inventory',
  'footer.modules.hrm': 'HRM',
  'footer.resources.documentation': 'Documentation',
  'footer.resources.support': 'Support',
  'footer.resources.blog': 'Blog',
  'footer.resources.casestudies': 'Case Studies',
  'footer.companyDescription': 'Transforming businesses with integrated enterprise solutions. We help companies streamline operations and drive growth through innovative ERP technology.',
  'footer.phone': '+1 (555) 123-4567',
  'footer.email': 'contact@ufuqerp.com',
  'footer.address': '1234 Technology Plaza, Suite 500, San Francisco, CA 94107',
  'footer.copyright': '© {year} Ufuq Technologies Inc. All rights reserved.',
  
  // About Page
  'about.title': 'About Ufuq ERP',
  'about.subtitle': 'Transforming businesses through innovative enterprise solutions since 2010.',
  'about.story.title': 'Our Story',
  'about.story.paragraph1': 'Founded in 2010, Ufuq ERP has been at the forefront of enterprise resource planning innovation. Our mission is to empower businesses with intelligent, scalable solutions that drive growth and efficiency.',
  'about.story.paragraph2': 'What started as a small team of passionate developers has grown into a global organization, serving hundreds of businesses across multiple industries.',
  'about.stats.clients': 'Clients Worldwide',
  'about.stats.experience': 'Years of Experience',
  'about.stats.awards': 'Industry Awards',
  'about.stats.success': 'Success Rate',
  'about.vision.title': 'Our Vision',
  'about.vision.description': 'We envision a future where every business, regardless of size, has access to enterprise-grade solutions that drive innovation, efficiency, and sustainable growth.',
  'about.values.innovation': 'Innovation',
  'about.values.innovation.desc': 'Continuously pushing the boundaries of what\'s possible in ERP solutions.',
  'about.values.excellence': 'Excellence',
  'about.values.excellence.desc': 'Delivering exceptional quality and reliability in everything we do.',
  'about.values.partnership': 'Partnership',
  'about.values.partnership.desc': 'Building lasting relationships with our clients and partners.',
  'about.team.title': 'Meet Our Leadership Team',
  'about.team.subtitle': 'Experts dedicated to revolutionizing enterprise resource planning',
  
  // Contact Page
  'contact.title': 'Get in Touch',
  'contact.subtitle': 'Have questions about our ERP solutions? We\'re here to help you transform your business operations.',
  'contact.form.title': 'Send Us a Message',
  'contact.form.firstName': 'First Name',
  'contact.form.lastName': 'Last Name',
  'contact.form.email': 'Email',
  'contact.form.phone': 'Phone',
  'contact.form.company': 'Company',
  'contact.form.message': 'Message',
  'contact.form.button': 'Send Message',
  'contact.info.phone': 'Phone',
  'contact.info.email': 'Email',
  'contact.info.address': 'Address',
  'contact.info.hours': 'Business Hours',
  'contact.info.hours.weekdays': 'Monday - Friday: 9:00 AM - 6:00 PM',
  'contact.info.hours.weekend': 'Saturday: 10:00 AM - 4:00 PM',
  'contact.info.support': 'Global Support',
  'contact.info.support.desc': '24/7 Technical Support Available',
  'contact.demo.title': 'Schedule a Demo',
  'contact.demo.desc': 'See how Ufuq ERP can transform your business operations with a personalized demo.',
  'contact.demo.button': 'Book a Demo',
  'contact.map.title': 'Find Us',
  'contact.map.subtitle': 'Visit our office to learn more about our solutions',
};

// Arabic translations
const arTranslations: Record<string, string> = {
  // Navigation
  'nav.products': 'المنتجات',
  'nav.modules': 'الخصائص',
  'nav.industries': 'الصناعات',
  'nav.implementation': 'التنفيذ',
  'nav.about': 'عن الشركة',
  'nav.contact': 'اتصل بنا',
  
  // modules submenu
  'nav.modules.finance': 'المالية',
  'nav.modules.trading': 'التداول',
  'nav.modules.inventory': 'المخزون',
  'nav.modules.hrm': 'إدارة الموارد البشرية',
  
  // Industries submenu
  'nav.industries.retail': 'التجزئة ونقاط البيع',
  'nav.industries.manufacturing': 'التصنيع',
  'nav.industries.construction': 'البناء',
  'nav.industries.healthcare': 'الرعاية الصحية',
  
  // Buttons
  'button.contactUs': 'اتصل بنا',
  'button.requestDemo': 'طلب عرض توضيحي',
  'button.getInTouch': 'تواصل معنا',
  'button.learnMore': 'معرفة المزيد',
  
  // Hero Section
  'hero.title': 'حلول تخطيط موارد المؤسسات الذكية لـ',
  'hero.titleHighlight': 'الشركات النامية',
  'hero.description': 'توفر أفق حلول ذكية وقابلة للتوسع وفعالة من حيث التكلفة مصممة خصيصًا للشركات الصغيرة والمتوسطة.',
  'hero.feature1': 'حلول سحابية ومحلية',
  'hero.feature2': 'وحدات متخصصة للصناعات',
  
  // Products Page
  'products.title': 'منتجاتنا',
  'products.subtitle': 'حلول شاملة لتخطيط موارد المؤسسات مصممة لتلبية احتياجات عملك',
  'products.coreErp': 'نظام أفق الأساسي',
  'products.coreErpDesc': 'حل متكامل لتخطيط موارد المؤسسات للشركات النامية',
  'products.modules': 'الوحدات',
  'products.whyChoose': 'لماذا تختار أفق؟',
  'products.scalable': 'حلول قابلة للتوسع',
  'products.scalableDesc': 'قم بتنمية أعمالك بثقة باستخدام حلولنا القابلة للتوسع.',
  'products.support': 'دعم متخصص',
  'products.supportDesc': 'دعم على مدار الساعة طوال أيام الأسبوع من فريق خبراء التنفيذ.',
  'products.updates': 'تحديثات منتظمة',
  'products.updatesDesc': 'ابق في المقدمة مع تحديثات منتظمة للميزات وإصلاحات الأمان.',
  'products.feature.financialManagement': 'الإدارة المالية',
  'products.feature.inventoryControl': 'مراقبة المخزون',
  'products.feature.humanResources': 'الموارد البشرية',
  'products.feature.projectManagement': 'إدارة المشاريع',
  'products.feature.supplyChain': 'إدارة سلسلة التوريد',
  'products.feature.businessIntelligence': 'ذكاء الأعمال',
  
  // Features Section
  'features.title': 'الوحدات الأساسية والقدرات المتقدمة',
  'features.subtitle': 'منصتنا الشاملة لتخطيط موارد المؤسسات توفر أدوات قوية لتبسيط عمليات عملك',
  'features.finance.title': 'المالية',
  'features.finance.description': 'احصل على رؤية وتحكم ماليين كاملين مع أدوات شاملة للمحاسبة والإدارة المالية.',
  'features.trading.title': 'التداول',
  'features.trading.description': 'تبسيط العمليات مع بيانات في الوقت الحقيقي وقدرات متكاملة لإدارة التداول.',
  'features.inventory.title': 'المخزون',
  'features.inventory.description': 'تحسين المخزون وسلاسل التوريد مع ميزات متقدمة للتتبع والإدارة.',
  'features.hrm.title': 'إدارة الموارد البشرية',
  'features.hrm.description': 'إدارة القوى العاملة بكفاءة مع أدوات متكاملة لإدارة الموارد البشرية.',
  'features.projects.title': 'المشاريع',
  'features.projects.description': 'مراقبة المهام والميزانيات والجداول الزمنية بسهولة مع إدارة شاملة للمشاريع.',
  'features.production.title': 'الإنتاج',
  'features.production.description': 'دفع الابتكار في التصنيع مع حلول متكاملة لإدارة الإنتاج.',
  'features.fixedAssets.title': 'الأصول الثابتة',
  'features.fixedAssets.description': 'تتبع وإدارة قيمة الأصول بدقة مع إدارة مفصلة للأصول الثابتة.',
  'features.automotive.title': 'السيارات',
  'features.automotive.description': 'تبسيط إدارة ورش العمل والإصلاح مع حلول متخصصة للسيارات.',
  
  // Footer
  'footer.company': 'الشركة',
  'footer.solutions': 'الحلول',
  'footer.features': 'الميزات',
  'footer.resources': 'الموارد',
  'footer.company.aboutus': 'عن الشركة',
  'footer.company.implementation': 'التنفيذ',
  'footer.company.contact': 'اتصل بنا',
  'footer.company.partners': 'الشركاء',
  'footer.solutions.retail': 'التجزئة ونقاط البيع',
  'footer.solutions.manufacturing': 'التصنيع',
  'footer.solutions.healthcare': 'الرعاية الصحية',
  'footer.solutions.construction': 'البناء',
  'footer.features.finance': 'المالية',
  'footer.features.trading': 'التداول',
  'footer.features.inventory': 'المخزون',
  'footer.features.hrm': 'إدارة الموارد البشرية',
  'footer.resources.documentation': 'الوثائق',
  'footer.resources.support': 'الدعم',
  'footer.resources.blog': 'المدونة',
  'footer.resources.casestudies': 'دراسات الحالة',
  'footer.companyDescription': 'تحويل الأعمال بحلول مؤسسات متكاملة. نساعد الشركات على تبسيط العمليات ودفع النمو من خلال تكنولوجيا تخطيط موارد المؤسسات المبتكرة.',
  'footer.phone': '+1 (555) 123-4567',
  'footer.email': 'contact@ufuqerp.com',
  'footer.address': '1234 تكنولوجي بلازا، جناح 500، سان فرانسيسكو، كاليفورنيا 94107',
  'footer.copyright': '© {year} شركة أفق للتكنولوجيا. جميع الحقوق محفوظة.',
  
  // About Page
  'about.title': 'عن شركة أفق',
  'about.subtitle': 'تحويل الأعمال من خلال حلول مؤسسية مبتكرة منذ عام 2010.',
  'about.story.title': 'قصتنا',
  'about.story.paragraph1': 'تأسست شركة أفق في عام 2010، وكانت في طليعة الابتكار في مجال تخطيط موارد المؤسسات. مهمتنا هي تمكين الشركات بحلول ذكية وقابلة للتوسع تدفع النمو والكفاءة.',
  'about.story.paragraph2': 'ما بدأ كفريق صغير من المطورين المتحمسين نما ليصبح مؤسسة عالمية، تخدم مئات الشركات عبر صناعات متعددة.',
  'about.stats.clients': 'العملاء حول العالم',
  'about.stats.experience': 'سنوات من الخبرة',
  'about.stats.awards': 'جوائز الصناعة',
  'about.stats.success': 'معدل النجاح',
  'about.vision.title': 'رؤيتنا',
  'about.vision.description': 'نتصور مستقبلاً تتمتع فيه كل شركة، بغض النظر عن حجمها، بإمكانية الوصول إلى حلول على مستوى المؤسسات تدفع الابتكار والكفاءة والنمو المستدام.',
  'about.values.innovation': 'الابتكار',
  'about.values.innovation.desc': 'دفع حدود ما هو ممكن في حلول تخطيط موارد المؤسسات باستمرار.',
  'about.values.excellence': 'التميز',
  'about.values.excellence.desc': 'تقديم جودة وموثوقية استثنائية في كل ما نقوم به.',
  'about.values.partnership': 'الشراكة',
  'about.values.partnership.desc': 'بناء علاقات دائمة مع عملائنا وشركائنا.',
  'about.team.title': 'تعرف على فريق القيادة لدينا',
  'about.team.subtitle': 'خبراء مكرسون لإحداث ثورة في تخطيط موارد المؤسسات',
  
  // Contact Page
  'contact.title': 'اتصل بنا',
  'contact.subtitle': 'هل لديك أسئلة حول حلول تخطيط موارد المؤسسات لدينا؟ نحن هنا لمساعدتك في تحويل عمليات عملك.',
  'contact.form.title': 'أرسل لنا رسالة',
  'contact.form.firstName': 'الاسم الأول',
  'contact.form.lastName': 'اسم العائلة',
  'contact.form.email': 'البريد الإلكتروني',
  'contact.form.phone': 'رقم الهاتف',
  'contact.form.company': 'الشركة',
  'contact.form.message': 'الرسالة',
  'contact.form.button': 'إرسال الرسالة',
  'contact.info.phone': 'الهاتف',
  'contact.info.email': 'البريد الإلكتروني',
  'contact.info.address': 'العنوان',
  'contact.info.hours': 'ساعات العمل',
  'contact.info.hours.weekdays': 'الاثنين - الجمعة: 9:00 صباحاً - 6:00 مساءً',
  'contact.info.hours.weekend': 'السبت: 10:00 صباحاً - 4:00 مساءً',
  'contact.info.support': 'الدعم العالمي',
  'contact.info.support.desc': 'الدعم الفني متاح على مدار الساعة طوال أيام الأسبوع',
  'contact.demo.title': 'جدولة عرض توضيحي',
  'contact.demo.desc': 'تعرف على كيفية تحويل عمليات عملك مع أفق من خلال عرض توضيحي مخصص.',
  'contact.demo.button': 'حجز عرض توضيحي',
  'contact.map.title': 'جِدنا',
  'contact.map.subtitle': 'قم بزيارة مكتبنا لمعرفة المزيد عن حلولنا',
};

interface LocalizationProviderProps {
  children: ReactNode;
}

export const LocalizationProvider: React.FC<LocalizationProviderProps> = ({ children }) => {
  // Try to get saved language from localStorage, default to 'en'
  const getSavedLanguage = (): Language => {
    const savedLanguage = localStorage.getItem('language');
    return (savedLanguage === 'ar' ? 'ar' : 'en') as Language;
  };

  const [language, setLanguage] = useState<Language>(getSavedLanguage());
  const isRTL = language === 'ar';

  // Apply RTL settings to the entire document
  useEffect(() => {
    // Save language preference to localStorage
    localStorage.setItem('language', language);
    
    // Set direction attribute on html element
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    
    // Set the direction and language as data attributes for easier CSS targeting
    document.documentElement.setAttribute('data-direction', isRTL ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('data-language', language);
    
    // Add/remove RTL class on body for global styling
    if (isRTL) {
      document.body.classList.add('rtl');
      document.documentElement.classList.add('rtl');
    } else {
      document.body.classList.remove('rtl');
      document.documentElement.classList.remove('rtl');
    }

    // Update the meta tags for language
    const metaLang = document.querySelector('meta[name="language"]');
    if (metaLang) {
      metaLang.setAttribute('content', language);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'language';
      meta.content = language;
      document.head.appendChild(meta);
    }
  }, [language, isRTL]);

  // Translation function
  const t = (key: string): string => {
    const translations = language === 'ar' ? arTranslations : enTranslations;
    return translations[key] || key; // Return the key itself if translation is not found
  };

  const value = {
    language,
    setLanguage,
    t,
    isRTL,
  };

  return (
    <LocalizationContext.Provider value={value}>
      {children}
    </LocalizationContext.Provider>
  );
};

export const useLocalization = (): LocalizationContextType => {
  const context = useContext(LocalizationContext);
  if (context === undefined) {
    throw new Error('useLocalization must be used within a LocalizationProvider');
  }
  return context;
};
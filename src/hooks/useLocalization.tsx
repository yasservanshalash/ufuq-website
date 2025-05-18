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
  'products.coreErp': 'BCor ERP',
  'products.coreErpDesc': 'Smart ERP software built to empower growing businesses',
  'products.modules': 'Modules',
  'products.whyChoose': 'Why Choose BCor ERP?',
  'products.scalable': 'Scalable Solutions',
  'products.scalableDesc': 'Grow your business with confidence using a flexible ERP system that adapts to your needs.',
  'products.support': 'Expert Support',
  'products.supportDesc': 'Get 24/7 assistance from experienced ERP specialists who understand your operations.',
  'products.updates': 'Regular Updates',
  'products.updatesDesc': 'Stay ahead with continuous feature enhancements and robust security updates.',
  'products.feature.financialManagement': 'Manage finances with precision',
  'products.feature.inventoryControl': 'Optimize inventory and supply chain',
  'products.feature.humanResources': 'Streamline HR and payroll',
  'products.feature.projectManagement': 'Control projects and resources',
  'products.feature.supplyChain': 'Gain insights with real-time analytics',
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
  'footer.features': 'Features',
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
  'about.title': 'About Us',
  'about.subtitle': 'Transforming businesses through innovative enterprise solutions since 2010.',
  'about.story.title': 'Our Story',
  'about.story.paragraph1': 'Ufuq was founded by Mohammed Adil Odivayalil to bring BCor ERP a reliable, enterprise grade software used by banks, manufacturers, and service providers in Bahrain to small and medium sized businesses across the GCC.',
  'about.story.paragraph2': 'As the official reseller of BCor, Ufuq focuses on making powerful ERP capabilities accessible without the cost and complexity that typically come with large scale systems. We don\'t develop ERP we deliver it with precision, local insight, and hands on support.',
  'about.story.paragraph3': 'BCor offers integrated modules for finance, HR, inventory, sales, CRM, and more built to streamline operations and help growing businesses stay competitive in a digital first economy.',
  'about.story.paragraph4': 'At Ufuq, we believe progress doesn\'t have to come at the cost of identity. That\'s why we take pride in blending modern technology with deep respect for the region\'s business values, traditions, and cultural context. From the way we communicate, to how we support our clients we align with the values that matter most.',
  'about.stats.clients': 'Clients Worldwide',
  'about.stats.experience': 'Years of Experience',
  'about.stats.awards': 'Industry Awards',
  'about.stats.success': 'Success Rate',
  'about.vision.title': 'Our Vision',
  'about.vision.description': 'We envision a future where every business, regardless of size, has access to enterprise-grade solutions that drive innovation, efficiency, and sustainable growth.',
  'about.values.innovation': 'Innovation',
  'about.values.innovation.desc': 'Continuously redefining what ERP can do - we embrace emerging technologies to deliver smarter, more adaptive solutions for SMEs.',
  'about.values.excellence': 'Excellence',
  'about.values.excellence.desc': 'We\'re committed to unmatched quality, reliability, and performance in every product and service we deliver.',
  'about.values.partnership': 'Partnership',
  'about.values.partnership.desc': 'We don\'t just serve clients - we grow with them. Our success is built on long-term, trusted collaborations.',
  'about.mission.title': 'Our Mission',
  'about.mission.description': 'To simplify enterprise software and empower businesses to scale through intuitive, affordable ERP solutions tailored for the GCC and beyond.',
  'about.mission.empowerment': 'Empowerment',
  'about.mission.empowerment.desc': 'We enable businesses to take full control of their operations, data, and growth - all from a single unified platform.',
  'about.mission.integration': 'Integration',
  'about.mission.integration.desc': 'Our ERP connects departments, processes, and people - creating one seamless digital backbone for your entire business.',
  'about.mission.accessibility': 'Accessibility',
  'about.mission.accessibility.desc': 'We make powerful ERP capabilities available to everyone - not just large enterprises - with transparent pricing and scalable features.',
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
  'contact.info.hours.weekdays': 'Monday Friday: 9:00 AM 6:00 PM',
  'contact.info.hours.weekend': 'Saturday: 10:00 AM 4:00 PM',
  'contact.info.support': 'Global Support',
  'contact.info.support.desc': '24/7 Technical Support Available',
  'contact.demo.title': 'Schedule a Demo',
  'contact.demo.desc': 'See how Ufuq ERP can transform your business operations with a personalized demo.',
  'contact.demo.button': 'Book a Demo',
  'contact.map.title': 'Find Us',
  'contact.map.subtitle': 'Visit our office to learn more about our solutions',
  'footer.features.finance': 'Finance',
  'footer.features.trading': 'Trading',
  'footer.features.inventory': 'Inventory',
  'footer.features.hrm': 'HRM',
  
  // Implementation Page
  'implementation.title': 'Implementation Process',
  'implementation.subtitle': 'Our comprehensive approach ensures a successful ERP implementation tailored to your business needs',
  'implementation.stages.title': 'Bcor ERP Implementation Stages',
  'implementation.stages.subtitle': 'Our proven implementation methodology ensures a successful transition to your new ERP system',
  'implementation.stages.discovery.title': 'Discovery & Planning',
  'implementation.stages.discovery.description': 'This stage focuses on analyzing organizational needs and defining project goals.',
  'implementation.stages.design.title': 'Design',
  'implementation.stages.design.description': 'Defines the system\'s architecture, modules, and interface based on planning requirements.',
  'implementation.stages.development.title': 'Development',
  'implementation.stages.development.description': 'The ERP system is built, customized, and integrated, including coding and database setup.',
  'implementation.stages.testing.title': 'Testing',
  'implementation.stages.testing.description': 'Extensive testing ensures the system works as intended, covering all key functions.',
  'implementation.stages.deployment.title': 'Deployment',
  'implementation.stages.deployment.description': 'Deployment includes system installation, data migration, and user training for a smooth transition.',
  'implementation.stages.support.title': 'Support & Updates',
  'implementation.stages.support.description': 'Ongoing support includes issue resolution, user assistance, and regular updates to meet evolving needs.',
  'implementation.approach.title': 'Our Implementation Approach',
  'implementation.approach.subtitle': 'We prioritize your business needs and ensure a smooth transition with minimal disruption',
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
  'features.healthcare.title': 'الرعاية الصحية',
  'features.healthcare.description': 'تمكين المستشفيات الصغيرة والمتوسطة من تعزيز إدارة المرضى والفواتير والسجلات الطبية الإلكترونية والكفاءة التشغيلية العامة.',
  'features.CRM.title': 'إدارة علاقات العملاء',
  'features.CRM.description': 'تعزيز علاقات العملاء القوية وتسريع نمو الأعمال من خلال ميزات متينة لإدارة علاقات العملاء.',
  'features.property.title': 'إدارة العقارات',
  'features.property.description': 'توفير حلول إدارة كاملة، تضمن التحكم السلس والتحسين عبر جميع جوانب إدارة العقارات.',
  'features.readyMix.title': 'الخرسانة الجاهزة',
  'features.readyMix.description': 'توفير تحكم دقيق وتحسين في خلط الخرسانة والعمليات ومعالجة الدفعات والمزيد.',
  
  // Footer
  'footer.company': 'الشركة',
  'footer.solutions': 'الحلول',
  'footer.modules': 'الوحدات',
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
  'footer.modules.finance': 'المالية',
  'footer.modules.trading': 'التداول',
  'footer.modules.inventory': 'المخزون',
  'footer.modules.hrm': 'إدارة الموارد البشرية',
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
  'about.story.paragraph3': 'يوفر نظام BCor وحدات متكاملة للمالية والموارد البشرية والمخزون والمبيعات وإدارة علاقات العملاء والمزيد، مصممة لتبسيط العمليات ومساعدة الشركات النامية على البقاء تنافسية في اقتصاد رقمي.',
  'about.story.paragraph4': 'في أفق، نؤمن بأن التقدم لا يجب أن يأتي على حساب الهوية. لهذا نفتخر بدمج التكنولوجيا الحديثة مع احترام عميق لقيم الأعمال والتقاليد والسياق الثقافي للمنطقة. من طريقة تواصلنا، إلى كيفية دعمنا لعملائنا، نحن نتوافق مع القيم التي تهم أكثر.',
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
  'about.mission.title': 'مهمتنا',
  'about.mission.description': 'لتبسيط برامج الأداء المؤسسية وتمكين الشركات للتكيف مع النمو من خلال حلول تخطيط موارد المؤسسات المناسبة للمنطقة الإقليمية والأكثر.',
  'about.mission.empowerment': 'تمكين',
  'about.mission.empowerment.desc': 'نحن نساعد الشركات لتحكم كامل في عملياتها وبياناتها والنمو من خلال منصة موحدة واحدة.',
  'about.mission.integration': 'التكامل',
  'about.mission.integration.desc': 'منصتنا ERP تربط الأقسام والعمليات والأشخاص - إنشاء جو إلكتروني موحد لكل عملك.',
  'about.mission.accessibility': 'الوصول',
  'about.mission.accessibility.desc': 'نحن نجعل القدرات المالية القوية متاحة للجميع - وليس فقط الشركات الكبيرة - مع الأسعار الشفافة وميزات التوسع.',
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
  'contact.info.hours.weekdays': 'الاثنين الجمعة: 9:00 صباحاً 6:00 مساءً',
  'contact.info.hours.weekend': 'السبت: 10:00 صباحاً 4:00 مساءً',
  'contact.info.support': 'الدعم العالمي',
  'contact.info.support.desc': 'الدعم الفني متاح على مدار الساعة طوال أيام الأسبوع',
  'contact.demo.title': 'جدولة عرض توضيحي',
  'contact.demo.desc': 'تعرف على كيفية تحويل عمليات عملك مع أفق من خلال عرض توضيحي مخصص.',
  'contact.demo.button': 'حجز عرض توضيحي',
  'contact.map.title': 'جِدنا',
  'contact.map.subtitle': 'قم بزيارة مكتبنا لمعرفة المزيد عن حلولنا',
  
  // Implementation Page
  'implementation.title': 'عملية التنفيذ',
  'implementation.subtitle': 'نهجنا الشامل يضمن تنفيذًا ناجحًا لنظام تخطيط موارد المؤسسات مصمم خصيصًا لاحتياجات عملك',
  'implementation.stages.title': 'مراحل تنفيذ نظام BCor',
  'implementation.stages.subtitle': 'منهجية التنفيذ المثبتة لدينا تضمن انتقالًا ناجحًا إلى نظام تخطيط موارد المؤسسات الجديد',
  'implementation.stages.discovery.title': 'الاكتشاف والتخطيط',
  'implementation.stages.discovery.description': 'تركز هذه المرحلة على تحليل احتياجات المؤسسة وتحديد أهداف المشروع.',
  'implementation.stages.design.title': 'التصميم',
  'implementation.stages.design.description': 'تحديد هيكل النظام ووحداته وواجهته بناءً على متطلبات التخطيط.',
  'implementation.stages.development.title': 'التطوير',
  'implementation.stages.development.description': 'يتم بناء نظام تخطيط موارد المؤسسات وتخصيصه ودمجه، بما في ذلك البرمجة وإعداد قاعدة البيانات.',
  'implementation.stages.testing.title': 'الاختبار',
  'implementation.stages.testing.description': 'الاختبار الشامل يضمن عمل النظام كما هو مقصود، مع تغطية جميع الوظائف الرئيسية.',
  'implementation.stages.deployment.title': 'النشر',
  'implementation.stages.deployment.description': 'يشمل النشر تثبيت النظام وترحيل البيانات وتدريب المستخدمين لانتقال سلس.',
  'implementation.stages.support.title': 'الدعم والتحديثات',
  'implementation.stages.support.description': 'يشمل الدعم المستمر حل المشكلات ومساعدة المستخدمين والتحديثات المنتظمة لتلبية الاحتياجات المتطورة.',
  'implementation.approach.title': 'نهج التنفيذ لدينا',
  'implementation.approach.subtitle': 'نحن نعطي الأولوية لاحتياجات عملك ونضمن انتقالًا سلسًا بأقل قدر من الاضطراب',
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
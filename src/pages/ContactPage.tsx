import React, { useEffect } from 'react';
import Section from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import Button from '../components/ui/Button';
import { MessageCircle, Mail, Phone, MapPin, Clock, Globe } from 'lucide-react';
import { useLocalization } from '../hooks/useLocalization';
import img from '../sadu.png';

const ContactPage: React.FC = () => {
  const { t } = useLocalization();
  
  useEffect(() => {
    document.title = 'Contact Us | Ufuq ERP';
  }, []);

  return (
    <>
      <Section className="pt-32 relative">
        <div className="absolute inset-0 z-0 overflow-hidden border-b-4 border-[#A6292E]">
          <img 
            src={img} 
            alt="Sadu Pattern" 
            className="w-full h-full object-cover scale-110 transform-origin-center"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#DCD6C9] mb-4 mt-6">{t('contact.title')}</h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
      </Section>

      <Section className="bg-white py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-[#A6292E] mb-6">{t('contact.form.title')}</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t('contact.form.firstName')}</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#A6292E] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t('contact.form.lastName')}</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#A6292E] focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t('contact.form.email')}</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#A6292E] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t('contact.form.phone')}</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#A6292E] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t('contact.form.company')}</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#A6292E] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t('contact.form.message')}</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#A6292E] focus:border-transparent"
                  ></textarea>
                </div>
                <Button className="w-full">{t('contact.form.button')}</Button>
              </form>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#f7a3a3] rounded-full flex items-center justify-center text-[#A6292E] mr-4">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{t('contact.info.phone')}</h3>
                    <p className="text-gray-600">{t('footer.phone')}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#f7a3a3] rounded-full flex items-center justify-center text-[#A6292E] mr-4">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{t('contact.info.email')}</h3>
                    <p className="text-gray-600">{t('footer.email')}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#f7a3a3] rounded-full flex items-center justify-center text-[#A6292E] mr-4">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{t('contact.info.address')}</h3>
                    <p className="text-gray-600">{t('footer.address')}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#f7a3a3] rounded-full flex items-center justify-center text-[#A6292E] mr-4">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{t('contact.info.hours')}</h3>
                    <p className="text-gray-600">{t('contact.info.hours.weekdays')}<br />{t('contact.info.hours.weekend')}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#f7a3a3] rounded-full flex items-center justify-center text-[#A6292E] mr-4">
                    <Globe size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{t('contact.info.support')}</h3>
                    <p className="text-gray-600">{t('contact.info.support.desc')}</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-[#A6292E] text-white">
              <h3 className="text-xl font-semibold mb-4">{t('contact.demo.title')}</h3>
              <p className="mb-4">{t('contact.demo.desc')}</p>
              <Button className="w-full" style={{ backgroundColor: '#DCD6C9', color: '#A6292E' }}>
                {t('contact.demo.button')}
              </Button>
            </Card>
          </div>
        </div>
      </Section>

      <Section className="bg-slate-50">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#A6292E] mb-4">{t('contact.map.title')}</h2>
          <p className="text-xl text-gray-600 mb-8">{t('contact.map.subtitle')}</p>
          <div className="aspect-[16/9] w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0927348649604!2d-122.39891788468204!3d37.78779997975772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807abad77c31%3A0x3f10558c2a680820!2sSan%20Francisco%2C%20CA%2094107!5e0!3m2!1sen!2sus!4v1645654700000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </Section>
    </>
  );
};

export default ContactPage;
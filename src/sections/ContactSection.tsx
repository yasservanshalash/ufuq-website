import React from 'react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { MessageCircle, Mail, Phone } from 'lucide-react';
import { useLocalization } from '../hooks/useLocalization';

const ContactSection: React.FC = () => {
  const { t } = useLocalization();

  return (
    <Section
      id="contact"
      title={t('getInTouch.title')}
      subtitle={t('getInTouch.subtitle')}
      centered
      className="bg-slate-50"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="flex items-start">
            <div className="mt-1 bg-[#f7a3a3] p-3 rounded-full text-[#A6292E] mr-4">
              <MessageCircle size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{t('getInTouch.demo.title')}</h3>
              <p className="text-slate-600 mb-4">
                {t('getInTouch.demo.description')}
              </p>
              <Button variant="outline">{t('getInTouch.demo.button')}</Button>
            </div>
          </div>

          <div className="flex items-start">
            <div className="mt-1 bg-[#f7a3a3] p-3 rounded-full text-[#A6292E] mr-4">
              <Mail size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{t('getInTouch.email.title')}</h3>
              <p className="text-slate-600 mb-2">
                {t('getInTouch.email.description')}
              </p>
              <a href="mailto:info@ufuqerp.com" className="text-[#A6292E] hover:underline">
                info@ufuqerp.com
              </a>
            </div>
          </div>

          <div className="flex items-start">
            <div className="mt-1 bg-[#f7a3a3] p-3 rounded-full text-[#A6292E] mr-4">
              <Phone size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{t('getInTouch.call.title')}</h3>
              <p className="text-slate-600 mb-2">
                {t('getInTouch.call.description')}
              </p>
              <a href="tel:+15551234567" className="text-[#A6292E] hover:underline">
                +1 (555) 123-4567
              </a>
            </div>
          </div>
        </div>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-6">{t('getInTouch.form.title')}</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-1">
                  {t('getInTouch.form.firstName')}
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A6292E] focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-1">
                  {t('getInTouch.form.lastName')}
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A6292E] focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                {t('getInTouch.form.email')}
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A6292E] focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">
                {t('getInTouch.form.company')}
              </label>
              <input
                type="text"
                id="company"
                className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A6292E] focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                {t('getInTouch.form.message')}
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A6292E] focus:border-transparent"
              ></textarea>
            </div>
            <Button className="w-full">{t('getInTouch.form.submit')}</Button>
          </form>
        </Card>
      </div>
    </Section>
  );
};

export default ContactSection;
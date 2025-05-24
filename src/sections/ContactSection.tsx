import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { MessageCircle, Mail, Phone, CheckCircle, AlertCircle } from 'lucide-react';
import { useLocalization } from '../hooks/useLocalization';

const ContactSection: React.FC = () => {
  const { t } = useLocalization();
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const result = await emailjs.sendForm(
        'service_2weay6t',
        'template_xbpppa9',
        form.current,
        'ETMB3AmUA3AY-qP5H'
      );

      if (result.text === 'OK') {
        setSubmitStatus('success');
        form.current.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <div className="mt-1 p-3 rounded-full text-[#A6292E] mr-4">
              <MessageCircle size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{t('getInTouch.demo.title')}</h3>
              <p className="text-slate-600 mb-4">
                {t('getInTouch.demo.description')}
              </p>
              {/* <Button variant="outline">{t('getInTouch.demo.button')}</Button> */}
            </div>
          </div>

          <div className="flex items-start">
            <div className="mt-1 p-3 rounded-full text-[#A6292E] mr-4">
              <Mail size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{t('getInTouch.email.title')}</h3>
              <p className="text-slate-600 mb-2">
                {t('getInTouch.email.description')}
              </p>
              <a href="mailto:ufuqerp@gmail.com" className="text-[#A6292E] hover:underline">
                ufuqerp@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start">
            <div className="mt-1 p-3 rounded-full text-[#A6292E] mr-4">
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
          
          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-md flex items-center">
              <CheckCircle className="text-green-600 mr-2" size={20} />
              <span className="text-green-800">{t('getInTouch.form.successMessage')}</span>
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md flex items-center">
              <AlertCircle className="text-red-600 mr-2" size={20} />
              <span className="text-red-800">{t('getInTouch.form.errorMessage')}</span>
            </div>
          )}

          <form ref={form} onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="first_name" className="block text-sm font-medium text-slate-700 mb-1">
                  {t('getInTouch.form.firstName')}
                </label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A6292E] focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="last_name" className="block text-sm font-medium text-slate-700 mb-1">
                  {t('getInTouch.form.lastName')}
                </label>
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  required
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
                name="email"
                required
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
                name="company"
                className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A6292E] focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                {t('getInTouch.form.message')}
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A6292E] focus:border-transparent"
              ></textarea>
            </div>
            <Button 
              type="submit" 
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? t('getInTouch.form.sending') : t('getInTouch.form.submit')}
            </Button>
          </form>
        </Card>
      </div>
    </Section>
  );
};

export default ContactSection;
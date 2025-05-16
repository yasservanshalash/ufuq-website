import React, { useEffect } from 'react';
import Section from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import Button from '../components/ui/Button';
import { MessageCircle, Mail, Phone, MapPin, Clock, Globe } from 'lucide-react';

const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact Us | Ufuq ERP';
  }, []);

  return (
    <>
      <Section className="bg-[#DCD6C9] pt-32">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#A6292E] mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Have questions about our ERP solutions? We're here to help you transform your business operations.
          </p>
        </div>
      </Section>

      <Section className="bg-white py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-[#A6292E] mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#A6292E] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#A6292E] focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#A6292E] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#A6292E] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#A6292E] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#A6292E] focus:border-transparent"
                  ></textarea>
                </div>
                <Button className="w-full">Send Message</Button>
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
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#f7a3a3] rounded-full flex items-center justify-center text-[#A6292E] mr-4">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-gray-600">contact@ufuqerp.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#f7a3a3] rounded-full flex items-center justify-center text-[#A6292E] mr-4">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Address</h3>
                    <p className="text-gray-600">1234 Technology Plaza, Suite 500<br />San Francisco, CA 94107</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#f7a3a3] rounded-full flex items-center justify-center text-[#A6292E] mr-4">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#f7a3a3] rounded-full flex items-center justify-center text-[#A6292E] mr-4">
                    <Globe size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Global Support</h3>
                    <p className="text-gray-600">24/7 Technical Support Available</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-[#A6292E] text-white">
              <h3 className="text-xl font-semibold mb-4">Schedule a Demo</h3>
              <p className="mb-4">See how Ufuq ERP can transform your business operations with a personalized demo.</p>
              <Button className="w-full" style={{ backgroundColor: '#DCD6C9', color: '#A6292E' }}>
                Book a Demo
              </Button>
            </Card>
          </div>
        </div>
      </Section>

      <Section className="bg-slate-50">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#A6292E] mb-4">Find Us</h2>
          <p className="text-xl text-gray-600 mb-8">Visit our office to learn more about our solutions</p>
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
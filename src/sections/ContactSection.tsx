import React from 'react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { MessageCircle, Mail, Phone } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <Section
      id="contact"
      title="Get In Touch"
      subtitle="Have questions or ready to transform your business? We're here to help."
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
              <h3 className="text-xl font-semibold mb-2">Schedule a Demo</h3>
              <p className="text-slate-600 mb-4">
                See our ERP solution in action. Our team will walk you through 
                our platform and show how it can address your specific needs.
              </p>
              <Button variant="outline">Book a Demo</Button>
            </div>
          </div>

          <div className="flex items-start">
            <div className="mt-1 bg-[#f7a3a3] p-3 rounded-full text-[#A6292E] mr-4">
              <Mail size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-slate-600 mb-2">
                For general inquiries and support:
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
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-slate-600 mb-2">
                Speak directly with our experts:
              </p>
              <a href="tel:+15551234567" className="text-[#A6292E] hover:underline">
                +1 (555) 123-4567
              </a>
            </div>
          </div>
        </div>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-6">Request Information</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A6292E] focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-1">
                  Last Name
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
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A6292E] focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">
                Company
              </label>
              <input
                type="text"
                id="company"
                className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A6292E] focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A6292E] focus:border-transparent"
              ></textarea>
            </div>
            <Button className="w-full">Submit Request</Button>
          </form>
        </Card>
      </div>
    </Section>
  );
};

export default ContactSection;
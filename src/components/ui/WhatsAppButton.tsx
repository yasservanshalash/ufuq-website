import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useLocalization } from '../../hooks/useLocalization';

const WhatsAppButton: React.FC = () => {
  const { isRTL } = useLocalization();
  const phoneNumber = '97339813811'; // Remove any formatting for the URL
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition-colors duration-300"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default WhatsAppButton; 
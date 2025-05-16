import React from 'react';
import Container from './Container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  title?: string;
  subtitle?: string;
  centered?: boolean;
  as?: React.ElementType;
}

const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  id,
  title,
  subtitle,
  centered = false,
  as: Component = 'section',
}) => {
  return (
    <Component id={id} className={`py-16 md:py-24 ${className}`}>
      <Container>
        {(title || subtitle) && (
          <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-[#A6292E] mb-4">{title}</h2>
            )}
            {subtitle && (
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">{subtitle}</p>
            )}
          </div>
        )}
        {children}
      </Container>
    </Component>
  );
};

export default Section;
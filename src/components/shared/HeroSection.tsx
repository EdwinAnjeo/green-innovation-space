
import { ReactNode } from 'react';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: ReactNode;
  bgImage?: string;
  children?: ReactNode;
  buttonColor?: string;
}

const HeroSection = ({
  title,
  subtitle,
  description,
  bgImage = "https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  children,
  buttonColor
}: HeroSectionProps) => {
  return (
    <section 
      className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70"></div>
      
      <div className="container relative mx-auto px-4 md:px-6 z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 animate-fade-in">
            {title}
          </h1>
          
          {subtitle && (
            <p className="text-xl md:text-2xl text-white/90 mb-4 animate-fade-in animation-delay-200">
              {subtitle}
            </p>
          )}
          
          {description && (
            <div className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in animation-delay-200">
              {description}
            </div>
          )}
          
          {children}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

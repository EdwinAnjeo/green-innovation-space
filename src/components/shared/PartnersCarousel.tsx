
import { useRef, useEffect, useState } from 'react';
import { Partner } from './carousel/types';
import CarouselIndicators from './carousel/CarouselIndicators';
import CarouselNavButtons from './carousel/CarouselNavButtons';
import PartnersGrid from './carousel/PartnersGrid';
import PartnerCard from './carousel/PartnerCard';

// Updated partner data with new images
const partners = [
  {
    name: "Japanese International Cooperation Agency (JICA)",
    abbreviation: "JICA",
    logo: "/lovable-uploads/89eaafc4-3bcf-417e-a07c-3c7f09790813.png",
    description: "Technical cooperation for sustainable agricultural development",
    website: "https://www.jica.go.jp/english/"
  },
  {
    name: "Kenya Cereal Enhancement Programme (KCEP-CRAL)",
    abbreviation: "KCEP-CRAL",
    logo: "/lovable-uploads/75a10da8-740d-484c-827f-eb28a70af60e.png",
    description: "Climate Resilient Agricultural Livelihoods",
    website: "https://www.kcepcral.go.ke"
  },
  {
    name: "National Agricultural and Rural Inclusive Growth Project (NARIGP)",
    abbreviation: "NARIGP",
    logo: "/lovable-uploads/a2739879-b8e5-47b3-a5de-57af63da284b.png",
    description: "Supporting inclusive and sustainable agricultural growth",
    website: "https://www.narigp.go.ke"
  },
  {
    name: "Small Scale Irrigation & Value Addition Project (SIVAP)",
    abbreviation: "SIVAP",
    logo: "/lovable-uploads/5d61d08e-ed22-40b1-9bc2-f8ab646075c8.png",
    description: "Enhancing irrigation infrastructure and value addition capabilities",
    website: "https://www.sivap.go.ke" 
  }
];

interface PartnersCarouselProps {
  linkToPartners?: boolean;
  showButtons?: boolean;
  noAutoScroll?: boolean;
  showAllPartners?: boolean;
}

const PartnersCarousel = ({ 
  linkToPartners = false, 
  showButtons = false, 
  noAutoScroll = false,
  showAllPartners = false
}: PartnersCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const autoScrollInterval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (noAutoScroll || showAllPartners) return;
    
    const startAutoScroll = () => {
      autoScrollInterval.current = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % partners.length);
      }, 3000);
    };

    const initialDelay = setTimeout(() => {
      startAutoScroll();
    }, 1000);

    return () => {
      if (autoScrollInterval.current) {
        clearInterval(autoScrollInterval.current);
      }
      clearTimeout(initialDelay);
    };
  }, [noAutoScroll, showAllPartners]);

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? partners.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % partners.length);
  };

  const handleMouseEnter = () => {
    if (!noAutoScroll && autoScrollInterval.current) {
      clearInterval(autoScrollInterval.current);
      autoScrollInterval.current = null;
    }
  };

  const handleMouseLeave = () => {
    if (!noAutoScroll && !autoScrollInterval.current && !showAllPartners) {
      autoScrollInterval.current = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % partners.length);
      }, 3000);
    }
  };

  if (showAllPartners) {
    return <PartnersGrid partners={partners} />;
  }

  return (
    <div 
      className="relative max-w-6xl mx-auto"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="carousel relative rounded-xl overflow-hidden shadow-lg">
        <CarouselIndicators 
          partners={partners} 
          activeIndex={activeIndex} 
          onIndicatorClick={setActiveIndex} 
        />

        <div className="carousel-inner relative w-full overflow-hidden bg-white rounded-xl">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className={`carousel-item transition-opacity duration-500 absolute inset-0 ${
                activeIndex === index ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                <div className="h-full flex items-center justify-center p-6 bg-white">
                  <PartnerCard partner={partner} linkToPartners={linkToPartners} />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <h3 className="font-bold text-lg mb-2">{partner.name}</h3>
                  <p className="text-sm font-semibold text-atdc-green mb-2">{partner.abbreviation}</p>
                  <p className="text-gray-600 text-sm mb-4">{partner.description}</p>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center bg-atdc-green/80 text-white px-4 py-1 rounded">
                    <span className="text-sm font-medium">{partner.abbreviation}</span>
                  </div>
                  {showButtons && (
                    <a 
                      href={partner.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block bg-[#CC5500] hover:bg-[#CC5500]/90 text-white px-4 py-2 rounded-md text-sm font-medium"
                    >
                      Learn More
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <CarouselNavButtons 
          onPrevClick={handlePrevClick} 
          onNextClick={handleNextClick} 
        />
      </div>
    </div>
  );
};

export default PartnersCarousel;

import { useRef, useEffect, useState } from 'react';
import { Partner } from './carousel/types';
import CarouselIndicators from './carousel/CarouselIndicators';
import CarouselNavButtons from './carousel/CarouselNavButtons';
import PartnersGrid from './carousel/PartnersGrid';
import PartnerCard from './carousel/PartnerCard';

// Partner data
const partners = [
  {
    name: "National Agricultural and Rural Inclusive Growth Project (NARIGP)",
    abbreviation: "NARIGP",
    logo: "/lovable-uploads/3efe2b4e-7c58-4305-80a6-69d338efb5a8.png",
    description: "Supporting inclusive and sustainable agricultural growth",
    website: "https://www.narigp.go.ke"
  },
  {
    name: "Small Scale Irrigation & Value Addition Project (SIVAP)",
    abbreviation: "SIVAP",
    logo: "/lovable-uploads/066da1e9-8b5a-461f-b6b8-09ea6dbed5a0.png",
    description: "Enhancing irrigation infrastructure and value addition capabilities",
    website: "https://www.sivap.go.ke" 
  },
  {
    name: "Kenya Cereal Enhancement Programme (KCEP)",
    abbreviation: "KCEP",
    logo: "/lovable-uploads/f22165ef-cea5-4463-97ba-dba0a7a9089b.png",
    description: "Improving food security through cereal production enhancement",
    website: "https://www.kcep.go.ke"
  },
  {
    name: "Japanese International Cooperation Agency (JICA)",
    abbreviation: "JICA",
    logo: "/lovable-uploads/157d64f5-29e9-44b9-9de3-2bb3f7237c93.png",
    description: "Technical cooperation for sustainable agricultural development",
    website: "https://www.jica.go.jp/english/"
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

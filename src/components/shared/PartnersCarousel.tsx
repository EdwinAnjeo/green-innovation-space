
import { useRef, useEffect, useState } from 'react';
import { Partner } from './carousel/types';
import CarouselIndicators from './carousel/CarouselIndicators';
import CarouselNavButtons from './carousel/CarouselNavButtons';
import PartnersGrid from './carousel/PartnersGrid';
import PartnerCard from './carousel/PartnerCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from '@/components/ui/carousel';

// Updated partner data with new images
const partners = [
  {
    name: "Japanese International Cooperation Agency (JICA)",
    abbreviation: "JICA",
    logo: "/lovable-uploads/423c2b4e-569a-4410-ae0a-45f33a537f1b.png",
    description: "Technical cooperation for sustainable agricultural development",
    website: "https://www.jica.go.jp/english/"
  },
  {
    name: "Kenya Cereal Enhancement Programme (KCEP-CRAL)",
    abbreviation: "KCEP-CRAL",
    logo: "/lovable-uploads/0cd114ba-722d-44aa-9bd5-45df527d11f9.png",
    description: "Climate Resilient Agricultural Livelihoods",
    website: "https://www.kcepcral.go.ke"
  },
  {
    name: "National Agricultural and Rural Inclusive Growth Project (NARIGP)",
    abbreviation: "NARIGP",
    logo: "/lovable-uploads/23341112-75ff-4aea-bb93-d735d0871c03.png",
    description: "Supporting inclusive and sustainable agricultural growth",
    website: "https://www.narigp.go.ke"
  },
  {
    name: "Small Scale Irrigation & Value Addition Project (SIVAP)",
    abbreviation: "SIVAP",
    logo: "/lovable-uploads/79f851a3-52bb-4b02-a30e-ccab4fc623c6.png",
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

  // Using shadcn/ui Carousel for better accessibility
  return (
    <div className="space-y-6">
      <Carousel
        className="w-full max-w-5xl mx-auto"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <CarouselContent>
          {partners.map((partner, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
              <div className="bg-white rounded-xl shadow-md overflow-hidden p-4 h-full">
                <div className="flex flex-col h-full">
                  <div className="h-40 flex items-center justify-center mb-4">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div className="p-2 flex-1">
                    <h3 className="font-bold text-lg mb-2">{partner.name}</h3>
                    <p className="text-sm font-semibold text-atdc-green mb-2">{partner.abbreviation}</p>
                    <p className="text-gray-600 text-sm mb-4">{partner.description}</p>
                  </div>
                  {showButtons && (
                    <div className="mt-auto pt-2">
                      <a
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-[#CC5500] hover:bg-[#CC5500]/90 text-white px-4 py-2 rounded-md text-sm font-medium"
                      >
                        Visit Website
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="flex items-center justify-center mt-4 space-x-2">
          {partners.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                activeIndex === index ? 'bg-atdc-green' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <CarouselPrevious className="left-1" />
        <CarouselNext className="right-1" />
      </Carousel>

      <div className="flex justify-center mt-4">
        <Button asChild className="bg-[#CC5500] hover:bg-[#CC5500]/90 text-white">
          <Link to="/partners">
            Learn More About Our Partners
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default PartnersCarousel;

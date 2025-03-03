
import { useRef, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Partner data with updated logo URLs
const partners = [
  {
    name: "National Agricultural and Rural Inclusive Growth Project (NARIGP)",
    logo: "/lovable-uploads/3efe2b4e-7c58-4305-80a6-69d338efb5a8.png",
    description: "Supporting inclusive and sustainable agricultural growth",
    website: "https://www.narigp.go.ke"
  },
  {
    name: "Small Scale Irrigation & Value Addition Project (SIVAP)",
    logo: "/lovable-uploads/066da1e9-8b5a-461f-b6b8-09ea6dbed5a0.png",
    description: "Enhancing irrigation infrastructure and value addition capabilities",
    website: "https://www.sivap.go.ke" 
  },
  {
    name: "Kenya Cereal Enhancement Programme (KCEP)",
    logo: "/lovable-uploads/f22165ef-cea5-4463-97ba-dba0a7a9089b.png",
    description: "Improving food security through cereal production enhancement",
    website: "https://www.kcep.go.ke"
  },
  {
    name: "Japanese International Cooperation Agency (JICA)",
    logo: "/lovable-uploads/157d64f5-29e9-44b9-9de3-2bb3f7237c93.png",
    description: "Technical cooperation for sustainable agricultural development",
    website: "https://www.jica.go.jp/english/"
  }
];

interface PartnersCarouselProps {
  linkToPartners?: boolean;
  showButtons?: boolean;
}

const PartnersCarousel = ({ linkToPartners = false, showButtons = false }: PartnersCarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const scrollAmount = 300;
  const autoScrollInterval = useRef<NodeJS.Timeout | null>(null);

  const handleScrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };
  
  // Auto scroll function
  useEffect(() => {
    const startAutoScroll = () => {
      autoScrollInterval.current = setInterval(() => {
        if (carouselRef.current) {
          // Check if we're at the end, if so, scroll back to start
          if (carouselRef.current.scrollLeft + carouselRef.current.offsetWidth >= carouselRef.current.scrollWidth) {
            carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            handleScrollRight();
          }
        }
      }, 2000); // Scroll every 2 seconds as requested
    };

    startAutoScroll();

    // Clean up interval on unmount
    return () => {
      if (autoScrollInterval.current) {
        clearInterval(autoScrollInterval.current);
      }
    };
  }, []);

  // Pause auto-scroll on hover
  const handleMouseEnter = () => {
    if (autoScrollInterval.current) {
      clearInterval(autoScrollInterval.current);
      autoScrollInterval.current = null;
    }
  };

  // Resume auto-scroll when mouse leaves
  const handleMouseLeave = () => {
    if (!autoScrollInterval.current) {
      autoScrollInterval.current = setInterval(() => {
        if (carouselRef.current) {
          if (carouselRef.current.scrollLeft + carouselRef.current.offsetWidth >= carouselRef.current.scrollWidth) {
            carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            handleScrollRight();
          }
        }
      }, 2000);
    }
  };

  return (
    <div className="relative">
      {/* Navigation Buttons - only show if showButtons is true */}
      {showButtons && (
        <>
          <button 
            onClick={handleScrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors -ml-4 md:-ml-6"
            aria-label="Scroll left"
          >
            <ArrowLeft size={20} className="text-atdc-green" />
          </button>
          
          <button 
            onClick={handleScrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors -mr-4 md:-mr-6"
            aria-label="Scroll right"
          >
            <ArrowRight size={20} className="text-atdc-green" />
          </button>
        </>
      )}

      {/* Carousel */}
      <div 
        ref={carouselRef}
        className="flex overflow-x-auto space-x-6 pb-4 no-scrollbar animate-carousel"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {partners.map((partner, index) => (
          <div 
            key={index}
            className="flex-shrink-0 w-[300px] bg-white rounded-xl shadow-md overflow-hidden card-hover animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {linkToPartners ? (
              <Link to="/partners" className="h-40 flex items-center justify-center p-6 bg-white">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="max-h-full max-w-full object-contain hover-scale"
                />
              </Link>
            ) : (
              <div className="h-40 flex items-center justify-center p-6 bg-white">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            )}
            <div className="p-6 border-t">
              <h3 className="font-bold text-lg mb-2 line-clamp-2">{partner.name}</h3>
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
        ))}
      </div>
    </div>
  );
};

export default PartnersCarousel;

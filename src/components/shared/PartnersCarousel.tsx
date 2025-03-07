
import { useRef, useEffect, useState } from 'react';
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

  // Auto slide function
  useEffect(() => {
    if (noAutoScroll || showAllPartners) return;
    
    const startAutoScroll = () => {
      autoScrollInterval.current = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % partners.length);
      }, 3000);
    };

    // Initial delay before starting the auto-scroll
    const initialDelay = setTimeout(() => {
      startAutoScroll();
    }, 1000); // 1 second delay

    // Clean up interval and timeout on unmount
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

  // Handle indicators click
  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  // Pause auto scroll on hover
  const handleMouseEnter = () => {
    if (!noAutoScroll && autoScrollInterval.current) {
      clearInterval(autoScrollInterval.current);
      autoScrollInterval.current = null;
    }
  };

  // Resume auto scroll when mouse leaves
  const handleMouseLeave = () => {
    if (!noAutoScroll && !autoScrollInterval.current && !showAllPartners) {
      autoScrollInterval.current = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % partners.length);
      }, 3000);
    }
  };

  // If showing all partners in a grid (for Partners page)
  if (showAllPartners) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {partners.map((partner, index) => (
          <div 
            key={index}
            className="flex-shrink-0 bg-white rounded-xl shadow-md overflow-hidden card-hover animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="h-40 flex items-center justify-center p-6 bg-white">
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="p-6 border-t">
              <h3 className="font-bold text-lg mb-2 line-clamp-2">{partner.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{partner.description}</p>
              <a 
                href={partner.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-[#CC5500] hover:bg-[#CC5500]/90 text-white px-4 py-2 rounded-md text-sm font-medium"
              >
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div 
      className="relative max-w-3xl mx-auto"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Bootstrap-style carousel */}
      <div id="partnersCarousel" className="carousel relative rounded-xl overflow-hidden shadow-lg">
        {/* Carousel indicators */}
        <ol className="carousel-indicators absolute bottom-4 left-0 right-0 flex justify-center z-10 space-x-2">
          {partners.map((_, index) => (
            <li 
              key={index} 
              onClick={() => goToSlide(index)}
              className={`inline-block w-3 h-3 rounded-full cursor-pointer transition-colors ${activeIndex === index ? 'bg-white' : 'bg-white/50'}`}
            ></li>
          ))}
        </ol>

        {/* Carousel items */}
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
                  {linkToPartners ? (
                    <Link to="/partners" className="w-full h-full flex items-center justify-center">
                      <img 
                        src={partner.logo} 
                        alt={partner.name} 
                        className="max-h-full max-w-full object-contain hover-scale"
                      />
                    </Link>
                  ) : (
                    <img 
                      src={partner.logo} 
                      alt={partner.name} 
                      className="max-h-full max-w-full object-contain"
                    />
                  )}
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <h3 className="font-bold text-lg mb-2">{partner.name}</h3>
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
        
        {/* Navigation buttons */}
        <button 
          onClick={handlePrevClick}
          className="carousel-control-prev absolute top-1/2 left-4 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
          aria-label="Previous"
        >
          <ArrowLeft size={20} className="text-atdc-green" />
        </button>
        
        <button 
          onClick={handleNextClick}
          className="carousel-control-next absolute top-1/2 right-4 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
          aria-label="Next"
        >
          <ArrowRight size={20} className="text-atdc-green" />
        </button>
      </div>
    </div>
  );
};

export default PartnersCarousel;

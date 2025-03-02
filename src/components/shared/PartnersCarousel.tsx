
import { useRef, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// Partner data
const partners = [
  {
    name: "Kenya Agricultural and Livestock Research Organization (KALRO)",
    logo: "https://www.kalro.org/wp-content/uploads/2020/02/kalro-logo.png",
    description: "Research and innovation partner for agricultural advancement"
  },
  {
    name: "Food and Agriculture Organization (FAO)",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/FAO_logo.svg/1200px-FAO_logo.svg.png",
    description: "Supporting sustainable agricultural practices and food security"
  },
  {
    name: "International Fund for Agricultural Development (IFAD)",
    logo: "https://static.wixstatic.com/media/df1fbb_e0bacdbb0e9646538b94351f98f6d471~mv2.png",
    description: "Financing agricultural development and rural transformation"
  },
  {
    name: "World Bank",
    logo: "https://cdn.shortpixel.ai/spai/q_lossy+w_924+to_webp+ret_img/www.abcnews.co.ke/wp-content/uploads/2023/07/1627029222-768x427-1.png",
    description: "Supporting agricultural infrastructure and policy development"
  },
  {
    name: "Alliance for a Green Revolution in Africa (AGRA)",
    logo: "https://agra.org/wp-content/uploads/2020/07/logo_mainheader.svg",
    description: "Transforming smallholder agriculture across Africa"
  },
  {
    name: "Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ)",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/GIZ-logo.svg/1200px-GIZ-logo.svg.png",
    description: "Technical cooperation for sustainable development"
  }
];

const PartnersCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const scrollAmount = 300;

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

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-atdc-green mb-4">Our Partners</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We collaborate with various organizations to promote agricultural development across Kenya.
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
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

          {/* Carousel */}
          <div 
            ref={carouselRef}
            className="flex overflow-x-auto space-x-6 pb-4 no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-[300px] bg-white rounded-xl shadow-md overflow-hidden card-hover"
              >
                <div className="h-40 flex items-center justify-center p-6 bg-white">
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="p-6 border-t">
                  <h3 className="font-bold text-lg mb-2 line-clamp-1">{partner.name}</h3>
                  <p className="text-gray-600 text-sm">{partner.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersCarousel;

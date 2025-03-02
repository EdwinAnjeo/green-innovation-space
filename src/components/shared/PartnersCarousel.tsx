
import { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// Partner data with updated logo URLs
const partners = [
  {
    name: "National Agricultural and Rural Inclusive Growth Project (NARIGP)",
    logo: "/lovable-uploads/3efe2b4e-7c58-4305-80a6-69d338efb5a8.png",
    description: "Supporting inclusive and sustainable agricultural growth"
  },
  {
    name: "Small Scale Irrigation & Value Addition Project (SIVAP)",
    logo: "/lovable-uploads/066da1e9-8b5a-461f-b6b8-09ea6dbed5a0.png",
    description: "Enhancing irrigation infrastructure and value addition capabilities"
  },
  {
    name: "Kenya Cereal Enhancement Programme (KCEP)",
    logo: "/lovable-uploads/f22165ef-cea5-4463-97ba-dba0a7a9089b.png",
    description: "Improving food security through cereal production enhancement"
  },
  {
    name: "Japanese International Cooperation Agency (JICA)",
    logo: "/lovable-uploads/157d64f5-29e9-44b9-9de3-2bb3f7237c93.png",
    description: "Technical cooperation for sustainable agricultural development"
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
                  <h3 className="font-bold text-lg mb-2 line-clamp-2">{partner.name}</h3>
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

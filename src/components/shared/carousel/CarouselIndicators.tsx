
interface CarouselIndicatorsProps {
  partners: Array<{ name: string; abbreviation: string }>;
  activeIndex: number;
  onIndicatorClick: (index: number) => void;
}

const CarouselIndicators = ({ partners, activeIndex, onIndicatorClick }: CarouselIndicatorsProps) => {
  return (
    <div className="carousel-indicators absolute bottom-4 left-0 right-0 flex justify-center z-10 space-x-2">
      {partners.map((partner, index) => (
        <button 
          key={index} 
          onClick={() => onIndicatorClick(index)}
          className={`inline-block w-3 h-3 rounded-full cursor-pointer transition-colors ${
            activeIndex === index ? 'bg-white' : 'bg-white/50'
          }`}
          aria-label={`Go to slide ${index + 1}: ${partner.abbreviation}`}
        />
      ))}
    </div>
  );
};

export default CarouselIndicators;

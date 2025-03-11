
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface CarouselNavButtonsProps {
  onPrevClick: () => void;
  onNextClick: () => void;
}

const CarouselNavButtons = ({ onPrevClick, onNextClick }: CarouselNavButtonsProps) => {
  return (
    <>
      <button 
        onClick={onPrevClick}
        className="carousel-control-prev absolute top-1/2 left-4 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
        aria-label="Previous"
      >
        <ArrowLeft size={20} className="text-atdc-green" />
      </button>
      
      <button 
        onClick={onNextClick}
        className="carousel-control-next absolute top-1/2 right-4 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
        aria-label="Next"
      >
        <ArrowRight size={20} className="text-atdc-green" />
      </button>
    </>
  );
};

export default CarouselNavButtons;

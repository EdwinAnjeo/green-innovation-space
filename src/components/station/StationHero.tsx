
import React from 'react';
import { Station } from '@/data/stationsData';

interface StationHeroProps {
  station: Station;
}

const StationHero: React.FC<StationHeroProps> = ({ station }) => {
  return (
    <div 
      className="relative h-[50vh] md:h-[60vh] w-full"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${station.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <div className="px-4">
          <span className="inline-block px-4 py-1 bg-[#CC5500] text-white text-sm font-bold rounded-full mb-4">
            {station.region} Region
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in">
            {station.name}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default StationHero;

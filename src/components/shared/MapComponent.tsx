
import React, { useEffect, useRef } from 'react';

const MapComponent: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!mapRef.current) return;
    
    // This is a placeholder for a real map component
    // In a real application, you would integrate a mapping library like Google Maps or Leaflet
    
    const mapContainer = mapRef.current;
    
    // Create simple map placeholder with ministry location
    mapContainer.innerHTML = `
      <div class="relative w-full h-full flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden">
        <div class="absolute inset-0 opacity-30 bg-repeat" style="background-image: url('data:image/svg+xml;charset=utf-8,%3Csvg width=\"100\" height=\"100\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M50 0v100M0 50h100\" stroke=\"%23888\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-dasharray=\"4,2\"%2F%3E%3C%2Fsvg%3E')"></div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8">
          <div class="absolute w-full h-full rounded-full bg-red-500 opacity-30 animate-ping"></div>
          <div class="relative w-full h-full rounded-full bg-red-600 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 1 1 9.9 9.9L10 18.9l-4.95-4.95a7 7 0 0 1 0-9.9zM10 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" clip-rule="evenodd" />
            </svg>
          </div>
        </div>
        <div class="absolute top-4 left-4 bg-white py-1 px-3 rounded-full shadow-md text-sm font-medium">
          Kilimo House, Nairobi
        </div>
      </div>
    `;
  }, []);

  return (
    <div ref={mapRef} className="w-full h-96 rounded-lg shadow-md overflow-hidden"></div>
  );
};

export default MapComponent;

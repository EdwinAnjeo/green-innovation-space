
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

// Array of ATDC Stations for the dropdown
const stations = [
  "Mpeketoni", "Mtwapa", "Nakuru", "Bungoma", "Siakago", 
  "Bukura", "Ruiru", "Homabay", "Siaya", "Katumani"
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const [isStationsOpen, setIsStationsOpen] = useState(false);

  return (
    <div 
      className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } lg:hidden`}
    >
      <div className="flex flex-col h-full pt-24 px-8 pb-6 overflow-y-auto">
        <Link 
          to="/"
          className="py-3 text-base border-b border-gray-100"
          onClick={onClose}
        >
          Home
        </Link>
        <Link 
          to="/about"
          className="py-3 text-base border-b border-gray-100"
          onClick={onClose}
        >
          About Us
        </Link>
        
        {/* Mobile ATDC Stations Dropdown */}
        <div className="py-3 border-b border-gray-100">
          <button 
            className="flex items-center justify-between w-full text-base"
            onClick={() => setIsStationsOpen(!isStationsOpen)}
          >
            <span>ATDC Stations</span>
            <ChevronDown 
              size={20} 
              className={`transform transition-transform ${isStationsOpen ? 'rotate-180' : ''}`}
            />
          </button>
          
          {isStationsOpen && (
            <div className="mt-2 ml-4 space-y-2">
              <Link 
                to="/stations"
                className="block py-2 text-gray-700"
                onClick={onClose}
              >
                All Stations
              </Link>
              {stations.map((station) => (
                <Link 
                  key={station}
                  to={`/stations/${station.toLowerCase()}`}
                  className="block py-2 text-gray-700"
                  onClick={onClose}
                >
                  ATDC {station}
                </Link>
              ))}
            </div>
          )}
        </div>
        
        <Link 
          to="/partners"
          className="py-3 text-base border-b border-gray-100"
          onClick={onClose}
        >
          Partners
        </Link>
        
        <Link 
          to="/success-stories"
          className="py-3 text-base border-b border-gray-100"
          onClick={onClose}
        >
          Success Stories
        </Link>
        
        <div className="mt-auto">
          <Button asChild className="w-full bg-atdc-orange hover:bg-atdc-orange/90">
            <Link to="/contact" onClick={onClose}>
              Contact Us
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;

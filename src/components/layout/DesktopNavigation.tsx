
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

// Array of ATDC Stations for the dropdown
const stations = [
  "Mpeketoni", "Mtwapa", "Nakuru", "Bungoma", "Siakago", 
  "Bukura", "Ruiru", "Homabay", "Siaya", "Katumani"
];

interface DesktopNavigationProps {
  scrolled: boolean;
}

const DesktopNavigation = ({ scrolled }: DesktopNavigationProps) => {
  const location = useLocation();

  return (
    <nav className="hidden lg:flex items-center space-x-6">
      <Link to="/" className={`nav-link text-sm ${location.pathname === '/' ? 'text-white font-semibold' : 'text-white hover:text-white/80'} transition-colors`}>
        Home
      </Link>
      <Link to="/about" className={`nav-link text-sm ${location.pathname === '/about' ? 'text-white font-semibold' : 'text-white hover:text-white/80'} transition-colors`}>
        About Us
      </Link>
      
      {/* ATDC Stations Dropdown */}
      <div className="relative group">
        <button 
          className={`flex items-center space-x-1 text-sm ${location.pathname.includes('/stations') ? 'text-white font-semibold' : 'text-white hover:text-white/80'} transition-colors`}
        >
          <span>ATDC Stations</span>
          <ChevronDown size={14} />
        </button>
        
        <div className="absolute left-0 mt-2 w-64 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white border border-gray-100 py-2 z-50">
          <div className="max-h-[50vh] overflow-y-auto">
            <Link 
              to="/stations" 
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-atdc-green"
            >
              All Stations
            </Link>
            <hr className="my-1 border-gray-100" />
            {stations.map((station) => (
              <Link 
                key={station}
                to={`/stations/${station.toLowerCase()}`}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-atdc-green"
              >
                ATDC {station}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Link to="/partners" className={`nav-link text-sm ${location.pathname === '/partners' ? 'text-white font-semibold' : 'text-white hover:text-white/80'} transition-colors`}>
        Partners
      </Link>
      
      <Link to="/success-stories" className={`nav-link text-sm ${location.pathname === '/success-stories' ? 'text-white font-semibold' : 'text-white hover:text-white/80'} transition-colors`}>
        Success Stories
      </Link>
      
      <Button asChild className="bg-atdc-orange hover:bg-atdc-orange/90 text-sm px-3 py-1 h-auto">
        <Link to="/contact">
          Contact Us
        </Link>
      </Button>
    </nav>
  );
};

export default DesktopNavigation;

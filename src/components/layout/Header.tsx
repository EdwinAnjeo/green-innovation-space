
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

// Array of ATDC Stations for the dropdown
const stations = [
  "Mombasa", "Kwale", "Kilifi", "Tana River", "Lamu", "Taita Taveta", 
  "Garissa", "Wajir", "Mandera", "Marsabit", "Isiolo", "Meru", 
  "Tharaka-Nithi", "Embu", "Kitui", "Machakos", "Makueni", "Nyandarua", 
  "Nyeri", "Kirinyaga", "Murang'a", "Kiambu", "Turkana", "West Pokot"
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isStationsOpen, setIsStationsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Function to handle scroll event for transparent header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setIsStationsOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-sm shadow-md py-3' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="https://assets.churchofjesuschrist.org/581f6f9/websites/common/ui/img/logo-kenya.svg" 
              alt="Court of Arms Logo" 
              className="h-12 md:h-14"
            />
            <div>
              <h1 className="text-atdc-green text-lg md:text-xl font-bold leading-tight">
                Agriculture Training<br />Development Center
              </h1>
              <p className="text-xs text-atdc-brown">Ministry of Agriculture | Kenya</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'text-atdc-green font-semibold' : 'text-gray-700 hover:text-atdc-green'} transition-colors`}>
              Home
            </Link>
            <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'text-atdc-green font-semibold' : 'text-gray-700 hover:text-atdc-green'} transition-colors`}>
              About Us
            </Link>
            
            {/* ATDC Stations Dropdown */}
            <div className="relative group">
              <button 
                className={`flex items-center space-x-1 ${location.pathname.includes('/stations') ? 'text-atdc-green font-semibold' : 'text-gray-700 hover:text-atdc-green'} transition-colors`}
                onClick={() => setIsStationsOpen(!isStationsOpen)}
              >
                <span>ATDC Stations</span>
                <ChevronDown size={16} />
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
                      to={`/stations/${station.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-atdc-green"
                    >
                      {station}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/partners" className={`nav-link ${location.pathname === '/partners' ? 'text-atdc-green font-semibold' : 'text-gray-700 hover:text-atdc-green'} transition-colors`}>
              Partners
            </Link>
            <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'text-atdc-green font-semibold' : 'text-gray-700 hover:text-atdc-green'} transition-colors`}>
              Contact Us
            </Link>
            
            <Button asChild className="bg-atdc-green hover:bg-atdc-green/90">
              <Link to="/login">
                Login
              </Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:hidden`}
      >
        <div className="flex flex-col h-full pt-24 px-8 pb-6 overflow-y-auto">
          <Link 
            to="/"
            className="py-3 text-lg border-b border-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/about"
            className="py-3 text-lg border-b border-gray-100"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          
          {/* Mobile ATDC Stations Dropdown */}
          <div className="py-3 border-b border-gray-100">
            <button 
              className="flex items-center justify-between w-full text-lg"
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
                  onClick={() => setIsOpen(false)}
                >
                  All Stations
                </Link>
                {stations.map((station) => (
                  <Link 
                    key={station}
                    to={`/stations/${station.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block py-2 text-gray-700"
                    onClick={() => setIsOpen(false)}
                  >
                    {station}
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          <Link 
            to="/partners"
            className="py-3 text-lg border-b border-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Partners
          </Link>
          <Link 
            to="/contact"
            className="py-3 text-lg border-b border-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
          
          <div className="mt-auto">
            <Button asChild className="w-full bg-atdc-green hover:bg-atdc-green/90">
              <Link to="/login" onClick={() => setIsOpen(false)}>
                Login
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

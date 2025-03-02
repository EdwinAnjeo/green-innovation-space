
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-atdc-green text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">About ATDC</h3>
            <p className="text-white/80 mb-4">
              The Agriculture Training Development Center (ATDC) is dedicated to promoting sustainable agricultural practices and empowering farmers across Kenya.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-atdc-blue transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-atdc-blue transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-atdc-blue transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-atdc-blue transition-colors" aria-label="Youtube">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/stations" className="text-white/80 hover:text-white transition-colors">ATDC Stations</Link>
              </li>
              <li>
                <Link to="/events" className="text-white/80 hover:text-white transition-colors">Events</Link>
              </li>
              <li>
                <Link to="/blog" className="text-white/80 hover:text-white transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/partners" className="text-white/80 hover:text-white transition-colors">Partners</Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link to="/login" className="text-white/80 hover:text-white transition-colors">Login</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <span className="text-white/80">Ministry of Agriculture, Kilimo House, Cathedral Road, Nairobi, Kenya</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="flex-shrink-0" />
                <span className="text-white/80">+254 20 2718870</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="flex-shrink-0" />
                <span className="text-white/80">info@atdc.agriculture.go.ke</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-white/80 mb-4">
              Subscribe to our newsletter to receive updates on our programs and initiatives.
            </p>
            <form className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <button 
                type="submit" 
                className="px-4 py-2 bg-atdc-orange text-white font-medium rounded-lg hover:bg-atdc-orange/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20 text-center text-white/70">
          <p>© {new Date().getFullYear()} Agriculture Training Development Center (ATDC). All rights reserved.</p>
          <p className="mt-2">Designed by ATLAS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

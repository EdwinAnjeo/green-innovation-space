
import { Link } from 'react-router-dom';

interface LogoProps {
  scrolled: boolean;
}

const Logo = ({ scrolled }: LogoProps) => {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <img 
        src="/lovable-uploads/7d8b1801-1c96-468a-9000-c7b72f68c9a3.png" 
        alt="Court of Arms Logo" 
        className="h-10 md:h-12"
      />
      <div>
        <h1 className="text-white text-sm md:text-base font-bold leading-tight transition-colors">
          Agriculture Training<br />Development Center
        </h1>
        <p className="text-white/80 text-xs transition-colors">Ministry of Agriculture | Kenya</p>
      </div>
    </Link>
  );
};

export default Logo;

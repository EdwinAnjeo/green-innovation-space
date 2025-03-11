
import { Link } from 'react-router-dom';
import { Partner } from './types';

interface PartnerCardProps {
  partner: Partner;
  linkToPartners?: boolean;
}

const PartnerCard = ({ partner, linkToPartners }: PartnerCardProps) => {
  const LogoImage = () => (
    <img 
      src={partner.logo} 
      alt={partner.name} 
      className="max-h-full max-w-full object-contain"
    />
  );

  return (
    <div className="flex-shrink-0 bg-white rounded-xl shadow-md overflow-hidden card-hover">
      <div className="h-40 flex items-center justify-center p-6 bg-white">
        {linkToPartners ? (
          <Link to="/partners" className="w-full h-full flex items-center justify-center">
            <LogoImage />
          </Link>
        ) : (
          <LogoImage />
        )}
      </div>
      <div className="p-6 border-t">
        <h3 className="font-bold text-lg mb-2 line-clamp-2">{partner.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{partner.description}</p>
        <a 
          href={partner.website} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-[#CC5500] hover:bg-[#CC5500]/90 text-white px-4 py-2 rounded-md text-sm font-medium"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default PartnerCard;

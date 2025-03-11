
import PartnerCard from './PartnerCard';
import { Partner } from './types';

interface PartnersGridProps {
  partners: Partner[];
}

const PartnersGrid = ({ partners }: PartnersGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {partners.map((partner, index) => (
        <PartnerCard key={index} partner={partner} />
      ))}
    </div>
  );
};

export default PartnersGrid;

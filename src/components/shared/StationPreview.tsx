
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const StationPreview = () => {
  const allStations = [
    {
      name: "ATDC Mpeketoni",
      image: "/lovable-uploads/ad276c5e-d66b-428d-bc21-c665d0afe25c.png",
      description: "Specializing in coastal agriculture and fisheries."
    },
    {
      name: "ATDC Mtwapa",
      image: "/lovable-uploads/110e6d67-493c-4314-bce6-0d3ad2358ce8.png",
      description: "Coastal agricultural research and development."
    },
    {
      name: "ATDC Nakuru",
      image: "/lovable-uploads/779c56b6-c1af-4e6c-bb82-25559402520c.png",
      description: "Agricultural innovation and technology transfer."
    }
  ];
  
  return (
    <section className="bg-[#F2FCE2] py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-atdc-green mb-4">Our ATDC Stations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our network of Agricultural Training and Development Centers spread across Kenya, 
            each specializing in region-specific agricultural practices.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {allStations.map((station, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover-scale h-full flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={station.image}
                  alt={station.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-4 flex-grow">
                <h3 className="text-lg font-bold mb-2">{station.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{station.description}</p>
              </div>
              <div className="p-4 pt-0">
                <Link 
                  to={`/stations/${station.name.split(' ')[1].toLowerCase()}`} 
                  className="text-atdc-green font-medium inline-flex items-center hover:underline"
                >
                  Learn more
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild className="bg-[#CC5500] hover:bg-[#CC5500]/90">
            <Link to="/stations">
              View All Stations <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StationPreview;
